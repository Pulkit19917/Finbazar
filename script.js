const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

// Toggle navigation with slide animation
menuBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
  
  if (nav.classList.contains('active')) {
    nav.style.maxHeight = nav.scrollHeight + "px";
  } else {
    nav.style.maxHeight = "0px";
  }
});

// Smooth scrolling and close menu after clicking
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');

    // Smooth scroll only for same-page links
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Close menu on mobile with animation
    if (window.innerWidth <= 768) {
      nav.classList.remove('active');
      nav.style.maxHeight = "0px";
    }
  });
});
