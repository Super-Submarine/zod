// Product Data
const products = [
    {
        id: 1,
        title: "Apple AirPods Pro (2nd Generation) Wireless Earbuds",
        price: 189.99,
        originalPrice: 249.99,
        image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=300&h=300&fit=crop",
        rating: 4.7,
        reviews: 125843,
        badge: "Limited time deal",
        shipping: "FREE delivery Wed, Jun 18"
    },
    {
        id: 2,
        title: "Samsung Galaxy S24 Ultra 256GB Unlocked Smartphone",
        price: 1099.99,
        originalPrice: 1299.99,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&h=300&fit=crop",
        rating: 4.5,
        reviews: 8432,
        badge: "15% off",
        shipping: "FREE delivery Tomorrow"
    },
    {
        id: 3,
        title: "Sony WH-1000XM5 Wireless Noise Canceling Headphones",
        price: 278.00,
        originalPrice: 399.99,
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=300&h=300&fit=crop",
        rating: 4.6,
        reviews: 45672,
        badge: "Best Seller",
        shipping: "FREE delivery Wed, Jun 18"
    },
    {
        id: 4,
        title: "Kindle Paperwhite (16 GB) - Now with 6.8\" display",
        price: 109.99,
        originalPrice: 149.99,
        image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=300&h=300&fit=crop",
        rating: 4.7,
        reviews: 98234,
        badge: "27% off",
        shipping: "FREE delivery Thu, Jun 19"
    },
    {
        id: 5,
        title: "Apple Watch Series 9 GPS 45mm Aluminum Case",
        price: 329.00,
        originalPrice: 429.00,
        image: "https://images.unsplash.com/photo-1546868871-af0de0ae72be?w=300&h=300&fit=crop",
        rating: 4.5,
        reviews: 23456,
        badge: "23% off",
        shipping: "FREE delivery Wed, Jun 18"
    }
];

const recommendedProducts = [
    {
        id: 6,
        title: "Mechanical Gaming Keyboard RGB Backlit Hot-Swappable",
        price: 49.99,
        originalPrice: 79.99,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=300&h=300&fit=crop",
        rating: 4.4,
        reviews: 12345,
        badge: "38% off",
        shipping: "FREE delivery Thu, Jun 19"
    },
    {
        id: 7,
        title: "Portable Bluetooth Speaker Waterproof IPX7 Outdoor",
        price: 35.99,
        originalPrice: 59.99,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop",
        rating: 4.3,
        reviews: 8765,
        badge: "40% off",
        shipping: "FREE delivery Fri, Jun 20"
    },
    {
        id: 8,
        title: "USB-C Hub Multiport Adapter 7-in-1 Dongle for Laptop",
        price: 24.99,
        originalPrice: 39.99,
        image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=300&h=300&fit=crop",
        rating: 4.5,
        reviews: 34567,
        badge: "Best Seller",
        shipping: "FREE delivery Wed, Jun 18"
    },
    {
        id: 9,
        title: "Wireless Charging Pad 15W Fast Charger Compatible",
        price: 15.99,
        originalPrice: 29.99,
        image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=300&fit=crop",
        rating: 4.2,
        reviews: 5432,
        badge: "47% off",
        shipping: "FREE delivery Thu, Jun 19"
    },
    {
        id: 10,
        title: "Smart Home Security Camera WiFi 1080P Night Vision",
        price: 29.99,
        originalPrice: 49.99,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=300&h=300&fit=crop",
        rating: 4.1,
        reviews: 6789,
        badge: "40% off",
        shipping: "FREE delivery Fri, Jun 20"
    }
];

// Cart State
let cart = [];

// DOM Elements
const productsGrid = document.getElementById('products-grid');
const recommendedGrid = document.getElementById('recommended-grid');
const cartSidebar = document.getElementById('cart-sidebar');
const cartOverlay = document.getElementById('cart-overlay');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotalPrice = document.getElementById('cart-total-price');
const cartFooter = document.getElementById('cart-footer');
const navCart = document.getElementById('nav-cart');
const cartClose = document.getElementById('cart-close');

// Render Products
function renderProducts(productList, container) {
    container.innerHTML = productList.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.title}">
            ${product.badge ? `<p class="product-badge">${product.badge}</p>` : ''}
            <h4>${product.title}</h4>
            <div class="product-rating">
                <span class="stars">${getStars(product.rating)}</span>
                <span class="count">${product.reviews.toLocaleString()}</span>
            </div>
            <div class="product-price">
                <span class="price-symbol">$</span><span class="price-whole">${Math.floor(product.price)}</span><span class="price-fraction">${(product.price % 1).toFixed(2).slice(2)}</span>
                <span class="original-price">$${product.originalPrice.toFixed(2)}</span>
            </div>
            <p class="product-shipping"><span>${product.shipping}</span></p>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `).join('');
}

// Generate Star Rating
function getStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    let stars = '';
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fa-solid fa-star"></i>';
    }
    if (halfStar) {
        stars += '<i class="fa-solid fa-star-half-stroke"></i>';
    }
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="fa-regular fa-star"></i>';
    }
    return stars;
}

// Add to Cart
function addToCart(productId) {
    const allProducts = [...products, ...recommendedProducts];
    const product = allProducts.find(p => p.id === productId);
    
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCart();
    openCart();
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Update Quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
            return;
        }
    }
    updateCart();
}

// Update Cart UI
function updateCart() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    cartCount.textContent = totalItems;
    cartTotalPrice.textContent = `$${totalPrice.toFixed(2)}`;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        cartFooter.style.display = 'none';
    } else {
        cartFooter.style.display = 'block';
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.title}">
                <div class="cart-item-details">
                    <h4>${item.title}</h4>
                    <p class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</p>
                    <div class="cart-item-controls">
                        <button onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                    <button class="cart-item-remove" onclick="removeFromCart(${item.id})">Remove</button>
                </div>
            </div>
        `).join('');
    }
}

// Cart Open/Close
function openCart() {
    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
}

function closeCart() {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
}

navCart.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

// Hero Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const sliderLeft = document.getElementById('slider-left');
const sliderRight = document.getElementById('slider-right');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

sliderLeft.addEventListener('click', () => showSlide(currentSlide - 1));
sliderRight.addEventListener('click', () => showSlide(currentSlide + 1));

// Auto-slide every 5 seconds
setInterval(() => showSlide(currentSlide + 1), 5000);

// Search Functionality
const searchInput = document.querySelector('.search-input');
const searchIcon = document.querySelector('.search-icon');

function performSearch() {
    const query = searchInput.value.toLowerCase().trim();
    if (!query) {
        renderProducts(products, productsGrid);
        renderProducts(recommendedProducts, recommendedGrid);
        return;
    }
    
    const allProducts = [...products, ...recommendedProducts];
    const results = allProducts.filter(p => 
        p.title.toLowerCase().includes(query)
    );
    
    productsGrid.innerHTML = '';
    recommendedGrid.innerHTML = '';
    
    if (results.length > 0) {
        renderProducts(results, productsGrid);
        document.querySelector('.products-section .section-title').textContent = `Results for "${query}"`;
    } else {
        productsGrid.innerHTML = '<p style="padding: 20px; color: #565959;">No results found. Try a different search term.</p>';
        document.querySelector('.products-section .section-title').textContent = `Results for "${query}"`;
    }
}

searchIcon.addEventListener('click', performSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') performSearch();
});

// Initialize
renderProducts(products, productsGrid);
renderProducts(recommendedProducts, recommendedGrid);

// Back to top
document.querySelector('.footer-top a').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
