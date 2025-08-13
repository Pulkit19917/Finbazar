const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

// Toggle navigation on hamburger click
menuBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Smooth scrolling and close menu after clicking
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');

    // Only prevent default if it's an in-page link
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Close menu on mobile
    if (window.innerWidth <= 768) {
      nav.classList.remove('active');
    }
  });
});
