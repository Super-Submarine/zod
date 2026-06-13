// Product data
const products = [
  {
    id: 1,
    title: "Apple AirPods Pro (2nd Generation) Wireless Earbuds with USB-C Charging",
    price: 189.99,
    image: "https://fakestoreapi.com/img/81Zt42iIrnL._AC_SX679_.jpg",
    rating: 4.7,
    reviews: 125432,
    prime: true,
    delivery: "FREE delivery Tomorrow",
  },
  {
    id: 2,
    title: "Samsung Galaxy S24 Ultra, 256GB, Titanium Gray - Unlocked",
    price: 1099.99,
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: 4.5,
    reviews: 8923,
    prime: true,
    delivery: "FREE delivery Wed, Jan 15",
  },
  {
    id: 3,
    title: "Instant Pot Duo 7-in-1 Electric Pressure Cooker, 6 Quart, Stainless Steel",
    price: 79.95,
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    rating: 4.8,
    reviews: 234567,
    prime: true,
    delivery: "FREE delivery Tomorrow",
  },
  {
    id: 4,
    title: "Mens Casual Premium Slim Fit T-Shirts Crew Neck Short Sleeve",
    price: 22.3,
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: 4.1,
    reviews: 259,
    prime: false,
    delivery: "Delivery Thu, Jan 18",
  },
  {
    id: 5,
    title: "Sony WH-1000XM5 Noise Cancelling Wireless Headphones - Black",
    price: 328.0,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: 4.6,
    reviews: 45678,
    prime: true,
    delivery: "FREE delivery Tomorrow",
  },
  {
    id: 6,
    title: "LEGO Star Wars Millennium Falcon Building Set for Adults 75375",
    price: 849.99,
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: 4.9,
    reviews: 3456,
    prime: true,
    delivery: "FREE delivery Wed, Jan 15",
  },
  {
    id: 7,
    title: "Kindle Paperwhite (16 GB) - Now with a larger display and adjustable warm light",
    price: 139.99,
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    rating: 4.7,
    reviews: 98765,
    prime: true,
    delivery: "FREE delivery Tomorrow",
  },
  {
    id: 8,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Inch Laptops",
    price: 109.95,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: 3.9,
    reviews: 120,
    prime: false,
    delivery: "Delivery Fri, Jan 19",
  },
  {
    id: 9,
    title: "Apple MacBook Air 15-inch Laptop - M3 chip, 16GB Memory, 256GB",
    price: 1249.0,
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    rating: 4.8,
    reviews: 14532,
    prime: true,
    delivery: "FREE delivery Tomorrow",
  },
  {
    id: 10,
    title: "Dyson V15 Detect Absolute Cordless Vacuum Cleaner",
    price: 649.99,
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    rating: 4.5,
    reviews: 7891,
    prime: true,
    delivery: "FREE delivery Wed, Jan 15",
  },
  {
    id: 11,
    title: "Women's Long Sleeve Button Down Shirt Cotton Casual Blouse",
    price: 29.99,
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    rating: 4.2,
    reviews: 1845,
    prime: false,
    delivery: "Delivery Thu, Jan 18",
  },
  {
    id: 12,
    title: "Nintendo Switch OLED Model with White Joy-Con Console",
    price: 349.0,
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    rating: 4.8,
    reviews: 67890,
    prime: true,
    delivery: "FREE delivery Tomorrow",
  },
];

// Cart state
let cart = [];

// DOM elements
const productsGrid = document.getElementById("products-grid");
const cartSidebar = document.getElementById("cart-sidebar");
const cartOverlay = document.getElementById("cart-overlay");
const cartClose = document.getElementById("cart-close");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");
const headerCart = document.getElementById("header-cart");

// Render products
function renderProducts() {
  productsGrid.innerHTML = products
    .map(
      (product) => `
    <div class="product-card">
      <div class="product-card__image">
        <img src="${product.image}" alt="${product.title}" />
      </div>
      <h3 class="product-card__title">${product.title}</h3>
      <div class="product-card__rating">
        <span class="product-card__stars">${renderStars(product.rating)}</span>
        <span class="product-card__rating-count">${product.reviews.toLocaleString()}</span>
      </div>
      ${product.prime ? '<span class="product-card__prime">prime</span>' : ""}
      <div class="product-card__price">
        <span class="product-card__price-symbol">$</span>${formatPrice(product.price)}
      </div>
      <p class="product-card__delivery">${product.delivery}</p>
      <button class="product-card__add-btn" onclick="addToCart(${product.id})">Add to Cart</button>
    </div>
  `
    )
    .join("");
}

// Render star icons
function renderStars(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  let stars = "";
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

// Format price
function formatPrice(price) {
  const [dollars, cents] = price.toFixed(2).split(".");
  return `${dollars}<span class="product-card__price-fraction">${cents}</span>`;
}

// Add to cart
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCart();
  openCart();
}

// Remove from cart
function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  updateCart();
}

// Update quantity
function updateQuantity(productId, delta) {
  const item = cart.find((item) => item.id === productId);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) {
      removeFromCart(productId);
      return;
    }
  }
  updateCart();
}

// Update cart UI
function updateCart() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  cartCount.textContent = totalItems;
  cartTotal.textContent = `$${totalPrice.toFixed(2)}`;

  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="cart-sidebar__empty">Your cart is empty.</p>';
  } else {
    cartItems.innerHTML = cart
      .map(
        (item) => `
      <div class="cart-item">
        <img class="cart-item__image" src="${item.image}" alt="${item.title}" />
        <div class="cart-item__details">
          <p class="cart-item__title">${item.title}</p>
          <p class="cart-item__price">$${(item.price * item.quantity).toFixed(2)}</p>
          <div class="cart-item__quantity">
            <button onclick="updateQuantity(${item.id}, -1)">−</button>
            <span>${item.quantity}</span>
            <button onclick="updateQuantity(${item.id}, 1)">+</button>
          </div>
          <button class="cart-item__remove" onclick="removeFromCart(${item.id})">Delete</button>
        </div>
      </div>
    `
      )
      .join("");
  }
}

// Open/close cart
function openCart() {
  cartSidebar.classList.add("active");
  cartOverlay.classList.add("active");
}

function closeCart() {
  cartSidebar.classList.remove("active");
  cartOverlay.classList.remove("active");
}

// Event listeners
headerCart.addEventListener("click", openCart);
cartClose.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

// Initialize
renderProducts();
