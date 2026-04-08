let artistSlides = [
  {
    image: "images/Artist_Showcase/coldplay.jpg",
    title: "Coldplay",
    description: "Experience the magic of Coldplay's latest tour."
  },
  {
    image: "images/Artist_Showcase/twenty-one-pilots.jpg",
    title: "Twenty One Pilots",
    description: "Discover the unique sound and captivating performances of Twenty One Pilots."
  },
];

let currentSlide = 0;

let sliderImage = document.getElementById("sliderImage");
let sliderTitle = document.getElementById("sliderTitle");
let sliderDescription = document.getElementById("sliderDescription");
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");

function showSlide(index) {
  sliderImage.src = artistSlides[index].image;
  sliderTitle.innerText = artistSlides[index].title;
  sliderDescription.innerText = artistSlides[index].description;
}

showSlide(currentSlide);

nextBtn.addEventListener("click", function () {
  currentSlide++;

  if (currentSlide >= artistSlides.length) {
    currentSlide = 0;
  }

  showSlide(currentSlide);
});

prevBtn.addEventListener("click", function () {
  currentSlide--;

  if (currentSlide < 0) {
    currentSlide = artistSlides.length - 1;
  }

  showSlide(currentSlide);
});