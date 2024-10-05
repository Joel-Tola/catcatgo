// NOTE: Scripts are separated by page to avoid unnecessary loads

// Burger Menu Toggle
// Wait for the entire HTML document to be loaded and parsed
// This ensures that all DOM elements (like .burger and .nav-links) are accessible
// before the script tries to interact with them. Without this, if the script
// runs too early (before the DOM is ready), it might fail to select those elements.
document.addEventListener('DOMContentLoaded', () => {
    // Select the burger icon (button for opening/closing the menu)
    const burger = document.querySelector('.burger');
    // Select the navigation container that holds the nav links (ul or div)
    const nav = document.querySelector('.nav-links');
    // Select all individual navigation link list items
    const navLinks = document.querySelectorAll('.nav-links li');
  
    // Add a click event listener to the burger icon
    burger.addEventListener('click', () => {
      // Toggle the 'nav-active' class on the nav to show/hide the menu
      nav.classList.toggle('nav-active');
      // Animate the individual nav links
      navLinks.forEach((link, index) => {
        // Check if the link already has an animation, if so, remove it
        // Otherwise, add the fade animation with staggered delay for each link
        link.style.animation = link.style.animation
          ? ''  // If animation is already applied, clear it
          : `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;  // Add animation with delay
      });
      // Toggle the 'toggle' class on the burger icon itself
      // This class typically transforms the burger icon into an "X" or similar
      burger.classList.toggle('toggle');
    });
  });