// Story page renderer using configuration
document.addEventListener('DOMContentLoaded', function() {
    loadStoriesConfig().then(() => {
        renderStoryPage();
        initializeTabSwitching();
    }).catch(error => {
        console.error('Failed to load stories config:', error);
    });
});

function loadStoriesConfig() {
    return new Promise((resolve, reject) => {
        if (window.storiesConfig) {
            resolve(window.storiesConfig);
            return;
        }
        
        const savedConfig = localStorage.getItem('storiesConfig');
        if (savedConfig) {
            try {
                window.storiesConfig = JSON.parse(savedConfig);
                resolve(window.storiesConfig);
                return;
            } catch (e) {
                console.warn('Failed to parse saved config:', e);
            }
        }
        
        const script = document.createElement('script');
        script.src = '/stories/js/stories-config.js';
        script.onload = () => {
            if (window.storiesConfig) {
                resolve(window.storiesConfig);
            } else {
                reject(new Error('Config not found after loading script'));
            }
        };
        script.onerror = () => reject(new Error('Failed to load config script'));
        document.head.appendChild(script);
    });
}

function renderStoryPage() {
    const config = window.storiesConfig;
    
    document.title = config.site.title;
    document.querySelector('.logo h1').textContent = config.site.title;
    document.querySelector('.logo img').src = config.site.logoUrl;
    document.querySelector('.home-button').href = config.site.homeUrl;
    
    document.querySelector('.page-title h2').textContent = config.site.subtitle;
    document.querySelector('.page-title p').textContent = config.site.description;
    
    const audioNote = document.querySelector('.audio-note p');
    if (audioNote && config.site.audioNote) {
        audioNote.innerHTML = config.site.audioNote + '<br>- Listen to the audio editions for an immersive journey.';
    }
    
    renderCollectionTabs(config.collections);
    renderCollectionContent(config.collections);
}

function renderCollectionTabs(collections) {
    const tabsContainer = document.querySelector('.collection-tabs');
    tabsContainer.innerHTML = '';
    
    let isFirst = true;
    Object.values(collections).forEach(collection => {
        const button = document.createElement('button');
        button.className = `tab-button ${isFirst ? 'active' : ''}`;
        button.textContent = collection.title;
        button.onclick = () => showCollection(collection.id);
        tabsContainer.appendChild(button);
        isFirst = false;
    });
}

function renderCollectionTabs(collections) {
    const tabsContainer = document.querySelector('.collection-tabs');
    tabsContainer.innerHTML = '';
    
    if (!collections || Object.keys(collections).length === 0) {
        tabsContainer.innerHTML = '<div class="loading">No collections available</div>';
        return;
    }
    
    let isFirst = true;
    Object.values(collections).forEach(collection => {
        const collectionDiv = document.createElement('div');
        collectionDiv.id = collection.id;
        collectionDiv.className = `collection-content ${isFirst ? 'active' : ''}`;
        
        const readingOrder = document.createElement('div');
        readingOrder.className = 'reading-order';
        readingOrder.innerHTML = `
            <h3>${collection.title}</h3>
            <p>${collection.description}</p>
        `;
        
        const storiesGrid = document.createElement('div');
        storiesGrid.className = 'stories-grid';
        
        const stories = Object.values(collection.stories).sort((a, b) => (a.displayOrder || 999) - (b.displayOrder || 999));
        
        stories.forEach(story => {
            storiesGrid.appendChild(createStoryCard(story));
        });
        
        collectionDiv.appendChild(readingOrder);
        collectionDiv.appendChild(storiesGrid);
        
        audioNote.insertAdjacentElement('afterend', collectionDiv);
        isFirst = false;
    });
}

function createStoryCard(story) {
    const card = document.createElement('div');
    card.className = 'story-card';
    
    const downloadOptions = story.downloadOptions.map(option => {
        const className = option === 'fantasy' ? 'download-option-fantasy' : 'download-option-audio';
        const text = option === 'fantasy' ? 'Creative Fantasy' : 'DIGITAL EDITION';
        return `<a href="${story.id}/index.html" class="${className}">${text}</a>`;
    }).join('');
    
    card.innerHTML = `
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
    `;
    
    return card;
}

function initializeTabSwitching() {
    window.showCollection = function(collectionId) {
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
    };
}