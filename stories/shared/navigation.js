document.addEventListener('DOMContentLoaded', function() {
  const navPlaceholder = document.getElementById('nav-placeholder');
  
  // Create the navigation HTML
  const navHTML = `
    <nav class="site-nav">
      <div class="nav-container">
        <h1 class="site-title"><a href="/stories/">Dwarven Forge Stories</a></h1>
        <div class="nav-links">
          <div class="nav-dropdown">
            <button class="dropdown-button">Stories</button>
            <div class="dropdown-content">
              <a href="/stories/story-0001/the-forge-root-flame.html">
                <div class="story-item">
                  <span class="story-number">01</span>
                  The Forge Root Flame
                </div>
              </a>
              <a href="/stories/story-0002/the-forge-daughter.html">
                <div class="story-item">
                  <span class="story-number">02</span>
                  The Forge Daughter
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  `;
  
  // Insert navigation
  navPlaceholder.innerHTML = navHTML;
  
  // Highlight current page in the menu
  const currentPath = window.location.pathname;
  document.querySelectorAll('.dropdown-content a').forEach(link => {
    if (currentPath.includes(link.getAttribute('href'))) {
      link.style.backgroundColor = '#f8f2e9';
      link.style.fontWeight = 'bold';
    }
  });
});