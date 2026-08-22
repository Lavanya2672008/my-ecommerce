/* =========================================================
   LAVKART - APPLICATION
========================================================= */


/* =========================================================
   PRODUCT DATABASE
========================================================= */

const products = [

    /* ================= MEN ================= */

    {
        id: 1,
        name: "Men's Premium Cotton Shirt",
        category: "Men",
        subcategory: "Shirts",
        price: 899,
        mrp: 1799,
        rating: 4.7,
        reviews: 1240,
        discount: 50,
        badge: "Bestseller",
        image:
            "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=700&q=85",
        description:
            "Premium breathable cotton shirt designed for everyday comfort and smart casual styling."
    },

    {
        id: 2,
        name: "Men's Slim Fit Denim Jeans",
        category: "Men",
        subcategory: "Jeans",
        price: 1299,
        mrp: 2499,
        rating: 4.6,
        reviews: 892,
        discount: 48,
        badge: "Popular",
        image:
            "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=700&q=85",
        description:
            "Modern slim-fit denim with stretch comfort for everyday wear."
    },

    {
        id: 3,
        name: "Men's Casual Bomber Jacket",
        category: "Men",
        subcategory: "Jackets",
        price: 1799,
        mrp: 3499,
        rating: 4.8,
        reviews: 524,
        discount: 49,
        badge: "Trending",
        image:
            "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=85",
        description:
            "Stylish lightweight bomber jacket perfect for casual evenings and travel."
    },

    {
        id: 4,
        name: "Men's Classic Polo T-Shirt",
        category: "Men",
        subcategory: "T-Shirts",
        price: 699,
        mrp: 1299,
        rating: 4.5,
        reviews: 731,
        discount: 46,
        badge: "Deal",
        image:
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=85",
        description:
            "Classic polo-inspired casual T-shirt with a comfortable regular fit."
    },


    /* ================= WOMEN ================= */

    {
        id: 5,
        name: "Women's Elegant Summer Dress",
        category: "Women",
        subcategory: "Dresses",
        price: 1199,
        mrp: 2399,
        rating: 4.8,
        reviews: 1621,
        discount: 50,
        badge: "Bestseller",
        image:
            "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=700&q=85",
        description:
            "Elegant lightweight dress with a flattering silhouette for everyday occasions."
    },

    {
        id: 6,
        name: "Women's Oversized Casual Top",
        category: "Women",
        subcategory: "Tops",
        price: 699,
        mrp: 1399,
        rating: 4.6,
        reviews: 913,
        discount: 50,
        badge: "New",
        image:
            "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=700&q=85",
        description:
            "Relaxed oversized top made for effortless everyday styling."
    },

    {
        id: 7,
        name: "Women's Classic Denim Jacket",
        category: "Women",
        subcategory: "Jackets",
        price: 1499,
        mrp: 2999,
        rating: 4.7,
        reviews: 687,
        discount: 50,
        badge: "Trending",
        image:
            "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=700&q=85",
        description:
            "Timeless denim jacket that pairs perfectly with casual outfits."
    },

    {
        id: 8,
        name: "Women's Ethnic Kurta Set",
        category: "Women",
        subcategory: "Ethnic",
        price: 1399,
        mrp: 2799,
        rating: 4.8,
        reviews: 1032,
        discount: 50,
        badge: "Bestseller",
        image:
            "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=700&q=85",
        description:
            "Beautiful ethnic-inspired outfit suitable for festive and everyday occasions."
    },


    /* ================= KIDS ================= */

    {
        id: 9,
        name: "Kids Comfortable Cotton T-Shirt",
        category: "Kids",
        subcategory: "T-Shirts",
        price: 399,
        mrp: 799,
        rating: 4.7,
        reviews: 421,
        discount: 50,
        badge: "Popular",
        image:
            "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=700&q=85",
        description:
            "Soft cotton T-shirt designed for comfortable all-day play."
    },

    {
        id: 10,
        name: "Kids Casual Denim Outfit",
        category: "Kids",
        subcategory: "Sets",
        price: 899,
        mrp: 1699,
        rating: 4.6,
        reviews: 318,
        discount: 47,
        badge: "New",
        image:
            "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=700&q=85",
        description:
            "Fun casual outfit with comfortable materials for active kids."
    },

    {
        id: 11,
        name: "Kids Colorful Hoodie",
        category: "Kids",
        subcategory: "Hoodies",
        price: 749,
        mrp: 1499,
        rating: 4.8,
        reviews: 287,
        discount: 50,
        badge: "Deal",
        image:
            "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=700&q=85",
        description:
            "Warm and playful hoodie suitable for cool weather."
    },


    /* ================= ELECTRONICS ================= */

    {
        id: 12,
        name: "Premium Wireless Headphones",
        category: "Electronics",
        subcategory: "Audio",
        price: 1999,
        mrp: 4999,
        rating: 4.7,
        reviews: 2841,
        discount: 60,
        badge: "Bestseller",
        image:
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=85",
        description:
            "Wireless over-ear headphones with immersive audio and comfortable ear cushions."
    },

    {
        id: 13,
        name: "Smartphone Pro Max",
        category: "Electronics",
        subcategory: "Mobiles",
        price: 29999,
        mrp: 34999,
        rating: 4.8,
        reviews: 1752,
        discount: 14,
        badge: "Premium",
        image:
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=85",
        description:
            "Modern flagship-style smartphone with premium display and advanced cameras."
    },

    {
        id: 14,
        name: "Ultra Slim Laptop",
        category: "Electronics",
        subcategory: "Laptops",
        price: 48999,
        mrp: 59999,
        rating: 4.7,
        reviews: 932,
        discount: 18,
        badge: "Top Rated",
        image:
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=700&q=85",
        description:
            "Slim and powerful laptop designed for work, study and entertainment."
    },

    {
        id: 15,
        name: "Smart Fitness Watch",
        category: "Electronics",
        subcategory: "Wearables",
        price: 2499,
        mrp: 4999,
        rating: 4.6,
        reviews: 3210,
        discount: 50,
        badge: "Hot Deal",
        image:
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=85",
        description:
            "Smart wearable with fitness tracking, notifications and modern styling."
    },

    {
        id: 16,
        name: "Portable Bluetooth Speaker",
        category: "Electronics",
        subcategory: "Audio",
        price: 1299,
        mrp: 2499,
        rating: 4.5,
        reviews: 1498,
        discount: 48,
        badge: "Deal",
        image:
            "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=700&q=85",
        description:
            "Compact portable speaker delivering powerful sound for travel and parties."
    },


    /* ================= SHOES ================= */

    {
        id: 17,
        name: "Classic White Sneakers",
        category: "Shoes",
        subcategory: "Sneakers",
        price: 1599,
        mrp: 2999,
        rating: 4.7,
        reviews: 1842,
        discount: 47,
        badge: "Bestseller",
        image:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=85",
        description:
            "Minimal white sneakers designed for everyday casual outfits."
    },

    {
        id: 18,
        name: "Premium Running Shoes",
        category: "Shoes",
        subcategory: "Sports",
        price: 2299,
        mrp: 4499,
        rating: 4.8,
        reviews: 2187,
        discount: 49,
        badge: "Top Rated",
        image:
            "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=700&q=85",
        description:
            "Lightweight running shoes with cushioned support for active lifestyles."
    },

    {
        id: 19,
        name: "Women's Casual Sneakers",
        category: "Shoes",
        subcategory: "Casual",
        price: 1399,
        mrp: 2799,
        rating: 4.6,
        reviews: 879,
        discount: 50,
        badge: "Trending",
        image:
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=700&q=85",
        description:
            "Comfortable casual sneakers designed to complement everyday outfits."
    },


    /* ================= ACCESSORIES ================= */

    {
        id: 20,
        name: "Classic Leather Watch",
        category: "Accessories",
        subcategory: "Watches",
        price: 1899,
        mrp: 3999,
        rating: 4.6,
        reviews: 1321,
        discount: 53,
        badge: "Popular",
        image:
            "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=700&q=85",
        description:
            "Classic timepiece with elegant styling for formal and casual occasions."
    },

    {
        id: 21,
        name: "Premium Everyday Backpack",
        category: "Accessories",
        subcategory: "Bags",
        price: 999,
        mrp: 1999,
        rating: 4.7,
        reviews: 1142,
        discount: 50,
        badge: "Bestseller",
        image:
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=85",
        description:
            "Spacious everyday backpack with practical compartments and modern design."
    },

    {
        id: 22,
        name: "UV Protected Sunglasses",
        category: "Accessories",
        subcategory: "Sunglasses",
        price: 699,
        mrp: 1499,
        rating: 4.5,
        reviews: 652,
        discount: 53,
        badge: "Deal",
        image:
            "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=85",
        description:
            "Stylish sunglasses designed for everyday outdoor use."
    },


    /* ================= BEAUTY ================= */

    {
        id: 23,
        name: "Luxury Skincare Essentials Kit",
        category: "Beauty",
        subcategory: "Skincare",
        price: 999,
        mrp: 1999,
        rating: 4.8,
        reviews: 2134,
        discount: 50,
        badge: "Bestseller",
        image:
            "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=700&q=85",
        description:
            "A simple skincare collection for a clean and refreshed daily routine."
    },

    {
        id: 24,
        name: "Premium Beauty Collection",
        category: "Beauty",
        subcategory: "Makeup",
        price: 1299,
        mrp: 2499,
        rating: 4.6,
        reviews: 721,
        discount: 48,
        badge: "New",
        image:
            "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=700&q=85",
        description:
            "Stylish beauty essentials selected for everyday looks."
    },


    /* ================= GAMING ================= */

    {
        id: 25,
        name: "Wireless Gaming Controller",
        category: "Gaming",
        subcategory: "Gaming",
        price: 1799,
        mrp: 3499,
        rating: 4.7,
        reviews: 1209,
        discount: 49,
        badge: "Hot",
        image:
            "https://images.unsplash.com/photo-1592840496694-26c035b52b48?auto=format&fit=crop&w=700&q=85",
        description:
            "Wireless gaming controller with comfortable ergonomic controls."
    },

    {
        id: 26,
        name: "RGB Gaming Headset",
        category: "Gaming",
        subcategory: "Gaming",
        price: 1499,
        mrp: 2999,
        rating: 4.6,
        reviews: 948,
        discount: 50,
        badge: "Popular",
        image:
            "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=700&q=85",
        description:
            "Immersive gaming headset with microphone and RGB-inspired styling."
    }

];


