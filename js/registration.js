let registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let username = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let confirmPassword = document.getElementById("confirmPassword").value.trim();

  if (username === "" || email === "" || password === "" || confirmPassword === "") {
    alert("Please fill in all fields.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Check if email already exists
  let existingUser = users.find(user => user.email === email);

  if (existingUser) {
    alert("An account with this email already exists.");
    return;
  }

  let newUser = {
    id: Date.now(),
    username: username,
    email: email,
    password: password
  };

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  alert("Registration successful!");

  registrationForm.reset();
});