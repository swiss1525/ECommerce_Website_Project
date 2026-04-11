let products = document.querySelectorAll(".product");

let featuredProducts = [
  {
    name: "HIT ME HARD AND SOFT DIGITAL ALBUM",
    price: 19.99,
    type: "Digital Album",
    image: "images\\Homepage_Featured\\HIT_ME_HARD_AND_SOFT.jpg",
    description: "It's Billie Eilish's latest album, 'HIT ME HARD AND SOFT'. Get it now on digital only!"
  },
  {
    name: "BTS 'ARIRANG' DIGITAL ALBUM",
    price: 29.99,
    type: "Digital Album",
    image: "images\\Homepage_Featured\\BTS_Arirang_digital_album_cover.jpg",
    description: "BTS is back with their new album 'ARIRANG'! After 2 years of military, the biggest k-pop boy band go back to their roots and embrace their story from the ground-up."
  },
  {
    name: "BRUNO MARS 'THE ROMANTIC' VINYL",
    price: 39.99,
    type: "Vinyl",
    image: "images\\Homepage_Featured\\bruno-mars-the-romantic.jpeg",
    description: "It's Bruno Mars' 'The Romantic' now on VINYL!"
  },
  {
    name: "TAYLOR SWIFT 'TLOAS' ALBUM",
    price: 29.99,
    discount: 22.99,
    type: "Physical Album",
    image: "images\\Homepage_Featured\\The_Life_of_a_Showgirl.jpg",
    description: "Record breaking artist and album, Taylor Swift's 'The Life of A Showgirl' is available now!"
  },
  {
    name: "JUSTIN BIEBER 'SWAG' ALBUM",
    price: 29.99,
    type: "Physical Album",
    image: "images\\Homepage_Featured\\swag_justin_bieber.jpg",
    description: "Get 'SWAG' with Justin Bieber! Get your physical copy of Swag now!"
  },
  {
    name: "NIRVANA 'NEVERMIND' VINYL",
    price: 39.99,
    discount: 20.99,
    type: "Vinyl",
    image: "images\\Homepage_Featured\\nirvana_nevermind.jpg",
    description: "Classic and iconic. Nirvana's 'NEVERMIND' is now available in VINYL!"
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
<div class="col-auto">

<a href="product-details.html" 
   class="btn btn-primary mt-auto"
   onclick="viewFeaturedProduct(${i})">
  View Details
</a>
<a
style="background-color: green; border-color: green"
class="btn btn-primary mt-auto"
onclick="AddToCart(${i})">
Add To Cart
</a>

</div>

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

      <div class="col-auto">

<a href="product-details.html" 
   class="btn btn-primary mt-auto"
   onclick="viewFeaturedProduct(${i})">
  View Details
</a>
<a
style="background-color: green; border-color: green"
class="btn btn-primary mt-auto"
onclick="AddToCart(${i})">
Add To Cart
</a>

</div>
      
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
    type: product.type,
    description: product.description || "No description available.",
  };

  localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
}

function AddToCart(index) {
let product = featuredProducts[index];

  let cartItem = {
    name: product.name,
    price: product.price,
    image: product.image,
    quantity: 1,
    total: product.price * 1,
  };

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(cartItem);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Added item to your cart!");

}
