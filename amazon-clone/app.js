// Product Data
const products = [
    {
        id: 1,
        title: "Apple AirPods Pro (2nd Generation) Wireless Earbuds with USB-C Charging",
        image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=300&h=300&fit=crop",
        price: 189.99,
        originalPrice: 249.99,
        rating: 4.7,
        ratingCount: 128543,
        prime: true,
        deal: true,
        discount: 24
    },
    {
        id: 2,
        title: "Samsung 65-Inch Class OLED 4K Smart TV with Alexa Built-in",
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300&h=300&fit=crop",
        price: 1297.99,
        originalPrice: 1799.99,
        rating: 4.5,
        ratingCount: 34521,
        prime: true,
        deal: true,
        discount: 28
    },
    {
        id: 3,
        title: "Kindle Paperwhite (16 GB) - Now with 6.8\" Display and Adjustable Warm Light",
        image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=300&h=300&fit=crop",
        price: 99.99,
        originalPrice: 139.99,
        rating: 4.6,
        ratingCount: 89234,
        prime: true,
        deal: true,
        discount: 29
    },
    {
        id: 4,
        title: "Instant Pot Duo 7-in-1 Electric Pressure Cooker, 6 Quart, Stainless Steel",
        image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=300&h=300&fit=crop",
        price: 69.95,
        originalPrice: 99.99,
        rating: 4.7,
        ratingCount: 156789,
        prime: true,
        deal: true,
        discount: 30
    },
    {
        id: 5,
        title: "Sony WH-1000XM5 Wireless Noise Cancelling Over-Ear Headphones",
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=300&h=300&fit=crop",
        price: 278.00,
        originalPrice: 399.99,
        rating: 4.4,
        ratingCount: 45678,
        prime: true,
        deal: true,
        discount: 31
    },
    {
        id: 6,
        title: "LEGO Architecture Statue of Liberty 21042 Model Building Set",
        image: "https://images.unsplash.com/photo-1587654780291-39c9404d7dd0?w=300&h=300&fit=crop",
        price: 95.95,
        originalPrice: 119.99,
        rating: 4.8,
        ratingCount: 23456,
        prime: true,
        deal: false,
        discount: 20
    },
    {
        id: 7,
        title: "Dyson V15 Detect Cordless Vacuum Cleaner with Laser Technology",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=300&h=300&fit=crop",
        price: 549.99,
        originalPrice: 749.99,
        rating: 4.5,
        ratingCount: 12890,
        prime: true,
        deal: true,
        discount: 27
    },
    {
        id: 8,
        title: "Nintendo Switch OLED Model with White Joy-Con Gaming Console",
        image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=300&h=300&fit=crop",
        price: 329.99,
        originalPrice: 349.99,
        rating: 4.8,
        ratingCount: 67890,
        prime: true,
        deal: false,
        discount: 6
    }
];

const recommendedProducts = [
    {
        id: 9,
        title: "Mechanical Keyboard RGB Backlit 87-Key Tenkeyless Gaming Keyboard",
        image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=300&h=300&fit=crop",
        price: 49.99,
        originalPrice: 79.99,
        rating: 4.3,
        ratingCount: 8765,
        prime: true,
        deal: false,
        discount: 38
    },
    {
        id: 10,
        title: "Wireless Gaming Mouse with 16000 DPI Optical Sensor, RGB Lighting",
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=300&h=300&fit=crop",
        price: 39.99,
        originalPrice: 59.99,
        rating: 4.4,
        ratingCount: 11234,
        prime: true,
        deal: false,
        discount: 33
    },
    {
        id: 11,
        title: "Ultra-Wide 34\" Curved Monitor 3440x1440 144Hz for Productivity",
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300&h=300&fit=crop",
        price: 399.99,
        originalPrice: 549.99,
        rating: 4.6,
        ratingCount: 5432,
        prime: true,
        deal: false,
        discount: 27
    },
    {
        id: 12,
        title: "Premium Leather Laptop Sleeve Case for 13-14 Inch MacBook Pro",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
        price: 34.99,
        originalPrice: 49.99,
        rating: 4.5,
        ratingCount: 3421,
        prime: true,
        deal: false,
        discount: 30
    },
    {
        id: 13,
        title: "Portable Bluetooth Speaker Waterproof with 24-Hour Playtime",
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop",
        price: 29.99,
        originalPrice: 44.99,
        rating: 4.3,
        ratingCount: 18765,
        prime: true,
        deal: false,
        discount: 33
    },
    {
        id: 14,
        title: "Smart Watch Fitness Tracker with Heart Rate Monitor, GPS, Sleep Tracking",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
        price: 159.99,
        originalPrice: 249.99,
        rating: 4.2,
        ratingCount: 9876,
        prime: true,
        deal: false,
        discount: 36
    },
    {
        id: 15,
        title: "USB-C Hub Adapter 8-in-1 with 4K HDMI, Ethernet, SD Card Reader",
        image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=300&h=300&fit=crop",
        price: 27.99,
        originalPrice: 39.99,
        rating: 4.4,
        ratingCount: 14567,
        prime: true,
        deal: false,
        discount: 30
    },
    {
        id: 16,
        title: "Ergonomic Office Chair with Lumbar Support and Adjustable Armrests",
        image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=300&h=300&fit=crop",
        price: 249.99,
        originalPrice: 399.99,
        rating: 4.5,
        ratingCount: 7654,
        prime: true,
        deal: false,
        discount: 38
    }
];

