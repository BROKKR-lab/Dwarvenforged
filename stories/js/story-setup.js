console.log('=== STORY-SETUP.JS LOADING ===');

// DO NOT declare storiesConfig here - let it be loaded from the external file
let currentEditingStory = null;
let currentEditingCollection = null;

// Load configuration when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('=== DOM READY - STARTING CONFIG LOAD ===');
    loadConfiguration();
});

function loadConfiguration() {
    // ALWAYS load from the config file first, ignore localStorage initially
    console.log('=== LOADING FROM SCRIPT FIRST ===');
    const script = document.createElement('script');
    script.src = '/stories/js/stories-config.js?v=' + Date.now(); // Cache busting
    script.onload = function() {
        console.log('=== CONFIG SCRIPT LOADED ===');
        console.log('=== WINDOW.STORIESCONFIG IMMEDIATELY AFTER LOAD ===', window.storiesConfig);
        
        if (window.storiesConfig && window.storiesConfig.site && window.storiesConfig.site.title) {
            console.log('=== CONFIG FOUND AND HAS DATA ===');
            console.log('=== SITE TITLE ===', window.storiesConfig.site.title);
            console.log('=== SITE SUBTITLE ===', window.storiesConfig.site.subtitle);
            console.log('=== COLLECTIONS ===', Object.keys(window.storiesConfig.collections || {}));
            
            // Save the good config to localStorage for later
            localStorage.setItem('storiesConfig', JSON.stringify(window.storiesConfig));
            
            // Wait a bit more to ensure everything is fully loaded
            setTimeout(() => {
                populateEverything();
            }, 50);
        } else {
            console.error('=== NO CONFIG IN WINDOW OR CONFIG IS EMPTY ===');
            // Try localStorage as fallback
            const savedConfig = localStorage.getItem('storiesConfig');
            if (savedConfig) {
                try {
                    window.storiesConfig = JSON.parse(savedConfig);
                    console.log('=== FALLBACK TO LOCALSTORAGE ===', window.storiesConfig);
                    populateEverything();
                    return;
                } catch (e) {
                    console.error('=== LOCALSTORAGE PARSE ERROR ===', e);
                }
            }
            
            // Initialize with empty config as last resort
            window.storiesConfig = {
                site: {
                    title: "",
                    subtitle: "",
                    description: "",
                    logoUrl: "",
                    homeUrl: "",
                    audioNote: ""
                },
                collections: {}
            };
            populateEverything();
        }
    };
    script.onerror = function() {
        console.error('=== SCRIPT LOAD FAILED ===');
        // Try localStorage as fallback
        const savedConfig = localStorage.getItem('storiesConfig');
        if (savedConfig) {
            try {
                window.storiesConfig = JSON.parse(savedConfig);
                console.log('=== FALLBACK TO LOCALSTORAGE AFTER SCRIPT ERROR ===', window.storiesConfig);
                populateEverything();
                return;
            } catch (e) {
                console.error('=== LOCALSTORAGE PARSE ERROR ===', e);
            }
        }
        
        // Initialize with empty config as last resort
        window.storiesConfig = {
            site: {
                title: "",
                subtitle: "",
                description: "",
                logoUrl: "",
                homeUrl: "",
                audioNote: ""
            },
            collections: {}
        };
        populateEverything();
    };
    document.head.appendChild(script);
}

function populateEverything() {
    console.log('=== POPULATING EVERYTHING ===', window.storiesConfig);
    
    try {
        populateFormFields();
        renderCollections();
        populateCollectionSelector();
        if (Object.keys(window.storiesConfig.collections).length > 0) {
            renderStories(Object.keys(window.storiesConfig.collections)[0]);
        }
        
        // Setup all event listeners
        setupEventListeners();
        
        console.log('=== POPULATION COMPLETE ===');
    } catch (error) {
        console.error('=== ERROR DURING POPULATION ===', error);
    }
}

function setupEventListeners() {
    document.querySelectorAll('.config-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            switchTab(this.getAttribute('data-tab'));
        });
    });
    
    document.getElementById('add-collection-btn').addEventListener('click', () => openCollectionEditor());
    document.getElementById('add-story-btn').addEventListener('click', () => openStoryEditor());
    document.getElementById('generate-btn').addEventListener('click', generateConfiguration);
    
    // Remove the separate save button since auto-save handles everything
    const saveBtn = document.getElementById('save-btn');
    if (saveBtn) {
        saveBtn.remove();
    }
    
    document.getElementById('close-story-editor').addEventListener('click', closeStoryEditor);
    document.getElementById('close-collection-editor').addEventListener('click', closeCollectionEditor);
    document.getElementById('cancel-story-btn').addEventListener('click', closeStoryEditor);
    document.getElementById('cancel-collection-btn').addEventListener('click', closeCollectionEditor);
    
    document.getElementById('save-story-btn').addEventListener('click', saveStory);
    document.getElementById('save-collection-btn').addEventListener('click', saveCollection);
    
    document.getElementById('current-collection').addEventListener('change', function() {
        renderStories(this.value);
    });
    
    // Add auto-save listeners for form fields
    const formFields = ['site-title', 'site-subtitle', 'site-description', 'site-logo', 'home-url', 'audio-note'];
    formFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field) {
            field.addEventListener('input', autoSave);
            field.addEventListener('change', autoSave);
        }
    });
}

