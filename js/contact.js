let contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // Simple validation
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
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