// Cart State
let cart = [];

// DOM Elements
const productsGrid = document.getElementById('products-grid');
const recommendedGrid = document.getElementById('recommended-grid');
const cartIcon = document.getElementById('cart-icon');
const cartSidebar = document.getElementById('cart-sidebar');
const cartOverlay = document.getElementById('cart-overlay');
const cartClose = document.getElementById('cart-close');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');

// Render Stars
function renderStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.3;
    let starsHtml = '';
    
    for (let i = 0; i < fullStars; i++) {
        starsHtml += '<i class="fa-solid fa-star"></i>';
    }
    if (hasHalf) {
        starsHtml += '<i class="fa-solid fa-star-half-stroke"></i>';
    }
    const empty = 5 - fullStars - (hasHalf ? 1 : 0);
    for (let i = 0; i < empty; i++) {
        starsHtml += '<i class="fa-regular fa-star"></i>';
    }
    return starsHtml;
}

// Format number with commas
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Render Product Card
function renderProductCard(product) {
    const priceWhole = Math.floor(product.price);
    const priceFraction = Math.round((product.price - priceWhole) * 100).toString().padStart(2, '0');
    
    return `
        <div class="product-card" data-id="${product.id}">
            ${product.deal ? '<span class="deal-badge">Limited time deal</span>' : ''}
            <img class="product-image" src="${product.image}" alt="${product.title}" loading="lazy">
            <div class="product-title">${product.title}</div>
            <div class="product-rating">
                <span class="stars">${renderStars(product.rating)}</span>
                <span class="rating-count">${formatNumber(product.ratingCount)}</span>
            </div>
            <div class="product-price">
                <span class="price-symbol">$</span><span class="price-whole">${priceWhole}</span><span class="price-fraction">${priceFraction}</span>
                ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
                ${product.discount ? `<span class="discount-percent">(-${product.discount}%)</span>` : ''}
            </div>
            ${product.prime ? '<div class="product-prime"><span class="prime-badge">prime</span> FREE delivery</div>' : ''}
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `;
}

// Render Products
function renderProducts() {
    productsGrid.innerHTML = products.map(renderProductCard).join('');
    recommendedGrid.innerHTML = recommendedProducts.map(renderProductCard).join('');
}

// Add to Cart
function addToCart(productId) {
    const allProducts = [...products, ...recommendedProducts];
    const product = allProducts.find(p => p.id === productId);
    
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCart();
    showToast(`Added "${product.title.substring(0, 30)}..." to cart`);
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Update Quantity
function updateQuantity(productId, delta) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    item.quantity += delta;
    if (item.quantity <= 0) {
        removeFromCart(productId);
        return;
    }
    updateCart();
}

// Update Cart UI
function updateCart() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    cartCount.textContent = totalItems;
    cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.title}">
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.title}</div>
                    <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
                    <div class="cart-item-controls">
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span class="cart-item-qty">${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        <button class="cart-item-remove" onclick="removeFromCart(${item.id})">Delete</button>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// Cart Toggle
function openCart() {
    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

cartIcon.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

// Toast Notification
function showToast(message) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    requestAnimationFrame(() => {
        toast.classList.add('show');
    });
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

// Hero Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const prevBtn = document.querySelector('.hero-btn-left');
const nextBtn = document.querySelector('.hero-btn-right');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));

// Auto-slide
setInterval(() => showSlide(currentSlide + 1), 5000);

// Search Functionality
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');

function performSearch() {
    const query = searchInput.value.toLowerCase().trim();
    if (!query) {
        renderProducts();
        return;
    }
    
    const allProducts = [...products, ...recommendedProducts];
    const filtered = allProducts.filter(p => 
        p.title.toLowerCase().includes(query)
    );
    
    productsGrid.innerHTML = filtered.length > 0 
        ? filtered.map(renderProductCard).join('')
        : '<p style="grid-column: 1/-1; text-align: center; color: #565959; font-size: 16px; padding: 40px;">No products found matching your search.</p>';
    
    recommendedGrid.innerHTML = '';
    document.querySelector('.products-section:last-of-type .section-title').textContent = 
        filtered.length > 0 ? `Search results for "${query}"` : '';
}

searchBtn.addEventListener('click', performSearch);
searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') performSearch();
});

// Footer back to top
document.querySelector('.footer-top a').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Initialize
renderProducts();
