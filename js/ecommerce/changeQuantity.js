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

  document.getElementById("cart-items")?.addEventListener("input", function (event) {
      if (event.target.classList.contains("quantity-input")) {
        handleQuantityInput(event);
      }
    });
  
  // Initial cart update
  updateCart();