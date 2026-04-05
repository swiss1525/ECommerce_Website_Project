let cart = JSON.parse(localStorage.getItem("cart")) || [];

let orderSummary = document.getElementById("orderSummary");
let orderTotal = document.getElementById("orderTotal");
let checkoutForm = document.getElementById("checkoutForm");
let confirmationMessage = document.getElementById("confirmationMessage");

function updateOrderSummary() {
  let html = "";
  let total = 0;

  if (cart.length === 0) {
    orderSummary.innerHTML = "<p>Your cart is empty.</p>";
    orderTotal.innerText = "Total: $0.00";
    return;
  }

  for (let i = 0; i < cart.length; i++) {
    let itemTotal = cart[i].price * cart[i].quantity;
    total += itemTotal;

    html += `
      <div>
        <h4>${cart[i].name}</h4>
        <p>Price: $${cart[i].price.toFixed(2)}</p>
        <p>Quantity: ${cart[i].quantity}</p>
        <p>Item Total: $${itemTotal.toFixed(2)}</p>
      </div>
      <hr>
    `;
  }

  orderSummary.innerHTML = html;
  orderTotal.innerText = "Total: $" + total.toFixed(2);
}

updateOrderSummary();

checkoutForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let customerName = document.getElementById("customerName").value.trim();
  let customerAddress = document.getElementById("customerAddress").value.trim();
  let paymentMethod = document.getElementById("paymentMethod").value;

  if (customerName === "" || customerAddress === "" || paymentMethod === "") {
    confirmationMessage.innerText = "Please fill in all fields.";
    return;
  }

  if (cart.length === 0) {
    confirmationMessage.innerText = "Your cart is empty.";
    return;
  }

  confirmationMessage.innerText =
    "Order placed successfully! Thank you for your purchase.";

  localStorage.removeItem("cart");
  checkoutForm.reset();
  orderSummary.innerHTML = "";
  orderTotal.innerText = "Total: $0.00";
});
