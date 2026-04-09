let teamMembers = [
    {
        name: "Dario",
        title: "CEO",
        image: "images/default_picture.jpg",
        description: "The team leader"
    },
    {
        name: "Pargol",
        title: "General Manager",
        image: "images/default_picture.jpg",
        description: "The GM of the shop"
    },
    {
        name: "Andres",
        title: "Logistics Manager",
        image: "images/default_picture.jpg",
        description: "The man of the hour. Runs and analyzes all metrics and data of your products"
    },
    {
        name: "Lebron James",
        title: "Website Mascot",
        image: "images/default_picture.jpg",
        description: "Can't have a website without an honourable mascot"
    },
];

let teamCard = document.getElementById("teamMembers");

for (let i = 0; i < teamMembers.length; i++) {

    teamCard.innerHTML += `
                <div class="col-auto">
                <div class="card" style="width:400px">
              <img class="card-img-top" src="${teamMembers[i].image}" style="width:100%">
              <div class="card-body">
                <h4 class="card-title">${teamMembers[i].name}</h4>
                <p style="font-size: 20px; font-style: italic">${teamMembers[i].title}</p>
                <p class="card-text">${teamMembers[i].description}</p>
              </div>
            </div>
            </div>
    `
    
}