// ============================================
// ORANGECART ECOMMERCE JAVASCRIPT
// ============================================

const products = [

    {
        id: 1,
        name: "Apple iPhone 15 Pro Max",
        category: "electronics",
        price: 119999,
        oldPrice: 149999,
        rating: 4.9,
        reviews: 1284,
        discount: 20,
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=700&q=85",
        description: "Experience next-generation performance with a premium titanium design, advanced camera system and powerful processor."
    },

    {
        id: 2,
        name: "Samsung Galaxy S24 Ultra",
        category: "electronics",
        price: 109999,
        oldPrice: 139999,
        rating: 4.8,
        reviews: 987,
        discount: 21,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=700&q=85",
        description: "A premium Android smartphone featuring a stunning display, powerful camera and all-day performance."
    },

    {
        id: 3,
        name: "Sony Wireless Headphones",
        category: "electronics",
        price: 8999,
        oldPrice: 14999,
        rating: 4.7,
        reviews: 756,
        discount: 40,
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=700&q=85",
        description: "Immersive wireless audio with premium comfort and powerful noise cancellation."
    },

    {
        id: 4,
        name: "MacBook Air M3",
        category: "electronics",
        price: 104999,
        oldPrice: 119999,
        rating: 4.9,
        reviews: 642,
        discount: 13,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=700&q=85",
        description: "Ultra-thin laptop with Apple Silicon performance, incredible battery life and a beautiful Retina display."
    },

    {
        id: 5,
        name: "Premium Cotton T-Shirt",
        category: "fashion",
        price: 799,
        oldPrice: 1499,
        rating: 4.5,
        reviews: 2311,
        discount: 47,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=85",
        description: "Comfortable premium cotton T-shirt designed for everyday wear."
    },

    {
        id: 6,
        name: "Classic Denim Jacket",
        category: "fashion",
        price: 1899,
        oldPrice: 3499,
        rating: 4.6,
        reviews: 834,
        discount: 46,
        image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=700&q=85",
        description: "Classic denim jacket with a modern fit, perfect for casual outfits."
    },

    {
        id: 7,
        name: "Men's Casual Hoodie",
        category: "fashion",
        price: 1299,
        oldPrice: 2499,
        rating: 4.5,
        reviews: 912,
        discount: 48,
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=700&q=85",
        description: "Soft and comfortable hoodie suitable for casual everyday use."
    },

    {
        id: 8,
        name: "Women's Summer Dress",
        category: "fashion",
        price: 1599,
        oldPrice: 2999,
        rating: 4.7,
        reviews: 1120,
        discount: 47,
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=700&q=85",
        description: "Elegant and comfortable summer dress with a beautiful modern design."
    },

    {
        id: 9,
        name: "Nike Air Running Shoes",
        category: "shoes",
        price: 5499,
        oldPrice: 8999,
        rating: 4.8,
        reviews: 1745,
        discount: 39,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=85",
        description: "Lightweight running shoes built for comfort, performance and everyday movement."
    },

    {
        id: 10,
        name: "Adidas Sports Sneakers",
        category: "shoes",
        price: 4299,
        oldPrice: 6999,
        rating: 4.6,
        reviews: 932,
        discount: 39,
        image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=700&q=85",
        description: "Sporty sneakers with excellent cushioning and modern styling."
    },

    {
        id: 11,
        name: "Premium Leather Shoes",
        category: "shoes",
        price: 2999,
        oldPrice: 4999,
        rating: 4.5,
        reviews: 654,
        discount: 40,
        image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=700&q=85",
        description: "Premium formal leather shoes suitable for office and special occasions."
    },

    {
        id: 12,
        name: "Modern Table Lamp",
        category: "home",
        price: 999,
        oldPrice: 1799,
        rating: 4.4,
        reviews: 431,
        discount: 44,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=700&q=85",
        description: "Minimal modern table lamp that adds warmth and style to any room."
    },

    {
        id: 13,
        name: "Modern Lounge Chair",
        category: "home",
        price: 8999,
        oldPrice: 13999,
        rating: 4.7,
        reviews: 243,
        discount: 36,
        image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=700&q=85",
        description: "Comfortable modern chair designed to enhance your living space."
    },

    {
        id: 14,
        name: "Minimal Wall Clock",
        category: "home",
        price: 799,
        oldPrice: 1299,
        rating: 4.3,
        reviews: 389,
        discount: 38,
        image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=700&q=85",
        description: "Elegant minimalist wall clock with a timeless design."
    },

    {
        id: 15,
        name: "Premium Coffee Maker",
        category: "home",
        price: 3999,
        oldPrice: 5999,
        rating: 4.6,
        reviews: 621,
        discount: 33,
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=700&q=85",
        description: "Enjoy café-quality coffee from the comfort of your home."
    },

    {
        id: 16,
        name: "Luxury Face Serum",
        category: "beauty",
        price: 899,
        oldPrice: 1499,
        rating: 4.6,
        reviews: 1502,
        discount: 40,
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=700&q=85",
        description: "Premium skincare serum designed for a healthy and glowing appearance."
    },

    {
        id: 17,
        name: "Cosmetic Makeup Kit",
        category: "beauty",
        price: 1499,
        oldPrice: 2499,
        rating: 4.5,
        reviews: 876,
        discount: 40,
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=700&q=85",
        description: "Complete makeup kit containing essentials for your everyday look."
    },

    {
        id: 18,
        name: "Wireless Gaming Controller",
        category: "gaming",
        price: 2499,
        oldPrice: 3999,
        rating: 4.7,
        reviews: 743,
        discount: 38,
        image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=700&q=85",
        description: "Responsive wireless controller designed for an immersive gaming experience."
    },

    {
        id: 19,
        name: "Gaming Mechanical Keyboard",
        category: "gaming",
        price: 3499,
        oldPrice: 5999,
        rating: 4.8,
        reviews: 921,
        discount: 42,
        image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=700&q=85",
        description: "RGB mechanical gaming keyboard with responsive switches and premium build."
    },

    {
        id: 20,
        name: "Premium Gaming Mouse",
        category: "gaming",
        price: 1799,
        oldPrice: 2999,
        rating: 4.7,
        reviews: 1204,
        discount: 40,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=700&q=85",
        description: "High precision gaming mouse with ergonomic design and responsive tracking."
    },

    {
        id: 21,
        name: "Travel Backpack",
        category: "accessories",
        price: 1599,
        oldPrice: 2999,
        rating: 4.6,
        reviews: 1876,
        discount: 47,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=85",
        description: "Spacious and durable backpack perfect for travel, college and work."
    },

    {
        id: 22,
        name: "Classic Sunglasses",
        category: "accessories",
        price: 999,
        oldPrice: 1999,
        rating: 4.4,
        reviews: 832,
        discount: 50,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=85",
        description: "Stylish sunglasses designed for everyday fashion and outdoor use."
    },

    {
        id: 23,
        name: "Smart Watch Pro",
        category: "electronics",
        price: 3999,
        oldPrice: 6999,
        rating: 4.6,
        reviews: 1567,
        discount: 43,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e5e?auto=format&fit=crop&w=700&q=85",
        description: "Smart wearable with fitness tracking, notifications and modern design."
    },

    {
        id: 24,
        name: "Portable Bluetooth Speaker",
        category: "electronics",
        price: 1999,
        oldPrice: 3499,
        rating: 4.5,
        reviews: 943,
        discount: 43,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=700&q=85",
        description: "Compact Bluetooth speaker with powerful sound and long battery life."
    }

];

