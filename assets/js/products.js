/* ========================================
   FLEXTECH TEMPLATE - Produits JavaScript
   ======================================== */

// Données produits (exemple)
const products = [
  {
    id: 1,
    name: "HP EliteBook 840 G8",
    specs: "Core i5 • 16Go • SSD 512Go",
    price: 299000,
    rating: 5,
    image: "assets/images/hp-elitebook.jpg",
    category: "PC Portables"
  },
  {
    id: 2,
    name: "Dell Latitude 5420",
    specs: "Core i7 • 16Go • SSD 256Go",
    price: 349000,
    rating: 4,
    image: "assets/images/dell-latitude.jpg",
    category: "PC Portables"
  },
  {
    id: 3,
    name: "Lenovo ThinkPad X1",
    specs: "Core i7 • 32Go • SSD 1To",
    price: 499000,
    rating: 5,
    image: "assets/images/lenovo-x1.jpg",
    category: "PC Portables"
  },
  {
    id: 4,
    name: "PC Gamer RTX 3060",
    specs: "Ryzen 5 • 16Go • RTX 3060",
    price: 599000,
    rating: 5,
    image: "assets/images/pc-gamer.jpg",
    category: "PC Gamer"
  }
];

// Fonction pour afficher les produits
function displayProducts(productsArray, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = productsArray.map(product => `
    <div class="product-card fade-in">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-specs">${product.specs}</p>
        <p class="product-price">${product.price.toLocaleString('fr-FR')} FCFA</p>
        <div class="product-rating">${'★'.repeat(product.rating)}${'☆'.repeat(5 - product.rating)}</div>
        <a href="https://wa.me/221770000000?text=Je suis intéressé par ${product.name}" 
           class="btn-whatsapp" target="_blank">
          📱 Commander sur WhatsApp
        </a>
      </div>
    </div>
  `).join('');
  
  // Réinitialiser les animations pour les nouveaux éléments
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  
  container.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// Charger les produits au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
  // Produits populaires (4 premiers)
  displayProducts(products.slice(0, 4), 'popular-products');
  
  // Promotions (tu peux créer un tableau séparé)
  displayProducts(products.slice(0, 2), 'promo-products');
});
