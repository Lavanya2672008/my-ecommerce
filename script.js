/* =========================================================
   LAVKART - ECOMMERCE JAVASCRIPT
   GitHub Pages compatible
========================================================= */


/* =========================================================
   PRODUCT DATA
========================================================= */

const products = [

    {
        id: 1,
        name: "Premium Wireless Headphones",
        category: "Electronics",
        price: 2499,
        oldPrice: 4999,
        rating: 4.8,
        reviews: 342,
        badge: "BESTSELLER",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85",
        description: "Premium wireless headphones with deep bass, comfortable ear cushions and long battery life."
    },

    {
        id: 2,
        name: "Smart Watch Series X",
        category: "Electronics",
        price: 3299,
        oldPrice: 6999,
        rating: 4.7,
        reviews: 218,
        badge: "TRENDING",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85",
        description: "Modern smart watch with fitness tracking, notifications and premium design."
    },

    {
        id: 3,
        name: "Premium Smartphone",
        category: "Electronics",
        price: 24999,
        oldPrice: 29999,
        rating: 4.9,
        reviews: 821,
        badge: "TOP RATED",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=85",
        description: "Powerful smartphone with a stunning display, excellent camera and all-day battery."
    },

    {
        id: 4,
        name: "Wireless Earbuds Pro",
        category: "Electronics",
        price: 1799,
        oldPrice: 3499,
        rating: 4.6,
        reviews: 521,
        badge: "HOT",
        image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=900&q=85",
        description: "Compact wireless earbuds with clear sound and comfortable fit."
    },

    {
        id: 5,
        name: "Classic Cotton T-Shirt",
        category: "Fashion",
        price: 699,
        oldPrice: 1299,
        rating: 4.5,
        reviews: 143,
        badge: "SALE",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
        description: "Soft premium cotton t-shirt designed for everyday comfort."
    },

    {
        id: 6,
        name: "Premium Casual Shirt",
        category: "Fashion",
        price: 1199,
        oldPrice: 2199,
        rating: 4.7,
        reviews: 194,
        badge: "POPULAR",
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=85",
        description: "Stylish casual shirt made from comfortable premium fabric."
    },

    {
        id: 7,
        name: "Women's Summer Dress",
        category: "Fashion",
        price: 1499,
        oldPrice: 2999,
        rating: 4.8,
        reviews: 328,
        badge: "NEW",
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=900&q=85",
        description: "Elegant summer dress with a modern design perfect for casual occasions."
    },

    {
        id: 8,
        name: "Classic Denim Jacket",
        category: "Fashion",
        price: 1899,
        oldPrice: 3499,
        rating: 4.6,
        reviews: 167,
        badge: "SALE",
        image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=900&q=85",
        description: "Classic denim jacket that works perfectly with casual outfits."
    },

    {
        id: 9,
        name: "Running Shoes Pro",
        category: "Shoes",
        price: 2299,
        oldPrice: 4499,
        rating: 4.8,
        reviews: 413,
        badge: "BESTSELLER",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
        description: "Lightweight running shoes with excellent comfort and cushioning."
    },

    {
        id: 10,
        name: "Urban Sneakers",
        category: "Shoes",
        price: 1999,
        oldPrice: 3999,
        rating: 4.7,
        reviews: 288,
        badge: "HOT",
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=85",
        description: "Modern sneakers designed for everyday urban style."
    },

    {
        id: 11,
        name: "Sport Training Shoes",
        category: "Shoes",
        price: 2699,
        oldPrice: 4999,
        rating: 4.6,
        reviews: 201,
        badge: "SALE",
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=85",
        description: "Durable sports shoes designed for training and workouts."
    },

    {
        id: 12,
        name: "Luxury Leather Watch",
        category: "Accessories",
        price: 2199,
        oldPrice: 3999,
        rating: 4.9,
        reviews: 376,
        badge: "PREMIUM",
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=85",
        description: "Elegant leather watch with a premium classic design."
    },

    {
        id: 13,
        name: "Classic Sunglasses",
        category: "Accessories",
        price: 899,
        oldPrice: 1799,
        rating: 4.5,
        reviews: 119,
        badge: "SALE",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85",
        description: "Stylish sunglasses for everyday fashion and outdoor use."
    },

    {
        id: 14,
        name: "Premium Backpack",
        category: "Accessories",
        price: 1299,
        oldPrice: 2499,
        rating: 4.7,
        reviews: 242,
        badge: "POPULAR",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",
        description: "Spacious and stylish backpack for travel, college and work."
    },

    {
        id: 15,
        name: "Minimalist Handbag",
        category: "Accessories",
        price: 1599,
        oldPrice: 2999,
        rating: 4.8,
        reviews: 213,
        badge: "NEW",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85",
        description: "Elegant handbag with a clean minimalist design."
    },

    {
        id: 16,
        name: "Skincare Essentials Set",
        category: "Beauty",
        price: 999,
        oldPrice: 1999,
        rating: 4.6,
        reviews: 185,
        badge: "SALE",
        image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=900&q=85",
        description: "Daily skincare essentials designed for a simple beauty routine."
    },

    {
        id: 17,
        name: "Perfume Collection",
        category: "Beauty",
        price: 1499,
        oldPrice: 2799,
        rating: 4.8,
        reviews: 306,
        badge: "POPULAR",
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=85",
        description: "Elegant fragrance collection with long-lasting scents."
    },

    {
        id: 18,
        name: "Premium Coffee Maker",
        category: "Home",
        price: 3499,
        oldPrice: 5999,
        rating: 4.7,
        reviews: 141,
        badge: "DEAL",
        image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=900&q=85",
        description: "Premium coffee maker for delicious coffee at home."
    },

    {
        id: 19,
        name: "Modern Table Lamp",
        category: "Home",
        price: 899,
        oldPrice: 1599,
        rating: 4.5,
        reviews: 91,
        badge: "SALE",
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85",
        description: "Modern decorative lamp perfect for bedrooms and workspaces."
    },

    {
        id: 20,
        name: "Gaming Controller",
        category: "Gaming",
        price: 1799,
        oldPrice: 2999,
        rating: 4.8,
        reviews: 354,
        badge: "HOT",
        image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=900&q=85",
        description: "Responsive gaming controller for an immersive gaming experience."
    }

];