function autoSave() {
    updateConfigFromForm();
    saveToLocalStorage();
    console.log('=== AUTO-SAVED TO LOCALSTORAGE ===');
}

function populateFormFields() {
    console.log('=== POPULATING FORM FIELDS ===');
    console.log('=== FULL CONFIG ===', window.storiesConfig);
    console.log('=== SITE CONFIG ===', window.storiesConfig.site);
    
    // Use setTimeout to ensure the DOM elements are ready and the config is fully loaded
    setTimeout(() => {
        const fields = [
            { id: 'site-title', value: window.storiesConfig.site.title || '' },
            { id: 'site-subtitle', value: window.storiesConfig.site.subtitle || '' },
            { id: 'site-description', value: window.storiesConfig.site.description || '' },
            { id: 'site-logo', value: window.storiesConfig.site.logoUrl || '' },
            { id: 'home-url', value: window.storiesConfig.site.homeUrl || '' },
            { id: 'audio-note', value: window.storiesConfig.site.audioNote || '' }
        ];
        
        console.log('=== FIELD VALUES TO SET ===', fields);
        
        fields.forEach(field => {
            const element = document.getElementById(field.id);
            if (element) {
                element.value = field.value;
                console.log(`Set ${field.id} to: "${field.value}"`);
            } else {
                console.error(`Element ${field.id} not found`);
            }
        });
        
        // Force a visual update
        fields.forEach(field => {
            const element = document.getElementById(field.id);
            if (element) {
                element.dispatchEvent(new Event('change'));
            }
        });
    }, 100);
}

function switchTab(tabId) {
    document.querySelectorAll('.config-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.config-section').forEach(section => section.classList.remove('active'));
    
    document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');
    document.getElementById(`${tabId}-section`).classList.add('active');
}

function renderCollections() {
    console.log('=== RENDERING COLLECTIONS ===', window.storiesConfig.collections);
    const container = document.getElementById('collections-list');
    if (!container) {
        console.error('=== COLLECTIONS CONTAINER NOT FOUND ===');
        return;
    }
    
    container.innerHTML = '';
    
    Object.values(window.storiesConfig.collections).forEach(collection => {
        const collectionEl = document.createElement('div');
        collectionEl.className = 'story-item';
        collectionEl.innerHTML = `
            <div class="story-info">
                <h4>${collection.title}</h4>
                <p>${collection.description}</p>
                <small>ID: ${collection.id}</small>
            </div>
            <div class="story-actions">
                <button class="btn btn-secondary" onclick="editCollection('${collection.id}')">Edit</button>
                <button class="btn btn-danger" onclick="deleteCollection('${collection.id}')">Delete</button>
            </div>
        `;
        container.appendChild(collectionEl);
    });
    
    console.log(`=== RENDERED ${Object.keys(window.storiesConfig.collections).length} COLLECTIONS ===`);
}

function populateCollectionSelector() {
    const select = document.getElementById('current-collection');
    if (!select) {
        console.error('=== COLLECTION SELECT NOT FOUND ===');
        return;
    }
    
    const currentValue = select.value;
    select.innerHTML = '';
    
    Object.values(window.storiesConfig.collections).forEach(collection => {
        const option = document.createElement('option');
        option.value = collection.id;
        option.textContent = collection.title;
        select.appendChild(option);
    });
    
    // Restore the previously selected value if it still exists
    if (currentValue && window.storiesConfig.collections[currentValue]) {
        select.value = currentValue;
    }
    
    console.log(`=== POPULATED SELECTOR WITH ${Object.keys(window.storiesConfig.collections).length} OPTIONS ===`);
}

