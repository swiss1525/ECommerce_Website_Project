let products = document.querySelectorAll(".product");

let featuredProducts = [
  {
    name: "HIT ME HARD AND SOFT DIGITAL ALBUM",
    price: 19.99,
    image: "images\\Homepage_Featured\\HIT_ME_HARD_AND_SOFT.jpg",
  },
  {
    name: "BTS 'ARIRANG' VINYL",
    price: 39.99,
    image: "images\\Homepage_Featured\\BTS_Arirang_digital_album_cover.jpg",
  },
  {
    name: "BRUNO MARS 'AN EVENING WITH SILK SONIC' VINYL",
    price: 39.99,
    image: "images\\Homepage_Featured\\bruno-mars-the-romantic.jpeg",
  },
  {
    name: "TAYLOR SWIFT 'TLOAS' ALBUM",
    price: 29.99,
    discount: 22.99,
    image: "images\\Homepage_Featured\\The_Life_of_a_Showgirl.jpg",
  },
  {
    name: "JUSTIN BIEBER 'SWAG' ALBUM",
    price: 29.99,
    image: "images\\Homepage_Featured\\swag_justin_bieber.jpg",
  },
  {
    name: "NIRVANA 'NEVERMIND' VINYL",
    price: 39.99,
    discount: 20.99,
    image: "images\\Homepage_Featured\\nirvana_nevermind.jpg",
  },
];

let productList = document.getElementById("product-list");

for (let i = 0; i < featuredProducts.length; i++) {
  if (featuredProducts[i].discount) {
    productList.innerHTML += `
<div class="col-md-6 col-lg-4 g-5">
  <div class="card h-100 shadow-sm border-0">

    <img 
      src="${featuredProducts[i].image}" 
      class="card-img-top featured-product-image"
      alt="${featuredProducts[i].name}"
    >

    <div class="card-body d-flex flex-column text-center">

      <h5 class="card-title fw-bold">
        ${featuredProducts[i].name}
      </h5>
<div style="display: flex; justify-content: center; gap: 10px;">
      <p class="card-text fw-semibold fs-5" style="color: gray; text-decoration: line-through;">
        $${featuredProducts[i].price}
      </p>
      <p class="card-text text-success fw-semibold fs-5">
        $${featuredProducts[i].discount}
      </p>
</div>
      <a href="product-details.html" 
         class="btn btn-primary mt-auto"
         onclick="viewFeaturedProduct(${i})">
        View Details
      </a>

    </div>
  </div>
</div>
`;
  } else {
    productList.innerHTML += `
<div class="col-md-6 col-lg-4 g-5">
  <div class="card h-100 shadow-sm border-0">

    <img 
      src="${featuredProducts[i].image}" 
      class="card-img-top featured-product-image"
      alt="${featuredProducts[i].name}"
    >

    <div class="card-body d-flex flex-column text-center">

      <h5 class="card-title fw-bold">
        ${featuredProducts[i].name}
      </h5>

      <p class="card-text text-success fw-semibold fs-5">
        $${featuredProducts[i].price}
      </p>

      <a href="product-details.html" 
         class="btn btn-primary mt-auto"
         onclick="viewFeaturedProduct(${i})">
        View Details
      </a>

    </div>
  </div>
</div>
`;
  }
}

function viewFeaturedProduct(index) {
  let product = featuredProducts[index];

  let selectedProduct = {
    name: product.name,
    price: product.discount || product.price,
    originalPrice: product.discount ? product.price : null,
    image: product.image,
    description: product.description || "No description available.",
  };

  localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
}
