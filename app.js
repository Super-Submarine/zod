// Product Data
const products = [
    {
        id: 1,
        title: "Apple AirPods Pro (2nd Generation) Wireless Earbuds",
        image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=300&h=300&fit=crop",
        price: 189.99,
        originalPrice: 249.99,
        rating: 4.7,
        reviews: 125432,
        badge: "Limited time deal",
        delivery: "FREE delivery Tomorrow"
    },
    {
        id: 2,
        title: "Samsung Galaxy S24 Ultra Smartphone 256GB Unlocked",
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=300&h=300&fit=crop",
        price: 1099.99,
        originalPrice: 1299.99,
        rating: 4.5,
        reviews: 89234,
        badge: "15% off",
        delivery: "FREE delivery Wed, Jun 14"
    },
    {
        id: 3,
        title: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=300&h=300&fit=crop",
        price: 278.00,
        originalPrice: 399.99,
        rating: 4.8,
        reviews: 45672,
        badge: "Best Seller",
        delivery: "FREE delivery Tomorrow"
    },
    {
        id: 4,
        title: "Kindle Paperwhite (16 GB) - Now with larger display",
        image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=300&h=300&fit=crop",
        price: 129.99,
        originalPrice: 159.99,
        rating: 4.6,
        reviews: 67890,
        badge: "Amazon's Choice",
        delivery: "FREE delivery Thu, Jun 15"
    },
    {
        id: 5,
        title: "Nintendo Switch OLED Model with White Joy-Con",
        image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=300&h=300&fit=crop",
        price: 329.99,
        originalPrice: 349.99,
        rating: 4.8,
        reviews: 156789,
        badge: "",
        delivery: "FREE delivery Tomorrow"
    },
    {
        id: 6,
        title: "Dyson V15 Detect Absolute Cordless Vacuum Cleaner",
        image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=300&h=300&fit=crop",
        price: 599.99,
        originalPrice: 749.99,
        rating: 4.4,
        reviews: 23456,
        badge: "20% off",
        delivery: "FREE delivery Wed, Jun 14"
    },
    {
        id: 7,
        title: "Apple MacBook Air 15-inch with M3 Chip - 256GB",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=300&fit=crop",
        price: 1099.00,
        originalPrice: 1299.00,
        rating: 4.9,
        reviews: 34567,
        badge: "Best Seller",
        delivery: "FREE delivery Tomorrow"
    },
    {
        id: 8,
        title: "Instant Pot Duo 7-in-1 Electric Pressure Cooker 6Qt",
        image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=300&h=300&fit=crop",
        price: 69.99,
        originalPrice: 99.99,
        rating: 4.7,
        reviews: 345678,
        badge: "30% off",
        delivery: "FREE delivery Thu, Jun 15"
    },
    {
        id: 9,
        title: "Bose QuietComfort Ultra Wireless Noise Cancelling Earbuds",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12f8e4909?w=300&h=300&fit=crop",
        price: 249.00,
        originalPrice: 299.00,
        rating: 4.3,
        reviews: 12345,
        badge: "",
        delivery: "FREE delivery Wed, Jun 14"
    },
    {
        id: 10,
        title: "LEGO Star Wars Millennium Falcon Building Set 75375",
        image: "https://images.unsplash.com/photo-1587654780291-39c9404d7dd0?w=300&h=300&fit=crop",
        price: 149.99,
        originalPrice: 169.99,
        rating: 4.9,
        reviews: 78901,
        badge: "Amazon's Choice",
        delivery: "FREE delivery Tomorrow"
    },
    {
        id: 11,
        title: "Fitbit Charge 6 Advanced Fitness & Health Tracker",
        image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=300&h=300&fit=crop",
        price: 139.95,
        originalPrice: 159.95,
        rating: 4.2,
        reviews: 56789,
        badge: "",
        delivery: "FREE delivery Thu, Jun 15"
    },
    {
        id: 12,
        title: "Nespresso Vertuo Next Coffee and Espresso Machine",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=300&fit=crop",
        price: 159.00,
        originalPrice: 209.00,
        rating: 4.5,
        reviews: 23456,
        badge: "24% off",
        delivery: "FREE delivery Tomorrow"
    },
    {
        id: 13,
        title: "Canon EOS R50 Mirrorless Camera with 18-45mm Lens",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&h=300&fit=crop",
        price: 679.00,
        originalPrice: 799.00,
        rating: 4.6,
        reviews: 8901,
        badge: "15% off",
        delivery: "FREE delivery Wed, Jun 14"
    },
    {
        id: 14,
        title: "The North Face Thermoball Eco Jacket - Men's",
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=300&h=300&fit=crop",
        price: 179.95,
        originalPrice: 230.00,
        rating: 4.7,
        reviews: 12345,
        badge: "22% off",
        delivery: "FREE delivery Tomorrow"
    },
    {
        id: 15,
        title: "JBL Flip 6 Portable Bluetooth Speaker Waterproof",
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop",
        price: 99.95,
        originalPrice: 129.95,
        rating: 4.8,
        reviews: 67890,
        badge: "Best Seller",
        delivery: "FREE delivery Thu, Jun 15"
    },
    {
        id: 16,
        title: "Anker PowerCore 26800mAh Portable Charger Power Bank",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=300&h=300&fit=crop",
        price: 59.99,
        originalPrice: 79.99,
        rating: 4.6,
        reviews: 234567,
        badge: "25% off",
        delivery: "FREE delivery Tomorrow"
    }
];

