
// Checkout page JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // DOM Elements
  const emptyCartMessage = document.getElementById('emptyCartMessage');
  const checkoutContent = document.getElementById('checkoutContent');
  const orderConfirmation = document.getElementById('orderConfirmation');
  
  const step1 = document.getElementById('step1');
  const step2 = document.getElementById('step2');
  const step3 = document.getElementById('step3');
  
  const informationStep = document.getElementById('informationStep');
  const shippingStep = document.getElementById('shippingStep');
  const paymentStep = document.getElementById('paymentStep');
  
  const informationForm = document.getElementById('informationForm');
  const shippingForm = document.getElementById('shippingForm');
  const paymentForm = document.getElementById('paymentForm');
  
  const backToInformation = document.getElementById('backToInformation');
  const backToShipping = document.getElementById('backToShipping');
  
  const summaryItems = document.getElementById('summaryItems');
  const subtotalAmount = document.getElementById('subtotalAmount');
  const shippingAmount = document.getElementById('shippingAmount');
  const totalAmount = document.getElementById('totalAmount');
  
  const orderReference = document.getElementById('orderReference');
  
  // Get cart from localStorage
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  // If cart is empty, show empty cart message
  if (cart.length === 0) {
    emptyCartMessage.style.display = 'block';
    checkoutContent.style.display = 'none';
    orderConfirmation.style.display = 'none';
    return;
  }
  
  // Initialize checkout
  emptyCartMessage.style.display = 'none';
  checkoutContent.style.display = 'block';
  orderConfirmation.style.display = 'none';
  
  // Set active step
  let currentStep = 'information';
  updateStepUI();
  
  // Back to information step
  backToInformation.addEventListener('click', () => {
    currentStep = 'information';
    updateStepUI();
  });
  
  // Back to shipping step
  backToShipping.addEventListener('click', () => {
    currentStep = 'shipping';
    updateStepUI();
  });
  
  // Information form submission
  informationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    currentStep = 'shipping';
    updateStepUI();
  });
  
  // Shipping form submission
  shippingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    currentStep = 'payment';
    updateStepUI();
    
    // Update shipping cost based on selected option
    const shippingMethod = document.querySelector('input[name="shipping"]:checked').value;
    updateOrderSummary(shippingMethod);
  });
  
  // Payment form submission
  paymentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Show order confirmation
    checkoutContent.style.display = 'none';
    orderConfirmation.style.display = 'block';
    
    // Generate random order reference
    const orderNumber = Math.floor(100000 + Math.random() * 900000);
    orderReference.textContent = `#EZ${orderNumber}`;
    
    // Clear cart
    localStorage.removeItem('cart');
  });
  
  // Update step UI
  function updateStepUI() {
    // Update step indicators
    step1.classList.toggle('active', currentStep === 'information');
    step2.classList.toggle('active', currentStep === 'shipping');
    step3.classList.toggle('active', currentStep === 'payment');
    
    // Show active step content
    informationStep.classList.toggle('active', currentStep === 'information');
    shippingStep.classList.toggle('active', currentStep === 'shipping');
    paymentStep.classList.toggle('active', currentStep === 'payment');
  }
  
  // Update order summary
  function updateOrderSummary(shippingMethod = 'standard') {
    // Calculate shipping cost
    let shippingCost = 0;
    if (shippingMethod === 'standard') {
      shippingCost = 5;
    } else if (shippingMethod === 'express') {
      shippingCost = 15;
    }
    
    // Calculate subtotal
    const subtotal = cart.reduce((sum, item) => {
      const product = getProductById(item.productId);
      return sum + (product.price * item.quantity);
    }, 0);
    
    // Calculate total
    const total = subtotal + shippingCost;
    
    // Update UI
    subtotalAmount.textContent = `$${subtotal.toFixed(2)}`;
    shippingAmount.textContent = shippingMethod === 'pickup' ? 'Free' : `$${shippingCost.toFixed(2)}`;
    totalAmount.textContent = `$${total.toFixed(2)}`;
  }
  
  // Radio button event listeners for shipping options
  document.querySelectorAll('input[name="shipping"]').forEach(radio => {
    radio.addEventListener('change', () => {
      updateOrderSummary(radio.value);
    });
  });
  
  // Load order summary items
  function loadOrderSummaryItems() {
    summaryItems.innerHTML = '';
    
    cart.forEach(item => {
      const product = getProductById(item.productId);
      const summaryItem = document.createElement('div');
      summaryItem.className = 'summary-item';
      summaryItem.innerHTML = `
        <div class="summary-item-image">
          <img src="${product.image}" alt="${product.name}">
          <span class="item-quantity">${item.quantity}</span>
        </div>
        <div class="summary-item-content">
          <h4 class="summary-item-title">${product.name}</h4>
          <div class="summary-item-category">${product.category}</div>
          <div class="summary-item-price">$${(product.price * item.quantity).toFixed(2)}</div>
        </div>
      `;
      summaryItems.appendChild(summaryItem);
    });
  }
  
  // Initialize the page
  loadOrderSummaryItems();
  updateOrderSummary();
});
