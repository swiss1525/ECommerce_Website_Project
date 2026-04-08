let productsCategory = [
  {
    name: "BTS 'ARIRANG' Vinyl",
    price: 60.99,
    image: "/images/bts_arirang.jpg",
    description: "Experience the magic of BTS with the 'ARIRANG' vinyl. This limited edition release features exclusive tracks and stunning artwork, making it a must-have for any ARMY. Immerse yourself in the world of BTS and enjoy the rich sound quality of vinyl.",
  }
];

let productList = document.getElementById("product-list");

for (let i = 0; i < productsCategory.length; i++) {
  productList.innerHTML += `
                  <div class="col-auto">
<div class="card" style="width:400px">
    <img class="card-img-top" src="${productsCategory[i].image}" alt="${productsCategory[i].name}" style="width:100%">
    <div class="card-body">
      <h4 class="card-title">${productsCategory[i].name}</h4>
      <p class="card-text">${productsCategory[i].price}</p>
      <a href="product-details.html" 
     class="btn btn-primary"
     onclick="viewProduct(${i})">
     View Details
  </a>
    </div>
  </div>
                  </div>

  `;
}

let searchInput = document.getElementById("searchInput");
let productCards = document.querySelectorAll(".card");

searchInput.addEventListener("keyup", function () {
  let searchValue = searchInput.value.toLowerCase();

  for (let i = 0; i < productCards.length; i++) {
    let productName = productCards[i]
      .querySelector(".card-title")
      .innerText.toLowerCase();

    if (productName.includes(searchValue)) {
      productCards[i].style.display = "block";
    } else {
      productCards[i].style.display = "none";
    }
  }
});

function viewProduct(index) {
  let selectedProduct = productsCategory[index];

  localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
}