let displayedProducts = [...products];

let cart = JSON.parse(localStorage.getItem("orangeCart")) || [];


// ============================================
// FORMAT MONEY
// ============================================

function formatPrice(price) {

    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0
    }).format(price);

}


// ============================================
// RENDER PRODUCTS
// ============================================

function renderProducts(list = displayedProducts) {

    const grid = document.getElementById("productGrid");

    if (!grid) return;

    if (list.length === 0) {

        grid.innerHTML = `
            <div style="
                grid-column:1/-1;
                text-align:center;
                padding:70px;
                color:#888;
            ">
                <div style="font-size:50px">🔎</div>
                <h2 style="color:#333;margin:15px">
                    No products found
                </h2>
                <p>Try searching for something else.</p>
            </div>
        `;

        return;
    }

    grid.innerHTML = list.map(product => {

        const discount = product.discount;

        return `

        <article class="product-card">

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                    onerror="this.src='https://placehold.co/700x700/fff3e8/ff6b00?text=Product'"
                >

                <span class="discount-badge">
                    ${discount}% OFF
                </span>

                <button
                    class="wishlist"
                    onclick="toggleWishlist(this)"
                >
                    ♡
                </button>

            </div>

            <div class="product-info">

                <span class="product-category">
                    ${product.category}
                </span>

                <h3
                    class="product-name"
                    onclick="showProduct(${product.id})"
                    style="cursor:pointer"
                >
                    ${product.name}
                </h3>

                <div class="rating">

                    <span class="rating-stars">
                        ${getStars(product.rating)}
                    </span>

                    <span class="rating-count">
                        ${product.rating} (${product.reviews})
                    </span>

                </div>

                <div class="price-row">

                    <span class="current-price">
                        ${formatPrice(product.price)}
                    </span>

                    <span class="old-price">
                        ${formatPrice(product.oldPrice)}
                    </span>

                </div>

                <button
                    class="add-cart"
                    onclick="addToCart(${product.id})"
                >
                    🛒 Add to Cart
                </button>

            </div>

        </article>

        `;

    }).join("");

}


