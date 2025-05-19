document.addEventListener('DOMContentLoaded', function() {
    initializeSetup();
    
    document.querySelectorAll('.config-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            switchTab(this.getAttribute('data-tab'));
        });
    });
    
    document.getElementById('add-collection-btn').addEventListener('click', () => openCollectionEditor());
    document.getElementById('add-story-btn').addEventListener('click', () => openStoryEditor());
    document.getElementById('generate-btn').addEventListener('click', generateConfiguration);
    document.getElementById('preview-btn').addEventListener('click', previewChanges);
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
});

let storiesConfig = {
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

function initializeSetup() {
    const savedConfig = localStorage.getItem('storiesConfig');
    if (savedConfig) {
        storiesConfig = JSON.parse(savedConfig);
    }
    
    populateFormFields();
    renderCollections();
    populateCollectionSelector();
    if (Object.keys(storiesConfig.collections).length > 0) {
        renderStories(Object.keys(storiesConfig.collections)[0]);
    }
}

function populateFormFields() {
    document.getElementById('site-title').value = storiesConfig.site.title || '';
    document.getElementById('site-subtitle').value = storiesConfig.site.subtitle || '';
    document.getElementById('site-description').value = storiesConfig.site.description || '';
    document.getElementById('site-logo').value = storiesConfig.site.logoUrl || '';
    document.getElementById('home-url').value = storiesConfig.site.homeUrl || '';
    document.getElementById('audio-note').value = storiesConfig.site.audioNote || '';
}

function switchTab(tabId) {
    document.querySelectorAll('.config-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.config-section').forEach(section => section.classList.remove('active'));
    
    document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');
    document.getElementById(`${tabId}-section`).classList.add('active');
}

function renderCollections() {
    const container = document.getElementById('collections-list');
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
}

function populateCollectionSelector() {
    const select = document.getElementById('current-collection');
    select.innerHTML = '';
    
    Object.values(storiesConfig.collections).forEach(collection => {
        const option = document.createElement('option');
        option.value = collection.id;
        option.textContent = collection.title;
        select.appendChild(option);
    });
}

function renderStories(collectionId) {
    const container = document.getElementById('stories-list');
    container.innerHTML = '';
    
    if (!collectionId || !storiesConfig.collections[collectionId]) {
        return;
    }
    
    const stories = storiesConfig.collections[collectionId].stories;
    const storiesArray = Object.values(stories).sort((a, b) => (a.displayOrder || 999) - (b.displayOrder || 999));
    
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
        document.getElementById('download-fantasy').checked = story.downloadOptions.includes('fantasy');
        document.getElementById('download-audio').checked = story.downloadOptions.includes('audio');
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

function previewChanges() {
    updateConfigFromForm();
    saveToLocalStorage();
    
    const previewHtml = generatePreviewHtml();
    const blob = new Blob([previewHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    
    document.getElementById('preview-frame').src = url;
    switchTab('preview');
    
    setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function generatePreviewHtml() {
    const config = storiesConfig;
    
    let collectionTabs = '';
    let collectionContent = '';
    let isFirst = true;
    
    Object.values(config.collections).forEach(collection => {
        collectionTabs += `
            <button class="tab-button ${isFirst ? 'active' : ''}" onclick="showCollection('${collection.id}')">${collection.title}</button>
        `;
        
        let storiesHtml = '';
        const stories = Object.values(collection.stories).sort((a, b) => (a.displayOrder || 999) - (b.displayOrder || 999));
        
        stories.forEach(story => {
            const downloadOptions = story.downloadOptions.map(option => {
                const className = option === 'fantasy' ? 'download-option-fantasy' : 'download-option-audio';
                const text = option === 'fantasy' ? 'Creative Fantasy' : 'DIGITAL EDITION';
                return `<a href="${story.id}/index.html" class="${className}">${text}</a>`;
            }).join('');
            
            storiesHtml += `
                <div class="story-card">
                    <div class="story-image">
                        <a href="${story.id}/index.html">
                            <img src="${story.image}" alt="${story.title}">
                        </a>
                        ${story.isNew ? '<span class="new-badge">New</span>' : ''}
                        ${story.hasAudio ? `
                            <div class="audio-badge">
                                <svg class="audio-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
                                </svg>
                                Audio Available
                            </div>
                        ` : ''}
                    </div>
                    <div class="story-content">
                        <div class="story-sequence">
                            <span>${story.sequence}</span>
                        </div>
                        <h3 class="story-title">${story.title}</h3>
                        <p class="story-description">${story.description}</p>
                        <div class="story-meta">
                            <div class="story-actions">
                                <a href="${story.id}/index.html" class="read-button">Read Story</a>
                                <div class="download-options">
                                    ${downloadOptions}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
        
        collectionContent += `
            <div id="${collection.id}" class="collection-content ${isFirst ? 'active' : ''}">
                <div class="reading-order">
                    <h3>${collection.title}</h3>
                    <p>${collection.description}</p>
                </div>
                <div class="stories-grid">
                    ${storiesHtml}
                </div>
            </div>
        `;
        
        isFirst = false;
    });
    
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>${config.site.title}</title>
   <style>
       :root {
           --primary-bg: #0d0e12;
           --card-bg: #1e2028;
           --accent-color: #bb8c65;
           --primary-text: #ffffff;
           --secondary-text: #a5a9b7;
           --button-color: #bb8c65;
           --card-border: #2a2c37;
           --badge-color: #ffc107;
           --fantasy-badge: #70ad47;
           --audio-badge: #5b9bd5;
       }
       
       body {
           font-family: Arial, sans-serif;
           background-color: var(--primary-bg);
           color: var(--primary-text);
           margin: 0;
           padding: 0;
       }
       
       .container {
           max-width: 1200px;
           margin: 0 auto;
           padding: 20px;
       }
       
       header {
           display: flex;
           justify-content: space-between;
           align-items: center;
           padding: 20px 0;
           border-bottom: 1px solid rgba(255, 255, 255, 0.1);
           margin-bottom: 40px;
       }
       
       .logo {
           display: flex;
           align-items: center;
       }
       
       .logo img {
           height: 40px;
           margin-right: 10px;
       }
       
       .logo h1 {
           font-size: 24px;
           margin: 0;
       }
       
       .home-button {
           background-color: var(--button-color);
           color: white;
           text-decoration: none;
           padding: 8px 16px;
           border-radius: 4px;
       }
       
       .page-title {
           text-align: center;
           margin-bottom: 30px;
       }
       
       .page-title h2 {
           font-size: 32px;
           margin-bottom: 10px;
       }
       
       .collection-tabs {
           display: flex;
           justify-content: center;
           margin: 2rem 0;
           border-bottom: 2px solid #8B4513;
       }
       
       .tab-button {
           padding: 1rem 2rem;
           background: none;
           border: none;
           color: #8B4513;
           font-size: 1.1rem;
           font-weight: bold;
           cursor: pointer;
           border-bottom: 3px solid transparent;
           transition: all 0.3s ease;
       }
       
       .tab-button.active {
           color: #A0522D;
           border-bottom-color: #A0522D;
           background-color: rgba(139, 69, 19, 0.05);
       }
       
       .collection-content {
           display: none;
       }
       
       .collection-content.active {
           display: block;
       }
       
       .reading-order {
           text-align: center;
           margin-bottom: 30px;
           background-color: var(--card-bg);
           padding: 15px;
           border-radius: 8px;
       }
       
       .reading-order h3 {
           color: #8B4513;
           margin-bottom: 10px;
       }
       
       .stories-grid {
           display: grid;
           grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
           gap: 25px;
           margin-top: 40px;
       }
       
       .story-card {
           background-color: var(--card-bg);
           border-radius: 8px;
           overflow: hidden;
           border: 1px solid var(--card-border);
           transition: transform 0.3s;
       }
       
       .story-card:hover {
           transform: translateY(-5px);
       }
       
       .story-image {
           position: relative;
           height: 200px;
           overflow: hidden;
       }
       
       .story-image img {
           width: 100%;
           height: 100%;
           object-fit: cover;
       }
       
       .new-badge {
           position: absolute;
           top: 15px;
           right: 15px;
           background-color: var(--badge-color);
           color: #000;
           padding: 3px 8px;
           border-radius: 4px;
           font-size: 12px;
           font-weight: bold;
       }
       
       .audio-badge {
           position: absolute;
           top: 15px;
           left: 15px;
           background-color: var(--audio-badge);
           color: white;
           padding: 5px 10px;
           border-radius: 4px;
           font-size: 12px;
           display: flex;
           align-items: center;
           gap: 5px;
       }
       
       .audio-icon {
           width: 16px;
           height: 16px;
           fill: currentColor;
       }
       
       .story-content {
           padding: 20px;
       }
       
       .story-sequence {
           background-color: rgba(187, 140, 101, 0.1);
           padding: 8px 12px;
           border-radius: 4px;
           margin-bottom: 15px;
           text-align: center;
       }
       
       .story-sequence span {
           font-size: 14px;
           font-weight: bold;
           color: var(--accent-color);
       }
       
       .story-title {
           font-size: 20px;
           margin-bottom: 10px;
       }
       
       .story-description {
           color: var(--secondary-text);
           font-size: 14px;
           margin-bottom: 15px;
       }
       
       .story-meta {
           padding-top: 15px;
           border-top: 1px solid rgba(255, 255, 255, 0.1);
       }
       
       .story-actions {
           display: flex;
           flex-direction: column;
           gap: 10px;
       }
       
       .read-button {
           background-color: var(--button-color);
           color: white;
           text-decoration: none;
           padding: 10px;
           border-radius: 4px;
           text-align: center;
           font-weight: bold;
       }
       
       .download-options {
           display: flex;
           gap: 10px;
       }
       
       .download-option-fantasy {
           flex: 1;
           background-color: var(--fantasy-badge);
           color: white;
           text-decoration: none;
           padding: 8px;
           border-radius: 4px;
           text-align: center;
       }
       
       .download-option-audio {
           flex: 1;
           background-color: var(--audio-badge);
           color: white;
           text-decoration: none;
           padding: 8px;
           border-radius: 4px;
           text-align: center;
       }
       
       .audio-note {
           background-color: rgba(91, 155, 213, 0.1);
           border-left: 4px solid var(--audio-badge);
           padding: 15px;
           margin: 30px 0;
           border-radius: 4px;
       }
       
       .audio-note h3 {
           color: var(--audio-badge);
           margin-bottom: 10px;
           display: flex;
           align-items: center;
           gap: 10px;
       }
       
       footer {
           text-align: center;
           padding: 30px 0;
           margin-top: 60px;
           border-top: 1px solid rgba(255, 255, 255, 0.1);
           color: var(--secondary-text);
           font-size: 13px;
       }
   </style>
</head>
<body>
   <div class="container">
       <header>
           <div class="logo">
               <img src="${config.site.logoUrl}" alt="Logo">
               <h1>${config.site.title}</h1>
           </div>
           <a href="${config.site.homeUrl}" class="home-button">Return to Main Site</a>
       </header>

       <div class="page-title">
           <h2>${config.site.subtitle}</h2>
           <p>${config.site.description}</p>
       </div>
       
       <div class="collection-tabs">
           ${collectionTabs}
       </div>

       <div class="audio-note">
           <h3>
               <svg class="audio-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                   <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
               </svg>
               Immersive Audio Experience
           </h3>
           <p>${config.site.audioNote}</p>
       </div>

       ${collectionContent}
       
       <footer>
           <p>© 2025 Stories. All stories are original works.</p>
           <p>Image and Audio Generation provided by: Pollinations.ai - Powering Creativity</p>
       </footer>
   </div>

   <script>
       function showCollection(collectionId) {
           const collections = document.querySelectorAll('.collection-content');
           collections.forEach(collection => {
               collection.classList.remove('active');
           });
           
           const tabs = document.querySelectorAll('.tab-button');
           tabs.forEach(tab => {
               tab.classList.remove('active');
           });
           
           document.getElementById(collectionId).classList.add('active');
           event.target.classList.add('active');
       }
   </script>
</body>
</html>`;
}

function saveConfiguration() {
   updateConfigFromForm();
   saveToLocalStorage();
   alert('Configuration saved to browser storage!');
}	