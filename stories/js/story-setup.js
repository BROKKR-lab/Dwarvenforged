console.log('=== STORY-SETUP.JS LOADING ===');

// Declare storiesConfig FIRST before anything else
var storiesConfig = {
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

let currentEditingStory = null;
let currentEditingCollection = null;

// Load the config IMMEDIATELY when the script loads, not waiting for DOM
(function() {
    console.log('=== IMMEDIATE CONFIG LOAD ATTEMPT ===');
    
    // First try to load the script synchronously
    const script = document.createElement('script');
    script.src = '/stories/js/stories-config.js';
    script.async = false; // Force synchronous loading
    
    script.onload = function() {
        console.log('=== CONFIG SCRIPT LOADED ===');
        if (window.storiesConfig) {
            console.log('=== CONFIG FOUND ===', window.storiesConfig);
            
            // Set the config immediately
            storiesConfig = JSON.parse(JSON.stringify(window.storiesConfig));
            
            // If DOM is ready, populate immediately
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', function() {
                    console.log('=== DOM READY, POPULATING FIELDS ===');
                    populateEverything();
                });
            } else {
                console.log('=== DOM ALREADY READY, POPULATING NOW ===');
                populateEverything();
            }
        } else {
            console.error('=== CONFIG SCRIPT LOADED BUT NO WINDOW.STORIESCONFIG ===');
        }
    };
    
    script.onerror = function() {
        console.error('=== FAILED TO LOAD CONFIG SCRIPT ===');
    };
    
    document.head.appendChild(script);
})();

