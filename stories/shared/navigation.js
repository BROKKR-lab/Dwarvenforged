// Updated navigation.js with automatic next/previous links
document.addEventListener('DOMContentLoaded', function() {
  const navPlaceholder = document.getElementById('nav-placeholder');
  
  // Create the navigation HTML base
  const navHTML = `
    <nav class="site-nav">
      <div class="nav-container">
        <h1 class="site-title"><a href="https://www.dwarvenforged.com">Dwarven Forged</a></h1>
        <div class="nav-links">
          <div class="nav-dropdown">
            <button class="dropdown-button">Stories</button>
            <div class="dropdown-content" id="stories-dropdown">
              <!-- Story links will be inserted here dynamically -->
            </div>
          </div>
          <a href="/stories/" class="nav-button">All Stories</a>
        </div>
      </div>
    </nav>
  `;
  
  // Insert navigation
  navPlaceholder.innerHTML = navHTML;
  
  // Get the stories dropdown element
  const storiesDropdown = document.getElementById('stories-dropdown');
  
  // Master story data - central place for all story information
  const masterStoryData = {
    // The reading order array - this controls sequence throughout the site
    readingOrder: ['0003', '0004', '0001', '0002'],
    
    // Complete story information
    stories: {
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
      }
    }
  };
  
  // This function will attempt to find stories by checking if directories exist
  function detectStories() {
    // Maximum number of stories to check for (can be increased as needed)
    const maxStoriesToCheck = 10;
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
      // Sort stories by reading order if possible
      foundStories.sort((a, b) => {
        const aIndex = masterStoryData.readingOrder.indexOf(a.id);
        const bIndex = masterStoryData.readingOrder.indexOf(b.id);
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
      
      // Generate HTML for each story
      let storiesHTML = '';
      foundStories.forEach((story, index) => {
        // The display number is based on the position in the sorted array
        const displayNumber = (index + 1).toString().padStart(2, '0');
        
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
      const currentIndex = masterStoryData.readingOrder.indexOf(currentStoryId);
      
      if (currentIndex === -1) return; // Story not in reading order
      
      // Get previous and next story IDs
      const prevStoryId = currentIndex > 0 ? masterStoryData.readingOrder[currentIndex - 1] : null;
      const nextStoryId = currentIndex < masterStoryData.readingOrder.length - 1 ? masterStoryData.readingOrder[currentIndex + 1] : null;
      
      // Update the navigation links
      const prevButton = seriesNav.querySelector('.nav-prev');
      const nextButton = seriesNav.querySelector('.nav-next');
      
      if (prevButton) {
        if (prevStoryId) {
          const prevStory = masterStoryData.stories[prevStoryId];
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
          const nextStory = masterStoryData.stories[nextStoryId];
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
      // If we already have data for this story, use it
      if (masterStoryData.stories[storyId]) {
        callback(masterStoryData.stories[storyId].title);
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
    
    // Counter for checking story existence
    let checkedCount = 0;
    
    // Check each potential story folder
    for (let i = 1; i <= maxStoriesToCheck; i++) {
      const storyId = i.toString().padStart(4, '0');
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
            if (checkedCount === maxStoriesToCheck) {
              processFoundStories();
            }
          });
        } else {
          checkedCount++;
          if (checkedCount === maxStoriesToCheck) {
            processFoundStories();
          }
        }
      });
    }
  }
  
  // Start the story detection
  detectStories();
});