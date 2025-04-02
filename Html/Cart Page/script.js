// JavaScript for Shopping Cart Functionality
const apiURL = "https://cdn.shopify.com/s/files/1/0883/2188/4479/files/apiCartData.json?v=1728384889";
const cartList = document.getElementById("cartList");
const subtotalElement = document.getElementById("subtotal");
const totalElement = document.getElementById("total");
const emptyCartMessage = document.getElementById("emptyCartMessage");
let cartData = [];

// Fetch cart data from API
async function fetchCartData() {
    try {
        const response = await fetch(apiURL);
        cartData = await response.json();
        renderCartItems();
        updateTotals();
    } catch (error) {
        console.error("Failed to fetch cart data:", error);
    }
}

// Render cart items dynamically
function renderCartItems() {
    cartList.innerHTML = "";
    if (cartData.length === 0) {
        emptyCartMessage.style.display = "block";
        return;
    }

    emptyCartMessage.style.display = "none";

    cartData.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.className = "cart-item";
        listItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="cart-item-image">
            <div class="cart-item-details">
                <h3 class="cart-item-title">${item.title}</h3>
                <p class="cart-item-price">₹${item.price.toFixed(2)}</p>
                <div class="cart-item-quantity">
                    <label for="quantity-${index}">Qty:</label>
                    <input type="number" id="quantity-${index}" class="quantity-input" value="${item.quantity}" min="1">
                </div>
                <p class="cart-item-subtotal">Subtotal: ₹${(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <button class="remove-btn" data-index="${index}">🗑️</button>
        `;

        cartList.appendChild(listItem);
    });

    addEventListeners();
}

// Add event listeners for quantity change and item removal
function addEventListeners() {
    const quantityInputs = document.querySelectorAll(".quantity-input");
    const removeButtons = document.querySelectorAll(".remove-btn");

    quantityInputs.forEach((input, index) => {
        input.addEventListener("change", (event) => updateQuantity(index, event.target.value));
    });

    removeButtons.forEach((button) => {
        button.addEventListener("click", (event) => removeItem(event.target.dataset.index));
    });
}

// Update item quantity
function updateQuantity(index, newQuantity) {
    newQuantity = parseInt(newQuantity);
    if (newQuantity < 1) return;

    cartData[index].quantity = newQuantity;
    renderCartItems();
    updateTotals();
}

// Remove item from cart
function removeItem(index) {
    cartData.splice(index, 1);
    renderCartItems();
    updateTotals();
}

// Calculate and update totals
function updateTotals() {
    const subtotal = cartData.reduce((sum, item) => sum + item.price * item.quantity, 0);
    subtotalElement.textContent = `₹${subtotal.toFixed(2)}`;
    totalElement.textContent = `₹${subtotal.toFixed(2)}`; // Assuming no additional charges for simplicity

    if (cartData.length === 0) {
        emptyCartMessage.style.display = "block";
    }
}

// Checkout button functionality
const checkoutBtn = document.getElementById("checkoutBtn");
checkoutBtn.addEventListener("click", () => {
    if (cartData.length === 0) {
        alert("Your cart is empty. Add items to proceed.");
        return;
    }

    alert("Thank you for your purchase!");
    cartData = [];
    renderCartItems();
    updateTotals();
});

// Initialize the cart functionality
fetchCartData();
