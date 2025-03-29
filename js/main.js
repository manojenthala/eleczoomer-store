
// Main JavaScript file for common functionality

// DOM Elements
const menuToggle = document.getElementById('menuToggle');
const closeMenu = document.getElementById('closeMenu');
const mobileMenu = document.getElementById('mobileMenu');
const cartToggle = document.getElementById('cartToggle');
const closeCart = document.getElementById('closeCart');
const cartSidebar = document.getElementById('cartSidebar');
const overlay = document.getElementById('overlay');
const cartItems = document.getElementById('cartItems');
const cartEmpty = document.getElementById('cartEmpty');
const cartFooter = document.getElementById('cartFooter');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');

// Initialize cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Cart Functions
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartUI() {
  // Update cart count
  cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
  
  // Update cart items
  if (cart.length === 0) {
    cartEmpty.style.display = 'flex';
    cartItems.style.display = 'none';
    cartFooter.style.display = 'none';
  } else {
    cartEmpty.style.display = 'none';
    cartItems.style.display = 'block';
    cartFooter.style.display = 'block';
    
    // Render cart items
    cartItems.innerHTML = '';
    cart.forEach(item => {
      const product = getProductById(item.productId);
      const cartItem = document.createElement('div');
      cartItem.className = 'cart-item';
      cartItem.innerHTML = `
        <div class="cart-item-image">
          <img src="${product.image}" alt="${product.name}">
          <span class="item-quantity">${item.quantity}</span>
        </div>
        <div class="cart-item-content">
          <div class="cart-item-header">
            <h3 class="cart-item-title">${product.name}</h3>
            <button class="cart-item-remove" data-id="${product.id}">
              <i class="fas fa-times"></i>
            </button>
          </div>
          <div class="cart-item-category">${product.category}</div>
          <div class="cart-item-controls">
            <div class="quantity-control">
              <button class="quantity-btn decrease" data-id="${product.id}">-</button>
              <span class="quantity-value">${item.quantity}</span>
              <button class="quantity-btn increase" data-id="${product.id}">+</button>
            </div>
            <div class="cart-item-total">$${(product.price * item.quantity).toFixed(2)}</div>
          </div>
        </div>
      `;
      cartItems.appendChild(cartItem);
    });
    
    // Add event listeners to cart item buttons
    document.querySelectorAll('.cart-item-remove').forEach(button => {
      button.addEventListener('click', function() {
        removeFromCart(parseInt(this.getAttribute('data-id')));
      });
    });
    
    document.querySelectorAll('.quantity-btn.decrease').forEach(button => {
      button.addEventListener('click', function() {
        updateQuantity(parseInt(this.getAttribute('data-id')), -1);
      });
    });
    
    document.querySelectorAll('.quantity-btn.increase').forEach(button => {
      button.addEventListener('click', function() {
        updateQuantity(parseInt(this.getAttribute('data-id')), 1);
      });
    });
    
    // Update cart total
    const total = cart.reduce((sum, item) => {
      const product = getProductById(item.productId);
      return sum + (product.price * item.quantity);
    }, 0);
    
    cartTotal.textContent = `$${total.toFixed(2)}`;
  }
}

function addToCart(productId, quantity = 1) {
  const product = getProductById(productId);
  
  if (!product) {
    showToast('Product not found');
    return;
  }
  
  if (!product.inStock) {
    showToast('Product is out of stock');
    return;
  }
  
  const existingItem = cart.find(item => item.productId === productId);
  
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      productId,
      quantity
    });
  }
  
  saveCart();
  updateCartUI();
  showToast(`${product.name} added to cart`);
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.productId !== productId);
  saveCart();
  updateCartUI();
  showToast('Item removed from cart');
}

function updateQuantity(productId, change) {
  const item = cart.find(item => item.productId === productId);
  
  if (!item) return;
  
  item.quantity += change;
  
  if (item.quantity < 1) {
    removeFromCart(productId);
  } else {
    saveCart();
    updateCartUI();
  }
}

function clearCart() {
  cart = [];
  saveCart();
  updateCartUI();
  showToast('Cart cleared');
}

