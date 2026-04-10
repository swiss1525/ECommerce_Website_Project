let currentUser = JSON.parse(localStorage.getItem("currentUser"));
let recentPurchases = JSON.parse(localStorage.getItem("orders")) || [];
let purchasesHTML = "";

if (recentPurchases.length > 0) {
  for (let i = 0; i < recentPurchases.length; i++) {
    let order = recentPurchases[i];
    let itemsHTML = "";

    for (let j = 0; j < order.items.length; j++) {
      let item = order.items[j];

      itemsHTML += `
        <li>
          ${item.name} - $${Number(item.price).toFixed(2)} x ${item.quantity}
        </li>
      `;
    }

    purchasesHTML += `
      <li>
        <strong>Order ID:</strong> ${order.orderId} - 
        <strong>Date:</strong> ${new Date(order.orderDate).toLocaleDateString()} -
<strong>Used Discount:</strong> ${order.isDiscountApplied ? "Yes" : "No"} - 
        <strong>Subtotal:</strong> $${Number(order.total).toFixed(2)} - 
        <strong>Total:</strong> $${Number(order.finalTotal).toFixed(2)} - 
        <strong>Taxes:</strong> $${Number(order.GST).toFixed(2)} (GST) - $${Number(order.QST).toFixed(2)} (QST)
        <br><br>
        <h5>Items:</h5>
        <ul style="list-style: none">
          ${itemsHTML}
        </ul>
        <hr>
      </li>
    `;
  }
} else {
  purchasesHTML = "<p>No recent purchases found.</p>";
}

// Check if user is logged in and display profile information
if (currentUser) {
  document.getElementById("profileTitle").textContent =
    `${currentUser.username}'s Profile`;
  document.getElementById("userInfo").innerHTML = `
      <div class="container mt-4">
      
      <h1>Welcome, ${currentUser.username}!</h1>
      <p><strong>Username:</strong> ${currentUser.username}</p>
      <p><strong>Email:</strong> ${currentUser.email}</p>
      <hr>
      <h3>Recent Purchases:</h3>
      <ul style="list-style: numbered">
      ${purchasesHTML}        
      </ul>
      </div>
        `;
} else {
  document.getElementById("profileTitle").textContent = "Profile";
  document.getElementById("userInfo").innerHTML =
    "<p>Please log in to view your profile information.</p>";
}
