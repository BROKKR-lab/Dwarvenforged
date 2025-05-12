// Truly dynamic navigation system - client-side only
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
  
  // This function will attempt to find stories by checking if directories exist
  function detectStories() {
    // Maximum number of stories to check for (can be increased as needed)
    const maxStoriesToCheck = 10;
    let foundStories = [];
    
    // Known story metadata - used as a fallback if we can't fetch titles
    // This is especially useful for testing
    const knownStories = {
      '0001': 'The Forge Root Flame',
      '0002': 'Daughter of the Forge',
      '0003': 'The Forge Trial'
      // Add more stories here as they are created
    };
    
    // The preferred reading order - used to determine which numbers to display
    const readingOrder = ['0003', '0001', '0002'];
    
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
        const aIndex = readingOrder.indexOf(a.id);
        const bIndex = readingOrder.indexOf(b.id);
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
      }
    }
    
    // Try to fetch the title from an HTML page
    function getPageTitle(url, storyId, callback) {
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
            : knownStories[storyId] || `Story ${storyId}`;
          callback(title);
        })
        .catch(error => {
          // Use fallback title if we can't fetch
          callback(knownStories[storyId] || `Story ${storyId}`);
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