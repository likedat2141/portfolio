
// Get the navbar element
const navbar = document.getElementById('navbar');

// Get the nav links container
const navLinks = document.querySelector('.nav-links');

// Create a toggle button for mobile devices
const toggleButton = document.createElement('button');
toggleButton.innerHTML = '☰'; // Hamburger icon
toggleButton.classList.add('nav-toggle');

// Add the toggle button to the navbar
navbar.appendChild(toggleButton);

// Add event listener to the toggle button
toggleButton.addEventListener('click', () => {
  // Toggle the 'show' class on the nav links container
  navLinks.classList.toggle('show');
});