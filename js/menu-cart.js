let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
let cartMenu = document.getElementById("cartMenu");
let emptyCart = document.getElementById("emptyCart");

if (cartItems.length >= 1) {
    emptyCart.style.display = "none";
    cartMenu.innerHTML = "";
    cartItems.forEach((item) => {
        let li = document.createElement("li");
        li.classList.add("dropdown-item");
        li.innerHTML = `${item.name} - $${item.price.toFixed(2)} x ${item.quantity}`;
        cartMenu.appendChild(li);
        cartMenu.innerHTML += `<li><hr class="dropdown-divider"><a class="dropdown-item" href="cart.html">View Cart</a></li>`;
    });
} else {
    emptyCart.style.display = "block";
}

let profileMenu = document.getElementById("Profile");
let user = JSON.parse(localStorage.getItem("user"));
if (user) {
  profileMenu.innerHTML = `<a class="nav-link dropdown-toggle" href="#" id="profileDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">${user.name}</a>
  <ul class="dropdown-menu" aria-labelledby="profileDropdown">`;
} else {
  profileMenu.innerHTML = `<a class="nav-link" href="registration-page.html">Login/Register</a>`;
}
