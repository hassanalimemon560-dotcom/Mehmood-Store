document.getElementById("loginBtn").addEventListener("click", function(e) {
  e.preventDefault();

  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value.trim();

  let savedUser = JSON.parse(localStorage.getItem("userData"));

  if (!savedUser) {
    alert("No account found! Please Sign Up first.");
    return;
  }

  if ( (username === savedUser.username || username === savedUser.email) 
       && password === savedUser.password ) {

    alert("Login Successful ✅ Redirecting...");
    window.location.href = "dashboard.html"; // Change to your actual page

  } else {
    alert("Incorrect Username/Email or Password ❌");
  }
});

// Show Password Feature
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {
  const type = passwordInput.type === "password" ? "text" : "password";
  passwordInput.type = type;
  togglePassword.textContent = type === "password" ? "👁️" : "🙈";
});