function renderStories(collectionId) {
    const container = document.getElementById('stories-list');
    if (!container) {
        console.error('=== STORIES CONTAINER NOT FOUND ===');
        return;
    }
    
    container.innerHTML = '';
    
    if (!collectionId || !window.storiesConfig.collections[collectionId]) {
        console.log('=== NO COLLECTION OR INVALID ID ===', collectionId);
        return;
    }
    
    const stories = window.storiesConfig.collections[collectionId].stories || {};
    const storiesArray = Object.values(stories).sort((a, b) => (a.displayOrder || 999) - (b.displayOrder || 999));
    
    console.log(`=== RENDERING ${storiesArray.length} STORIES FOR ${collectionId} ===`);
    
    storiesArray.forEach(story => {
        const storyEl = document.createElement('div');
        storyEl.className = 'story-item';
        storyEl.innerHTML = `
            <div class="story-info">
                <h4>${story.title}</h4>
                <p>${story.sequence}</p>
                <small>ID: ${story.id} | Order: ${story.displayOrder || 'Not set'}</small>
                <div>
                    ${story.hasAudio ? '<span style="color: #5b9bd5;">🎵 Audio</span>' : ''}
                    ${story.isNew ? '<span style="color: #ffc107;">✨ New</span>' : ''}
                </div>
            </div>
            <div class="story-actions">
                <button class="btn btn-secondary" onclick="editStory('${collectionId}', '${story.id}')">Edit</button>
                <button class="btn btn-danger" onclick="deleteStory('${collectionId}', '${story.id}')">Delete</button>
            </div>
        `;
        container.appendChild(storyEl);
    });
}

function openCollectionEditor(collectionId = null) {
    currentEditingCollection = collectionId;
    const modal = document.getElementById('collection-editor-modal');
    const isEdit = collectionId !== null;
    
    if (isEdit) {
        const collection = window.storiesConfig.collections[collectionId];
        document.getElementById('collection-id').value = collection.id;
        document.getElementById('collection-title').value = collection.title;
        document.getElementById('collection-description').value = collection.description;
        document.getElementById('collection-id').disabled = true;
    } else {
        document.getElementById('collection-id').value = '';
        document.getElementById('collection-title').value = '';
        document.getElementById('collection-description').value = '';
        document.getElementById('collection-id').disabled = false;
    }
    
    modal.style.display = 'block';
}

function closeCollectionEditor() {
    document.getElementById('collection-editor-modal').style.display = 'none';
    currentEditingCollection = null;
}

function saveCollection() {
    const id = document.getElementById('collection-id').value;
    const title = document.getElementById('collection-title').value;
    const description = document.getElementById('collection-description').value;
    
    if (!id || !title) {
        alert('Please fill in all required fields');
        return;
    }
    
    const collection = {
        id: id,
        title: title,
        description: description,
        stories: window.storiesConfig.collections[id]?.stories || {}
    };
    
    window.storiesConfig.collections[id] = collection;
    
    closeCollectionEditor();
    renderCollections();
    populateCollectionSelector();
    
    // Auto-save after every change
    saveToLocalStorage();
    console.log('=== COLLECTION SAVED AND AUTO-SAVED TO LOCALSTORAGE ===');
}

function editCollection(collectionId) {
    openCollectionEditor(collectionId);
}

function deleteCollection(collectionId) {
    if (confirm('Are you sure you want to delete this collection and all its stories?')) {
        delete window.storiesConfig.collections[collectionId];
        renderCollections();
        populateCollectionSelector();
        if (Object.keys(window.storiesConfig.collections).length > 0) {
            renderStories(Object.keys(window.storiesConfig.collections)[0]);
        }
        // Auto-save after deletion
        saveToLocalStorage();
        console.log('=== COLLECTION DELETED AND AUTO-SAVED TO LOCALSTORAGE ===');
    }
}

function openStoryEditor(collectionId = null, storyId = null) {
    const currentCollection = collectionId || document.getElementById('current-collection').value;
    const modal = document.getElementById('story-editor-modal');
    const isEdit = storyId !== null;
    
    if (!currentCollection) {
        alert('Please select or create a collection first');
        return;
    }
    
    // Ensure the collection exists and has a stories object
    if (!window.storiesConfig.collections[currentCollection]) {
        console.error('Collection does not exist:', currentCollection);
        return;
    }
    
    if (!window.storiesConfig.collections[currentCollection].stories) {
        window.storiesConfig.collections[currentCollection].stories = {};
    }
    
    currentEditingStory = { collectionId: currentCollection, storyId: storyId };
    
    if (isEdit) {
        const story = window.storiesConfig.collections[currentCollection].stories[storyId];
        if (!story) {
            console.error('Story not found:', storyId);
            return;
        }
        document.getElementById('story-id').value = story.id;
        document.getElementById('story-title').value = story.title;
        document.getElementById('story-sequence').value = story.sequence;
        document.getElementById('story-description').value = story.description;
        document.getElementById('story-image').value = story.image;
        document.getElementById('story-display-order').value = story.displayOrder || 1;
        document.getElementById('story-has-audio').checked = story.hasAudio || false;
        document.getElementById('story-is-new').checked = story.isNew || false;
        document.getElementById('download-fantasy').checked = (story.downloadOptions || []).includes('fantasy');
        document.getElementById('download-audio').checked = (story.downloadOptions || []).includes('audio');
        document.getElementById('story-id').disabled = true;
    } else {
        document.getElementById('story-id').value = '';
        document.getElementById('story-title').value = '';
        document.getElementById('story-sequence').value = '';
        document.getElementById('story-description').value = '';
        document.getElementById('story-image').value = '';
        document.getElementById('story-display-order').value = 1;
        document.getElementById('story-has-audio').checked = true;
        document.getElementById('story-is-new').checked = false;
        document.getElementById('download-fantasy').checked = true;
        document.getElementById('download-audio').checked = true;
        document.getElementById('story-id').disabled = false;
    }
    
    modal.style.display = 'block';
}