/* =========================================================
   STATE
========================================================= */

let cart = JSON.parse(localStorage.getItem("lavkart_cart")) || [];

let wishlist =
    JSON.parse(localStorage.getItem("lavkart_wishlist")) || [];

let orders =
    JSON.parse(localStorage.getItem("lavkart_orders")) || [];

let currentCategory = "all";

let couponApplied = false;

let authMode = "login";

let currentUser =
    JSON.parse(localStorage.getItem("lavkart_user")) || null;


/* =========================================================
   INITIALIZATION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    renderProducts();

    updateCart();

    updateWishlist();

    updateAuthButton();

    renderOrders();

    startCountdown();

});


/* =========================================================
   HELPERS
========================================================= */

function formatPrice(value) {

    return "₹" + Number(value).toLocaleString("en-IN");

}


function discountPercent(product) {

    return Math.round(
        ((product.oldPrice - product.price) / product.oldPrice) * 100
    );

}


function saveData() {

    localStorage.setItem(
        "lavkart_cart",
        JSON.stringify(cart)
    );

    localStorage.setItem(
        "lavkart_wishlist",
        JSON.stringify(wishlist)
    );

    localStorage.setItem(
        "lavkart_orders",
        JSON.stringify(orders)
    );

}


/* =========================================================
   PRODUCT RENDER
========================================================= */

function renderProducts() {

    const container =
        document.getElementById("productContainer");

    if (!container) return;

    const search =
        (
            document.getElementById("searchInput")?.value || ""
        ).toLowerCase().trim();

    const sort =
        document.getElementById("sortSelect")?.value || "default";


    let filtered = products.filter(product => {

        const categoryMatch =
            currentCategory === "all" ||
            product.category === currentCategory;

        const searchMatch =
            product.name.toLowerCase().includes(search) ||
            product.category.toLowerCase().includes(search);

        return categoryMatch && searchMatch;

    });


    if (sort === "low") {

        filtered.sort(
            (a, b) => a.price - b.price
        );

    }

    if (sort === "high") {

        filtered.sort(
            (a, b) => b.price - a.price
        );

    }

    if (sort === "rating") {

        filtered.sort(
            (a, b) => b.rating - a.rating
        );

    }

    if (sort === "discount") {

        filtered.sort(
            (a, b) =>
                discountPercent(b) -
                discountPercent(a)
        );

    }

    if (sort === "name") {

        filtered.sort(
            (a, b) =>
                a.name.localeCompare(b.name)
        );

    }


    document.getElementById("productCount").textContent =
        filtered.length;


    if (filtered.length === 0) {

        container.innerHTML = `
            <div class="empty-state" style="grid-column:1/-1">
                <div style="font-size:50px">🔍</div>
                <h3>No products found</h3>
                <p>Try another search or category.</p>
            </div>
        `;

        return;

    }


    container.innerHTML =
        filtered.map(createProductCard).join("");

}