/* =========================================================
   STATE
========================================================= */

let cart =
    JSON.parse(localStorage.getItem("lavkart_cart")) || [];

let wishlist =
    JSON.parse(localStorage.getItem("lavkart_wishlist")) || [];

let orders =
    JSON.parse(localStorage.getItem("lavkart_orders")) || [];

let currentCategory = "all";

let couponApplied = false;

let authMode = "login";


/* =========================================================
   INITIALIZE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderProducts();

        updateCart();

        updateWishlistCount();

        updateLoginState();

        renderOrders();

        loadDarkMode();

    }
);


/* =========================================================
   FORMAT PRICE
========================================================= */

function formatPrice(price) {

    return "₹" + price.toLocaleString("en-IN");

}


/* =========================================================
   SAVE STATE
========================================================= */

function saveState() {

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
   FILTER CATEGORY
========================================================= */

function filterCategory(category) {

    currentCategory = category;

    const section =
        document.getElementById("products");

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

    renderProducts();

}


/* =========================================================
   DEAL FILTER
========================================================= */

function filterDeals() {

    currentCategory = "deals";

    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

    renderProducts();

}


/* =========================================================
   RENDER PRODUCTS
========================================================= */

function renderProducts() {

    const container =
        document.getElementById("productContainer");

    const search =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase()
            .trim();

    const sort =
        document
            .getElementById("sortSelect")
            .value;


    let filtered =
        products.filter(product => {

            const matchesSearch =
                product.name
                    .toLowerCase()
                    .includes(search) ||

                product.subcategory
                    .toLowerCase()
                    .includes(search) ||

                product.category
                    .toLowerCase()
                    .includes(search);


            let matchesCategory = true;


            if (currentCategory !== "all") {

                if (currentCategory === "deals") {

                    matchesCategory =
                        product.discount >= 45;

                } else {

                    matchesCategory =
                        product.category === currentCategory;

                }

            }


            return (
                matchesSearch &&
                matchesCategory
            );

        });


    /* SORT */

    if (sort === "low") {

        filtered.sort(
            (a, b) => a.price - b.price
        );

    }

    else if (sort === "high") {

        filtered.sort(
            (a, b) => b.price - a.price
        );

    }

    else if (sort === "rating") {

        filtered.sort(
            (a, b) => b.rating - a.rating
        );

    }

    else if (sort === "discount") {

        filtered.sort(
            (a, b) => b.discount - a.discount
        );

    }

    else if (sort === "name") {

        filtered.sort(
            (a, b) =>
                a.name.localeCompare(b.name)
        );

    }


    document.getElementById(
        "resultCount"
    ).textContent =
        `${filtered.length} products found`;


    let filterText =
        "Showing all products";


    if (currentCategory === "Men") {

        filterText =
            "👨 Showing Men's Fashion";

    }

    else if (currentCategory === "Women") {

        filterText =
            "👩 Showing Women's Fashion";

    }

    else if (currentCategory === "Kids") {

        filterText =
            "🧒 Showing Kids Fashion";

    }

    else if (currentCategory === "Electronics") {

        filterText =
            "📱 Showing Electronics";

    }

    else if (currentCategory === "Shoes") {

        filterText =
            "👟 Showing Shoes";

    }

    else if (currentCategory === "Beauty") {

        filterText =
            "💄 Showing Beauty";

    }

    else if (currentCategory === "Gaming") {

        filterText =
            "🎮 Showing Gaming";

    }

    else if (currentCategory === "deals") {

        filterText =
            "🔥 Showing products with 45%+ OFF";

    }


    document.getElementById(
        "activeFilter"
    ).textContent = filterText;


    if (!filtered.length) {

        container.innerHTML = `

            <div class="empty-state">

                <div>🔍</div>

                <h3>
                    No products found
                </h3>

                <p>
                    Try another search or category.
                </p>

            </div>

        `;

        return;

    }


    container.innerHTML =
        filtered
            .map(createProductCard)
            .join("");

}


/* =========================================================
   PRODUCT CARD
========================================================= */

function createProductCard(product) {

    const isWishlisted =
        wishlist.includes(product.id);


    return `

        <article class="product-card">

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >

                <span class="discount-badge">
                    ${product.discount}% OFF
                </span>

                <button
                    class="
                        product-wishlist
                        ${isWishlisted ? "active" : ""}
                    "
                    onclick="toggleWishlist(${product.id})"
                >
                    ${isWishlisted ? "❤️" : "♡"}
                </button>

            </div>


            <div class="product-info">

                <div class="product-category">
                    ${product.category}
                    •
                    ${product.subcategory}
                </div>


                <h3 class="product-name">
                    ${product.name}
                </h3>


                <div class="rating">
                    ⭐ ${product.rating}
                    <span>
                        (${product.reviews.toLocaleString("en-IN")})
                    </span>
                </div>


                <div class="price-row">

                    <strong class="sale-price">
                        ${formatPrice(product.price)}
                    </strong>

                    <span class="mrp">
                        ${formatPrice(product.mrp)}
                    </span>

                </div>


                <div class="product-actions">

                    <button
                        class="view-button"
                        onclick="openProductModal(${product.id})"
                    >
                        View Details
                    </button>

                    <button
                        class="add-button"
                        onclick="addToCart(${product.id})"
                    >
                        🛒 Add to Cart
                    </button>

                </div>

            </div>

        </article>

    `;

}


/* =========================================================
   ADD CART
========================================================= */

function addToCart(id) {

    const existing =
        cart.find(item => item.id === id);


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({
            id: id,
            quantity: 1
        });

    }


    saveState();

    updateCart();

    showToast("Added to cart 🛒");

}


