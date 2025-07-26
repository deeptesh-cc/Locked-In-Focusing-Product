
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

  // document.querySelectorAll('.move-to-cart').innerHTML = "Move To Cart"

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
                <div class="product-block product-item home-style col-lg-3 col-md-6 col-sm-6" data-category="${product.category}" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}" data-image="${product.image}" data-quantity="1">
                        <div class="inner-box bg-transparent">
                            <div class="image-area">
                                <div class="inner">
                                    <figure class="image mb-0">
                                      <a href="product-details.html?${product.id}">
                                        <img src="${product.image}" alt="${product.name}">
                                      </a>
                                    </figure>
                                    <button class="icon like-btn remove-from-wishlist float-btn" data-id="${product.id}"><i class="fas fa-trash"></i></button>
                                   
                                </div>
                            </div>
                            <div class="content-box">
                                    <div class="inner">
                                        <h4 class="title"><a href="product-details.html?${product.id}">${product.name}</a></h4>
                                        <div class="rating">
                                          <img src="images/icons/star-rating.svg" width="87" class="d-inline-block">
                                          <span>(4.2)</span>
                                        </div>
                                        <span class="price"><del>$${product.mrp}.00</del> $${product.price}.00</span>
                                        
                                    </div>
                                </div>

                                <div class="action-btns-area">
                                            <button class="theme-btn btn-outline w-100 add-to-cart move-to-cart" data-id="${product.id}"></button>
                                            
                                            
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

// to show the wishlist on page load or whenever needed
displayWishlist();

// function moveToCartFromWishlist(event) {  
//   const productElement = event.target.closest(".product-item");
//   const id = productElement.dataset.id;
//   const name = productElement.dataset.name;
//   const price = parseFloat(productElement.dataset.price);
//   const image = productElement.dataset.image;
//   const quantity = productElement.dataset.quantity;
//   let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
//   const wishCount = document.getElementById('wish-count');

//   console.log("clicked");

//   let currentValue = quantity ? Number(quantity) : Number(document.getElementById("prod-qty-chng")?.value || 1);

//   // Check if already in cart
//   const existingCartIndex = cart.findIndex(item => item.id === id);

//   if (existingCartIndex === -1) {
//     cart.push({ id, name, price, image, quantity: currentValue });
//   } else {
//     cart[existingCartIndex].quantity += currentValue;
//   }

//   // Remove from wishlist
//   wishlist = wishlist.filter(item => item.id !== id);

//   localStorage.setItem("wishlist", JSON.stringify(wishlist));

//   if (wishCount) {
//        wishCount.textContent = wishlist.length;
//   }


//   saveCart();
//   //saveWishlist();
//   updateCart();
//   //removeFromWishlist();
//   displayWishlist();
// }


// document.addEventListener("click", function (e) {
//   if (document.querySelectorAll(".move-to-cart")) {
//     moveToCartFromWishlist(e);
//   }
// });

//document.querySelectorAll('.move-to-cart')?.addEventListener('click', moveToCartFromWishlist());