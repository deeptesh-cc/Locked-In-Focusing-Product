
let minPrice = 10;
let maxPrice = 50;

  function filterProductsBySearchAndCategory() {

  const keyword = document.querySelector('.search-form input[type="search"]').value.trim().toLowerCase();

  const checkedCategories = Array.from(document.querySelectorAll('.prod-filt-input:checked'))
    .map(input => input.value);

  const allProducts = document.querySelectorAll('#product-list3 .product-block');
//debugger;
  const message = document.querySelector('#product-list3 .notFound')
  allProducts.forEach(product => {
    const productName = product.dataset.name.toLowerCase();
    const productCategories = product.dataset.category.split(" ");
    const price = parseFloat(product.dataset.price);

    // Search filter match
    const matchesSearch = productName.includes(keyword);

    // Category filter match
    const matchesCategory =
      checkedCategories.length === 0 || // if nothing selected, match all
      checkedCategories.some(val => productCategories.includes(val));

    const matchesPrice = price >= minPrice && price <= maxPrice;

    // Final condition: must match ALL
    if (matchesPrice && matchesSearch && matchesCategory) {
      product.style.display = 'block';
    } 
    else{
      product.style.display = 'none';
    } 

    if(!matchesSearch || !matchesPrice){
       message.textContent = "Sorry! Product Not Found"
    } 
    else{
      message.textContent = ""
    }

  });

}

// Search input listener
document.querySelector('.search-form input[type="search"]')?.addEventListener('input', filterProductsBySearchAndCategory);

// Checkbox listeners
document.querySelectorAll('.prod-filt-input').forEach(input => {
  input.addEventListener('change', filterProductsBySearchAndCategory);
});