document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
<script>
window.addEventListener("scroll", function() {
  const header = document.querySelector(".shrinkable-header");
  if (window.scrollY > 50) {
    header.classList.add("header-shrink");
  } else {
    header.classList.remove("header-shrink");
  }
});
</script>
});