// Updated navigation.js with automatic next/previous links and proper chronology for multiple collections
document.addEventListener('DOMContentLoaded', function() {
  const navPlaceholder = document.getElementById('nav-placeholder');
  
// Create the navigation HTML base
const navHTML = `
  <nav class="site-nav">
    <div class="nav-container">
      <div class="logo">
        <img src="https://www.dwarvenforged.com/img/logo.jpg" alt="Dwarven Forged Logo">
        <h1 class="site-title"><a href="https://www.dwarvenforged.com">Dwarven Forged Stories</a></h1>
      </div>
      <div class="nav-links">
        <div class="nav-dropdown">
          <button class="dropdown-button">Stories</button>
          <div class="dropdown-content" id="stories-dropdown">
            <!-- Story links will be inserted here dynamically -->
          </div>
        </div>
        <a href="/stories/" class="nav-button">All Stories</a>
        <a href="https://www.dwarvenforged.com" class="home-button">Return to Main Site</a>
      </div>
    </div>
  </nav>
`;
  
  // Insert navigation
  navPlaceholder.innerHTML = navHTML;
  
  // Get the stories dropdown element
  const storiesDropdown = document.getElementById('stories-dropdown');
  
  // Master story data - central place for all story information
  // Complete Brokkr Saga reading order with collections
  const masterStoryData = {
    // Collection I reading order
    collection1Order: ['0005', '0003', '0004', '0001', '0002', '0006', '0007', '0008', '0009', '0010', '0011', '0012'],
    
    // Collection II reading order  
    collection2Order: ['2001'],
    
    // Complete story information for Collection I
    collection1Stories: {
      '0001': {
        title: 'The Forge Root Flame',
        path: '/stories/story-0001/index.html',
        description: 'When a blight threatens the Nine Realms, master craftsman Brokkr must forge a Seed of Renewal in his legendary anvil deep beneath Svartalfheim. But the price of creation may be higher than even a dwarf can bear.'
      },
      '0002': {
        title: 'Daughter of the Forge',
        path: '/stories/story-0002/index.html',
        description: 'Years after her father\'s sacrifice, Nostri journeys into the depths of Svartalfheim to find what remains of Brokkr. With unlikely help from Loki, she discovers that the fires of creation never truly die—they only wait to be relit.'
      },
      '0003': {
        title: 'The Forge Trial',
        path: '/stories/story-0003/index.html',
        description: 'Before becoming the legendary craftsman of the Nine Realms, Brokkr must endure imprisonment by the fire giants of Muspelheim. Through cunning, knowledge, and innovation, he transforms his captivity into an opportunity that will change the nature of his craft forever.'
      },
      '0004': {
        title: 'The Forge Council',
        path: '/stories/story-0004/index.html',
        description: 'After his return from captivity, Brokkr establishes the Forge Council, a community of craftsmen dedicated to the art of seedcraft. Through nine sacred principles, he builds a legacy that will outlast him and shape the future of the Nine Realms.'
      },
      '0005': {
        title: 'The Forge Wager',
        path: '/stories/story-0005/index.html',
        description: 'When Loki cuts off Sif\'s golden hair, Brokkr is drawn into a dangerous wager that will test his craft against the legendary Sons of Ivaldi. The result: the creation of Mjolnir, the most powerful weapon in the Nine Realms.'
      },
      '0006': {
        title: 'The Forge Journey',
        path: '/stories/story-0006/index.html',
        description: 'After his rebirth, Brokkr embarks on a mission to share his craft across the Nine Realms. Teaching others to adapt seedcraft to their own environments, he creates a network of knowledge exchange that transforms not just how seeds grow, but how realms connect.'
      },
      '0007': {
        title: 'The Forge Detail',
        path: '/stories/story-0007/index.html',
        description: 'While establishing seed exchanges in Alfheim, Brokkr discovers dark elves living in secret. As he learns their mastery of precision and microscopic detail, they in turn discover his knowledge of scaling work across different magnitudes. Together, they create a hidden alliance that bridges realms in unexpected ways.'
      },
      '0008': {
        title: 'The Forge Chronicle',
        path: '/stories/story-0008/index.html',
        description: 'Brokkr encounters Eddan, a court scribe who abandoned comfort to record tales worth telling. What begins as Brokkr offering aid to a traveler transforms into an unexpected partnership, as Eddan\'s gift for storytelling helps spread seedcraft knowledge across the realms far beyond what Brokkr could achieve alone.'
      },
      '0009': {
        title: 'The Forge Reunion',
        path: '/stories/story-0009/index.html',
        description: 'Brokkr recounts the tale of Lonetree, a towering, tattooed human who once led a fellowship of knowledge-sharers across the realms. Separated by the Great Withering, they reunite decades later to establish Forge Gardens—permanent communities where their different approaches to craft and growth combine to create something greater than either could achieve alone.'
      },
      '0010': {
        title: 'The Forge Bond',
        path: '/stories/story-0010/index.html',
        description: 'After his imprisonment among the fire giants, Brokkr meets Elri, a seed-tender with Vanir heritage, and her young daughter Nostri. Despite facing a second confinement for forbidden experiments, they build a life combining dwarven metallurgy with plant-craft. When fire destroys their seedforge and years of research, they discover that from the ashes, the most resilient creations emerge—both in their work and in their bond as a family.'
      },
      '0011': {
        title: 'The Phoenix Flame',
        path: '/stories/story-0011/index.html',
        description: 'After the devastating fire, Brokkr and Elri discover that many had preserved fragments of their work. These "ember carriers" become the foundation of a special honor—the Phoenix Flame. Recipients are gifted handcrafted wooden boxes containing the rarest seeds, including mysterious "Lost and Found" varieties with unknown potential. Not purchased but freely given out of respect, this tradition celebrates those who stood with Brokkr when others wouldn\'t, forming a sacred circle of trust that transcends the boundaries between realms.'
      },
      '0012': {
        title: 'The Forge Memory',
        path: '/stories/story-0012/index.html',
        description: 'As Brokkr\'s seedcraft grows increasingly complex, his traditional methods of documentation prove inadequate. When Eddan the chronicler brings him a mysterious "memory tablet" combining elven crystal-work with dwarven metallurgy, Brokkr reluctantly embraces this new tool. Through his struggles to adapt, he discovers that the tablet reveals hidden patterns in his phoenix seeds—connections that transform not just how he records his knowledge, but how he understands the very nature of his craft.'
      }
    },
    
    // Complete story information for Collection II
    collection2Stories: {
      '2001': {
        title: 'The Tattooed Seed',
        path: '/stories/story-2001/index.html',
        description: 'During his years in Muspelheim\'s prisons, Brokkr discovered more than just fire-craft—he found his gift for artistic creation. When he combines his newfound skills with his seedcraft mastery, the result is something unprecedented: seeds that carry not just genetic memory, but visual stories etched into their very shells. These living artworks become a new form of communication between realms, where each sprouting tells a tale.'
      }
    }
  };
  
  // Helper function to determine which collection a story belongs to
  function getStoryCollection(storyId) {
    if (masterStoryData.collection1Stories[storyId]) {
      return { collection: 1, stories: masterStoryData.collection1Stories, order: masterStoryData.collection1Order };
    } else if (masterStoryData.collection2Stories[storyId]) {
      return { collection: 2, stories: masterStoryData.collection2Stories, order: masterStoryData.collection2Order };
    }
    return null;
  }
  
  // This function will attempt to find stories by checking if directories exist
  function detectStories() {
    let foundStories = [];
    
    // Helper function to check if a URL exists
    function urlExists(url, callback) {
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          callback(xhr.status < 400);
        }
      };
      xhr.open('HEAD', url, true);
      xhr.send();
    }
    
    // Process all story folders we've found
    function processFoundStories() {
      // Sort stories by collection and reading order
      foundStories.sort((a, b) => {
        const aCollectionInfo = getStoryCollection(a.id);
        const bCollectionInfo = getStoryCollection(b.id);
        
        if (!aCollectionInfo || !bCollectionInfo) {
          return a.id.localeCompare(b.id);
        }
        
        // If different collections, sort by collection number
        if (aCollectionInfo.collection !== bCollectionInfo.collection) {
          return aCollectionInfo.collection - bCollectionInfo.collection;
        }
        
        // If same collection, sort by reading order
        const aIndex = aCollectionInfo.order.indexOf(a.id);
        const bIndex = bCollectionInfo.order.indexOf(b.id);
        
        if (aIndex !== -1 && bIndex !== -1) {
          return aIndex - bIndex;
        } else if (aIndex !== -1) {
          return -1;
        } else if (bIndex !== -1) {
          return 1;
        } else {
          return a.id.localeCompare(b.id);
        }
      });
      
      // Generate HTML for each story with collection headers
      let storiesHTML = '';
      let currentCollection = null;
      
      foundStories.forEach((story, index) => {
        const collectionInfo = getStoryCollection(story.id);
        
        // Add collection header if we're starting a new collection
        if (collectionInfo && collectionInfo.collection !== currentCollection) {
          currentCollection = collectionInfo.collection;
          const collectionTitle = currentCollection === 1 ? 'Collection I: The Early Years' : 'Collection II: The Master\'s Art';
          storiesHTML += `
            <div class="collection-header">
              <strong>${collectionTitle}</strong>
            </div>
          `;
        }
        
        // Calculate display number within the collection
        let displayNumber;
        if (collectionInfo) {
          const positionInCollection = collectionInfo.order.indexOf(story.id) + 1;
          displayNumber = positionInCollection.toString().padStart(2, '0');
        } else {
          displayNumber = (index + 1).toString().padStart(2, '0');
        }
        
        storiesHTML += `
          <a href="${story.path}">
            <div class="story-item">
              <span class="story-number">${displayNumber}</span>
              ${story.title}
            </div>
          </a>
        `;
      });
      
      // Insert the stories HTML
      storiesDropdown.innerHTML = storiesHTML;
      
      // Highlight current page
      const currentPath = window.location.pathname;
      document.querySelectorAll('#stories-dropdown a').forEach(link => {
        if (currentPath.includes(link.getAttribute('href'))) {
          link.style.backgroundColor = '#f8f2e9';
          link.style.fontWeight = 'bold';
        }
      });
      
      // Add relative path adjustment for local testing
      if (currentPath.includes('/story-')) {
        document.querySelectorAll('#stories-dropdown a').forEach(link => {
          const href = link.getAttribute('href');
          // If we're in a story directory, adjust paths to be relative
          if (href.startsWith('/stories/')) {
            const relativePath = href.replace('/stories/', '../');
            link.setAttribute('href', relativePath);
          }
        });
        
        // Also adjust the "All Stories" link
        const allStoriesLink = document.querySelector('.nav-button');
        if (allStoriesLink && allStoriesLink.getAttribute('href') === '/stories/') {
          allStoriesLink.setAttribute('href', '../');
        }
        
        // Update the previous/next navigation links if they exist
        updateStoryNavigation(currentPath);
      }
    }
    
    // Automatically update the story navigation links
    function updateStoryNavigation(currentPath) {
      const seriesNav = document.querySelector('.series-navigation');
      if (!seriesNav) return; // No navigation section found
      
      // Extract the current story ID from the path
      const storyMatch = currentPath.match(/story-(\d{4})/);
      if (!storyMatch) return;
      
      const currentStoryId = storyMatch[1];
      const currentCollectionInfo = getStoryCollection(currentStoryId);
      
      if (!currentCollectionInfo) return; // Story not in any collection
      
      const currentIndex = currentCollectionInfo.order.indexOf(currentStoryId);
      if (currentIndex === -1) return; // Story not in reading order
      
      // Get previous and next story IDs within the same collection
      const prevStoryId = currentIndex > 0 ? currentCollectionInfo.order[currentIndex - 1] : null;
      const nextStoryId = currentIndex < currentCollectionInfo.order.length - 1 ? currentCollectionInfo.order[currentIndex + 1] : null;
      
      // Update the navigation links
      const prevButton = seriesNav.querySelector('.nav-prev');
      const nextButton = seriesNav.querySelector('.nav-next');
      
      if (prevButton) {
        if (prevStoryId) {
          const prevStory = currentCollectionInfo.stories[prevStoryId];
          let prevPath = prevStory.path.replace('/stories/', '../');
          prevButton.href = prevPath;
          prevButton.textContent = prevStory.title;
          prevButton.classList.remove('disabled');
        } else {
          prevButton.href = '#';
          prevButton.textContent = 'Previous Story';
          prevButton.classList.add('disabled');
        }
      }
      
      if (nextButton) {
        if (nextStoryId) {
          const nextStory = currentCollectionInfo.stories[nextStoryId];
          let nextPath = nextStory.path.replace('/stories/', '../');
          nextButton.href = nextPath;
          nextButton.textContent = nextStory.title;
          nextButton.classList.remove('disabled');
        } else {
          nextButton.href = '#';
          nextButton.textContent = 'Next Story';
          nextButton.classList.add('disabled');
        }
      }
    }
    
    // Try to fetch the title from an HTML page, or use master data
    function getPageTitle(url, storyId, callback) {
      // Check both collections for existing data
      let storyData = masterStoryData.collection1Stories[storyId] || masterStoryData.collection2Stories[storyId];
      
      if (storyData) {
        callback(storyData.title);
        return;
      }
      
      // Otherwise try to fetch it
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.text();
        })
        .then(html => {
          // Extract title from HTML
          const titleMatch = html.match(/<title>(.*?)<\/title>/i);
          const title = titleMatch 
            ? titleMatch[1].replace(' - Dwarven Forged Stories', '').trim()
            : `Story ${storyId}`;
          callback(title);
        })
        .catch(error => {
          // Use fallback title
          callback(`Story ${storyId}`);
        });
    }
    
    // Story ranges to check
    const storyRanges = [
      { start: 1, end: 15, prefix: '0' },     // Collection I stories (0001-0015)
      { start: 2001, end: 2015, prefix: '' }  // Collection II stories (2001-2015)
    ];
    
    let totalStoriesToCheck = 0;
    let checkedCount = 0;
    
    // Count total stories to check
    storyRanges.forEach(range => {
      totalStoriesToCheck += (range.end - range.start + 1);
    });
    
    // Check each potential story folder
    storyRanges.forEach(range => {
      for (let i = range.start; i <= range.end; i++) {
        const storyId = range.prefix === '0' ? i.toString().padStart(4, '0') : i.toString();
        const folderPath = `/stories/story-${storyId}/`;
        const indexPath = `${folderPath}index.html`;
        
        // Check if this story exists
        urlExists(indexPath, (exists) => {
          if (exists) {
            // If the index file exists, get the story title
            getPageTitle(indexPath, storyId, (title) => {
              // Add the story to our found stories
              foundStories.push({
                id: storyId,
                title: title,
                path: indexPath
              });
              
              checkedCount++;
              if (checkedCount === totalStoriesToCheck) {
                processFoundStories();
              }
            });
          } else {
            checkedCount++;
            if (checkedCount === totalStoriesToCheck) {
              processFoundStories();
            }
          }
        });
      }
    });
  }
  
  // Start the story detection
  detectStories();
});