/* =========================================================
   PRODUCT CARD
========================================================= */

function createProductCard(product) {

    const isWishlisted =
        wishlist.includes(product.id);

    return `

        <article class="product-card">

            <div class="product-image-wrap">

                <img
                    class="product-image"
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                    onerror="this.src='https://placehold.co/900x700/fff2e8/ff6b00?text=LavKart'"
                >

                <span class="product-badge">
                    ${product.badge}
                </span>

                <button
                    class="wishlist-button ${isWishlisted ? "active" : ""}"
                    onclick="toggleWishlist(${product.id})"
                    title="Wishlist"
                >
                    ${isWishlisted ? "❤️" : "♡"}
                </button>

            </div>


            <div class="product-info">

                <div class="product-category">
                    ${product.category}
                </div>

                <h3 class="product-name">
                    ${product.name}
                </h3>

                <div class="rating">
                    ⭐ ${product.rating}
                    <span>
                        (${product.reviews})
                    </span>
                </div>

                <div class="price-row">

                    <strong class="price">
                        ${formatPrice(product.price)}
                    </strong>

                    <span class="old-price">
                        ${formatPrice(product.oldPrice)}
                    </span>

                    <span class="discount">
                        ${discountPercent(product)}% OFF
                    </span>

                </div>


                <div class="product-buttons">

                    <button
                        class="add-cart"
                        onclick="addToCart(${product.id})"
                    >
                        🛒 Add to Cart
                    </button>

                    <button
                        class="view-product"
                        onclick="openProduct(${product.id})"
                        title="View Product"
                    >
                        👁️
                    </button>

                </div>

            </div>

        </article>

    `;

}


/* =========================================================
   CATEGORY
========================================================= */

function filterCategory(category) {

    currentCategory = category;

    document.getElementById("searchInput").value = "";

    renderProducts();

    scrollToProducts();

}


/* =========================================================
   SEARCH
========================================================= */

function scrollToProducts() {

    document
        .getElementById("products")
        ?.scrollIntoView({
            behavior: "smooth"
        });

}


function goHome() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   CART
========================================================= */

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
            id: productId,
            quantity: 1
        });

    }


    saveData();

    updateCart();

    showToast(
        `${product.name} added to cart 🛒`
    );

}


