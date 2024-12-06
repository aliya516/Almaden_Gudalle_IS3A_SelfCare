document.querySelectorAll('.dropdown-content a').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
  
      const category = link.getAttribute('data-category');
      const products = document.querySelectorAll('.product-card');
  
      // Reset all product visibility
      products.forEach(product => product.classList.remove('active'));
  
      // Show products matching the category
      products.forEach(product => {
        if (!category || product.dataset.category === category) {
          product.classList.add('active');
        }
      });
    });
  });
  