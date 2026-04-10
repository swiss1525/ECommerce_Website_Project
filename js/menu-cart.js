let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
let cartMenu = document.getElementById("cartMenu");
let emptyCart = document.getElementById("emptyCart");

if (cartItems.length > 0) {
    emptyCart.style.display = "none";
    cartMenu.innerHTML = "";

    cartItems.forEach((item) => {
        let li = document.createElement("li");
        li.classList.add("dropdown-item");
        li.textContent = `${item.name} - $${item.price.toFixed(2)} x ${item.quantity}`;
        cartMenu.appendChild(li);
    });

    cartMenu.innerHTML += `
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="cart.html">View Cart</a></li>
        <li><a class="dropdown-item" href="checkout.html">Checkout</a></li>
    `;
}