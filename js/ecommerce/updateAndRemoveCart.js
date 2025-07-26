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

      //console.log(item);
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
    
        </div>`
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


  // Function to handle remove-from-cart clicks
  function removeFromCart(event) {
    const id = event.target.dataset.id;
  
    // Remove item from cart
    cart = cart.filter((item) => item.id !== id);
  
    // Save to local storage
    saveCart();
    updateCart();
  }

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