function populateEverything() {
    console.log('=== POPULATING EVERYTHING ===', storiesConfig);
    
    try {
        populateFormFields();
        renderCollections();
        populateCollectionSelector();
        if (Object.keys(storiesConfig.collections).length > 0) {
            renderStories(Object.keys(storiesConfig.collections)[0]);
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
    document.getElementById('save-btn').addEventListener('click', saveConfiguration);
    
    document.getElementById('close-story-editor').addEventListener('click', closeStoryEditor);
    document.getElementById('close-collection-editor').addEventListener('click', closeCollectionEditor);
    document.getElementById('cancel-story-btn').addEventListener('click', closeStoryEditor);
    document.getElementById('cancel-collection-btn').addEventListener('click', closeCollectionEditor);
    
    document.getElementById('save-story-btn').addEventListener('click', saveStory);
    document.getElementById('save-collection-btn').addEventListener('click', saveCollection);
    
    document.getElementById('current-collection').addEventListener('change', function() {
        renderStories(this.value);
    });
}

// Fallback DOM ready listener
document.addEventListener('DOMContentLoaded', function() {
    console.log('=== DOM CONTENT LOADED FALLBACK ===');
    
    // If config hasn't been loaded yet, try again
    if (!storiesConfig.site.title && !window.storiesConfig) {
        console.log('=== NO CONFIG YET, TRYING FALLBACK LOAD ===');
        
        // Try localStorage first
        const savedConfig = localStorage.getItem('storiesConfig');
        if (savedConfig) {
            try {
                storiesConfig = JSON.parse(savedConfig);
                console.log('=== LOADED FROM LOCALSTORAGE ===', storiesConfig);
                populateEverything();
                return;
            } catch (e) {
                console.error('=== LOCALSTORAGE PARSE ERROR ===', e);
            }
        }
        
        // Try one more time to load the script
        loadConfigScriptFallback().then(() => {
            populateEverything();
        }).catch(error => {
            console.error('=== FINAL FALLBACK FAILED ===', error);
            populateEverything(); // Populate with empty config
        });
    } else if (window.storiesConfig && !storiesConfig.site.title) {
        console.log('=== FOUND WINDOW CONFIG, COPYING ===');
        storiesConfig = JSON.parse(JSON.stringify(window.storiesConfig));
        populateEverything();
    } else {
        console.log('=== CONFIG ALREADY LOADED, JUST SETUP LISTENERS ===');
        setupEventListeners();
    }
});

function loadConfigScriptFallback() {
    return new Promise((resolve, reject) => {
        console.log('=== FALLBACK SCRIPT LOAD ===');
        const script = document.createElement('script');
        script.src = '/stories/js/stories-config.js';
        script.onload = () => {
            if (window.storiesConfig) {
                storiesConfig = JSON.parse(JSON.stringify(window.storiesConfig));
                console.log('=== FALLBACK SUCCESS ===', storiesConfig);
                resolve(storiesConfig);
            } else {
                reject(new Error('No config in window'));
            }
        };
        script.onerror = () => reject(new Error('Script load failed'));
        document.head.appendChild(script);
    });
}

function populateFormFields() {
    console.log('=== POPULATING FORM FIELDS ===', storiesConfig.site);
    
    const fields = [
        { id: 'site-title', value: storiesConfig.site.title || '' },
        { id: 'site-subtitle', value: storiesConfig.site.subtitle || '' },
        { id: 'site-description', value: storiesConfig.site.description || '' },
        { id: 'site-logo', value: storiesConfig.site.logoUrl || '' },
        { id: 'home-url', value: storiesConfig.site.homeUrl || '' },
        { id: 'audio-note', value: storiesConfig.site.audioNote || '' }
    ];
    
    fields.forEach(field => {
        const element = document.getElementById(field.id);
        if (element) {
            element.value = field.value;
            console.log(`Set ${field.id} to: ${field.value}`);
        } else {
            console.error(`Element ${field.id} not found`);
        }
    });
}

function switchTab(tabId) {
    document.querySelectorAll('.config-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.config-section').forEach(section => section.classList.remove('active'));
    
    document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');
    document.getElementById(`${tabId}-section`).classList.add('active');
}

function renderCollections() {
    console.log('=== RENDERING COLLECTIONS ===', storiesConfig.collections);
    const container = document.getElementById('collections-list');
    if (!container) {
        console.error('=== COLLECTIONS CONTAINER NOT FOUND ===');
        return;
    }
    
    container.innerHTML = '';
    
    Object.values(storiesConfig.collections).forEach(collection => {
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
    
    console.log(`=== RENDERED ${Object.keys(storiesConfig.collections).length} COLLECTIONS ===`);
}

function populateCollectionSelector() {
    const select = document.getElementById('current-collection');
    if (!select) {
        console.error('=== COLLECTION SELECT NOT FOUND ===');
        return;
    }
    
    select.innerHTML = '';
    
    Object.values(storiesConfig.collections).forEach(collection => {
        const option = document.createElement('option');
        option.value = collection.id;
        option.textContent = collection.title;
        select.appendChild(option);
    });
    
    console.log(`=== POPULATED SELECTOR WITH ${Object.keys(storiesConfig.collections).length} OPTIONS ===`);
}

function renderStories(collectionId) {
    const container = document.getElementById('stories-list');
    if (!container) {
        console.error('=== STORIES CONTAINER NOT FOUND ===');
        return;
    }
    
    container.innerHTML = '';
    
    if (!collectionId || !storiesConfig.collections[collectionId]) {
        console.log('=== NO COLLECTION OR INVALID ID ===', collectionId);
        return;
    }
    
    const stories = storiesConfig.collections[collectionId].stories || {};
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
        const collection = storiesConfig.collections[collectionId];
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
        stories: storiesConfig.collections[id]?.stories || {}
    };
    
    storiesConfig.collections[id] = collection;
    
    closeCollectionEditor();
    renderCollections();
    populateCollectionSelector();
    saveToLocalStorage();
}

function editCollection(collectionId) {
    openCollectionEditor(collectionId);
}

function deleteCollection(collectionId) {
    if (confirm('Are you sure you want to delete this collection and all its stories?')) {
        delete storiesConfig.collections[collectionId];
        renderCollections();
        populateCollectionSelector();
        if (Object.keys(storiesConfig.collections).length > 0) {
            renderStories(Object.keys(storiesConfig.collections)[0]);
        }
        saveToLocalStorage();
    }
}

function openStoryEditor(collectionId = null, storyId = null) {
    const currentCollection = collectionId || document.getElementById('current-collection').value;
    const modal = document.getElementById('story-editor-modal');
    const isEdit = storyId !== null;
    
    currentEditingStory = { collectionId: currentCollection, storyId: storyId };
    
    if (isEdit) {
        const story = storiesConfig.collections[currentCollection].stories[storyId];
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
    
    storiesConfig.collections[currentEditingStory.collectionId].stories[id] = story;
    
    closeStoryEditor();
    renderStories(currentEditingStory.collectionId);
    saveToLocalStorage();
}

function editStory(collectionId, storyId) {
    openStoryEditor(collectionId, storyId);
}

function deleteStory(collectionId, storyId) {
    if (confirm('Are you sure you want to delete this story?')) {
        delete storiesConfig.collections[collectionId].stories[storyId];
        renderStories(collectionId);
        saveToLocalStorage();
    }
}

function saveToLocalStorage() {
    localStorage.setItem('storiesConfig', JSON.stringify(storiesConfig));
}

function generateConfiguration() {
    updateConfigFromForm();
    
    const configJson = JSON.stringify(storiesConfig, null, 4);
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
    storiesConfig.site.title = document.getElementById('site-title').value;
    storiesConfig.site.subtitle = document.getElementById('site-subtitle').value;
    storiesConfig.site.description = document.getElementById('site-description').value;
    storiesConfig.site.logoUrl = document.getElementById('site-logo').value;
    storiesConfig.site.homeUrl = document.getElementById('home-url').value;
    storiesConfig.site.audioNote = document.getElementById('audio-note').value;
}

function saveConfiguration() {
    updateConfigFromForm();
    saveToLocalStorage();
    alert('Configuration saved to browser storage!');
}