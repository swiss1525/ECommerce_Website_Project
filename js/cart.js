  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const cartContainer = document.getElementById("cartContainer");
  const cartTotal = document.getElementById("cartTotal");

  function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function updateCart() {
    let html = "";
    let total = 0;

    if (cart.length === 0) {
      cartContainer.innerHTML = "<p>Your cart is empty.</p>";
      cartTotal.innerText = "Cart Total: $0.00";
      return;
    }

    for (let i = 0; i < cart.length; i++) {
      const itemTotal = cart[i].price * cart[i].quantity;
      total += itemTotal;

      html += `
        <div class="card mb-3 p-3">
          <img src="${cart[i].image}" alt="${cart[i].name}" style="width: 100px;">
          <h4>${cart[i].name}</h4>
          <p>Price: $${cart[i].price.toFixed(2)}</p>

          <label>Quantity:</label>
          <input
            type="number"
            min="1"
            value="${cart[i].quantity}"
            onchange="updateQuantity(${i}, this.value)"
          >

          <p>Total: $${itemTotal.toFixed(2)}</p>

          <button class="btn btn-danger" onclick="removeItem(${i})">
            Remove
          </button>
        </div>
      `;
    }

    cartContainer.innerHTML = html;
    cartTotal.innerText = "Cart Total: $" + total.toFixed(2);
  }

  function updateQuantity(index, newQuantity) {
    let quantity = parseInt(newQuantity);

    if (isNaN(quantity) || quantity < 1) {
      quantity = 1;
    }

    cart[index].quantity = quantity;
    saveCart();
    renderCart();
  }

  function removeItem(index) {
    cart.splice(index, 1);
    saveCart();
    renderCart();
  }

  updateCart();