function closeStoryEditor() {
    document.getElementById('story-editor-modal').style.display = 'none';
    currentEditingStory = null;
}

function saveStory() {
    const id = document.getElementById('story-id').value;
    const title = document.getElementById('story-title').value;
    const sequence = document.getElementById('story-sequence').value;
    const description = document.getElementById('story-description').value;
    const image = document.getElementById('story-image').value;
    const displayOrder = parseInt(document.getElementById('story-display-order').value);
    const hasAudio = document.getElementById('story-has-audio').checked;
    const isNew = document.getElementById('story-is-new').checked;
    
    const downloadOptions = [];
    if (document.getElementById('download-fantasy').checked) downloadOptions.push('fantasy');
    if (document.getElementById('download-audio').checked) downloadOptions.push('audio');
    
    if (!id || !title || !currentEditingStory) {
        alert('Please fill in all required fields');
        return;
    }
    
    const story = {
        id: id,
        title: title,
        sequence: sequence,
        description: description,
        image: image,
        displayOrder: displayOrder,
        hasAudio: hasAudio,
        isNew: isNew,
        downloadOptions: downloadOptions
    };
    
    // Ensure the collection and stories object exist
    if (!window.storiesConfig.collections[currentEditingStory.collectionId]) {
        console.error('Collection does not exist:', currentEditingStory.collectionId);
        return;
    }
    
    if (!window.storiesConfig.collections[currentEditingStory.collectionId].stories) {
        window.storiesConfig.collections[currentEditingStory.collectionId].stories = {};
    }
    
    window.storiesConfig.collections[currentEditingStory.collectionId].stories[id] = story;
    
    console.log('=== STORY SAVED ===', story);
    console.log('=== CURRENT CONFIG AFTER SAVE ===', window.storiesConfig);
    
    closeStoryEditor();
    renderStories(currentEditingStory.collectionId);
    
    // Auto-save after every change
    saveToLocalStorage();
    console.log('=== STORY SAVED AND AUTO-SAVED TO LOCALSTORAGE ===');
}

function editStory(collectionId, storyId) {
    openStoryEditor(collectionId, storyId);
}

function deleteStory(collectionId, storyId) {
    if (confirm('Are you sure you want to delete this story?')) {
        delete window.storiesConfig.collections[collectionId].stories[storyId];
        renderStories(collectionId);
        // Auto-save after deletion
        saveToLocalStorage();
        console.log('=== STORY DELETED AND AUTO-SAVED TO LOCALSTORAGE ===');
    }
}

function saveToLocalStorage() {
    try {
        localStorage.setItem('storiesConfig', JSON.stringify(window.storiesConfig));
        console.log('=== SAVED TO LOCALSTORAGE ===', window.storiesConfig);
    } catch (error) {
        console.error('=== ERROR SAVING TO LOCALSTORAGE ===', error);
    }
}

function generateConfiguration() {
    updateConfigFromForm();
    
    const configJson = JSON.stringify(window.storiesConfig, null, 4);
    const configCode = `// Stories Configuration
// Generated by Story Configuration Tool

const storiesConfig = ${configJson};

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = storiesConfig;
}

// Make available globally
window.storiesConfig = storiesConfig;`;
    
    const blob = new Blob([configCode], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'stories-config.js';
    a.click();
    URL.revokeObjectURL(url);
    
    alert('Configuration file generated and downloaded!');
}

function updateConfigFromForm() {
    if (!window.storiesConfig.site) {
        window.storiesConfig.site = {};
    }
    
    window.storiesConfig.site.title = document.getElementById('site-title').value;
    window.storiesConfig.site.subtitle = document.getElementById('site-subtitle').value;
    window.storiesConfig.site.description = document.getElementById('site-description').value;
    window.storiesConfig.site.logoUrl = document.getElementById('site-logo').value;
    window.storiesConfig.site.homeUrl = document.getElementById('home-url').value;
    window.storiesConfig.site.audioNote = document.getElementById('audio-note').value;
}