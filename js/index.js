let buttons = document.querySelectorAll(".filter-btn");
let products = document.querySelectorAll(".product");

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
