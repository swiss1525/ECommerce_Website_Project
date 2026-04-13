let contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    //  form values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let errorMessage = document.getElementById("error")
    
    // form styling
    
    let nameInput = document.getElementById("name");
    let emailInput = document.getElementById("email");
    let messageInput = document.getElementById("message");

    //  validation
    if (name === '' || email === '' || message === '') {
        if (name === '') {
            nameInput.style.borderColor = "Red";
        }
        if (email === '') {
            emailInput.style.borderColor = "Red";
        }
        if (message === '') {
            messageInput.style.borderColor = "Red";
        }
        errorMessage.innerText = "Please fill in all of the fields"
        return;
    }


    let messageSubmitted = {
        email: email,
        name: name,
        message: message
    }

      localStorage.setItem("messageSubmitted", JSON.stringify(messageSubmitted));

      console.log(messageSubmitted);
      alert("Message submitted (View console)");
ClearForm();
      
    });
    function ClearForm() {
        contactForm.reset();
    }