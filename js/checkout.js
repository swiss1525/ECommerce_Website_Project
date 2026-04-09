let cart = JSON.parse(localStorage.getItem("cart")) || [];
let checkoutForm = document.getElementById("checkoutForm");
let confirmationMessage = document.getElementById("confirmationMessage");
let currentUser = JSON.parse(localStorage.getItem("currentUser"));

let GSTtaxes = 0.05;
let QSTtaxes = 0.0975;

function updateOrderSummary() {
  let orderSummary = document.getElementById("orderSummary");
  let orderTotal = document.getElementById("orderTotal");

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

    html += `<div> <h4>${cart[i].name}</h4> 
    <p>Price: $${cart[i].price.toFixed(2)}</p> 
    <p>Quantity: ${cart[i].quantity}</p> 
    <hr>
    <p>Item Total: $${itemTotal.toFixed(2)}</p>
    </div> <hr>`;
  }
  orderSummary.innerHTML = html;
  let totalAfterGST = total * GSTtaxes;
  let totalAfterQST = total * QSTtaxes;

  let totalAfterTaxes = (totalAfterGST + totalAfterQST) + total;

  orderTotal.innerHTML = `
  <p style="font-size: 15px">GST: ${GSTtaxes}</p>
  <p style="font-size: 15px">QST: ${QSTtaxes}</p>
  <p style="font-size: 15px;">Base Total: ${total}</p>


  <hr>
  <span id="total" style="font-weight: 700">Paying Total: $${totalAfterTaxes.toFixed(2)}</span>`;
}

  let discountCode = "COLLEGELASALLE";
  let discountInput = document.getElementById("discount");
  let applyBtn = document.getElementById("applyDiscount");

  applyBtn.addEventListener("click", function () {
    console.log("Clicked");

    if (discountInput.value.trim().toUpperCase() === "COLLEGELASALLE") {
      console.log("Correct");
    } else {
      console.log("Invalid");
    }
  });

function showPaymentFields() {
  let method = document.getElementById("paymentMethod").value;

  document.getElementById("creditFields").style.display = "none";
  document.getElementById("debitFields").style.display = "none";
  document.getElementById("paypalFields").style.display = "none";

  if (method === "credit") {
    document.getElementById("creditFields").style.display = "block";
  } else if (method === "debit") {
    document.getElementById("debitFields").style.display = "block";
  } else if (method === "paypal") {
    document.getElementById("paypalFields").style.display = "block";
  }
}

checkoutForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!currentUser) {
    alert("Please log in before checking out.");
    return;
  }

  let customerName = document.getElementById("customerName").value.trim();
  let customerAddress = document.getElementById("customerAddress").value.trim();
  let customerPostalCode = document
    .getElementById("customerPostalCode")
    .value.trim();
  let paymentMethod = document.getElementById("paymentMethod").value;

  if (
    customerName === "" ||
    customerAddress === "" ||
    customerPostalCode === "" ||
    paymentMethod === "none"
  ) {
    alert("Please fill in all fields.");
    return;
  }

  if (paymentMethod === "credit") {
    let creditCardholderName = document
      .getElementById("creditCardholderName")
      .value.trim();
    let creditCardNumber = document
      .getElementById("creditCardNumber")
      .value.trim();

    if (creditCardholderName === "" || creditCardNumber === "") {
      alert("Please fill in all credit card fields.");
      return;
    }
  }

  if (paymentMethod === "debit") {
    let debitCardholderName = document
      .getElementById("debitCardholderName")
      .value.trim();
    let debitCardNumber = document
      .getElementById("debitCardNumber")
      .value.trim();

    if (debitCardholderName === "" || debitCardNumber === "") {
      alert("Please fill in all debit card fields.");
      return;
    }
  }

  if (paymentMethod === "paypal") {
    let paypalEmail = document.getElementById("paypalEmail").value.trim();

    if (paypalEmail === "") {
      alert("Please fill in your PayPal email.");
      return;
    }
  }

  if (cart.length === 0) {
    confirmationMessage.innerText = "Your cart is empty.";
    return;
  }

  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].quantity;
  }

  let orders = JSON.parse(localStorage.getItem("orders")) || [];

  let newOrder = {
    orderId: Date.now(),
    customerName: customerName,
    userId: currentUser.id,
    customerAddress: customerAddress,
    customerPostalCode: customerPostalCode,
    paymentMethod: paymentMethod,
    orderDate: new Date().toLocaleDateString(),
    items: [...cart],
    total: total,

    baseTotal: total,
    GST: total * GSTtaxes,
    QST: total * QSTtaxes,
    finalTotal: total + (total * GSTtaxes) + (total * QSTtaxes)
  };

  orders.push(newOrder);
  localStorage.setItem("orders", JSON.stringify(orders));

  confirmationMessage.innerText =
    "Order placed successfully! Thank you for your purchase.";

  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));

  checkoutForm.reset();
  updateOrderSummary();
  showPaymentFields();
});



updateOrderSummary();