/* =========================================================
   UPDATE CART
========================================================= */

function updateCart() {

    const cartItems =
        document.getElementById("cartItems");


    const count =
        cart.reduce(
            (total, item) =>
                total + item.quantity,
            0
        );


    document.getElementById(
        "cartCount"
    ).textContent = count;


    if (!cart.length) {

        cartItems.innerHTML = `

            <div class="empty-state">

                <div>🛒</div>

                <h3>
                    Your cart is empty
                </h3>

                <p>
                    Add something you love.
                </p>

            </div>

        `;

        updateSummary();

        return;

    }


    cartItems.innerHTML =
        cart.map(item => {

            const product =
                products.find(
                    p => p.id === item.id
                );


            if (!product) return "";


            return `

                <div class="cart-item">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                    >


                    <div>

                        <h4>
                            ${product.name}
                        </h4>

                        <p>
                            ${formatPrice(product.price)}
                        </p>


                        <div
                            class="quantity-controls"
                        >

                            <button
                                onclick="changeQuantity(
                                    ${product.id},
                                    -1
                                )"
                            >
                                −
                            </button>

                            <strong>
                                ${item.quantity}
                            </strong>

                            <button
                                onclick="changeQuantity(
                                    ${product.id},
                                    1
                                )"
                            >
                                +
                            </button>

                        </div>

                    </div>


                    <button
                        class="remove-cart"
                        onclick="removeFromCart(
                            ${product.id}
                        )"
                    >
                        ✕
                    </button>

                </div>

            `;

        }).join("");


    updateSummary();

}


