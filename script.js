document.addEventListener('DOMContentLoaded', () => {
    const productOptions = document.querySelectorAll('.product-option');
  
    productOptions.forEach(option => {
      option.addEventListener('mouseenter', () => {
        option.style.backgroundColor = '#f0f0f0';
      });
  
      option.addEventListener('mouseleave', () => {
        option.style.backgroundColor = 'transparent';
      });
    });
  });