// Toast Notification Function
function showToast(message) {
  toastMessage.textContent = message;
  toast.classList.add('active');
  
  setTimeout(() => {
    toast.classList.remove('active');
  }, 3000);
}

// Event Listeners
menuToggle.addEventListener('click', () => {
  mobileMenu.classList.add('active');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
});

cartToggle.addEventListener('click', () => {
  cartSidebar.classList.add('active');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
});

closeCart.addEventListener('click', () => {
  cartSidebar.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
});

overlay.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  cartSidebar.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
  
  // If on products page, also close filter sidebar on mobile
  const filterSidebar = document.getElementById('filterSidebar');
  if (filterSidebar) {
    filterSidebar.classList.remove('active');
  }
});

// Initialize the cart UI when the page loads
window.addEventListener('DOMContentLoaded', () => {
  updateCartUI();
  
  // If on homepage, load featured products and categories
  const featuredProductsElement = document.getElementById('featuredProducts');
  if (featuredProductsElement) {
    loadFeaturedProducts();
  }
  
  const categoriesGrid = document.getElementById('categoriesGrid');
  if (categoriesGrid) {
    loadCategories();
  }
});

// Load Featured Products on Homepage
function loadFeaturedProducts() {
  const featuredProductsElement = document.getElementById('featuredProducts');
  const featuredProducts = getFeaturedProducts();
  
  featuredProducts.forEach(product => {
    const productCard = createProductCard(product);
    featuredProductsElement.appendChild(productCard);
  });
}

// Load Categories on Homepage
function loadCategories() {
  const categoriesGrid = document.getElementById('categoriesGrid');
  
  categories.forEach(category => {
    const categoryCard = document.createElement('div');
    categoryCard.className = 'category-card';
    categoryCard.innerHTML = `
      <div class="category-image">
        <img src="${category.image}" alt="${category.name}">
      </div>
      <div class="category-overlay"></div>
      <div class="category-content">
        <h3 class="category-name">${category.name}</h3>
        <span class="category-count">${category.count} Products</span>
      </div>
    `;
    
    categoryCard.addEventListener('click', () => {
      window.location.href = `products.html?category=${category.name}`;
    });
    
    categoriesGrid.appendChild(categoryCard);
  });
}

// Create Product Card
function createProductCard(product) {
  const productCard = document.createElement('div');
  productCard.className = 'product-card';
  
  productCard.innerHTML = `
    <div class="product-image">
      <img src="${product.image}" alt="${product.name}">
      <div class="product-badges">
        ${product.isNew ? '<span class="badge badge-new">New</span>' : ''}
        ${product.isSale ? '<span class="badge badge-sale">Sale</span>' : ''}
      </div>
    </div>
    <div class="product-content">
      <div class="product-rating">
        <div class="stars">
          ${createStarRating(product.rating)}
        </div>
        <span class="review-count">(${product.reviewCount})</span>
      </div>
      <h3 class="product-title">
        <a href="product-detail.html?id=${product.id}">${product.name}</a>
      </h3>
      <div class="product-category">${product.category}</div>
      <div class="product-price">
        <span class="current-price">$${product.price.toFixed(2)}</span>
        ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
      </div>
      <div class="product-action">
        <button class="btn btn-primary add-to-cart" data-id="${product.id}">
          <i class="fas fa-shopping-cart"></i> Add to Cart
        </button>
      </div>
    </div>
  `;
  
  // Add event listener to the Add to Cart button
  productCard.querySelector('.add-to-cart').addEventListener('click', (e) => {
    e.preventDefault();
    const productId = parseInt(e.target.getAttribute('data-id'));
    addToCart(productId);
  });
  
  return productCard;
}

// Create star rating HTML
function createStarRating(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  
  let starsHTML = '';
  
  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    starsHTML += '<i class="fas fa-star"></i>';
  }
  
  // Add half star if needed
  if (halfStar) {
    starsHTML += '<i class="fas fa-star-half-alt"></i>';
  }
  
  // Add empty stars
  for (let i = 0; i < emptyStars; i++) {
    starsHTML += '<i class="far fa-star"></i>';
  }
  
  return starsHTML;
}
