/* ========================================
   FLEXTECH TEMPLATE - App JavaScript
   ======================================== */

// Animation au défilement
document.addEventListener('DOMContentLoaded', () => {
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
  
  // Smooth scroll pour les ancres
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Gestion du panier (exemple basique)
  const cartCount = document.querySelector('.cart-count');
  let count = 0;
  
  // Tu pourras ajouter des fonctions pour incrémenter le panier
  console.log('FlexTech Template chargé avec succès !');
});

// Formulaire de contact
document.querySelector('.contact-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Message envoyé ! Nous vous répondrons dans les plus brefs délais.');
  e.target.reset();
});
