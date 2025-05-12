// Audio player functionality
function initializePlayer(config) {
  // Audio files base URL
  const audioBaseUrl = config.audioBaseUrl;
  
  // Create audio element
  const audio = new Audio();
  let currentSection = 1;
  let isPlaying = false;
  
  // Get DOM elements
  const playPauseButton = document.getElementById('play-pause');
  const progressBar = document.getElementById('progress-bar');
  const progressContainer = document.getElementById('progress-container');
  const timeDisplay = document.querySelector('.time-display');
  const sections = document.querySelectorAll('.story-section');
  const sectionTitleSticky = document.querySelector('.section-title-sticky');
  
  // Add section markers to progress bar
  const totalSections = sections.length;
  for (let i = 1; i < totalSections; i++) {
    const marker = document.createElement('div');
    marker.className = 'section-indicator';
    marker.style.left = `${(i / totalSections) * 100}%`;
    progressContainer.appendChild(marker);
  }
  
  // Format time function
  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
  
  // Update progress function
  function updateProgress() {
    if (audio.duration) {
      const percentage = (audio.currentTime / audio.duration) * 100;
      progressBar.style.width = `${percentage}%`;
      timeDisplay.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
    }
  }
  
  // Define continue function for the main play button
  function continueToNextSection() {
    if (currentSection < sections.length) {
      loadAndPlaySection(currentSection + 1);
    } else {
      isPlaying = false;
      playPauseButton.textContent = '▶';
    }
  }
  
  // One-time play function (for section buttons)
  function playOnce() {
    isPlaying = false;
    playPauseButton.textContent = '▶';
    audio.removeEventListener('ended', continueToNextSection);
    audio.removeEventListener('ended', playOnce);
  }
  
  // Load and play section function
  function loadAndPlaySection(sectionNumber, playMode = 'continuous') {
    // Update UI
    sections.forEach(section => section.classList.remove('active'));
    const activeSection = document.querySelector(`.story-section[data-section="${sectionNumber}"]`);
    activeSection.classList.add('active');
    
    // Scroll to section (with a slight offset for the sticky player)
    activeSection.scrollIntoView({behavior: 'smooth', block: 'start'});
    window.scrollBy(0, -100); // Offset for sticky player
    
    // Update sticky title
    sectionTitleSticky.textContent = activeSection.querySelector('.section-title').textContent;
    
    // Update audio
    currentSection = sectionNumber;
    audio.src = `${audioBaseUrl}Part-${String(sectionNumber).padStart(4, '0')}.mp3`;
    audio.load();
    
    // Remove any existing event listeners
    audio.removeEventListener('ended', continueToNextSection);
    audio.removeEventListener('ended', playOnce);
    
    // Add appropriate event listener based on play mode
    if (playMode === 'continuous') {
      audio.addEventListener('ended', continueToNextSection);
    } else {
      audio.addEventListener('ended', playOnce);
    }
    
    // Play audio
    audio.play()
      .then(() => {
        isPlaying = true;
        playPauseButton.textContent = '❚❚';
      })
      .catch(err => {
        console.error('Error playing audio:', err);
        playPauseButton.textContent = '▶';
        isPlaying = false;
      });
  }
  
  // Play/Pause button event
  playPauseButton.addEventListener('click', function() {
    if (isPlaying) {
      audio.pause();
      isPlaying = false;
      playPauseButton.textContent = '▶';
    } else {
      if (audio.src) {
        // Remove any existing event listeners and add continuous play
        audio.removeEventListener('ended', playOnce);
        audio.addEventListener('ended', continueToNextSection);
        
        audio.play();
        isPlaying = true;
        playPauseButton.textContent = '❚❚';
      } else {
        // If no audio is loaded yet, load the first section
        loadAndPlaySection(1, 'continuous');
      }
    }
  });
  
  // Progress container click event
  progressContainer.addEventListener('click', function(e) {
    if (audio.duration) {
      const clickPosition = (e.offsetX / progressContainer.offsetWidth);
      audio.currentTime = clickPosition * audio.duration;
    }
  });
  
  // Listen to this section buttons
  document.querySelectorAll('.listen-button').forEach(button => {
    button.addEventListener('click', function() {
      const sectionNumber = parseInt(this.getAttribute('data-section'));
      loadAndPlaySection(sectionNumber, 'once');
    });
  });
  
  // Audio events
  audio.addEventListener('timeupdate', updateProgress);
  
  // Initial setup - preload first audio file
  audio.preload = 'metadata';
  audio.src = `${audioBaseUrl}Part-0001.mp3`;
}