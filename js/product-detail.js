
// Product detail page JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // DOM Elements
  const productDetail = document.getElementById('productDetail');
  const productNotFound = document.getElementById('productNotFound');
  const mainImage = document.getElementById('mainImage');
  const imageThumbnails = document.getElementById('imageThumbnails');
  const productName = document.getElementById('productName');
  const detailProductName = document.getElementById('detailProductName');
  const categoryBreadcrumb = document.getElementById('categoryBreadcrumb');
  const productRating = document.getElementById('productRating');
  const productStars = document.getElementById('productStars');
  const reviewCount = document.getElementById('reviewCount');
  const productPrice = document.getElementById('productPrice');
  const originalPrice = document.getElementById('originalPrice');
  const discountTag = document.getElementById('discountTag');
  const productDescription = document.getElementById('productDescription');
  const stockStatus = document.getElementById('stockStatus');
  const productCategory = document.getElementById('productCategory');
  const decreaseQuantity = document.getElementById('decreaseQuantity');
  const increaseQuantity = document.getElementById('increaseQuantity');
  const quantityValue = document.getElementById('quantityValue');
  const addToCartBtn = document.getElementById('addToCartBtn');
  const featuresList = document.getElementById('featuresList');
  const specificationsGrid = document.getElementById('specificationsGrid');
  const summaryStars = document.getElementById('summaryStars');
  const summaryRating = document.getElementById('summaryRating');
  const summaryReviewCount = document.getElementById('summaryReviewCount');
  const relatedProducts = document.getElementById('relatedProducts');

  // Get product ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get('id'));
  
  // Quantity value
  let quantity = 1;
  
  // Tab functionality
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons and contents
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      
      // Add active class to clicked button
      btn.classList.add('active');
      
      // Show corresponding content
      const tabId = btn.getAttribute('data-tab');
      document.getElementById(`${tabId}Tab`).classList.add('active');
    });
  });
  
  // If no product ID or product not found
  if (!productId) {
    productDetail.style.display = 'none';
    productNotFound.style.display = 'block';
    return;
  }
  
  // Get product data
  const product = getProductById(productId);
  
  if (!product) {
    productDetail.style.display = 'none';
    productNotFound.style.display = 'block';
    return;
  }
  
  // Display product details
  document.title = `${product.name} - ElecZoomer`;
  productName.textContent = product.name;
  detailProductName.textContent = product.name;
  categoryBreadcrumb.textContent = product.category;
  categoryBreadcrumb.href = `products.html?category=${product.category}`;
  productCategory.textContent = product.category;
  productCategory.href = `products.html?category=${product.category}`;
  
  // Load main image
  mainImage.src = product.images[0];
  mainImage.alt = product.name;
  
  // Load image thumbnails
  product.images.forEach((image, index) => {
    const thumbnail = document.createElement('div');
    thumbnail.className = `thumbnail ${index === 0 ? 'active' : ''}`;
    thumbnail.innerHTML = `<img src="${image}" alt="${product.name} ${index + 1}">`;
    
    thumbnail.addEventListener('click', () => {
      // Update main image
      mainImage.src = image;
      
      // Update active thumbnail
      document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
      thumbnail.classList.add('active');
    });
    
    imageThumbnails.appendChild(thumbnail);
  });
  
  // Set rating and reviews
  productRating.textContent = product.rating;
  reviewCount.textContent = product.reviewCount;
  productStars.innerHTML = createStarRating(product.rating);
  
  // Set price information
  productPrice.textContent = `$${product.price.toFixed(2)}`;
  
  if (product.originalPrice) {
    originalPrice.textContent = `$${product.originalPrice.toFixed(2)}`;
    originalPrice.style.display = 'inline';
    
    const discount = product.originalPrice - product.price;
    discountTag.textContent = `Save $${discount.toFixed(2)}`;
    discountTag.style.display = 'inline';
  } else {
    originalPrice.style.display = 'none';
    discountTag.style.display = 'none';
  }
  
  // Set description
  productDescription.textContent = product.description;
  
  // Set stock status
  if (product.inStock) {
    stockStatus.innerHTML = `<i class="fas fa-check"></i> In Stock`;
    stockStatus.classList.add('in-stock');
    addToCartBtn.disabled = false;
  } else {
    stockStatus.innerHTML = `<i class="fas fa-times"></i> Out of Stock`;
    stockStatus.classList.add('out-of-stock');
    addToCartBtn.disabled = true;
  }
  
  // Quantity controls
  decreaseQuantity.addEventListener('click', () => {
    if (quantity > 1) {
      quantity--;
      quantityValue.textContent = quantity;
    }
  });
  
  increaseQuantity.addEventListener('click', () => {
    quantity++;
    quantityValue.textContent = quantity;
  });
  
  // Add to cart button
  addToCartBtn.addEventListener('click', () => {
    addToCart(productId, quantity);
  });
  
  // Features list
  featuresList.innerHTML = '';
  product.features.forEach(feature => {
    const li = document.createElement('li');
    li.innerHTML = `<i class="fas fa-check"></i> ${feature}`;
    featuresList.appendChild(li);
  });
  
  // Specifications
  specificationsGrid.innerHTML = '';
  Object.entries(product.specs).forEach(([key, value]) => {
    const specItem = document.createElement('div');
    specItem.className = 'spec-item';
    specItem.innerHTML = `
      <div class="spec-key">${key}</div>
      <div class="spec-value">${value}</div>
    `;
    specificationsGrid.appendChild(specItem);
  });
  
  // Reviews summary
  summaryStars.innerHTML = createStarRating(product.rating);
  summaryRating.textContent = product.rating;
  summaryReviewCount.textContent = product.reviewCount;
  
  // Related products
  const related = getRelatedProducts(product);
  relatedProducts.innerHTML = '';
  
  if (related.length > 0) {
    related.forEach(relatedProduct => {
      const productCard = createProductCard(relatedProduct);
      relatedProducts.appendChild(productCard);
    });
  } else {
    // Hide related products section if none found
    document.querySelector('.related-products').style.display = 'none';
  }
});
