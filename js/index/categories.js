let buttons = document.querySelectorAll(".filter-btn");

let CategoryProducts = [
  {
    id: "songs1",
    name: "ALEX WARREN 'FEVER DREAM' SINGLE",
    type: "Single",
    price: 19.99,
    image: "images\\HomepageCategoryProducts\\alex-fever.jpg",
  },
  {
    id: "vinyls1",
    name: "RAVYN LENAE 'LOVE ME NOT' VINYL",
    type: "Single",
    price: 29.99,
    image: "images\\HomepageCategoryProducts\\love_me_not_album.jpg",
  },
];

for (let i = 0; i < CategoryProducts.length; i++) {
  let categoryProducts = document.getElementById("category-product-list");
  categoryProducts.innerHTML +=`
<div class="col-md-6 col-lg-4 product" id="${CategoryProducts[i].id}">
  <div class="card h-100 shadow-sm">

    <img 
      src="${CategoryProducts[i].image}" 
      class="card-img-top" 
      alt="${CategoryProducts[i].name}"
    >

    <div class="card-body text-center">
      <a href="product-details.html" 
         onclick="viewCategoryProduct(${i})"
         class="text-decoration-none fw-bold product-name">
        ${CategoryProducts[i].name}
      </a>
    </div>

  </div>
</div>
`;
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let category = buttons[i].id;

    for (let j = 0; j < products.length; j++) {
      if (category === "all" || products[j].id.startsWith(category)) {
        products[j].style.display = "";
      } else {
        products[j].style.display = "none";
      }
    }
  });
}

function viewCategoryProduct(index) {
  let product = CategoryProducts[index];

  let selectedProduct = {
    name: product.name,
    price: product.price,
    originalPrice: null,
    type: product.type,
    image: product.image,
    description: product.description || "No description available."
  };

  localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
}