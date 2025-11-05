function loadCart(){
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let container = document.getElementById("cart-items");
  let total = 0;
  container.innerHTML = "";

  cart.forEach((item, index) => {
    container.innerHTML += `
      <div style="display:flex;align-items:center;margin-bottom:10px;">
        <img src="${item.image}" width="60" style="margin-right:10px;">
        <div style="flex:1;">
          <b>${item.name}</b><br>
          Rs. ${item.price}
        </div>
        <button onclick="removeItem(${index})" style="background:red;color:white;border:none;padding:5px 10px;">
          Remove
        </button>
      </div>
    `;
    total += item.price;
  });

  document.getElementById("total").innerText = total;
}

function removeItem(index){
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

loadCart();
