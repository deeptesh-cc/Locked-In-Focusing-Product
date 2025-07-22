/*=======================================================================================================
Add To Cart Functionality
=======================================================================================================*/

// Retrieve cart from local storage
function loadCart() {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  }
  
  // Save cart to local storage
  function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
  }
  
  // Initialize cart array from local storage
  let cart = loadCart();
  
  // Function to update the cart display
  function updateCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    const cartItemsContainer2 = document.getElementById("cart-items-2");
    const checkoutContainer = document.getElementById("checkout-items");
    const cartTotal = document.getElementById("cart-total");
    const subTotal = document.getElementById("cart-sub-total");
    const cartTotal2 = document.getElementById("cart-total2");
    const cartTotalArea = document.getElementById("cart-total-area");
    const cartCount = document.getElementById("cart-count");

    $('.add-to-cart').html('<i class="fa-sharp fa-light fa-cart-shopping"></i>')

    // Retrieve the cart from localStorage (assuming it's stored as a JSON string)
    //const cart = JSON.parse(localStorage.getItem("cart")) || [];
    
  
    // Clear existing items
    if (cartItemsContainer){
      cartItemsContainer.innerHTML = "";
    }
  
    // Calculate total
    let total = 0;
    var tableHtml = "";
    var tableHtml2 = ""
  
    // Add each item in the cart to the display
    cart.forEach((item) => {

      console.log(item);
      const listItem = document.createElement("div");
      listItem.className = "cart-item";
      listItem.innerHTML = `
  
          <div class="cart-item py-3 ">
                            <div class="row">
                              <div class="col-6 col-md-5 col-xl-4">
                              <a href="product-details.html?id=${item.id}"><img class="img-fluid" src="${item.image}" alt="${item.name}"></a>
                            </div>
                            <div class="col-6 col-md-7 col-xl-8 align-self-center">
                              <div class="mx-0">
                                <h5 class="mb-2">
                                <a href="product-details.html?id=${item.id}">${item.name}</a></h5>
                                <small class="color1 border px-2 d-inline-block rounded-3 mb-2">In Stock</small>
                                <h6 class="mb-3"> $${item.price.toFixed(2)}</h6>
                                <div class="d-flex align-items-center justify-content-between">
                                <div>
                                <div class="quantity-controls d-flex align-items-center">
                                    <button class="quantity-decrease" data-id="${item.id}"><i class="fa-solid fa-minus"></i></button>
                                    <input type="number" value="${item.quantity || 0}" min="1" class="quantity-input form-control" data-id="${item.id}">
                                    <button class="quantity-increase" data-id="${item.id}"><i class="fa-solid fa-plus"></i></button>
                                </div>
                                </div>
                                <button class="remove-from-cart fal fa-trash" data-id="${item.id}"></button>
                                </div>
                              </div>
                            </div>
                            </div>
                            
                          </div>
  
                                `;
      if(cartItemsContainer){
        cartItemsContainer.appendChild(listItem);
      }
      
  
      total += item.price * item.quantity;

      if(cartItemsContainer2){

        tableHtml += `
                    <div class="cart_item">

        <div class="row align-items-center">
            <div class="col-sm-4">
                <div class="image-area text-center">
                    <a href="#"><img alt="${item.name}" src="${item.image}"></a>
                </div>
            </div>
            <div class="col-sm-8">
                <div class="cont-area">
                    <h5 class="product-name">${item.name}</h5>
                    <p><strong>Brand:</strong> <span>Lockedin Focusing Product</span></p>
                    <div class="rating">
                                                <img src="images/icons/star-rating.svg" width="87" class="d-inline-block">
                                                <span>(4.2)</span>
                                                </div>
                    <div class="product-quantity">
                    <div class="product-details__quantity">
                    <div class="quantity-box">
                                                <button class="quantity-decrease sub" data-id="${item.id}">-</button>
                                                <input type="number" value="${item.quantity}" min="1" class="quantity-input" data-id="${item.id}">
                                                <button class="quantity-increase add" data-id="${item.id}">+</button>
                    </div>
                    </div>
                    </div>
                    <div class="product-subtotal"><span class="amount">$${item.price.toFixed(2)}</span></div>

                    <button title="Remove this item" class="remove remove-from-cart" data-id="${item.id}">Remove</button>
                </div>
            </div>
        </div>
    
        </div>
        `
        
        // tableHtml += `
        // <tr class="cart_item">
        //   <td class="product-remove"><button title="Remove this item" class="remove remove-from-cart" data-id="${item.id}">×</button></td>
        //   <td class="product-thumbnail"><a href="#"><img alt="${item.name}" src="${item.image}"></a></td>
        //   <td class="product-name"><a href="#">${item.name}</a>
        //   <ul class="variation">
        //   <li class="variation-size">Availability: <span>In Stock</span></li>
        //   </ul>
        //   </td>
          
        //   <td class="product-quantity">
        //   <div class="product-details__quantity">
        //   <div class="quantity-box">
        //                             <button class="quantity-decrease sub" data-id="${item.id}">-</button>
        //                             <input type="number" value="${item.quantity}" min="1" class="quantity-input" data-id="${item.id}">
        //                             <button class="quantity-increase add" data-id="${item.id}">+</button>
        //   </div>
        //   </div>
        //   </td>
        //   <td class="product-subtotal"><span class="amount">$${item.price.toFixed(2)}</span></td>
        //   </tr>
        //   `
      }

      if (cartItemsContainer2){
        cartItemsContainer2.innerHTML = tableHtml
      }

      if(checkoutContainer){
        tableHtml2 += `
        <div class="d-flex align-items-center mb-2 justify-content-between">
            <div class="d-flex align-items-center">
            <div class="product-thumbnail"><img alt="product" src="${item.image}"></div>
            <div class="product-name">${item.name} <br/> <small class="py-1 px-2 border rounded-3">Quantity: ${item.quantity}</small></div>
            </div>
            <div><strong><span class="amount">$${item.price.toFixed(2)}</span></strong></div>
            
        </div>
          `
      }

      if (checkoutContainer){
        checkoutContainer.innerHTML = tableHtml2 
      }
  
       $(`[data-id=${item.id}] .add-to-cart`).html('<i class="fas fa-shopping-cart"></i>')
      
    });


  
    // Update total
    
    if (cartTotal) {
        cartTotal.textContent = total.toFixed(2);
    }

    // const shipping = document.getElementById("shipping-rate");
    // if(shipping){
    //   if (cart.length > 0) {
    //     shipping.textContent = 70;
    //   }else{
    //     shipping.textContent = 0;
    //   }
    // }
    if (cartTotal2) {
      cartTotal2.textContent = Number(total.toFixed(2)) ;
    }

    if (subTotal) {
      subTotal.textContent = total.toFixed(2) ;
    }
  
    // Update cart item count
    if (cartCount) {
      cartCount.textContent = cart.length;
    }
  
    const cartTblHead = document.getElementById("shopping-cart-head")
    const chkTblFoot = document.getElementById("check-cart-foot")
    
    // Add or remove 'active' class based on cart content
    if (cart.length > 0) {
      cartTotalArea?.classList.remove("d-none");
      cartTblHead?.classList.remove("d-none");
      chkTblFoot?.classList.remove("d-none");
    } 
    else{
      cartTotalArea?.classList.add("d-none");
      cartTblHead?.classList.add("d-none");
      chkTblFoot?.classList.add("d-none");

      if(cartItemsContainer ){
        cartItemsContainer.innerHTML = `
              <div class="empty-cart text-center">
                <img src="images/icons/empty-cart.png" alt="" class="mb-4" width="110">
                  <h4>Your cart is empty!</h4>
                  <p>It looks like you haven't added any items to your cart yet.</p>
                  <a href="shop-products.html" class="theme-btn btn-style-one"><span class="btn-title">Shop Now</span></a>
              </div>
          `;
      }

          if(cartItemsContainer2){
            cartItemsContainer2.innerHTML = `
              <div class="empty-cart text-center">
                <img src="images/icons/empty-cart.png" alt="" class="mb-4" width="110">
                  <h4 class="p-0 mb-0">Your cart is empty!</h4>
                  <p>It looks like you haven't added any items to your cart yet.</p>
                  <a href="shop-products.html" class="theme-btn btn-style-one mt-4"><span class="btn-title">Shop Now</span></a>
              </div>
          `;
          }

          if(checkoutContainer){
            checkoutContainer.innerHTML = `
              <div class="empty-cart text-center">
                <img src="images/icons/empty-cart.png" alt="" class="mb-4" width="110">
                  <h4 class="p-0 mb-0">No Items Added!</h4>
                  <p>It looks like you haven't added any items to your cart yet.</p>
                  
              </div>
          `;
          }
    }

  }

  function filterProductsBySearchAndCategory() {
  const keyword = document.querySelector('.search-form input[type="search"]').value.trim().toLowerCase();

  const checkedCategories = Array.from(document.querySelectorAll('.prod-filt-input:checked'))
    .map(input => input.value);

  const allProducts = document.querySelectorAll('#product-list3 .product-block');

  allProducts.forEach(product => {
    const productName = product.dataset.name.toLowerCase();
    const productCategories = product.dataset.category.split(" ");

    // Search filter match
    const matchesSearch = productName.includes(keyword);

    // Category filter match
    const matchesCategory =
      checkedCategories.length === 0 || // if nothing selected, match all
      checkedCategories.some(val => productCategories.includes(val));

    // Final condition: must match BOTH
    if (matchesSearch && matchesCategory) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}

// Search input listener
document.querySelector('.search-form input[type="search"]')?.addEventListener('input', filterProductsBySearchAndCategory);

// Checkbox listeners
document.querySelectorAll('.prod-filt-input').forEach(input => {
  input.addEventListener('change', filterProductsBySearchAndCategory);
});

// Function to handle product search
// const searchInput = document.querySelector('.search-form input[type="search"]');

// searchInput?.addEventListener('input', function () {
//   const keyword = this.value.trim().toLowerCase();

//   const allProducts = document.querySelectorAll('#product-list3 .product-block');

//   allProducts.forEach(product => {
//     const productName = product.dataset.name.toLowerCase();

//     if (productName.includes(keyword)) {
//       product.style.display = 'block';
//     } else {
//       product.style.display = 'none';
//     }
//   });
// });

  // Function to handle checkbox filtering
// function filterProducts() {
//   const checkedValues = Array.from(document.querySelectorAll('.prod-filt-input:checked'))
//     .map(input => input.value); // Get all checked values

//   const allProducts = document.querySelectorAll('#product-list3 .product-block');
//    //console.log(checkedValues[0]);

//     allProducts.forEach(product => {
//     const productCategories = product.dataset.category.split(" ");

//     const match = checkedValues.some(value => productCategories.includes(value));

//     // Show all if nothing selected, or match found
//     if (checkedValues.length === 0 || match) {
//       product.style.display = 'block';
//     } else {
//       product.style.display = 'none';
//     }
//   });

//   // allProducts.forEach(product => {
//   //   const productCategory = product.dataset.category;
//   //   myArray1 = productCategory.split(" ");
//   //   //console.log(myArray1);
    
//   //   // Show or hide
//   //   if (checkedValues[0] === myArray1[0] || checkedValues[0] === myArray1[1]) {
//   //     product.style.display = 'block'; // show
//   //   } else {
//   //     product.style.display = 'none'; // hide
//   //   }
//   // });
// }


// Add event listeners to all checkboxes
// document.querySelectorAll('.form-check-input').forEach(checkbox => {
//   checkbox.addEventListener('change', filterProducts);
// });

 

  // productList.forEach( (item) => {
  //   const productItem = `
  //   <div class="product-block product-item home-style all mix ${item.category} col-lg-3 col-md-6 col-sm-6" data-id="${item.id}" data-name="${item.name}" data-price="${item.price}" data-image="${item.image}">
  //                       <div class="inner-box bg-transparent">
  //                           <div class="image-box">
  //                               <div class="inner">
  //                                   <figure class="image mb-0"><a href="product-details.html"><img src="${item.image}" alt="Image"></a></figure>
  //                                   <div class="icon-box">
  //                                       <button class="icon ui-btn add-to-cart">
  //                                           <i class="fa-sharp fa-light fa-cart-shopping"></i>
  //                                           </button>
  //                                           <button class="icon ui-btn like-btn add-to-wishlist"><i class="fa-light fa-heart"></i></button>
  //                                   </div>
  //                               </div>
  //                           </div>
  //                           <div class="content-box">
  //                               <div class="inner">
  //                                   <span class="price"> <span class="price-style"> 90$.00</span> - $${item.price}</span>
  //                                   <h4 class="title"><a href="product-details.html">${item.name}</a></h4>
  //                               </div>
  //                           </div>
  //                       </div>
  //                   </div>
  //                   `

  //   if (productListContainer) {
  //     productListContainer.insertAdjacentHTML('beforeend', productItem)
  //   }                
    

  // });

 
  // Function to handle add-to-cart clicks
  function addToCart(event) {
    const productElement = event.target.closest(".product-item") || event.target.closest(".product-item-dtl");
    const id = productElement.dataset.id;
    const name = productElement.dataset.name;
    const price = parseFloat(productElement.dataset.price);
    const image = productElement.dataset.image;
  
    console.log(id);
    // Check if item is already in cart
    const existingItemIndex = cart.findIndex((item) => {
      if(item.id === id){
        alert('Product is already in Cart')
      }
      return item.id === id;
      // console.log(id, item.id)
      return false;
    });
    let currentValue =
      Number(document.getElementById("prod-qty-chng")?.value) || 1;
  
    if (existingItemIndex === -1) {
      // Add item to cart
      cart.push({ id, name, price, image, quantity: currentValue });
      alert('Product Added in Cart')
    } else {
      // Item already in cart; optionally, handle quantity update here
      cart[existingItemIndex].quantity += 1;
    }
    saveCart();
    updateCart();
  }
  
  // Function to handle remove-from-cart clicks
  function removeFromCart(event) {
    const id = event.target.dataset.id;
  
    // Remove item from cart
    cart = cart.filter((item) => item.id !== id);
  
    // Save to local storage
    saveCart();
    updateCart();
  }
  
  // Function to handle quantity changes
  
  function changeQuantity(id, change) {
    const itemIndex = cart.findIndex((item) => item.id === id);
  
    if (itemIndex !== -1) {
      cart[itemIndex].quantity += change;
      if (document.getElementById("prod-qty-chng")) {
        document.getElementById("prod-qty-chng").value = cart[itemIndex].quantity;
      }
  
      if (cart[itemIndex].quantity <= 0) {
        // Remove item from cart if quantity is 0 or less
        cart.splice(itemIndex, 1);
      }
      // Save to local storage
      saveCart();
      updateCart();
    } else {
      let currentValue =
        Number(document.getElementById("prod-qty-chng").value) || 1;
      currentValue += change;
      // console.log(currentValue, change)
      if (currentValue > 0) {
        document.getElementById("prod-qty-chng").value = currentValue;
      }
    }
  }
  
  // Function to handle quantity button clicks
  function handleQuantityChange(event) {
    console.log("handleQuantityChange");
    const button = event.target;
    const id = button.dataset.id;
    console.log(button.classList, button.classList.contains("quantity-increase"));
    if (button.classList.contains("quantity-increase")) {
      changeQuantity(id, 1);
    } else if (button.classList.contains("quantity-decrease")) {
      changeQuantity(id, -1);
    }
  }
  
  // Function to handle input field changes
  function handleQuantityInput(event) {
    const input = event.target;
    const id = input.dataset.id;
    const newQuantity = parseInt(input.value, 10);
  
    if (newQuantity > 0) {
      const itemIndex = cart.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        cart[itemIndex].quantity = newQuantity;
        if (newQuantity === 0) {
          // Remove item from cart if quantity is 0
          cart.splice(itemIndex, 1);
        }
        // Save to local storage
        saveCart();
        updateCart();
      }
    }
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

    

  document.getElementById("cart-items")?.addEventListener("click", function (event) {
      if (event.target.closest(".remove-from-cart")) {
        console.log("clicked", event.target.closest(".remove-from-cart").dataset.id);
        
        // console.log(event.target.closest(".cart-item"));
        
        // event.target.closest(".cart-item").remove();
        removeFromCart(event);
      } else if (
        event.target.classList.contains("quantity-increase") ||
        event.target.classList.contains("quantity-decrease")
      ) {
        handleQuantityChange(event);
      }
    });

    document.getElementById("cart-items-2")?.addEventListener("click", function (event) {
      if (event.target.closest(".remove-from-cart")) {
        removeFromCart(event);
      } else if (
        event.target.classList.contains("quantity-increase") ||
        event.target.classList.contains("quantity-decrease")
      ) {
        handleQuantityChange(event);
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
  
  document.getElementById("cart-items")?.addEventListener("input", function (event) {
      if (event.target.classList.contains("quantity-input")) {
        handleQuantityInput(event);
      }
    });
  
  // Initial cart update
  updateCart();



/*=======================================================================================================
Add To Wishlist Functionality
=======================================================================================================*/

// Add to wishlist functionality using localStorage
document.querySelectorAll('.add-to-wishlist').forEach(button => {

  $('.add-to-wishlist').html('<i class="fa-light fa-heart"></i>')

  button.addEventListener('click', function (e) {
      e.preventDefault();

      // Get product data
      const productBlock = this.closest('.product-block');
      const productId = productBlock.getAttribute('data-id');
      const productName = productBlock.getAttribute('data-name');
      const productMrp = productBlock.getAttribute('data-mrp');
      const productPrice = productBlock.getAttribute('data-price');
      const productImage = productBlock.getAttribute('data-image');
      const productcategory = productBlock.getAttribute('data-category');

      // Get current wishlist from localStorage or create an empty array if it doesn't exist
      let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

      // Check if the product is already in the wishlist
      const productExists = wishlist.some(product => product.id === productId);

      if (!productExists) {
          // Add the new product to the wishlist
          wishlist.push({
              id: productId,
              name: productName,
              mrp: productMrp,
              price: productPrice,
              image: productImage,
              category: productcategory
          });

          // Save updated wishlist to localStorage
          localStorage.setItem('wishlist', JSON.stringify(wishlist));

          alert('Product added to your wishlist!');
      } else {
          alert('Product is already in your wishlist.');
      }

      displayWishlist();
      
  });

  

});


// Function to load and display wishlist items
function displayWishlist() {
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  const wishlistContainer = document.getElementById('wishlist-container');
  const wishCount = document.getElementById('wish-count');

  if(wishlistContainer){
    wishlistContainer.innerHTML = ''; // Clear previous items

    if (wishlist.length === 0) {
      wishlistContainer.innerHTML = `
      <div class="empty-wishlist text-center">
      <img src="images/resource/wishlist-empty.svg" alt="">
      <h3 class="mt-3 mb-2">Your wishlist is empty.</h3>
       <p class="lead">No items added in wishlist</p>
       <a href="shop-products.html" class="theme-btn btn-style-one"><span class="btn-title">Shop Now</span></a>
      </div>`;
      return;
    }
  }

  // Loop through wishlist and add each item to the display with a remove button
  //console.log(wishlist);
  
  wishlist.forEach(product => {
      const productHTML = `
                <div class="product-block product-item home-style col-lg-3 col-md-6 col-sm-6" data-category="${product.category}" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}" data-image="${product.image}">
                        <div class="inner-box bg-transparent">
                            <div class="image-area">
                                <div class="inner">
                                    <figure class="image mb-0"><img src="${product.image}" alt="${product.name}"></figure>
                                    <button class="icon like-btn remove-from-wishlist float-btn" data-id="${product.id}"><i class="fas fa-trash"></i></button>
                                   
                                </div>
                            </div>
                            <div class="content-box">
                                    <div class="inner">
                                        <h4 class="title"><a href="product-details.html">${product.name}</a></h4>
                                        <div class="rating">
                                          <img src="images/icons/star-rating.svg" width="87" class="d-inline-block">
                                          <span>(4.2)</span>
                                        </div>
                                        <span class="price"><del>$${product.mrp}.00</del> $${product.price}.00</span>
                                        
                                    </div>
                                </div>

                                <div class="action-btns-area">
                                            <a href="product-details.html" class="theme-btn btn-outline"><span class="btn-title">Buy Now</span></a>
                                            <button class="icon ui-btn add-to-cart"><i class="fa-sharp fa-light fa-cart-shopping"></i></button>
                                            
                                        </div>
                            
                        </div>
                        
                    </div>`;

      if(wishlistContainer){
        wishlistContainer.innerHTML += productHTML;
      }              

      $(`[data-id=${product.id}] .add-to-wishlist`).html('<i class="fas fa-heart"></i>')
  });

  if (wishCount) {
    wishCount.textContent = wishlist.length;
  }

// Function to remove an item from the wishlist
function removeFromWishlist(productId) {
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

  // Filter out the product to be removed
  wishlist = wishlist.filter(product => product.id !== productId);

  // Update localStorage with the new wishlist
  localStorage.setItem('wishlist', JSON.stringify(wishlist));

  // Re-render the wishlist after removing the item
  displayWishlist();

  alert('Item removed from wishlist.');
}

  // Add event listeners to the remove buttons
  document.querySelectorAll('.remove-from-wishlist').forEach(button => {
    button.addEventListener('click', function () {
        const productId = this.getAttribute('data-id');
        removeFromWishlist(productId);
    });
});
}

// Call displayWishlist() to show the wishlist on page load or whenever needed
displayWishlist();
