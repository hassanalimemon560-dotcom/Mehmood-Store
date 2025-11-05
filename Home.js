document.addEventListener("DOMContentLoaded", () => {

    const contactBtn = document.getElementById("contactBtn");
    const popup = document.getElementById("popupBox");
    const closeBtn = document.getElementById("closeBtn");

    contactBtn.addEventListener("click", () => {
        popup.classList.add("show");
    });

    closeBtn.addEventListener("click", () => {
        popup.classList.remove("show");
    });

});


function goToLogin() {
  window.location.href = "Login.html";
}

function goToSignup() {
  window.location.href = "SignUp.html";
}

function learnMore() {
  alert("This is Mehmood AirPods Store — premium sound, modern design!");
}

// When page scrolls, show feature boxes with fade-up animation
window.addEventListener("scroll", () => {
  const boxes = document.querySelectorAll(".feature-box");
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    const trigger = window.innerHeight * 0.85; // 85% of screen height
    if (boxTop < trigger) {
      box.classList.add("visible");
    }
  });
});

// Small glowing animation every few seconds
setInterval(() => {
  const boxes = document.querySelectorAll(".feature-box2");
  const randomBox = boxes[Math.floor(Math.random() * boxes.length)];
  randomBox.classList.add("glow");
  setTimeout(() => randomBox.classList.remove("glow"), 1000);
}, 3000);


document.getElementById("learnMoreBtn").addEventListener("click", function () {
            document.getElementById("feature-box2").scrollIntoView({
                behavior: "smooth"
            });
        });

        document.getElementById("learnMoreBtn").addEventListener("click", function() {
    document.getElementById("features").scrollIntoView({ behavior: "smooth" });
});

document.querySelector('.learn-more-btn').addEventListener('click', function() {
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

let selectedRating = 0;

document.querySelectorAll(".star").forEach(star => {
  star.addEventListener("click", function () {
    selectedRating = this.getAttribute("data-value");
    document.querySelectorAll(".star").forEach(s => s.classList.remove("selected"));
    this.classList.add("selected");
    let prev = this.previousElementSibling;
    while(prev){
      prev.classList.add("selected");
      prev = prev.previousElementSibling;
    }
  });
});

document.getElementById("feedbackForm").addEventListener("submit", function(event){
  event.preventDefault();
  alert(
    "Thank You for your Feedback!\n\n" +
    "Name: " + document.getElementById("name").value +
    "\nEmail: " + document.getElementById("email").value +
    "\nRating: " + selectedRating + " Stars"
  );
});


