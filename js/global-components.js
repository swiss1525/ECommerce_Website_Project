function Navbar() {
    let navbar = document.getElementById("NavbarComponent");

    navbar.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">My Store</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="products.html">Products</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="about.html">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact.html">Contact</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="cartDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Cart
              </a>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="cartDropdown"
                id="cartMenu"
              >
                <li>
                  <span id="emptyCart" class="dropdown-item-text"
                    >Your cart is empty</span
                  >
                </li>
              </ul>
            </li>
            <li id="Profile"></li>
          </ul>
        </div>
      </div>
    </nav>`;
}

Navbar();