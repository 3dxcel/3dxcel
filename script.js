window.addEventListener('load', function() {
    // Remove the loading page after a delay (3 seconds in this example)
    setTimeout(function() {
      document.getElementById('loading').style.display = 'none';
    }, 3000);
  });
  
  // Typewriter Effect for "TechCycle" title
  const typewriterTitle = document.querySelector('#home h2');
  const text = '3DXcel';
  let index = 0;
  const typingSpeed = 300; // Adjust typing speed (in milliseconds) if desired
  
  function typewriter() {
    if (index < text.length) {
      typewriterTitle.textContent += text.charAt(index);
      index++;
      setTimeout(typewriter, typingSpeed);
    }
  }
  typewriter();
  
  document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.getElementById('cursor');
    const delay = 50; // Adjust the delay (in milliseconds) for the cursor movement
  
    document.addEventListener('mousemove', function(e) {
      const x = e.clientX;
      const y = e.clientY;
  
      setTimeout(function() {
        cursor.style.transform = `translate(${x}px, ${y}px)`;
      }, delay);
    });
  });

// Get the menu buttons and icons
const menuButtons = document.querySelector('.menu-buttons');
const contactIcons = document.querySelector('.contact-icons');

// Add scroll event listener
window.addEventListener('scroll', () => {
  // Check if the user has scrolled beyond a certain threshold
  if (window.scrollY > 100) {
    // Apply fade out transition to menu buttons and icons
    menuButtons.style.transition = 'opacity 0.2s';
    contactIcons.style.transition = 'opacity 0.5s';
    menuButtons.style.opacity = '0';
    contactIcons.style.opacity = '0';
  } else {
    // Reset opacity when user scrolls back to the top
    menuButtons.style.transition = 'opacity 0.2s';
    contactIcons.style.transition = 'opacity 0.2s';
    menuButtons.style.opacity = '1';
    contactIcons.style.opacity = '1';
  }
});

  
  
  
  