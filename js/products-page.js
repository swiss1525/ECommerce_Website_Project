let productsCategory = [
  {
    id: "vinyls1",
    name: "BTS 'ARIRANG' Vinyl",
    price: 60.99,
    type: "Vinyl",
    image: "./images/bts_arirang.jpg",
    description:
      "Experience the magic of BTS with the 'ARIRANG' vinyl. This limited edition release features exclusive tracks and stunning artwork, making it a must-have for any ARMY. Immerse yourself in the world of BTS and enjoy the rich sound quality of vinyl.",
  },
  {
    id: "albums1",
    name: "MICHAEL JACKSON 'BAD' DELUXE ALBUM",
    price: 59.99,
    type: "Album",
    image: "./images/Products/BAD.jpg",
    description: "",
  },
  {
    id: "songs1",
    name: "BRUCE SPRINGSTEEN 'BORN IN THE U.S.A'",
    price: 29.99,
    type: "Song",
    image: "./images/Products/born_in_the_usa.jpg",
    description: "The ultimate song by Bruce Springsteen",
  },
  {
    id: "vinyls2",
    name: "RED HOT CHILLI PEPPERS 'CALIFORNICATION' VINYL",
    price: 39.99,
    type: "vinyl",
    image: "./images/Products/californication.jpg",
    description: "The ultimate vinyl by Red Hot Chilli Peppers",
  },
  {
    id: "albums1",
    name: "ED SHEERAN 'DIVIDE' (÷) ALBUM",
    price: 39.99,
    type: "Album",
    image: "./images/Products/divide_ed_sheeran.jpg",
    description: "The ultimate album by Ed Sheeran",
  },
  {
    id: "vinyls2",
    name: "THE WEEKND 'HURRY UP TOMORROW' DELUXE VINYLS (x2)",
    price: 79.99,
    type: "vinyl",
    image: "./images/Products/HurryUpTomorrow_Weeknd.jpg",
    description: "The ultimate album by the weeknd. Product includes 2 vinyls.",
  },
  {
    id: "albums2",
    name: "METALLICA 'MASTER OF PUPPETS' REMASTERED ALBUM",
    price: 45.99,
    type: "Album",
    image: "./images/Products/master_of_puppets_metallica.jpg",
    description: "The ultimate remastered album by Metallica",
  },
  {
    id: "vinyls1",
    name: "BLACK SABBATH 'PARANOID' VINYL",
    price: 39.99,
    type: "Album",
    image: "./images/Products/paranoid_black_sabbath.jpg",
    description: "The ultimate vinyl by Black Sabbath.",
  },
  {
    id: "vinyls2",
    name: "DOJA CAT 'PLANET HER' VINYL (X2)",
    price: 65.99,
    type: "Vinyl",
    image: "./images/Products/planet_her_doja.jpg",
    description: "The ultimate vinyl by Doja Cat",
  },
  {
    id: "songs1",
    name: "CHARM CITY DEVILS 'LET'S ROCK 'N ROLL'",
    price: 19.99,
    type: "Song",
    image: "./images/Products/rock_n_roll.jpg",
    description: "The ultimate song by Charm City Devils.",
  },
  {
    id: "vinyls2",
    name: "TWENTY ONE PILOTS 'SCALED AND ICY' VINYL",
    price: 39.99,
    type: "Vinyl",
    image: "./images/Products/scaled_and_icy_twenty_one_pilots.jpg",
    description: "The ultimate vinyl by Twenty One Pilots.",
  },
  {
    id: "vinyls1",
    name: "CAT STEVENS 'TEA FOR THE TILLERMAN' VINYL",
    price: 49.99,
    type: "vinyl",
    image: "./images/Products/tea_for_the_tillerman.jpg",
    description: "The ultimate vinyl by Cat Stevens",
  },
  {
    id: "albums1",
    name: "GORILLAZ 'THE MOUNTAIN' ALBUM (CD x2)",
    price: 39.99,
    type: "Album",
    image: "./images/Products/the_mountain_gorillaz.jpg",
    description: "The ultimate album by Gorillaz. Comes with 2 CD.",
  },
  {
    id: "albums1",
    name: "MICHAEL JACKSON 'THRILLER' DELUXE ALBUM",
    price: 49.99,
    type: "Album",
    image: "./images/Products/thriller.jpg",
    description: "The ultimate album by eminem",
  },
  {
    id: "songs1",
    name: "TWENTY ONE PILOTS 'CHLORINE'",
    price: 19.99,
    type: "Song",
    image: "./images/Products/trench_twenty_one_pilots.jpg",
    description: "The ultimate song by eminem 'CHLORINE' from the album 'TRENCH'.",
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
