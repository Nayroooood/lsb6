document.querySelectorAll('header nav a, .logo-link').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.slice(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    }
  });
});

const toggle = document.getElementById('mode-toggle');

toggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});

const scrollTopBtn = document.getElementById('scroll-top');

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
