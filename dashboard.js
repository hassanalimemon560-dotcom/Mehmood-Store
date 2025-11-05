let wish = 0;

document.querySelectorAll(".cartBtn").forEach(btn => {
    btn.addEventListener("click", () => {
        cart++;
        document.getElementById("cartCount").innerText = cart;
    });
});

document.querySelectorAll(".wishBtn").forEach(btn => {
    btn.addEventListener("click", () => {
        wish++;
        document.getElementById("wishCount").innerText = wish;
    });
});
let cart = JSON.parse(localStorage.getItem("cartItems")) || [];

document.querySelectorAll(".cartBtn").forEach(btn => {
    btn.addEventListener("click", (e) => {

        let card = e.target.closest(".product-card");
        let item = {
            name: card.dataset.name,
            price: card.dataset.price,
            img: card.dataset.img,
            qty: 1
        };

        cart.push(item);
        localStorage.setItem("cartItems", JSON.stringify(cart));
        updateCartCount();
    });
});

function updateCartCount(){
    document.getElementById("cartCount").innerText = cart.length;
}

updateCartCount();

function addToCart(name, price, img) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({ name, price, img });

  localStorage.setItem("cart", JSON.stringify(cart));

  // Update cart counter
  let count = document.getElementById("cartCount");
  if(count) count.innerText = cart.length;

  alert(name + " added to cart ✅");
}
// Cart Count Function
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cart-count").textContent = cart.length;
}

// When user adds to cart (example function)
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount(); // refresh count
}

// Run on Page Load
updateCartCount();