// ============================================
// STAR RATING
// ============================================

function getStars(rating) {

    let stars = "";

    for (let i = 1; i <= 5; i++) {

        if (rating >= i) {
            stars += "★";
        } else {
            stars += "☆";
        }

    }

    return stars;

}


// ============================================
// FILTER PRODUCTS
// ============================================

function filterProducts(category) {

    document.querySelectorAll(".nav-item").forEach(item => {
        item.classList.remove("active");
    });

    if (category === "all") {

        displayedProducts = [...products];

        document.getElementById("productHeading").textContent =
            "Trending Products";

    } else if (category === "deals") {

        displayedProducts = products.filter(
            product => product.discount >= 40
        );

        document.getElementById("productHeading").textContent =
            "🔥 Today's Best Deals";

    } else {

        displayedProducts = products.filter(
            product => product.category === category
        );

        document.getElementById("productHeading").textContent =
            category.charAt(0).toUpperCase() +
            category.slice(1) +
            " Collection";

    }

    renderProducts();

    document.getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// ============================================
// SEARCH
// ============================================

function searchProducts() {

    const query =
        document.getElementById("searchInput")
        .value
        .trim()
        .toLowerCase();

    if (!query) {

        displayedProducts = [...products];

        document.getElementById("productHeading").textContent =
            "Trending Products";

        renderProducts();

        return;
    }

    displayedProducts = products.filter(product =>

        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)

    );

    document.getElementById("productHeading").textContent =
        `Search Results for "${query}"`;

    renderProducts();

    document.getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// Search when pressing Enter

document.getElementById("searchInput")
    .addEventListener("keydown", function(event) {

        if (event.key === "Enter") {
            searchProducts();
        }

    });


// ============================================
// SORT
// ============================================

function sortProducts() {

    const sort =
        document.getElementById("sortSelect").value;

    if (sort === "low") {

        displayedProducts.sort(
            (a, b) => a.price - b.price
        );

    } else if (sort === "high") {

        displayedProducts.sort(
            (a, b) => b.price - a.price
        );

    } else if (sort === "rating") {

        displayedProducts.sort(
            (a, b) => b.rating - a.rating
        );

    }

    renderProducts();

}


// ============================================
// CART
// ============================================

function addToCart(productId) {

    const product =
        products.find(p => p.id === productId);

    if (!product) return;

    const existing =
        cart.find(item => item.id === productId);

    if (existing) {

        existing.quantity++;

    } else {

        cart.push({
            id: product.id,
            quantity: 1
        });

    }

    saveCart();

    showToast(`${product.name} added to cart 🛒`);

}


function saveCart() {

    localStorage.setItem(
        "orangeCart",
        JSON.stringify(cart)
    );

    updateCartCount();
    renderCart();

}


function updateCartCount() {

    const count =
        cart.reduce(
            (total, item) => total + item.quantity,
            0
        );

    document.getElementById("cartCount")
        .textContent = count;

}


function renderCart() {

    const container =
        document.getElementById("cartItems");

    if (!container) return;

    if (cart.length === 0) {

        container.innerHTML = `

            <div class="empty-cart">

                <div>🛒</div>

                <h3>Your cart is empty</h3>

                <p>Add some amazing products!</p>

            </div>

        `;

        document.getElementById("cartTotal")
            .textContent = "₹0";

        return;
    }

    let total = 0;

    container.innerHTML =
        cart.map(item => {

            const product =
                products.find(
                    p => p.id === item.id
                );

            if (!product) return "";

            const itemTotal =
                product.price * item.quantity;

            total += itemTotal;

            return `

                <div class="cart-item">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                    >

                    <div class="cart-item-info">

                        <h4>${product.name}</h4>

                        <strong>
                            ${formatPrice(product.price)}
                        </strong>

                        <div class="quantity">

                            <button
                                onclick="changeQuantity(${product.id}, -1)"
                            >
                                −
                            </button>

                            <span>
                                ${item.quantity}
                            </span>

                            <button
                                onclick="changeQuantity(${product.id}, 1)"
                            >
                                +
                            </button>

                            <button
                                class="remove"
                                onclick="removeFromCart(${product.id})"
                            >
                                Remove
                            </button>

                        </div>

                    </div>

                </div>

            `;

        }).join("");

    document.getElementById("cartTotal")
        .textContent = formatPrice(total);

}


function changeQuantity(productId, amount) {

    const item =
        cart.find(item => item.id === productId);

    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {

        cart =
            cart.filter(
                item => item.id !== productId
            );

    }

    saveCart();

}


function removeFromCart(productId) {

    cart =
        cart.filter(
            item => item.id !== productId
        );

    saveCart();

    showToast("Product removed from cart");

}


// ============================================
// OPEN / CLOSE CART
// ============================================

function openCart() {

    document
        .getElementById("cartPanel")
        .classList.add("open");

    document
        .getElementById("cartOverlay")
        .classList.add("show");

}


function closeCart() {

    document
        .getElementById("cartPanel")
        .classList.remove("open");

    document
        .getElementById("cartOverlay")
        .classList.remove("show");

}


// ============================================
// PRODUCT DETAILS
// ============================================

function showProduct(productId) {

    const product =
        products.find(p => p.id === productId);

    if (!product) return;

    document.getElementById("modalProduct").innerHTML = `

        <div class="modal-product">

            <img
                src="${product.image}"
                alt="${product.name}"
            >

            <div>

                <span class="product-category">
                    ${product.category}
                </span>

                <h2>
                    ${product.name}
                </h2>

                <div class="rating">
                    <span class="rating-stars">
                        ${getStars(product.rating)}
                    </span>

                    <span class="rating-count">
                        ${product.rating} (${product.reviews} reviews)
                    </span>
                </div>

                <div class="modal-price">
                    ${formatPrice(product.price)}
                </div>

                <div style="
                    color:#aaa;
                    text-decoration:line-through;
                    margin-top:5px;
                ">
                    ${formatPrice(product.oldPrice)}
                </div>

                <p>
                    ${product.description}
                </p>

                <div style="
                    background:#fff3e8;
                    padding:15px;
                    border-radius:8px;
                    color:#e85d00;
                    font-size:12px;
                ">
                    🚚 Free delivery available
                    <br>
                    🔄 7-day easy returns
                    <br>
                    🔒 Secure checkout
                </div>

                <button
                    class="modal-add"
                    onclick="addToCart(${product.id}); closeProductModal();"
                >
                    🛒 Add to Cart
                </button>

            </div>

        </div>

    `;

    document
        .getElementById("productModal")
        .classList.add("show");

}


function closeProductModal() {

    document
        .getElementById("productModal")
        .classList.remove("show");

}


// ============================================
// WISHLIST
// ============================================

function toggleWishlist(button) {

    button.classList.toggle("active");

    if (button.classList.contains("active")) {

        button.textContent = "♥";

        showToast("Added to wishlist ❤️");

    } else {

        button.textContent = "♡";

    }

}


// ============================================
// TOAST
// ============================================

function showToast(message) {

    const toast =
        document.getElementById("toast");

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

}


// ============================================
// NEWSLETTER
// ============================================

function subscribeNewsletter() {

    const input =
        document.querySelector(
            ".newsletter-form input"
        );

    if (!input.value.trim()) {

        showToast("Please enter your email");

        return;

    }

    showToast("Thanks for subscribing! 🎉");

    input.value = "";

}


// ============================================
// CHECKOUT
// ============================================

function checkout() {

    if (cart.length === 0) {

        showToast("Your cart is empty!");

        return;

    }

    alert(
        "Checkout system coming soon!\n\n" +
        "Your products are ready for checkout."
    );

}


// ============================================
// SCROLL TO PRODUCTS
// ============================================

function scrollToProducts() {

    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// ============================================
// CLOSE MODAL WHEN CLICKING OUTSIDE
// ============================================

document
    .getElementById("productModal")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closeProductModal();

        }

    });


// ============================================
// INITIAL LOAD
// ============================================

renderProducts();

updateCartCount();

renderCart();
