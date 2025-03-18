let cart = [];
let totalPrice = 0;

function addToCart(productName, productPrice) {
    // Add the product to the cart array
    cart.push({ name: productName, price: productPrice });

    // Update the total price
    totalPrice += productPrice;

    // Display the cart items
    updateCart();

    // Enable the checkout button if there are items in the cart
    if (cart.length > 0) {
        document.getElementById("checkoutBtn").disabled = false;
    }
}

function updateCart() {
    const cartContainer = document.querySelector('.cart-container');
    const cartItemsHTML = cart.map(item => `
        <div class="cart-item">
            <div class="item-details">
                <h3>${item.name}</h3>
                <p>$${item.price.toFixed(2)}</p>
            </div>
            <div class="item-actions">
                <button onclick="removeFromCart('${item.name}')">Remove</button>
            </div>
        </div>
    `).join('');

    cartContainer.innerHTML = `
        <h2>Your Cart</h2>
        ${cartItemsHTML}
        <div class="cart-total">
            <p>Total: <span class="total-price" id="totalPrice">$${totalPrice.toFixed(2)}</span></p>
            <button class="checkout-button" id="checkoutBtn" ${cart.length === 0 ? 'disabled' : ''}>Proceed to Checkout</button>
        </div>
    `;
}

function removeFromCart(productName) {
    // Remove the item from the cart array
    cart = cart.filter(item => item.name !== productName);

    // Update total price
    const product = cart.find(item => item.name === productName);
    totalPrice -= product.price;

    // Update the cart display
    updateCart();
}
