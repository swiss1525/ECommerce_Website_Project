let productsCategory = [
  {
    id: "vinyls1",
    name: "BTS 'ARIRANG' Vinyl",
    price: 60.99,
    type: "Vinyl",
    image: "/images/bts_arirang.jpg",
    description:
      "Experience the magic of BTS with the 'ARIRANG' vinyl. This limited edition release features exclusive tracks and stunning artwork, making it a must-have for any ARMY. Immerse yourself in the world of BTS and enjoy the rich sound quality of vinyl.",
  },
  {
    id: "albums1",
    name: "EMINEM 'DEATH OF SLIM SHADY' ALBUM",
    price: 39.99,
    type: "Album",
    image: "images/Products/coup_de_grace_eminem.jpeg",
    description: "The ultimate album by eminem",
  },
];

let productList = document.getElementById("product-list");

for (let i = 0; i < productsCategory.length; i++) {
  productList.innerHTML += `
<div class="col-12 col-sm-6 col-md-4 col-lg-3  ">
  <div class="card h-100 shadow-sm border-1 product-card " id="${productsCategory[i].id}">

    <img 
      src="${productsCategory[i].image}" 
      class="card-img-top featured-product-image"
      alt="${productsCategory[i].name}"
    >

    <div class="card-body ">

      <h5 style="font-weight: 700" class="card-title">
        ${productsCategory[i].name}
      </h5>
      <p style="font-size: 20px; font-style: italic" class=" fw-semibold">
        $${productsCategory[i].price}
      </p>
      <a href="product-details.html" 
         class="btn btn-primary d-flex justify-content-center mt-auto"
         onclick="viewFeaturedProduct(${i})">
        View Details
      </a>

    </div>
  </div>
</div>
`;

}

// Searching

let searchInput = document.getElementById("searchInput");
let productCards = document.querySelectorAll(".product-card");

searchInput.addEventListener("keyup", function () {
  let searchValue = searchInput.value.toLowerCase();

  for (let i = 0; i < productCards.length; i++) {
    let productName = productCards[i]
      .querySelector(".card-title")
      .innerText.toLowerCase();

    let parentCol = productCards[i].parentElement;

    if (productName.includes(searchValue)) {
      parentCol.style.display = "";
    } else {
      parentCol.style.display = "none";
    }
  }
});

// Button Filtering

let buttons = document.querySelectorAll(".filter-btn");
let product = document.querySelectorAll(".product-card");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let category = buttons[i].id;

    for (let j = 0; j < product.length; j++) {
      let parentCol = product[j].parentElement;

      if (category === "all" || product[j].id.startsWith(category)) {
        parentCol.style.display = "";
      } else {
        parentCol.style.display = "none";
      }
    }
  });
}

// Save the selected product to local storage

function viewFeaturedProduct(index) {
  let product = productsCategory[index];

  let selectedProduct = {
    name: product.name,
    price: product.discount || product.price,
    originalPrice: product.discount ? product.price : null,
    image: product.image,
    type: product.type,
    description: product.description || "No description available.",
  };

  localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
}
