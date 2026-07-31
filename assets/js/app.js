/* ========================================
   FLEXTECH TEMPLATE - App JavaScript
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
  // --- Animation au défilement ---
  const fadeElements = document.querySelectorAll('.fade-in');

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeElements.forEach(el => observer.observe(el));

  // --- Menu mobile ---
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('#nav-menu');
  const navLinks = document.querySelectorAll('#nav-menu a');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', (!isExpanded).toString());
      navMenu.classList.toggle('nav-open');
      document.body.classList.toggle('nav-mobile-open');
    });

    // Fermer le menu quand on clique sur un lien
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('nav-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('nav-mobile-open');
      });
    });
  }

  // --- Smooth scroll pour les ancres ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // --- Formulaire de contact ---
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Message envoyé ! Nous vous répondrons dans les plus brefs délais.');
      contactForm.reset();
    });
  }

  console.log('FlexTech Template chargé avec succès !');
});
