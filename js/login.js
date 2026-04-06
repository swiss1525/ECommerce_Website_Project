let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let email = document.getElementById("loginEmail").value.trim().toLowerCase();
  let password = document.getElementById("loginPassword").value.trim();

  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Find user
  let user = users.find(user => user.email === email && user.password === password);

  if (!user) {
    alert("Invalid email or password.");
    return;
  }

  // Save logged-in user
  localStorage.setItem("currentUser", JSON.stringify(user));

  alert("Login successful!");

  // Redirect to profile page
  window.location.href = "profile.html";
});