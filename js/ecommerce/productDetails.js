
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get('id'), 10);
    //console.log(productId);

    //console.log(productList)
    

    const product = productList.find(p => p.id === productId);

    // if (product) {
    //     document.getElementById('product-details').forEach((item) => {
    //         item.dataset.id = product.id
    //         item.dataset.name = product.name
    //         item.dataset.price = product.price
    //         item.dataset.image = product.image
    //     })
    // }

    
    if (product) {
        document.getElementById('product-details').dataset.id = product.id
        document.getElementById('product-details').dataset.name = product.name
        document.getElementById('product-details').dataset.price = product.price
        document.getElementById('product-details').dataset.image = product.image
        document.getElementById('product-details').dataset.mrp = product.mrp
        document.querySelector('.quantity-box .quantity-decrease').dataset.id = product.id
        document.querySelector('.quantity-box .quantity-increase').dataset.id = product.id
        document.getElementById('prod-qty-chng').dataset.id = product.id
        document.querySelector('.prodDtl-wish-btn').dataset.id = product.id
        document.querySelector('.prodDtl-cart-btn').dataset.id = product.id
    }

    if (product) {
      document.getElementById('product-name').textContent = product.name;
      document.getElementById('prod-dtl-desc').textContent = product.description;
    //    console.log("document.getElementById('product-category')",document.getElementById('product-category'));
    //document.querySelectorAll('.product-image').src = product.image;

    document.querySelectorAll('.product-image').forEach((img) => {
        img.src = product.image
    })
    document.querySelectorAll('.product-image2').forEach((img) => {
        img.src = product.image2
    })
    //console.log(product.image);
    
        document.querySelectorAll('.product-image').forEach((img) => {
            img.alt = product.name;
        })
        document.querySelectorAll('.product-image2').forEach((img) => {
            img.alt = product.name;
        })
      document.getElementById('product-mrp').textContent = `$${product.mrp.toFixed(2)}`;
      document.getElementById('product-price').textContent = `$${product.price.toFixed(2)}`;
      //document.getElementById('product-category').textContent = product.category;
    } else {
      document.getElementById('product-details').innerHTML = "<p>Product not found.</p>";
    }



    
    // console.log(wishlist);
    // console.log(wishBtn.dataset.id);
    function productDetailsDataCheck() {
        
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    let cartData = JSON.parse(localStorage.getItem("cart")) || [];
    let wishBtn = document.querySelector('.prodDtl-wish-btn');
    let cartBtn = document.querySelector('.prodDtl-cart-btn');
    let qtyInput = document.getElementById('prod-qty-chng');

    //console.log(wishlist);

        wishlist.forEach((item) => {
            if (item.id == wishBtn.dataset.id) {
                wishBtn.innerHTML = `<i class="fas fa-heart"></i>`;
                //debugger
               
            //console.log("Deep");
            }
        })
        // if(cartBtn){
        //     cartBtn.innerHTML = `<i class="fa-sharp fa-light fa-cart-shopping"></i> Add to Cart`;
        // }
        cartData.forEach((item) => {
            if (item.id == cartBtn.dataset.id) {
                cartBtn.innerHTML = `<i class="fas fa-shopping-cart"></i>`;
            }
            if (item.id == qtyInput.dataset.id) {
                //console.log(item);
                
                qtyInput.value = item.quantity;
            }
        })
    }
    
    productDetailsDataCheck();