/* =========================================================
   QUANTITY
========================================================= */

function changeQuantity(id, amount) {

    const item =
        cart.find(
            item => item.id === id
        );


    if (!item) return;


    item.quantity += amount;


    if (item.quantity <= 0) {

        cart =
            cart.filter(
                item => item.id !== id
            );

    }


    saveState();

    updateCart();

}


/* =========================================================
   REMOVE CART
========================================================= */

function removeFromCart(id) {

    cart =
        cart.filter(
            item => item.id !== id
        );


    saveState();

    updateCart();

    showToast("Item removed");

}


/* =========================================================
   CLEAR CART
========================================================= */

function clearCart() {

    cart = [];

    couponApplied = false;

    saveState();

    updateCart();

    showToast("Cart cleared");

}


/* =========================================================
   SUMMARY
========================================================= */

function updateSummary() {

    let subtotal = 0;


    cart.forEach(item => {

        const product =
            products.find(
                p => p.id === item.id
            );

        if (product) {

            subtotal +=
                product.price *
                item.quantity;

        }

    });


    let shipping = 0;


    if (subtotal > 0 && subtotal < 499) {

        shipping = 49;

    }


    let discount = 0;


    if (couponApplied) {

        discount =
            Math.round(
                subtotal * 0.10
            );

        document.getElementById(
            "discountRow"
        ).hidden = false;

    } else {

        document.getElementById(
            "discountRow"
        ).hidden = true;

    }


    const total =
        subtotal +
        shipping -
        discount;


    document.getElementById(
        "subtotal"
    ).textContent =
        formatPrice(subtotal);


    document.getElementById(
        "shipping"
    ).textContent =
        shipping === 0
            ? "FREE"
            : formatPrice(shipping);


    document.getElementById(
        "discount"
    ).textContent =
        "-" + formatPrice(discount);


    document.getElementById(
        "cartTotal"
    ).textContent =
        formatPrice(Math.max(total, 0));

}


