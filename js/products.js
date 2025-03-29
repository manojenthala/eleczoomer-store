
// Products page specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // DOM Elements
  const productsGrid = document.getElementById('productsGrid');
  const pageTitle = document.getElementById('pageTitle');
  const filterToggle = document.getElementById('filterToggle');
  const filterSidebar = document.getElementById('filterSidebar');
  const closeFilter = document.getElementById('closeFilter');
  const categoryFilters = document.querySelectorAll('input[name="category"]');
  const priceMinSlider = document.getElementById('priceMin');
  const priceMaxSlider = document.getElementById('priceMax');
  const minPriceDisplay = document.getElementById('minPrice');
  const maxPriceDisplay = document.getElementById('maxPrice');
  const clearFiltersBtn = document.getElementById('clearFilters');
  const resetFiltersBtn = document.getElementById('resetFilters');
  const searchInput = document.getElementById('searchInput');
  const activeFiltersContainer = document.getElementById('activeFilters');
  const productsCount = document.getElementById('productsCount');
  const noProductsElement = document.getElementById('noProducts');

  // Initial filter values
  let currentCategory = 'all';
  let minPrice = 0;
  let maxPrice = 2000;
  let searchTerm = '';

  // Get URL params
  const urlParams = new URLSearchParams(window.location.search);
  const categoryParam = urlParams.get('category');
  if (categoryParam) {
    currentCategory = categoryParam;
    document.getElementById(`category-${categoryParam.toLowerCase()}`)?.setAttribute('checked', true);
    pageTitle.textContent = categoryParam;
  }

  // Filter toggle on mobile
  filterToggle.addEventListener('click', () => {
    filterSidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  closeFilter.addEventListener('click', () => {
    filterSidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  });

  // Category filter change
  categoryFilters.forEach(filter => {
    filter.addEventListener('change', () => {
      currentCategory = filter.value;
      if (currentCategory === 'all') {
        pageTitle.textContent = 'All Products';
      } else {
        pageTitle.textContent = currentCategory;
      }
      applyFilters();
    });
  });

  // Price slider events
  priceMinSlider.addEventListener('input', (e) => {
    minPrice = parseInt(e.target.value);
    minPriceDisplay.textContent = minPrice;
    if (minPrice > maxPrice) {
      maxPrice = minPrice;
      priceMaxSlider.value = minPrice;
      maxPriceDisplay.textContent = maxPrice;
    }
    applyFilters();
  });

  priceMaxSlider.addEventListener('input', (e) => {
    maxPrice = parseInt(e.target.value);
    maxPriceDisplay.textContent = maxPrice;
    if (maxPrice < minPrice) {
      minPrice = maxPrice;
      priceMinSlider.value = maxPrice;
      minPriceDisplay.textContent = minPrice;
    }
    applyFilters();
  });

  // Search input
  searchInput.addEventListener('input', (e) => {
    searchTerm = e.target.value;
    applyFilters();
  });

  // Clear filters
  clearFiltersBtn.addEventListener('click', resetFilters);
  resetFiltersBtn.addEventListener('click', resetFilters);

  function resetFilters() {
    currentCategory = 'all';
    document.getElementById('all-categories').checked = true;
    minPrice = 0;
    maxPrice = 2000;
    priceMinSlider.value = minPrice;
    priceMaxSlider.value = maxPrice;
    minPriceDisplay.textContent = minPrice;
    maxPriceDisplay.textContent = maxPrice;
    searchTerm = '';
    searchInput.value = '';
    pageTitle.textContent = 'All Products';
    applyFilters();
  }

  // Apply filters and update product display
  function applyFilters() {
    // Get filtered products
    let filteredProducts = products;
    
    // Filter by category
    if (currentCategory !== 'all') {
      filteredProducts = filteredProducts.filter(product => product.category === currentCategory);
    }
    
    // Filter by price
    filteredProducts = filteredProducts.filter(product => 
      product.price >= minPrice && product.price <= maxPrice
    );
    
    // Filter by search term
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      filteredProducts = filteredProducts.filter(product => 
        product.name.toLowerCase().includes(term) || 
        product.description.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term)
      );
    }
    
    // Update active filters display
    updateActiveFilters();
    
    // Update products count
    productsCount.textContent = filteredProducts.length;
    
    // Show/hide no products message
    if (filteredProducts.length === 0) {
      productsGrid.style.display = 'none';
      noProductsElement.style.display = 'block';
    } else {
      productsGrid.style.display = 'grid';
      noProductsElement.style.display = 'none';
    }
    
    // Render products
    renderProducts(filteredProducts);
  }

  // Update active filters UI
  function updateActiveFilters() {
    activeFiltersContainer.innerHTML = '';
    
    // Add category filter tag if not 'all'
    if (currentCategory !== 'all') {
      const categoryTag = document.createElement('div');
      categoryTag.className = 'filter-tag';
      categoryTag.innerHTML = `
        ${currentCategory} <i class="fas fa-times" data-filter="category"></i>
      `;
      activeFiltersContainer.appendChild(categoryTag);
    }
    
    // Add price range filter tag if not default
    if (minPrice > 0 || maxPrice < 2000) {
      const priceTag = document.createElement('div');
      priceTag.className = 'filter-tag';
      priceTag.innerHTML = `
        Price: $${minPrice} - $${maxPrice} <i class="fas fa-times" data-filter="price"></i>
      `;
      activeFiltersContainer.appendChild(priceTag);
    }
    
    // Add search filter tag if search term exists
    if (searchTerm.trim() !== '') {
      const searchTag = document.createElement('div');
      searchTag.className = 'filter-tag';
      searchTag.innerHTML = `
        Search: ${searchTerm} <i class="fas fa-times" data-filter="search"></i>
      `;
      activeFiltersContainer.appendChild(searchTag);
    }
    
    // Add event listeners to remove filter tags
    document.querySelectorAll('.filter-tag i').forEach(icon => {
      icon.addEventListener('click', (e) => {
        const filterType = e.target.getAttribute('data-filter');
        
        if (filterType === 'category') {
          currentCategory = 'all';
          document.getElementById('all-categories').checked = true;
          pageTitle.textContent = 'All Products';
        } else if (filterType === 'price') {
          minPrice = 0;
          maxPrice = 2000;
          priceMinSlider.value = minPrice;
          priceMaxSlider.value = maxPrice;
          minPriceDisplay.textContent = minPrice;
          maxPriceDisplay.textContent = maxPrice;
        } else if (filterType === 'search') {
          searchTerm = '';
          searchInput.value = '';
        }
        
        applyFilters();
      });
    });
  }

  // Render products to the grid
  function renderProducts(products) {
    productsGrid.innerHTML = '';
    
    products.forEach(product => {
      const productCard = createProductCard(product);
      productsGrid.appendChild(productCard);
    });
  }

  // Initial load of products
  applyFilters();
});
