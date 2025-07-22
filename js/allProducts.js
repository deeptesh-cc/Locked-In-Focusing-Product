// const productList = new Promise((resolve, reject) => {
//   fetch('./js/products.json')
//     .then(res => res.json())
//     .then(data => resolve(data))
//     .catch(err => reject(err));
// });

  // import productList from './products.json' assert { type: 'json' };
  //productList.then(data => console.log(data))
  
  const productList = [
  {
		id: 1,
		name: "Pre Workout Capsules",
		mrp: 19.00,
		price: 10.00,
		category: "pre-workout",
		image: "images/products/p1.png",
    image2: "images/products/ing1.png",
    description: "Boost your energy, focus, and endurance before every workout. These fast-acting capsules are designed to help you train harder and longer. Perfect for morning or evening sessions."
	},
	{
		id: 2,
		name: "Pre Workout Capsules",
		mrp: 29.00,
		price: 15.00,
		category: "pre-workout",
		image: "images/products/p2.png",
    image2: "images/products/ing2.png",
    description: "Boost your energy, focus, and endurance before every workout. These fast-acting capsules are designed to help you train harder and longer. Perfect for morning or evening sessions."
	},
	{
		id: 3,
		name: "Post Workout Capsules",
		mrp: 19.00,
		price: 10.00,
		category: "post-workout",
		image: "images/products/p3.png",
    image2: "images/products/ing3.png",
    description: "Speed up recovery and reduce muscle soreness with our Post Workout Capsules. Packed with essential nutrients to help your body repair, rebuild, and refuel after intense training."
	},
	{
		id: 4,
		name: "Muscle Supplement",
		mrp: 29.00,
		price: 15.00,
		category: "muscle-supple",
		image: "images/products/p4.png",
    image2: "images/products/ing4.png",
    description: "Support lean muscle growth and strength with this high-performance muscle supplement. Formulated with key ingredients to enhance recovery, endurance, and overall physical performance."
	},
	{
		id: 5,
		name: "Pre Workout Capsules",
		mrp: 30.00,
		price: 24.00,
		category: "pre-workout combo-product",
		image: "images/products/p5.png",
    image2: "images/products/ing1.png",
    description: "Boost your energy, focus, and endurance before every workout. These fast-acting capsules are designed to help you train harder and longer. Perfect for morning or evening sessions. Stock up and save with our 2 box Pre Workout Capsule Combo. Ideal for regular fitness routines, this combo ensures you never miss a boost before training."
	},
	{
		id: 6,
		name: "Pre Workout Capsules",
		mrp: 30.00,
		price: 25.00,
		category: "pre-workout combo-product",
		image: "images/products/p6.png",
    image2: "images/products/ing2.png",
    description: "Boost your energy, focus, and endurance before every workout. These fast-acting capsules are designed to help you train harder and longer. Perfect for morning or evening sessions. Get three bottles of our powerful Pre Workout Capsules in one value pack. Enjoy long-lasting energy, focus, and stamina every time you hit the gym."
	},
	{
		id: 7,
		name: "Post Workout Capsules",
		mrp: 29.00,
		price: 24.00,
		category: "post-workout combo-product",
		image: "images/products/p7.png",
    image2: "images/products/ing3.png",
    description: "Speed up recovery and reduce muscle soreness with our Post Workout Capsules. Packed with essential nutrients to help your body repair, rebuild, and refuel after intense training. Recover smarter with this 3 Bottle Post Workout Combo. A great value for regular lifters, it supports faster recovery and muscle repair after every session."
	},
	{
		id: 8,
		name: "Muscle Supplements",
		mrp: 30.00,
		price: 25.00,
		category: "muscle-supple combo-product",
		image: "images/products/p8.png",
    image2: "images/products/ing4.png",
    description: "Support lean muscle growth and strength with this high-performance muscle supplement. Formulated with key ingredients to enhance recovery, endurance, and overall physical performance. Maximize your gains with this triple pack of Muscle Supplements. Perfect for consistent use, it helps you build strength, improve performance, and stay on top of your game."
	}
]


  const productListContainer = document.getElementById("product-list")
  const productListContainer2 = document.getElementById("product-list2")
  const productListContainer3 = document.getElementById("product-list3")



    productList.forEach( (item, index) => {
      
    const productItem = `
    <div class="product-block product-item home-style all mix ${item.category}" data-id="${item.id}" data-name="${item.name}" data-mrp="${item.mrp}" data-price="${item.price}" data-image="${item.image}">
                            <div class="inner-box bg-transparent">
                                <div class="image-area">
                                    <figure class="image mb-0"><a href="product-details.html?id=${item.id}"><img src="${item.image}" alt="Image"></a></figure>
                                    <button class="icon like-btn add-to-wishlist float-btn"><i class="fa-light fa-heart"></i></button>
                                </div>
                                <div class="content-box">
                                    <div class="inner">
                                        <h4 class="title"><a href="product-details.html?id=${item.id}">${item.name}</a></h4>
                                        <div class="rating">
                                          <img src="images/icons/star-rating.svg" width="87" class="d-inline-block">
                                          <span>(4.2)</span>
                                        </div>
                                        <span class="price"><del>$${item.mrp}.00</del> $${item.price}.00</span>
                                        
                                    </div>
                                </div>
                                    <div class="action-btns-area">
                                            <a href="product-details.html?id=${item.id}" class="theme-btn btn-outline"><span class="btn-title">Buy Now</span></a>
                                            <button class="icon ui-btn add-to-cart"><i class="fa-sharp fa-light fa-cart-shopping"></i></button>
                                            
                                        </div>
                            </div>
                        </div> `


    const productItem2 = `
    <div class="product-block product-item home-style all col-lg-4 col-md-6 col-sm-6" data-category="${item.category}" data-id="${item.id}" data-name="${item.name}" data-mrp="${item.mrp}" data-price="${item.price}" data-image="${item.image}">
                            <div class="inner-box bg-transparent">
                                <div class="image-area">
                                    <figure class="image mb-0"><a href="product-details.html"><img src="${item.image}" alt="Image"></a></figure>
                                    <button class="icon like-btn add-to-wishlist float-btn"><i class="fa-light fa-heart"></i></button>
                                </div>
                                <div class="content-box">
                                    <div class="inner">
                                        <h4 class="title"><a href="product-details.html">${item.name}</a></h4>
                                        <div class="rating">
                                          <img src="images/icons/star-rating.svg" width="87" class="d-inline-block">
                                          <span>(4.2)</span>
                                        </div>
                                        <span class="price"><del>$${item.mrp}.00</del> $${item.price}.00</span>
                                        
                                    </div>
                                </div>
                                    <div class="action-btns-area">
                                            <a href="product-details.html?id=${item.id}" class="theme-btn btn-outline"><span class="btn-title">Buy Now</span></a>
                                            <button class="icon ui-btn add-to-cart"><i class="fa-sharp fa-light fa-cart-shopping"></i></button>
                                            
                                        </div>
                            </div>
                        </div> `
              

  if (index < 4 && productListContainer) {
    productListContainer.insertAdjacentHTML('beforeend', productItem);
  } 
  else if (index >= 4 && productListContainer2) {
    productListContainer2.insertAdjacentHTML('beforeend', productItem);
  } 
  else if (productListContainer3) {
       productListContainer3.insertAdjacentHTML('beforeend', productItem2)
  }  
    

  });