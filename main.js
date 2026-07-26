import './src/style.css';

document.addEventListener('DOMContentLoaded', () => {
  const revealElements = document.querySelectorAll('.scroll-reveal');

  if (revealElements.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    revealElements.forEach((el) => observer.observe(el));
  }

  const hamburger = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = mobileMenu?.querySelectorAll('a');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger-open');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open')
        ? 'hidden'
        : '';
    });

    mobileLinks?.forEach((link) => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('hamburger-open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  const header = document.getElementById('header');
  if (header) {
    const sentinel = document.getElementById('header-sentinel');
    if (sentinel) {
      const headerObserver = new IntersectionObserver(
        ([e]) => {
          header.classList.toggle('header-scrolled', !e.isIntersecting);
        },
        { threshold: [0], rootMargin: '-1px 0px 0px 0px' }
      );
      headerObserver.observe(sentinel);
    }
  }
});
