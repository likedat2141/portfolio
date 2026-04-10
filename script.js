// Mobile navigation toggle
const navbar = document.getElementById('navbar');
const navLinks = document.querySelector('.nav-links');
const toggleButton = document.querySelector('.nav-toggle');

// Add toggle functionality
if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}

// Close mobile menu when a link is clicked
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(link => {
  link.addEventListener('click', () => {
    if (navLinks.classList.contains('show')) {
      navLinks.classList.remove('show');
    }
  });
});

// Optional: Smooth scroll for all anchor links (already handled by CSS, but ensures consistency)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId === "#" || targetId === "") return;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Simple console greeting (just for fun)
console.log("Portfolio ready! 🚀 Built for FreeCodeCamp");