function updateCart() {

    const cartCount =
        document.getElementById("cartCount");

    const cartItems =
        document.getElementById("cartItems");


    const totalItems =
        cart.reduce(
            (sum, item) =>
                sum + item.quantity,
            0
        );


    if (cartCount) {

        cartCount.textContent = totalItems;

    }


    if (!cartItems) return;


    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <div>🛒</div>

                <h3>Your cart is empty</h3>

                <p>
                    Add some products to get started.
                </p>

            </div>

        `;

        updateCartSummary();

        return;

    }


    cartItems.innerHTML =
        cart.map(createCartItem).join("");


    updateCartSummary();

}


function createCartItem(item) {

    const product =
        products.find(p => p.id === item.id);

    if (!product) return "";


    return `

        <div class="cart-item">

            <img
                src="${product.image}"
                alt="${product.name}"
                onerror="this.src='https://placehold.co/300x300/fff2e8/ff6b00?text=LavKart'"
            >

            <div>

                <h4>
                    ${product.name}
                </h4>

                <p>
                    ${formatPrice(product.price)}
                </p>

                <div class="qty">

                    <button
                        onclick="changeQuantity(${product.id}, -1)"
                    >
                        −
                    </button>

                    <strong>
                        ${item.quantity}
                    </strong>

                    <button
                        onclick="changeQuantity(${product.id}, 1)"
                    >
                        +
                    </button>

                </div>

            </div>

            <button
                class="remove-item"
                onclick="removeFromCart(${product.id})"
            >
                ✕
            </button>

        </div>

    `;

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


    saveData();

    updateCart();

}


function removeFromCart(productId) {

    cart =
        cart.filter(
            item => item.id !== productId
        );

    saveData();

    updateCart();

    showToast("Product removed");

}


function clearCart() {

    if (cart.length === 0) return;


    if (
        !confirm(
            "Clear all products from your cart?"
        )
    ) {
        return;
    }


    cart = [];

    couponApplied = false;

    saveData();

    updateCart();

    showToast("Cart cleared");

}


function updateCartSummary() {

    let subtotalValue = 0;


    cart.forEach(item => {

        const product =
            products.find(p => p.id === item.id);

        if (product) {

            subtotalValue +=
                product.price * item.quantity;

        }

    });


    const shippingValue =
        subtotalValue === 0
            ? 0
            : subtotalValue >= 499
                ? 0
                : 49;


    const discountValue =
        couponApplied
            ? Math.round(subtotalValue * 0.10)
            : 0;


    const totalValue =
        subtotalValue +
        shippingValue -
        discountValue;


    document.getElementById("subtotal").textContent =
        formatPrice(subtotalValue);

    document.getElementById("shipping").textContent =
        shippingValue === 0
            ? "FREE"
            : formatPrice(shippingValue);

    document.getElementById("discount").textContent =
        "-" + formatPrice(discountValue);

    document.getElementById("cartTotal").textContent =
        formatPrice(totalValue);


    const discountRow =
        document.getElementById("discountRow");

    if (discountRow) {

        discountRow.hidden =
            !couponApplied;

    }

}


/* =========================================================
   CART DRAWER
========================================================= */

function openCart() {

    document
        .getElementById("cartSidebar")
        .classList.add("open");

    document
        .getElementById("overlay")
        .classList.add("active");

}


function closeCart() {

    document
        .getElementById("cartSidebar")
        .classList.remove("open");

    document
        .getElementById("overlay")
        .classList.remove("active");

}


/* =========================================================
   COUPON
========================================================= */

function applyCoupon() {

    const input =
        document.getElementById("couponInput");

    const message =
        document.getElementById("couponMessage");


    const code =
        input.value.trim().toUpperCase();


    if (code === "WELCOME10") {

        couponApplied = true;

        message.textContent =
            "✓ WELCOME10 applied — 10% discount";

        updateCartSummary();

        showToast("10% discount applied 🎉");

    } else {

        couponApplied = false;

        message.textContent =
            "Invalid coupon. Try WELCOME10.";

        updateCartSummary();

    }

}


/* =========================================================
   WISHLIST
========================================================= */

function toggleWishlist(productId) {

    if (wishlist.includes(productId)) {

        wishlist =
            wishlist.filter(
                id => id !== productId
            );

        showToast("Removed from wishlist");

    } else {

        wishlist.push(productId);

        showToast("Added to wishlist ❤️");

    }


    saveData();

    updateWishlist();

    renderProducts();

}


function updateWishlist() {

    const count =
        document.getElementById("wishlistCount");

    if (count) {

        count.textContent =
            wishlist.length;

    }

}


function openWishlist() {

    renderWishlist();

    document
        .getElementById("wishlistModal")
        .classList.add("active");

}


function closeWishlist() {

    document
        .getElementById("wishlistModal")
        .classList.remove("active");

}


function renderWishlist() {

    const container =
        document.getElementById("wishlistItems");

    if (!container) return;


    const items =
        products.filter(
            product =>
                wishlist.includes(product.id)
        );


    if (items.length === 0) {

        container.innerHTML = `

            <div
                class="empty-state"
                style="grid-column:1/-1"
            >

                <div style="font-size:55px">
                    ❤️
                </div>

                <h3>
                    Your wishlist is empty
                </h3>

                <p>
                    Save products you love here.
                </p>

            </div>

        `;

        return;

    }


    container.innerHTML =
        items.map(createProductCard).join("");

}


/* =========================================================
   PRODUCT MODAL
========================================================= */

function openProduct(productId) {

    const product =
        products.find(
            p => p.id === productId
        );

    if (!product) return;


    const details =
        document.getElementById(
            "productDetails"
        );


    details.innerHTML = `

        <div class="product-detail">

            <img
                src="${product.image}"
                alt="${product.name}"
                onerror="this.src='https://placehold.co/900x700/fff2e8/ff6b00?text=LavKart'"
            >

            <div>

                <div class="detail-category">
                    ${product.category}
                </div>

                <h2 class="detail-name">
                    ${product.name}
                </h2>

                <div class="rating">
                    ⭐ ${product.rating}
                    (${product.reviews} reviews)
                </div>

                <div class="detail-price">
                    ${formatPrice(product.price)}
                </div>

                <div class="price-row">

                    <span class="old-price">
                        ${formatPrice(product.oldPrice)}
                    </span>

                    <span class="discount">
                        ${discountPercent(product)}% OFF
                    </span>

                </div>

                <p class="detail-description">
                    ${product.description}
                </p>

                <button
                    class="add-cart"
                    style="width:100%;height:48px"
                    onclick="
                        addToCart(${product.id});
                        closeProductModal();
                    "
                >
                    🛒 Add to Cart
                </button>

            </div>

        </div>

    `;


    document
        .getElementById("productModal")
        .classList.add("active");

}


function closeProductModal() {

    document
        .getElementById("productModal")
        .classList.remove("active");

}


/* =========================================================
   CHECKOUT
========================================================= */

function openCheckout() {

    if (cart.length === 0) {

        showToast("Your cart is empty");

        return;

    }


    closeCart();

    document
        .getElementById("checkoutModal")
        .classList.add("active");

}


function closeCheckout() {

    document
        .getElementById("checkoutModal")
        .classList.remove("active");

}


function placeOrder(event) {

    event.preventDefault();


    if (cart.length === 0) {

        showToast("Your cart is empty");

        closeCheckout();

        return;

    }


    const firstName =
        document.getElementById("firstName").value;

    const lastName =
        document.getElementById("lastName").value;

    const email =
        document.getElementById("checkoutEmail").value;

    const phone =
        document.getElementById("phone").value;

    const address =
        document.getElementById("address").value;

    const city =
        document.getElementById("city").value;

    const pincode =
        document.getElementById("pincode").value;


    let subtotalValue = 0;

    cart.forEach(item => {

        const product =
            products.find(p => p.id === item.id);

        if (product) {

            subtotalValue +=
                product.price * item.quantity;

        }

    });


    const shippingValue =
        subtotalValue >= 499 ? 0 : 49;

    const discountValue =
        couponApplied
            ? Math.round(subtotalValue * .10)
            : 0;


    const totalValue =
        subtotalValue +
        shippingValue -
        discountValue;


    const order = {

        id:
            "LK" +
            Date.now()
                .toString()
                .slice(-8),

        date:
            new Date().toLocaleString("en-IN"),

        customer: {

            name:
                `${firstName} ${lastName}`,

            email,

            phone,

            address,

            city,

            pincode

        },

        items:
            cart.map(item => {

                const product =
                    products.find(
                        p => p.id === item.id
                    );

                return {

                    name: product.name,

                    quantity:
                        item.quantity,

                    price:
                        product.price

                };

            }),

        total:
            totalValue,

        payment:
            document.querySelector(
                'input[name="payment"]:checked'
            )?.value || "cod"

    };


    orders.unshift(order);

    cart = [];

    couponApplied = false;

    saveData();

    updateCart();

    renderOrders();

    closeCheckout();


    document.getElementById(
        "checkoutForm"
    ).reset();


    showToast(
        `Order ${order.id} placed successfully 🎉`
    );


    setTimeout(() => {

        openOrders();

    }, 700);

}


/* =========================================================
   ORDERS
========================================================= */

function openOrders() {

    renderOrders();

    document
        .getElementById("ordersModal")
        .classList.add("active");

}


function closeOrders() {

    document
        .getElementById("ordersModal")
        .classList.remove("active");

}


function renderOrders() {

    const container =
        document.getElementById("ordersList");

    if (!container) return;


    if (orders.length === 0) {

        container.innerHTML = `

            <div class="empty-state">

                <div style="font-size:55px">
                    📦
                </div>

                <h3>
                    No orders yet
                </h3>

                <p>
                    Your placed orders will appear here.
                </p>

            </div>

        `;

        return;

    }


    container.innerHTML =
        orders.map(order => `

            <div class="order-card">

                <div>
                    <strong>
                        Order #${order.id}
                    </strong>
                </div>

                <small>
                    ${order.date}
                </small>

                <div class="order-items">

                    ${order.items.map(
                        item =>
                            `${item.name} × ${item.quantity}`
                    ).join("<br>")}

                </div>

                <p style="margin-top:10px">

                    Total:
                    <strong>
                        ${formatPrice(order.total)}
                    </strong>

                </p>

                <p style="font-size:11px;color:#16a34a">

                    ● Order placed

                </p>

            </div>

        `).join("");

}


/* =========================================================
   LOGIN
========================================================= */

function openLogin() {

    document
        .getElementById("authModal")
        .classList.add("active");

}


function closeLogin() {

    document
        .getElementById("authModal")
        .classList.remove("active");

}


function toggleAuthMode() {

    authMode =
        authMode === "login"
            ? "register"
            : "login";


    const title =
        document.getElementById("authTitle");

    const nameGroup =
        document.getElementById("nameGroup");

    const submit =
        document.getElementById("authSubmit");

    const switchButton =
        document.getElementById("switchAuth");


    if (authMode === "register") {

        title.textContent =
            "Create Account";

        nameGroup.hidden = false;

        submit.textContent =
            "Create Account";

        switchButton.textContent =
            "Already have an account? Login";

    } else {

        title.textContent =
            "Welcome Back";

        nameGroup.hidden = true;

        submit.textContent =
            "Login";

        switchButton.textContent =
            "Create an account";

    }

}


function handleAuth(event) {

    event.preventDefault();


    const email =
        document.getElementById(
            "authEmail"
        ).value.trim();


    if (authMode === "register") {

        const name =
            document.getElementById(
                "authName"
            ).value.trim();


        currentUser = {

            name,

            email

        };


        localStorage.setItem(
            "lavkart_user",
            JSON.stringify(currentUser)
        );


        showToast(
            "Account created successfully 🎉"
        );


    } else {

        currentUser = {

            name:
                email.split("@")[0],

            email

        };


        localStorage.setItem(
            "lavkart_user",
            JSON.stringify(currentUser)
        );


        showToast(
            "Welcome back 👋"
        );

    }


    updateAuthButton();

    closeLogin();

}


function updateAuthButton() {

    const button =
        document.getElementById(
            "loginButton"
        );

    if (!button) return;


    if (currentUser) {

        button.textContent =
            "Hi, " +
            currentUser.name.split(" ")[0];

    } else {

        button.textContent =
            "Login";

    }

}


/* =========================================================
   DARK MODE
========================================================= */

function toggleDarkMode() {

    document.body.classList.toggle("dark");


    localStorage.setItem(
        "lavkart_dark",
        document.body.classList.contains("dark")
    );

}


if (
    localStorage.getItem("lavkart_dark") === "true"
) {

    document.body.classList.add("dark");

}


/* =========================================================
   TOAST
========================================================= */

let toastTimer;


function showToast(message) {

    const toast =
        document.getElementById("toast");

    if (!toast) return;


    toast.textContent = message;

    toast.classList.add("show");


    clearTimeout(toastTimer);


    toastTimer =
        setTimeout(() => {

            toast.classList.remove("show");

        }, 2600);

}


/* =========================================================
   CLOSE ALL
========================================================= */

function closeAll() {

    closeCart();

    closeProductModal();

    closeCheckout();

    closeLogin();

    closeWishlist();

    closeOrders();

}


/* =========================================================
   COUNTDOWN
========================================================= */

function startCountdown() {

    const end =
        Date.now() +
        (
            3 * 24 * 60 * 60 * 1000
        ) +
        (
            8 * 60 * 60 * 1000
        );


    function update() {

        const difference =
            Math.max(
                0,
                end - Date.now()
            );


        const days =
            Math.floor(
                difference /
                (1000 * 60 * 60 * 24)
            );


        const hours =
            Math.floor(
                (difference /
                    (1000 * 60 * 60)) % 24
            );


        const minutes =
            Math.floor(
                (difference /
                    (1000 * 60)) % 60
            );


        const seconds =
            Math.floor(
                (difference /
                    1000) % 60
            );


        document.getElementById(
            "days"
        ).textContent =
            String(days).padStart(2, "0");


        document.getElementById(
            "hours"
        ).textContent =
            String(hours).padStart(2, "0");


        document.getElementById(
            "minutes"
        ).textContent =
            String(minutes).padStart(2, "0");


        document.getElementById(
            "seconds"
        ).textContent =
            String(seconds).padStart(2, "0");

    }


    update();

    setInterval(update, 1000);

}


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeAll();

        }

    }
);
