// Sample product data
const products = [
  {
    id: 1,
    name: "Monstera Deliciosa",
    category: "indoor",
    price: 45.99,
    originalPrice: 65.99,
    rating: 4.8,
    reviews: 156,
    description: "Beautiful Swiss cheese plant with split leaves",
    image: "🌿",
    badge: "-30%",
  },
  {
    id: 2,
    name: "Fiddle Leaf Fig",
    category: "indoor",
    price: 55.99,
    originalPrice: 79.99,
    rating: 4.6,
    reviews: 203,
    description: "Large indoor plant with gorgeous leaves",
    image: "🌱",
    badge: "-30%",
  },
  {
    id: 3,
    name: "Snake Plant",
    category: "indoor",
    price: 25.99,
    originalPrice: 35.99,
    rating: 4.9,
    reviews: 342,
    description: "Low maintenance air-purifying plant",
    image: "🍃",
    badge: "-28%",
  },
  {
    id: 4,
    name: "Pothos",
    category: "indoor",
    price: 22.99,
    originalPrice: 34.99,
    rating: 4.7,
    reviews: 278,
    description: "Trailing plant perfect for shelves",
    image: "🌿",
    badge: "-34%",
  },
  {
    id: 5,
    name: "Rubber Plant",
    category: "indoor",
    price: 48.99,
    originalPrice: 69.99,
    rating: 4.5,
    reviews: 189,
    description: "Bold statement plant with stunning leaves",
    image: "🌱",
    badge: "-30%",
  },
  {
    id: 6,
    name: "Peace Lily",
    category: "indoor",
    price: 32.99,
    originalPrice: 49.99,
    rating: 4.8,
    reviews: 267,
    description: "Elegant plant with white flowers",
    image: "🌸",
    badge: "-34%",
  },
  {
    id: 7,
    name: "Sunflowers",
    category: "flowers",
    price: 35.99,
    originalPrice: 55.99,
    rating: 4.9,
    reviews: 421,
    description: "Bright and cheerful flower arrangement",
    image: "🌻",
    badge: "-36%",
  },
  {
    id: 8,
    name: "Succulent Mix",
    category: "succulents",
    price: 29.99,
    originalPrice: 49.99,
    rating: 4.7,
    reviews: 312,
    description: "Collection of beautiful succulents",
    image: "🌵",
    badge: "-40%",
  },
  {
    id: 9,
    name: "Orchid",
    category: "flowers",
    price: 65.99,
    originalPrice: 89.99,
    rating: 4.6,
    reviews: 134,
    description: "Exotic orchid plant with stunning blooms",
    image: "🌸",
    badge: "-27%",
  },
  {
    id: 10,
    name: "Bamboo Palm",
    category: "outdoor",
    price: 72.99,
    originalPrice: 109.99,
    rating: 4.4,
    reviews: 98,
    description: "Tropical outdoor plant",
    image: "🌴",
    badge: "-34%",
  },
  {
    id: 11,
    name: "Lavender",
    category: "flowers",
    price: 18.99,
    originalPrice: 29.99,
    rating: 4.8,
    reviews: 567,
    description: "Fragrant purple flowers",
    image: "💜",
    badge: "-37%",
  },
  {
    id: 12,
    name: "Boston Fern",
    category: "indoor",
    price: 38.99,
    originalPrice: 59.99,
    rating: 4.5,
    reviews: 201,
    description: "Lush green fern plant",
    image: "🌿",
    badge: "-35%",
  },
];

// Shopping cart
let cart = [];

// DOM Elements
const productsGrid = document.getElementById("productsGrid");
const cartIcon = document.querySelector(".cart-icon");
const cartModal = document.getElementById("cartModal");
const closeBtn = document.querySelector(".close");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const priceFilter = document.getElementById("priceFilter");
const minPrice = document.getElementById("minPrice");
const maxPrice = document.getElementById("maxPrice");

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  renderProducts(products);
  setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
  cartIcon.addEventListener("click", openCart);
  closeBtn.addEventListener("click", closeCart);
  window.addEventListener("click", (e) => {
    if (e.target === cartModal) closeCart();
  });

  // Filters
  searchInput.addEventListener("input", filterAndSearch);
  categoryFilter.addEventListener("change", filterAndSearch);
  priceFilter.addEventListener("change", filterAndSearch);
  minPrice.addEventListener("input", filterAndSearch);
  maxPrice.addEventListener("input", filterAndSearch);
}

