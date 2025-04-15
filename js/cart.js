/**
 * Shared cart functionality for Blow Flow Creationz
 * This script handles cart operations across all pages
 */

// Initialize cart
let cart = JSON.parse(localStorage.getItem('blowflowCart')) || [];

// Function to update cart count badge
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = count;
    }
}

// Function to open cart modal
function openCartModal() {
    const cartModal = document.getElementById('cartModal');
    const cartItemsEl = document.getElementById('cartItems');
    const cartEmptyEl = document.getElementById('cartEmpty');
    const cartTotalEl = document.getElementById('cartTotal');
    const checkoutBtn = document.getElementById('checkoutBtn');
    
	cartModal.classList.add('active');
    }
    
    // Clear cart items
    cartItemsEl.innerHTML = '';
    
    // Show/hide empty cart message
    if (cart.length === 0) {
        cartEmptyEl.style.display = 'block';
        cartTotalEl.style.display = 'none';
        checkoutBtn.disabled = true;
        checkoutBtn.style.opacity = '0.5';
    } else {
        cartEmptyEl.style.display = 'none';
        cartTotalEl.style.display = 'flex';
        checkoutBtn.disabled = false;
        checkoutBtn.style.opacity = '1';
        
        // Add cart items
        let total = 0;
        
        cart.forEach((item, index) => {
            const itemPrice = item.price || 0;
            const itemTotal = item.quantity * itemPrice;
            total += itemTotal;
            
            const cartItemEl = document.createElement('div');
            cartItemEl.className = 'cart-item';
            cartItemEl.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    ${item.details ? `<div class="cart-item-details">${item.details}</div>` : ''}
                </div>
                <div class="quantity-selector">
                    <button class="quantity-btn decrease" data-index="${index}">-</button>
                    <span class="quantity-value">${item.quantity}</span>
                    <button class="quantity-btn increase" data-index="${index}">+</button>
                </div>
                <div class="cart-item-price">$${itemTotal.toFixed(2)}</div>
                <button class="cart-item-remove" data-index="${index}">&times;</button>
            `;
            
            cartItemsEl.appendChild(cartItemEl);
        });
        
        // Update total
        document.getElementById('totalAmount').textContent = `$${total.toFixed(2)}`;
        
        // Add event listeners to quantity buttons
        document.querySelectorAll('.quantity-btn.decrease').forEach(button => {
            button.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                if (cart[index].quantity > 1) {
                    cart[index].quantity -= 1;
                    localStorage.setItem('blowflowCart', JSON.stringify(cart));
                    updateCartCount();
                    openCartModal(); // Refresh cart modal
                }
            });
        });
        
        document.querySelectorAll('.quantity-btn.increase').forEach(button => {
            button.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                cart[index].quantity += 1;
                localStorage.setItem('blowflowCart', JSON.stringify(cart));
                updateCartCount();
                openCartModal(); // Refresh cart modal
            });
        });
        
        // Add event listeners to remove buttons
        document.querySelectorAll('.cart-item-remove').forEach(button => {
            button.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                cart.splice(index, 1);
                localStorage.setItem('blowflowCart', JSON.stringify(cart));
                updateCartCount();
                openCartModal(); // Refresh cart modal
            });
        });
    }
    
    // Show cart modal
    cartModal.style.display = 'block';
}

// Function to add to cart
function addToCart(itemData, quantity = 1, options = null) {
    if (!itemData || !itemData.id) {
        console.error('Invalid item data');
        return;
    }
    
    let itemId = itemData.id;
    let itemName = itemData.name;
    let itemPrice = itemData.price;
    let itemImage = itemData.image;
    
    // Apply options if available
    if (options) {
        if (options.optionId) {
            itemId = options.optionId;
        }
        
        if (options.name) {
            itemName = `${itemData.name} - ${options.name}`;
        }
        
        if (options.price) {
            itemPrice = options.price;
        }
        
        if (options.image) {
            itemImage = options.image;
        }
    }
    
    // Check if this item is already in cart
    const existingItemIndex = cart.findIndex(item => item.id === itemId);
    
    if (existingItemIndex !== -1) {
        // Increment quantity
        cart[existingItemIndex].quantity += quantity;
    } else {
        // Add new item
        cart.push({
            id: itemId,
            productId: itemData.id,
            name: itemName,
            image: itemImage,
            price: itemPrice,
            details: options && options.details ? options.details : '',
            category: itemData.category || '',
            quantity: quantity
        });
    }
    
    // Save cart to localStorage
    localStorage.setItem('blowflowCart', JSON.stringify(cart));
    
    // Update cart count
    updateCartCount();
    
    return true;
}

// Function to remove from cart
function removeFromCart(itemId) {
    const itemIndex = cart.findIndex(item => item.id === itemId);
    
    if (itemIndex !== -1) {
        cart.splice(itemIndex, 1);
        localStorage.setItem('blowflowCart', JSON.stringify(cart));
        updateCartCount();
        return true;
    }
    
    return false;
}

// Function to update item quantity
function updateCartItemQuantity(itemId, quantity) {
    const itemIndex = cart.findIndex(item => item.id === itemId);
    
    if (itemIndex !== -1 && quantity > 0) {
        cart[itemIndex].quantity = quantity;
        localStorage.setItem('blowflowCart', JSON.stringify(cart));
        updateCartCount();
        return true;
    }
    
    return false;
}

// Function to clear cart
function clearCart() {
    cart = [];
    localStorage.setItem('blowflowCart', JSON.stringify(cart));
    updateCartCount();
}

// Function to get cart total
function getCartTotal() {
    return cart.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);
}

// Initialize cart when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    
    // Set up cart link click handler
    const cartLink = document.getElementById('cart-link');
    if (cartLink) {
        cartLink.addEventListener('click', function(e) {
            e.preventDefault();
            openCartModal();
        });
    }
    
    // Set up cart modal close handler
    const closeCartBtn = document.getElementById('closeCart');
    if (closeCartBtn) {
        closeCartBtn.addEventListener('click', function() {
            document.getElementById('cartModal').classList.remove('active');
        });
    }
    
    // Set up continue shopping button
    const continueShoppingBtn = document.getElementById('continueShoppingBtn');
    if (continueShoppingBtn) {
        continueShoppingBtn.addEventListener('click', function() {
            document.getElementById('cartModal').classList.remove('active');
        });
    }
    
    // Set up checkout button
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            if (cart.length > 0) {
                document.getElementById('cartModal').classList.remove('active');
                document.getElementById('checkoutModal').classList.add('active');
            }
        });
    }
    
    // Set up checkout modal close handler
    const closeCheckoutBtn = document.getElementById('closeCheckout');
    if (closeCheckoutBtn) {
        closeCheckoutBtn.addEventListener('click', function() {
            document.getElementById('checkoutModal').classList.remove('active');
        });
    }
    
    // Set up checkout form submission
    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
            
            // Prepare order details
            let orderDetails = 'Order Items:\n\n';
            let total = 0;
            
            cart.forEach(item => {
                const itemTotal = item.quantity * item.price;
                total += itemTotal;
                
                let itemLine = `- ${item.quantity}x ${item.name} ($${item.price.toFixed(2)} each): $${itemTotal.toFixed(2)}`;
                
                if (item.details) {
                    itemLine += `\n  Details: ${item.details}`;
                }
                
                orderDetails += itemLine + '\n';
            });
            
            orderDetails += `\nTotal: $${total.toFixed(2)}`;
            
            // Prepare email body
            const emailBody = `
            Name: ${name}
            Email: ${email}
            Phone: ${phone}

            ${orderDetails}

            Additional Notes:
            ${message}
            `;
            
            // Create mailto link
            const mailtoLink = `mailto:info@dwarvenforged.com?subject=New Order from ${name}&body=${encodeURIComponent(emailBody)}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Clear cart
            clearCart();
            
            // Close checkout modal
            document.getElementById('checkoutModal').classList.remove('active');
            
            // Show thank you message
            alert('Thank you for your order! Your email client has been opened with your order details. Please send the email to complete your order.');
        });
    }
    
    // Close modals when clicking outside
    window.addEventListener('click', function(event) {
        const cartModal = document.getElementById('cartModal');
        const checkoutModal = document.getElementById('checkoutModal');
        
        if (event.target === cartModal) {
            cartModal.classList.remove('active');
        }
        
        if (event.target === checkoutModal) {
            checkoutModal.classList.remove('active');
        }
    });
});
    
    // Close modals when clicking outside
    window.addEventListener('click', function(event) {
        const cartModal = document.getElementById('cartModal');
        const checkoutModal = document.getElementById('checkoutModal');
        
        if (event.target === cartModal) {
            cartModal.style.display = 'none';
        }
        
        if (event.target === checkoutModal) {
            checkoutModal.style.display = 'none';
        }
    });
});

// Export functions for use in other scripts
window.blowflowCart = {
    addToCart,
    removeFromCart,
    updateCartItemQuantity,
    clearCart,
    getCartTotal,
    openCartModal,
    updateCartCount
};