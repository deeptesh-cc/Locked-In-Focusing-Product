
// Function to handle add-to-cart clicks
  function addToCart(event) {
    const productElement = event.target.closest(".product-item") || event.target.closest(".product-item-dtl");
    const id = productElement.dataset.id;
    const name = productElement.dataset.name;
    const price = parseFloat(productElement.dataset.price);
    const image = productElement.dataset.image;
    const quantity = productElement.dataset.quantity;

  
    //console.log(id);
    // Check if item is already in cart
    const existingItemIndex = cart.findIndex((item) => {
      if(item.id === id){
        alert('Product is already in Cart')
      }
      return item.id === id;
      // console.log(id, item.id)
      //return false;
    });
    let currentValue = (quantity)?Number(quantity):Number(document.getElementById("prod-qty-chng")?.value);
  
    if (existingItemIndex === -1) {
      // Add item to cart
      cart.push({ id, name, price, image, quantity: currentValue });

      const wishCount = document.getElementById('wish-count');

      let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

      let shortListedItems = wishlist.find((item) => item.id==id);

      let index = wishlist.indexOf(shortListedItems);
      
      wishlist.splice(index, 1);
      localStorage.setItem("wishlist",JSON.stringify(wishlist));

      alert('Product Added in Cart')

      displayWishlist();

      if (wishCount) {
        wishCount.textContent = wishlist.length;
      }

    } else {
      // Item already in cart; optionally, handle quantity update here
      cart[existingItemIndex].quantity += 1;
    }
    saveCart();
    updateCart();
  }
  

    // Add to cart event listeners
  document.getElementById("product-list")?.addEventListener("click", function (event) {
      if (event.target.closest(".add-to-cart")) {
        addToCart(event);
      } 
    });

  document.getElementById("product-list2")?.addEventListener("click", function (event) {
      if (event.target.closest(".add-to-cart")) {
        addToCart(event);
      } 
    });

    document.getElementById("product-list3")?.addEventListener("click", function (event) {
      if (event.target.closest(".add-to-cart")) {
        addToCart(event);
      } 
    });

    document.getElementById("wishlist-container")?.addEventListener("click", function (event) {
      if (event.target.closest(".add-to-cart")) {
        addToCart(event);
      } 
    });
    
  document.getElementById("prod-dtl-container")?.addEventListener("click", function (event) {
      if (event.target.closest(".add-to-cart")) {
        addToCart(event);
      }  else if (
        event.target.classList.contains("quantity-increase") ||
        event.target.classList.contains("quantity-decrease")
      ) {
        handleQuantityChange(event);
      }
    });