// Render products
function renderProducts(productsToRender) {
  productsGrid.innerHTML = "";

  productsToRender.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";

    const stars =
      "⭐".repeat(Math.floor(product.rating)) +
      (product.rating % 1 !== 0 ? "✨" : "");

    card.innerHTML = `
            <div class="product-image">
                ${product.image}
                <span class="product-badge">${product.badge}</span>
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                
                <div class="rating">
                    <span class="stars">${stars}</span>
                    <span class="rating-count">${product.rating} (${product.reviews})</span>
                </div>

                <div class="product-price">
                    <div>
                        <span class="price">$${product.price.toFixed(2)}</span>
                        <span class="original-price">$${product.originalPrice.toFixed(2)}</span>
                    </div>
                </div>

                <div class="quantity-selector">
                    <button class="quantity-btn" onclick="changeQuantity(event, -1)">-</button>
                    <input type="number" class="quantity-input quantity-${product.id}" value="1" min="1" max="100">
                    <button class="quantity-btn" onclick="changeQuantity(event, 1)">+</button>
                </div>

                <button class="btn btn-primary btn-small btn-add-to-cart" onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        `;

    productsGrid.appendChild(card);
  });
}

// Change quantity
function changeQuantity(event, change) {
  const input = event.target.parentElement.querySelector(
    'input[type="number"]',
  );
  let value = parseInt(input.value) || 1;
  value = Math.max(1, value + change);
  input.value = value;
}

// Add to cart
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  const quantityInput = document.querySelector(`.quantity-${productId}`);
  const quantity = parseInt(quantityInput.value) || 1;

  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      ...product,
      quantity: quantity,
    });
  }

  updateCartCount();
  quantityInput.value = 1;
  showNotification(`Added ${quantity} ${product.name} to cart!`);
}

// Remove from cart
function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  updateCartCount();
  renderCart();
}

// Update cart count
function updateCartCount() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById("cartCount").textContent = totalItems;
}

// Open cart
function openCart() {
  cartModal.style.display = "block";
  renderCart();
}

// Close cart
function closeCart() {
  cartModal.style.display = "none";
}

// Render cart
function renderCart() {
  const cartItems = document.getElementById("cartItems");
  const totalPrice = document.getElementById("totalPrice");

  if (cart.length === 0) {
    cartItems.innerHTML =
      '<p style="text-align: center; color: #999;">Your cart is empty</p>';
    totalPrice.textContent = "0";
    return;
  }

  cartItems.innerHTML = cart
    .map(
      (item) => `
        <div class="cart-item">
            <div>
                <strong>${item.name}</strong> <br>
                <small>Qty: ${item.quantity} × $${item.price.toFixed(2)}</small>
            </div>
            <div style="text-align: right;">
                <strong>$${(item.price * item.quantity).toFixed(2)}</strong> <br>
                <button class="btn btn-secondary btn-small" onclick="removeFromCart(${item.id})" style="margin-top: 5px;">Remove</button>
            </div>
        </div>
    `,
    )
    .join("");

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  totalPrice.textContent = total.toFixed(2);
}

// Filter and search
function filterAndSearch() {
  const searchTerm = searchInput.value.toLowerCase();
  const category = categoryFilter.value;
  const priceRangeValue = priceFilter.value;
  const min = minPrice.value ? parseInt(minPrice.value) : 0;
  const max = maxPrice.value ? parseInt(maxPrice.value) : Infinity;

  let filtered = products.filter((product) => {
    // Search filter
    const matchesSearch =
      !searchTerm ||
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm);

    // Category filter
    const matchesCategory = !category || product.category === category;

    // Price filter
    let matchesPrice = true;
    if (priceRangeValue) {
      const ranges = {
        "0-50": (p) => p.price >= 0 && p.price <= 50,
        "50-100": (p) => p.price >= 50 && p.price <= 100,
        "100-200": (p) => p.price >= 100 && p.price <= 200,
        "200+": (p) => p.price >= 200,
      };
      matchesPrice = ranges[priceRangeValue]?.(product) || true;
    }

    // Custom price range
    matchesPrice = matchesPrice && product.price >= min && product.price <= max;

    return matchesSearch && matchesCategory && matchesPrice;
  });

  renderProducts(filtered);
}

// Notification
function showNotification(message) {
  const notification = document.createElement("div");
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #27ae60;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        font-weight: 600;
        z-index: 999;
        animation: slideIn 0.3s ease;
    `;
  notification.textContent = message;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = "slideOut 0.3s ease";
    setTimeout(() => notification.remove(), 300);
  }, 2000);
}

// Add animation styles
const style = document.createElement("style");
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
