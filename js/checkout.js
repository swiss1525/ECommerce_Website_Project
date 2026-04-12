let cart = JSON.parse(localStorage.getItem("cart")) || [];
let checkoutForm = document.getElementById("checkoutForm");
let confirmationMessage = document.getElementById("confirmationMessage");
let currentUser = JSON.parse(localStorage.getItem("currentUser"));

let discountCode = "COLLEGELASALLE";
let discountApplied = false;
let discountRate = 0.5;

let discountInput = document.getElementById("discount");
let applyBtn = document.getElementById("applyDiscount");

let storedDiscount = localStorage.getItem("discounts");

applyBtn.addEventListener("click", function () {
  let userInput = discountInput.value.trim().toUpperCase();

  if (userInput === discountCode) {
    // Check if already used
    if (storedDiscount === discountCode) {
      alert("This code has already been used.");
      return;
    }
    discountApplied = true;

    localStorage.setItem("discounts", discountCode);

    UpdateOrderPrice();

  } else {
    discountApplied = false;
    alert("Invalid discount code.");
  }
});

let GSTtaxes = 0.05;
let QSTtaxes = 0.0975;
let discountedSubtotal = 0;
function UpdateOrderPrice() {
  let orderSummary = document.getElementById("orderSummary");
  let orderTotal = document.getElementById("orderTotal");

  let html = "";
  let total = 0; // reset here

  if (cart.length === 0) {
    orderSummary.innerHTML = "<p>Your cart is empty.</p>";
    orderTotal.innerText = "Total: $0.00";
    return;
  }

  for (let i = 0; i < cart.length; i++) {
    let itemTotal = cart[i].price * cart[i].quantity;
    total += itemTotal;

    html += `<div>
      <h4>${cart[i].name}</h4>
      <p>Price: $${cart[i].price.toFixed(2)}</p>
      <p>Quantity: ${cart[i].quantity}</p>
      <hr>
      <p style="color: green; font-family: Figtree-MediumItalic">Item Total: $${itemTotal.toFixed(2)}</p>
    </div><hr>`;
  }
  let discountConfirmed = document.getElementById("discountMessage");
  
  if (discountApplied) {
    discountedSubtotal = total - total * discountRate;
    discountConfirmed.innerText = "50% discount added to subtotal!"
  } else {
    discountedSubtotal = total;
  }
  let gst = discountedSubtotal * GSTtaxes;
  let qst = discountedSubtotal * QSTtaxes;
  let finalTotal = discountedSubtotal + gst + qst;


  orderSummary.innerHTML = html;
  orderTotal.innerHTML = `
  <p>Subtotal: $${discountedSubtotal.toFixed(2)}</p>
  <p style="font-size:20px; font-family: Figtree-MediumItalic" >GST: $${gst.toFixed(2)}</p>
  <p style="font-size:20px; font-family: Figtree-MediumItalic">QST: $${qst.toFixed(2)}</p>
    <hr>
    <span style="font-weight: 700; color: green">Total: $${finalTotal.toFixed(2)}</span>
  `;
}

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

    if (isNaN(creditCardNumber) || creditCardNumber.includes(" ")) {
      alert("Card number must be numeric.");
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

    if (isNaN(debitCardNumber) || debitCardNumber.includes(" ")) {
      alert("Card number must be numeric.");
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

  let savedTotal;

  if (discountApplied) {
    savedTotal = discountedSubtotal;
  } else {
    savedTotal = total;
  }

  let newOrder = {
    orderId: Date.now(),
    customerName: customerName,
    userId: currentUser.id,
    customerAddress: customerAddress,
    customerPostalCode: customerPostalCode,
    paymentMethod: paymentMethod,
    orderDate: new Date().toLocaleDateString(),
    items: [...cart],
    total: savedTotal,
    isDiscountApplied: discountApplied,

    baseTotal: total,
    GST: savedTotal * GSTtaxes,
    QST: savedTotal * QSTtaxes,
    finalTotal: savedTotal + savedTotal * GSTtaxes + savedTotal * QSTtaxes,
  };

  orders.push(newOrder);
  localStorage.setItem("orders", JSON.stringify(orders));

  confirmationMessage.innerHTML = `<p style="font-weight: bold; color: green"class="mt-3">Order placed successfully! Thank you for your purchase.</p>`;

  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));

  checkoutForm.reset();
  UpdateOrderPrice();
  showPaymentFields();
});

UpdateOrderPrice();