/* =========================================================
   COUPON
========================================================= */

function applyCoupon() {

    const input =
        document.getElementById(
            "couponInput"
        );


    const code =
        input.value
            .trim()
            .toUpperCase();


    if (code === "WELCOME10") {

        couponApplied = true;

        document.getElementById(
            "couponMessage"
        ).textContent =
            "✓ WELCOME10 applied — 10% discount";

        updateSummary();

        showToast("Coupon applied 🎉");

    }

    else {

        couponApplied = false;

        document.getElementById(
            "couponMessage"
        ).textContent =
            "Invalid coupon. Try WELCOME10";

        updateSummary();

    }

}


/* =========================================================
   WISHLIST
========================================================= */

function toggleWishlist(id) {

    if (wishlist.includes(id)) {

        wishlist =
            wishlist.filter(
                item => item !== id
            );

        showToast("Removed from wishlist");

    } else {

        wishlist.push(id);

        showToast("Added to wishlist ❤️");

    }


    saveState();

    updateWishlistCount();

    renderProducts();

}


function updateWishlistCount() {

    document.getElementById(
        "wishlistCount"
    ).textContent =
        wishlist.length;

}


/* =========================================================
   WISHLIST MODAL
========================================================= */

function openWishlist() {

    const container =
        document.getElementById(
            "wishlistItems"
        );


    const items =
        products.filter(
            product =>
                wishlist.includes(product.id)
        );


    if (!items.length) {

        container.innerHTML = `

            <div class="empty-state">

                <div>❤️</div>

                <h3>
                    Your wishlist is empty
                </h3>

                <p>
                    Save products you love here.
                </p>

            </div>

        `;

    } else {

        container.innerHTML =
            items
                .map(createProductCard)
                .join("");

    }


    openModal("wishlistModal");

}