// Cart State
let cart = [];

// DOM Elements
const cartBtn = document.getElementById('cart-btn');
const cartSidebar = document.getElementById('cart-sidebar');
const cartOverlay = document.getElementById('cart-overlay');
const cartClose = document.getElementById('cart-close');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const heroSlider = document.getElementById('hero-slider');
const heroLeft = document.getElementById('hero-left');
const heroRight = document.getElementById('hero-right');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    initHeroSlider();
    initSearch();
});

// Render Products
function renderProducts() {
    const dealsGrid = document.getElementById('deals-grid');
    const bestsellersGrid = document.getElementById('bestsellers-grid');
    const recommendedGrid = document.getElementById('recommended-grid');

    const deals = products.filter(p => p.badge.includes('off') || p.badge.includes('deal'));
    const bestsellers = products.filter(p => p.badge.includes('Best Seller') || p.badge.includes('Choice'));
    const recommended = products.filter(p => !deals.includes(p) && !bestsellers.includes(p));

    dealsGrid.innerHTML = deals.map(p => createProductCard(p)).join('');
    bestsellersGrid.innerHTML = bestsellers.map(p => createProductCard(p)).join('');
    recommendedGrid.innerHTML = recommended.map(p => createProductCard(p)).join('');
}

function createProductCard(product) {
    const wholePart = Math.floor(product.price);
    const fractionPart = Math.round((product.price - wholePart) * 100).toString().padStart(2, '0');
    const stars = getStarRating(product.rating);
    const discount = product.originalPrice 
        ? Math.round((1 - product.price / product.originalPrice) * 100) 
        : 0;

    return `
        <div class="product-card" data-id="${product.id}">
            <img src="${product.image}" alt="${product.title}" class="product-image">
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            <div class="product-title">${product.title}</div>
            <div class="product-rating">
                <span class="stars">${stars}</span>
                <span class="rating-count">${formatNumber(product.reviews)}</span>
            </div>
            <div class="product-price">
                <span class="price-symbol">$</span>${wholePart}<span class="price-fraction">${fractionPart}</span>
            </div>
            ${product.originalPrice ? `<div class="product-original-price">Was: $${product.originalPrice.toFixed(2)}</div>` : ''}
            <div class="product-delivery">${product.delivery}</div>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `;
}

function getStarRating(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            stars += '<i class="fa-solid fa-star"></i>';
        } else if (i - 0.5 <= rating) {
            stars += '<i class="fa-solid fa-star-half-stroke"></i>';
        } else {
            stars += '<i class="fa-regular fa-star"></i>';
        }
    }
    return stars;
}

function formatNumber(num) {
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

// Cart Functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
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

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += change;
    if (item.quantity <= 0) {
        removeFromCart(productId);
        return;
    }
    updateCart();
}

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

// Cart Sidebar Toggle
cartBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openCart();
});

cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

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

// Hero Slider
let currentSlide = 0;
let slideInterval;

function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    
    slideInterval = setInterval(() => {
        nextSlide();
    }, 5000);

    heroLeft.addEventListener('click', () => {
        clearInterval(slideInterval);
        prevSlide();
        slideInterval = setInterval(nextSlide, 5000);
    });

    heroRight.addEventListener('click', () => {
        clearInterval(slideInterval);
        nextSlide();
        slideInterval = setInterval(nextSlide, 5000);
    });
}

function nextSlide() {
    const slides = document.querySelectorAll('.hero-slide');
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

function prevSlide() {
    const slides = document.querySelectorAll('.hero-slide');
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Search Functionality
function initSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');

    searchBtn.addEventListener('click', () => performSearch(searchInput.value));
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch(searchInput.value);
    });
}

function performSearch(query) {
    if (!query.trim()) {
        renderProducts();
        return;
    }

    const searchTerms = query.toLowerCase().split(' ');
    const results = products.filter(product => {
        const searchText = (product.title + ' ' + product.badge).toLowerCase();
        return searchTerms.some(term => searchText.includes(term));
    });

    const dealsGrid = document.getElementById('deals-grid');
    const bestsellersGrid = document.getElementById('bestsellers-grid');
    const recommendedGrid = document.getElementById('recommended-grid');

    if (results.length > 0) {
        dealsGrid.innerHTML = '';
        bestsellersGrid.innerHTML = '';
        recommendedGrid.innerHTML = results.map(p => createProductCard(p)).join('');
        
        document.querySelectorAll('.section-title')[0].textContent = '';
        document.querySelectorAll('.section-title')[1].textContent = '';
        document.querySelectorAll('.section-title')[2].textContent = `Search Results for "${query}" (${results.length} items)`;
    } else {
        dealsGrid.innerHTML = '';
        bestsellersGrid.innerHTML = '';
        recommendedGrid.innerHTML = '<p style="padding: 40px; text-align: center; color: #666; grid-column: 1/-1;">No results found. Try different keywords.</p>';
        
        document.querySelectorAll('.section-title')[0].textContent = '';
        document.querySelectorAll('.section-title')[1].textContent = '';
        document.querySelectorAll('.section-title')[2].textContent = `No results for "${query}"`;
    }
}

// Toast Notification
function showToast(message) {
    let toast = document.querySelector('.toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}

// Back to top
document.querySelector('.footer-top a').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
