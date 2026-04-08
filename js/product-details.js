let product = JSON.parse(localStorage.getItem("selectedProduct"));

if (!product) {
  alert("No product selected!");
} else {
  let quantityInput = document.getElementById("quantityInput");
  let totalPrice = document.getElementById("totalPrice");

  document.getElementById("productImage").src = product.image;
  document.getElementById("productName").innerHTML =`<strong style="color: #007bff;">${product.name}</strong>`;
  document.getElementById("productDescription").innerText =
  product.description || "No description available.";
  document.getElementById("productPrice").innerText = "$" + product.price.toFixed(2);
  document.getElementById("type").innerHTML = `<strong>Type:</strong> ${product.type}`;

  function updateTotal() {
    let quantity = parseInt(quantityInput.value);

    if (quantity > 10) {
      quantity = 10;
      quantityInput.value = 10;
      alert("Maximum quantity is 10.");
    }

    if (product.originalPrice) {
      document.getElementById("originalPrice").innerHTML = `<strong>Original Price:</strong> $${product.originalPrice.toFixed(2)}`;
    }

    if (isNaN(quantity) || quantity < 1) {
      quantity = 0;
    }


    let total = product.price * quantity;
    totalPrice.innerHTML = `<strong>Total:</strong> $${total.toFixed(2)}`;
  }

  updateTotal();
  quantityInput.addEventListener("input", updateTotal);
}

let addToCartBtn = document.getElementById("addToCartButton");

addToCartBtn.addEventListener("click", function () {
  let quantity = parseInt(document.getElementById("quantityInput").value);

  if (isNaN(quantity) || quantity < 1) {
    quantity = 1;
  }

  let product = JSON.parse(localStorage.getItem("selectedProduct"));

  let cartItem = {
    name: product.name,
    price: product.price,
    image: product.image,
    quantity: quantity,
    total: product.price * quantity,
  };

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(cartItem);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Added to cart!");
});