function closeWishlist() {

    closeModal("wishlistModal");

}


/* =========================================================
   PRODUCT MODAL
========================================================= */

function openProductModal(id) {

    const product =
        products.find(
            p => p.id === id
        );


    if (!product) return;


    document.getElementById(
        "productDetails"
    ).innerHTML = `

        <div class="product-detail">

            <img
                class="product-detail-image"
                src="${product.image}"
                alt="${product.name}"
            >


            <div>

                <div class="eyebrow">
                    ${product.category}
                    •
                    ${product.subcategory}
                </div>


                <h2>
                    ${product.name}
                </h2>


                <div class="rating">
                    ⭐ ${product.rating}
                    (${product.reviews.toLocaleString("en-IN")} reviews)
                </div>


                <div class="detail-price">

                    <strong>
                        ${formatPrice(product.price)}
                    </strong>

                    <del>
                        ${formatPrice(product.mrp)}
                    </del>

                    <span class="discount-badge">
                        ${product.discount}% OFF
                    </span>

                </div>


                <p class="detail-description">
                    ${product.description}
                </p>


                <p>
                    🚚 <strong>Free delivery</strong>
                    on orders above ₹499
                </p>

                <br>

                <p>
                    ↩️ Easy 7-day returns
                </p>

                <br>

                <button
                    class="detail-add"
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


    openModal("productModal");

}


function closeProductModal() {

    closeModal("productModal");

}


/* =========================================================
   MODAL HELPERS
========================================================= */

function openModal(id) {

    document
        .getElementById(id)
        .classList.add("active");

}


function closeModal(id) {

    document
        .getElementById(id)
        .classList.remove("active");

}


function closeAll() {

    document
        .querySelectorAll(".modal.active")
        .forEach(modal => {
            modal.classList.remove("active");
        });


    document
        .getElementById("cartSidebar")
        .classList.remove("active");


    document
        .getElementById("overlay")
        .classList.remove("active");

}


function showOverlay() {

    document
        .getElementById("overlay")
        .classList.add("active");

}


/* =========================================================
   CART OPEN / CLOSE
========================================================= */

function openCart() {

    updateCart();

    document
        .getElementById("cartSidebar")
        .classList.add("active");

    showOverlay();

}


function closeCart() {

    document
        .getElementById("cartSidebar")
        .classList.remove("active");

    document
        .getElementById("overlay")
        .classList.remove("active");

}


/* =========================================================
   CHECKOUT
========================================================= */

function openCheckout() {

    if (!cart.length) {

        showToast(
            "Your cart is empty"
        );

        return;

    }


    closeCart();

    openModal("checkoutModal");

}


function closeCheckout() {

    closeModal("checkoutModal");

}


function placeOrder(event) {

    event.preventDefault();


    if (!cart.length) {

        showToast(
            "Your cart is empty"
        );

        return;

    }


    const orderId =
        "LK" +
        Date.now()
            .toString()
            .slice(-8);


    const orderItems =
        cart.map(item => {

            const product =
                products.find(
                    p => p.id === item.id
                );

            return {
                name: product.name,
                quantity: item.quantity,
                price: product.price
            };

        });


    let total = 0;


    orderItems.forEach(item => {

        total +=
            item.price *
            item.quantity;

    });


    if (total < 499 && total > 0) {

        total += 49;

    }


    if (couponApplied) {

        total -=
            Math.round(
                total * 0.10
            );

    }


    orders.unshift({

        id: orderId,

        date:
            new Date()
                .toLocaleString("en-IN"),

        total: total,

        items: orderItems,

        status: "Order Confirmed"

    });


    cart = [];

    couponApplied = false;


    saveState();

    updateCart();

    closeCheckout();

    document
        .getElementById("checkoutForm")
        .reset();


    renderOrders();

    showToast(
        `Order ${orderId} placed successfully 🎉`
    );

}


/* =========================================================
   ORDERS
========================================================= */

function openOrders() {

    renderOrders();

    openModal("ordersModal");

}


function closeOrders() {

    closeModal("ordersModal");

}


function renderOrders() {

    const container =
        document.getElementById(
            "ordersList"
        );


    if (!orders.length) {

        container.innerHTML = `

            <div class="empty-state">

                <div>📦</div>

                <h3>
                    No orders yet
                </h3>

                <p>
                    Your orders will appear here.
                </p>

            </div>

        `;

        return;

    }


    container.innerHTML =
        orders.map(order => {

            const itemText =
                order.items
                    .map(
                        item =>
                            `${item.name} × ${item.quantity}`
                    )
                    .join(", ");


            return `

                <div class="order-card">

                    <strong>
                        Order #${order.id}
                    </strong>

                    <p>
                        ${order.date}
                    </p>

                    <p>
                        Status:
                        <strong>
                            ${order.status}
                        </strong>
                    </p>

                    <p class="order-products">
                        ${itemText}
                    </p>

                    <p>
                        Total:
                        <strong>
                            ${formatPrice(order.total)}
                        </strong>
                    </p>

                </div>

            `;

        }).join("");

}


/* =========================================================
   LOGIN
========================================================= */

function openLogin() {

    openModal("authModal");

}


function closeLogin() {

    closeModal("authModal");

}


function toggleAuthMode() {

    authMode =
        authMode === "login"
            ? "register"
            : "login";


    const register =
        authMode === "register";


    document.getElementById(
        "authTitle"
    ).textContent =
        register
            ? "Create Your Account"
            : "Welcome Back";


    document.getElementById(
        "authSubmit"
    ).textContent =
        register
            ? "Create Account"
            : "Login";


    document.getElementById(
        "nameGroup"
    ).hidden =
        !register;


    document.getElementById(
        "switchAuth"
    ).textContent =
        register
            ? "Already have an account?"
            : "Create an account";

}


function handleAuth(event) {

    event.preventDefault();


    const email =
        document
            .getElementById("authEmail")
            .value
            .trim();


    const name =
        document
            .getElementById("authName")
            .value
            .trim();


    if (authMode === "register") {

        localStorage.setItem(
            "lavkart_user",
            JSON.stringify({
                name:
                    name || "LavKart Customer",
                email: email
            })
        );

        showToast(
            "Account created successfully 🎉"
        );

    } else {

        localStorage.setItem(
            "lavkart_user",
            JSON.stringify({
                name:
                    name || "LavKart Customer",
                email: email
            })
        );

        showToast(
            "Welcome back 👋"
        );

    }


    updateLoginState();

    closeLogin();

}


function updateLoginState() {

    const user =
        JSON.parse(
            localStorage.getItem(
                "lavkart_user"
            )
        );


    const button =
        document.getElementById(
            "loginButton"
        );


    if (user) {

        button.textContent =
            `👤 ${user.name.split(" ")[0]}`;

    } else {

        button.textContent =
            "👤 Login";

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


function loadDarkMode() {

    const dark =
        localStorage.getItem(
            "lavkart_dark"
        ) === "true";


    if (dark) {

        document.body.classList.add(
            "dark"
        );

    }

}


/* =========================================================
   TOAST
========================================================= */

let toastTimer;


function showToast(message) {

    const toast =
        document.getElementById(
            "toast"
        );


    toast.textContent = message;

    toast.classList.add("show");


    clearTimeout(toastTimer);


    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2500
        );

}


/* =========================================================
   ESC KEY
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeAll();

        }

    }
);
