let product = JSON.parse(localStorage.getItem("selectedProduct"));

if (!product) {
  alert("No product selected!");
} else {
  let quantityInput = document.getElementById("quantityInput");
  let totalPrice = document.getElementById("totalPrice");

  document.getElementById("productImage").src = product.image;
  document.getElementById("productName").innerText = product.name;
  document.getElementById("productDescription").innerText = product.description;
  document.getElementById("productPrice").innerText = product.price;

  function updateTotal() {
    let quantity = parseInt(quantityInput.value);

    if (isNaN(quantity) || quantity < 1) {
      quantity = 0;
      quantityInput.value = 0;
    }

    let total = product.price * quantity;
    totalPrice.innerText = "Total: $" + total.toFixed(2);
  }

  updateTotal();
  quantityInput.addEventListener("input", updateTotal);
}

let addToCartBtn = document.querySelector(".btn-primary");

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
