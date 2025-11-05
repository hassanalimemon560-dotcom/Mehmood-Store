document.getElementById("signUpBtn").addEventListener("click", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let username = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  if (name === "" || username === "" || email === "" || password === "") {
    alert("Please fill all fields.");
    return;
  }

  // Save Details in LocalStorage
  let user = {
    username: username,
    email: email,
    password: password
  };

  localStorage.setItem("userData", JSON.stringify(user));

  alert("Account Created Successfully ✅ Redirecting to Login...");
  window.location.href = "Login.html";
});
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {
  const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);

  // Change icon emoji when toggled
  togglePassword.textContent = type === "password" ? "👁️" : "🙈";
});