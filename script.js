"use strict";

/* =========================================================
   LAVKART - COMPLETE JAVASCRIPT
========================================================= */


/* =========================================================
   PRODUCTS
========================================================= */

const products = [

    /* ================= MEN ================= */

    {
        id: 1,
        name: "Men's Classic Oxford Shirt",
        category: "Fashion",
        gender: "Men",
        price: 899,
        oldPrice: 1499,
        rating: 4.5,
        reviews: 128,
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
        badge: "BEST SELLER"
    },

    {
        id: 2,
        name: "Men's Premium Casual T-Shirt",
        category: "Fashion",
        gender: "Men",
        price: 599,
        oldPrice: 999,
        rating: 4.4,
        reviews: 245,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
        badge: "POPULAR"
    },

    {
        id: 3,
        name: "Men's Slim Fit Jeans",
        category: "Fashion",
        gender: "Men",
        price: 1299,
        oldPrice: 2199,
        rating: 4.6,
        reviews: 189,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80",
        badge: "TRENDING"
    },

    {
        id: 4,
        name: "Men's Lightweight Hoodie",
        category: "Fashion",
        gender: "Men",
        price: 1099,
        oldPrice: 1799,
        rating: 4.7,
        reviews: 96,
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
        badge: "HOT"
    },

    {
        id: 5,
        name: "Men's Leather Jacket",
        category: "Fashion",
        gender: "Men",
        price: 2499,
        oldPrice: 3999,
        rating: 4.8,
        reviews: 74,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
        badge: "PREMIUM"
    },

    {
        id: 6,
        name: "Men's Running Shoes",
        category: "Shoes",
        gender: "Men",
        price: 1599,
        oldPrice: 2999,
        rating: 4.7,
        reviews: 321,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
        badge: "BEST SELLER"
    },

    {
        id: 7,
        name: "Men's Formal Blazer",
        category: "Fashion",
        gender: "Men",
        price: 2199,
        oldPrice: 3499,
        rating: 4.5,
        reviews: 67,
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
        badge: "NEW"
    },

    {
        id: 8,
        name: "Men's Analog Watch",
        category: "Accessories",
        gender: "Men",
        price: 1299,
        oldPrice: 2499,
        rating: 4.6,
        reviews: 154,
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
        badge: "DEAL"
    },


    /* ================= WOMEN ================= */

    {
        id: 9,
        name: "Women's Floral Summer Dress",
        category: "Fashion",
        gender: "Women",
        price: 1199,
        oldPrice: 1999,
        rating: 4.8,
        reviews: 287,
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=80",
        badge: "BEST SELLER"
    },

    {
        id: 10,
        name: "Women's Casual Top",
        category: "Fashion",
        gender: "Women",
        price: 699,
        oldPrice: 1199,
        rating: 4.5,
        reviews: 193,
        image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=800&q=80",
        badge: "POPULAR"
    },

    {
        id: 11,
        name: "Women's High Waist Jeans",
        category: "Fashion",
        gender: "Women",
        price: 1399,
        oldPrice: 2299,
        rating: 4.7,
        reviews: 211,
        image: "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?auto=format&fit=crop&w=800&q=80",
        badge: "TRENDING"
    },

    {
        id: 12,
        name: "Women's Handbag",
        category: "Accessories",
        gender: "Women",
        price: 999,
        oldPrice: 1799,
        rating: 4.6,
        reviews: 348,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
        badge: "HOT"
    },

    {
        id: 13,
        name: "Women's Running Sneakers",
        category: "Shoes",
        gender: "Women",
        price: 1499,
        oldPrice: 2699,
        rating: 4.7,
        reviews: 174,
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80",
        badge: "NEW"
    },

    {
        id: 14,
        name: "Women's Elegant Watch",
        category: "Accessories",
        gender: "Women",
        price: 1199,
        oldPrice: 2199,
        rating: 4.5,
        reviews: 86,
        image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=800&q=80",
        badge: "DEAL"
    },

    {
        id: 15,
        name: "Women's Denim Jacket",
        category: "Fashion",
        gender: "Women",
        price: 1299,
        oldPrice: 2099,
        rating: 4.6,
        reviews: 109,
        image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=800&q=80",
        badge: "POPULAR"
    },

    {
        id: 16,
        name: "Women's Sunglasses",
        category: "Accessories",
        gender: "Women",
        price: 699,
        oldPrice: 1299,
        rating: 4.4,
        reviews: 221,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
        badge: "SALE"
    },


    /* ================= KIDS ================= */

    {
        id: 17,
        name: "Boys Cotton Casual T-Shirt",
        category: "Fashion",
        gender: "Kids",
        price: 399,
        oldPrice: 699,
        rating: 4.7,
        reviews: 143,
        image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=800&q=80",
        badge: "POPULAR"
    },

    {
        id: 18,
        name: "Girls Floral Summer Dress",
        category: "Fashion",
        gender: "Kids",
        price: 599,
        oldPrice: 999,
        rating: 4.8,
        reviews: 174,
        image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=800&q=80",
        badge: "BEST SELLER"
    },

    {
        id: 19,
        name: "Kids Comfortable Sneakers",
        category: "Shoes",
        gender: "Kids",
        price: 799,
        oldPrice: 1399,
        rating: 4.6,
        reviews: 112,
        image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=800&q=80",
        badge: "HOT"
    },

    {
        id: 20,
        name: "Kids Cartoon Hoodie",
        category: "Fashion",
        gender: "Kids",
        price: 699,
        oldPrice: 1099,
        rating: 4.7,
        reviews: 92,
        image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=800&q=80",
        badge: "NEW"
    },

    {
        id: 21,
        name: "Kids School Backpack",
        category: "Accessories",
        gender: "Kids",
        price: 649,
        oldPrice: 1099,
        rating: 4.5,
        reviews: 204,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
        badge: "SALE"
    },

    {
        id: 22,
        name: "Kids Denim Jacket",
        category: "Fashion",
        gender: "Kids",
        price: 899,
        oldPrice: 1499,
        rating: 4.6,
        reviews: 77,
        image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=800&q=80",
        badge: "TRENDING"
    },


    /* ================= ELECTRONICS ================= */

    {
        id: 23,
        name: "Wireless Earbuds",
        category: "Electronics",
        gender: "Unisex",
        price: 1499,
        oldPrice: 2999,
        rating: 4.5,
        reviews: 642,
        image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=800&q=80",
        badge: "BEST SELLER"
    },

    {
        id: 24,
        name: "Smart Fitness Watch",
        category: "Electronics",
        gender: "Unisex",
        price: 1799,
        oldPrice: 3499,
        rating: 4.6,
        reviews: 481,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
        badge: "TRENDING"
    },

    {
        id: 25,
        name: "Premium Wireless Headphones",
        category: "Electronics",
        gender: "Unisex",
        price: 2299,
        oldPrice: 3999,
        rating: 4.7,
        reviews: 357,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
        badge: "PREMIUM"
    },

    {
        id: 26,
        name: "Portable Bluetooth Speaker",
        category: "Electronics",
        gender: "Unisex",
        price: 999,
        oldPrice: 1799,
        rating: 4.5,
        reviews: 285,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80",
        badge: "DEAL"
    },

    {
        id: 27,
        name: "Fast Charging Power Bank",
        category: "Electronics",
        gender: "Unisex",
        price: 899,
        oldPrice: 1599,
        rating: 4.4,
        reviews: 316,
        image: "https://images.unsplash.com/photo-1609592424729-7e8f5e8f2a1e?auto=format&fit=crop&w=800&q=80",
        badge: "SALE"
    },


    /* ================= HOME ================= */

    {
        id: 28,
        name: "Modern Table Lamp",
        category: "Home",
        gender: "Unisex",
        price: 799,
        oldPrice: 1399,
        rating: 4.5,
        reviews: 94,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
        badge: "NEW"
    },

    {
        id: 29,
        name: "Premium Cushion Set",
        category: "Home",
        gender: "Unisex",
        price: 699,
        oldPrice: 1199,
        rating: 4.4,
        reviews: 122,
        image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80",
        badge: "POPULAR"
    },

    {
        id: 30,
        name: "Minimal Wall Clock",
        category: "Home",
        gender: "Unisex",
        price: 599,
        oldPrice: 999,
        rating: 4.5,
        reviews: 88,
        image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=800&q=80",
        badge: "DEAL"
    }

];


/* =========================================================
   STATE
========================================================= */

let cart =
    JSON.parse(
        localStorage.getItem("lavkart_cart")
    ) || [];

let wishlist =
    JSON.parse(
        localStorage.getItem("lavkart_wishlist")
    ) || [];

let orders =
    JSON.parse(
        localStorage.getItem("lavkart_orders")
    ) || [];

let activeCategory = "all";
let activeGender = "all";

let couponDiscount = 0;

let registerMode = false;

let toastTimer;


/* =========================================================
   INITIALIZATION
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    initializeLavKart
);


function initializeLavKart() {

    restoreDarkMode();

    restoreLogin();

    setupSearch();

    setupSorting();

    renderProducts();

    updateCartCount();

    updateWishlistCount();

}


/* =========================================================
   SEARCH
========================================================= */

function setupSearch() {

    const input =
        document.getElementById("searchInput");

    if (!input) return;

    input.addEventListener(
        "input",
        renderProducts
    );
}


/* =========================================================
   SORT
========================================================= */

function setupSorting() {

    const select =
        document.getElementById("sortSelect");

    if (!select) return;

    select.addEventListener(
        "change",
        renderProducts
    );
}


/* =========================================================
   RENDER PRODUCTS
========================================================= */

function renderProducts() {

    const container =
        document.getElementById(
            "productContainer"
        );

    if (!container) return;


    const input =
        document.getElementById(
            "searchInput"
        );

    const search =
        input
            ? input.value
                .toLowerCase()
                .trim()
            : "";


    const sortElement =
        document.getElementById(
            "sortSelect"
        );

    const sort =
        sortElement
            ? sortElement.value
            : "default";


    let filtered =
        products.filter(
            product => {

                const categoryMatch =
                    activeCategory === "all" ||
                    product.category ===
                        activeCategory;


                const genderMatch =
                    activeGender === "all" ||
                    product.gender ===
                        activeGender;


                const searchMatch =
                    product.name
                        .toLowerCase()
                        .includes(search) ||

                    product.category
                        .toLowerCase()
                        .includes(search) ||

                    product.gender
                        .toLowerCase()
                        .includes(search);


                return (
                    categoryMatch &&
                    genderMatch &&
                    searchMatch
                );

            }
        );


    if (sort === "low") {

        filtered.sort(
            (a, b) =>
                a.price - b.price
        );

    }


    if (sort === "high") {

        filtered.sort(
            (a, b) =>
                b.price - a.price
        );

    }


    if (sort === "rating") {

        filtered.sort(
            (a, b) =>
                b.rating - a.rating
        );

    }


    if (sort === "name") {

        filtered.sort(
            (a, b) =>
                a.name.localeCompare(
                    b.name
                )
        );

    }


    updateActiveFilter();


    if (!filtered.length) {

        container.innerHTML = `

            <div class="empty-products">

                <div>🔎</div>

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
   ACTIVE FILTER
========================================================= */

function updateActiveFilter() {

    const element =
        document.getElementById(
            "activeFilter"
        );

    if (!element) return;


    let text =
        "Showing All Products";


    if (activeGender !== "all") {

        text =
            `Showing ${activeGender}'s Products`;

    } else if (
        activeCategory !== "all"
    ) {

        text =
            `Showing ${activeCategory}`;

    }


    element.textContent = text;
}


/* =========================================================
   PRODUCT CARD
========================================================= */

function createProductCard(product) {

    const discount =
        Math.round(
            (
                (
                    product.oldPrice -
                    product.price
                ) /
                product.oldPrice
            ) * 100
        );


    const wished =
        wishlist.includes(
            product.id
        );


    return `

        <article class="product-card">

            <div class="product-image-wrapper">

                <img
                    src="${product.image}"
                    alt="${escapeHTML(product.name)}"
                    loading="lazy"
                    onerror="this.onerror=null;this.src='https://placehold.co/800x800/f5f5f5/ff7200?text=LavKart'"
                >

                <span class="product-badge">
                    ${product.badge}
                </span>

                <button
                    type="button"
                    class="wishlist-button ${wished ? "active" : ""}"
                    onclick="toggleWishlist(${product.id})"
                    aria-label="Add to wishlist"
                >
                    ${wished ? "❤️" : "♡"}
                </button>

            </div>


            <div class="product-info">

                <div class="product-category">
                    ${product.gender}
                    ·
                    ${product.category}
                </div>


                <h3>
                    ${escapeHTML(product.name)}
                </h3>


                <div class="rating">

                    ⭐ ${product.rating}

                    <span>
                        (${product.reviews})
                    </span>

                </div>


                <div class="price-row">

                    <strong>
                        ₹${product.price.toLocaleString("en-IN")}
                    </strong>

                    <del>
                        ₹${product.oldPrice.toLocaleString("en-IN")}
                    </del>

                    <span class="discount">
                        ${discount}% OFF
                    </span>

                </div>


                <div class="product-actions">

                    <button
                        type="button"
                        class="view-button"
                        onclick="openProduct(${product.id})"
                    >
                        View
                    </button>


                    <button
                        type="button"
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
   CATEGORY FILTER
========================================================= */

function filterCategory(category) {

    activeCategory = category;

    activeGender = "all";

    renderProducts();

    scrollToProducts();

}


/* =========================================================
   GENDER FILTER
========================================================= */

function filterGender(gender) {

    activeGender = gender;

    /*
       Important:
       Do NOT force category = Fashion.

       This allows future Men/Women/Kids
       products from other categories
       to also appear.
    */

    activeCategory = "all";

    renderProducts();

    scrollToProducts();

}


/* =========================================================
   SCROLL
========================================================= */

function scrollToProducts() {

    const section =
        document.getElementById(
            "products"
        );

    if (!section) return;

    section.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


/* =========================================================
   CART
========================================================= */

function addToCart(id) {

    const product =
        products.find(
            p => p.id === id
        );

    if (!product) return;


    const existing =
        cart.find(
            item => item.id === id
        );


    if (existing) {

        existing.quantity += 1;

    } else {

        cart.push({
            id: id,
            quantity: 1
        });

    }


    saveCart();

    updateCartCount();

    showToast(
        `${product.name} added to cart 🛒`
    );

}


function saveCart() {

    localStorage.setItem(
        "lavkart_cart",
        JSON.stringify(cart)
    );

}


function updateCartCount() {

    const element =
        document.getElementById(
            "cartCount"
        );

    if (!element) return;


    const count =
        cart.reduce(
            (total, item) =>
                total +
                Number(item.quantity || 0),
            0
        );


    element.textContent =
        count;

}


/* =========================================================
   CART OPEN / CLOSE
========================================================= */

function openCart() {

    renderCart();

    document
        .getElementById(
            "cartSidebar"
        )
        ?.classList.add("open");

    document
        .getElementById(
            "overlay"
        )
        ?.classList.add("show");

}


function closeCart() {

    document
        .getElementById(
            "cartSidebar"
        )
        ?.classList.remove("open");

    document
        .getElementById(
            "overlay"
        )
        ?.classList.remove("show");

}


/* =========================================================
   RENDER CART
========================================================= */

function renderCart() {

    const container =
        document.getElementById(
            "cartItems"
        );

    if (!container) return;


    if (!cart.length) {

        container.innerHTML = `

            <div class="empty-cart">

                <div>🛒</div>

                <h3>
                    Your cart is empty
                </h3>

                <p>
                    Add some products to get started.
                </p>

            </div>

        `;

        updateSummary(0);

        return;
    }


    container.innerHTML =
        cart.map(
            item => {

                const product =
                    products.find(
                        p =>
                            p.id === item.id
                    );

                if (!product) {
                    return "";
                }


                return `

                    <div class="cart-item">

                        <img
                            src="${product.image}"
                            alt="${escapeHTML(product.name)}"
                        >


                        <div class="cart-item-info">

                            <h4>
                                ${escapeHTML(product.name)}
                            </h4>

                            <strong>
                                ₹${product.price.toLocaleString("en-IN")}
                            </strong>


                            <div class="quantity-controls">

                                <button
                                    type="button"
                                    onclick="changeQuantity(${product.id}, -1)"
                                >
                                    −
                                </button>

                                <span>
                                    ${item.quantity}
                                </span>

                                <button
                                    type="button"
                                    onclick="changeQuantity(${product.id}, 1)"
                                >
                                    +
                                </button>

                            </div>

                        </div>


                        <button
                            type="button"
                            class="remove-item"
                            onclick="removeFromCart(${product.id})"
                        >
                            ✕
                        </button>

                    </div>

                `;

            }
        ).join("");


    const subtotal =
        cart.reduce(
            (total, item) => {

                const product =
                    products.find(
                        p =>
                            p.id === item.id
                    );

                if (!product) {
                    return total;
                }

                return (
                    total +
                    product.price *
                    item.quantity
                );

            },
            0
        );


    updateSummary(subtotal);

}


/* =========================================================
   QUANTITY
========================================================= */

function changeQuantity(
    id,
    change
) {

    const item =
        cart.find(
            item =>
                item.id === id
        );

    if (!item) return;


    item.quantity += change;


    if (item.quantity <= 0) {

        removeFromCart(id);

        return;

    }


    saveCart();

    renderCart();

    updateCartCount();

}


function removeFromCart(id) {

    cart =
        cart.filter(
            item =>
                item.id !== id
        );


    saveCart();

    renderCart();

    updateCartCount();

}


function clearCart() {

    cart = [];

    couponDiscount = 0;

    saveCart();

    renderCart();

    updateCartCount();

    showToast(
        "Cart cleared"
    );

}


/* =========================================================
   CART SUMMARY
========================================================= */

function updateSummary(
    subtotal
) {

    const shipping =
        subtotal === 0
            ? 0
            : subtotal >= 499
                ? 0
                : 49;


    const discount =
        Math.round(
            subtotal *
            couponDiscount
        );


    const total =
        Math.max(
            0,
            subtotal +
            shipping -
            discount
        );


    const subtotalElement =
        document.getElementById(
            "subtotal"
        );

    const shippingElement =
        document.getElementById(
            "shipping"
        );

    const discountElement =
        document.getElementById(
            "discount"
        );

    const totalElement =
        document.getElementById(
            "cartTotal"
        );


    if (subtotalElement) {

        subtotalElement.textContent =
            `₹${subtotal.toLocaleString("en-IN")}`;

    }


    if (shippingElement) {

        shippingElement.textContent =
            shipping === 0
                ? "FREE"
                : `₹${shipping}`;

    }


    if (discountElement) {

        discountElement.textContent =
            `-₹${discount.toLocaleString("en-IN")}`;

    }


    if (totalElement) {

        totalElement.textContent =
            `₹${total.toLocaleString("en-IN")}`;

    }


    const discountRow =
        document.getElementById(
            "discountRow"
        );


    if (discountRow) {

        discountRow.hidden =
            discount === 0;

    }

}


/* =========================================================
   COUPON
========================================================= */

function applyCoupon() {

    const input =
        document.getElementById(
            "couponInput"
        );

    if (!input) return;


    const code =
        input.value
            .trim()
            .toUpperCase();


    if (code === "WELCOME10") {

        couponDiscount = 0.10;

        showToast(
            "10% discount applied 🎉"
        );

    } else {

        couponDiscount = 0;

        showToast(
            "Invalid coupon code ❌"
        );

    }


    renderCart();

}


/* =========================================================
   WISHLIST
========================================================= */

function toggleWishlist(id) {

    const index =
        wishlist.indexOf(id);


    if (index >= 0) {

        wishlist.splice(
            index,
            1
        );

        showToast(
            "Removed from wishlist"
        );

    } else {

        wishlist.push(id);

        showToast(
            "Added to wishlist ❤️"
        );

    }


    localStorage.setItem(
        "lavkart_wishlist",
        JSON.stringify(wishlist)
    );


    updateWishlistCount();

    renderProducts();

}


function updateWishlistCount() {

    const element =
        document.getElementById(
            "wishlistCount"
        );

    if (!element) return;

    element.textContent =
        wishlist.length;

}


function openWishlist() {

    const modal =
        document.getElementById(
            "wishlistModal"
        );

    const container =
        document.getElementById(
            "wishlistItems"
        );

    if (!modal || !container) {
        return;
    }


    const items =
        products.filter(
            product =>
                wishlist.includes(
                    product.id
                )
        );


    if (!items.length) {

        container.innerHTML = `

            <div class="empty-products">

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


    modal.classList.add(
        "show"
    );

}


function closeWishlist() {

    document
        .getElementById(
            "wishlistModal"
        )
        ?.classList.remove(
            "show"
        );

}


/* =========================================================
   PRODUCT DETAILS
========================================================= */

function openProduct(id) {

    const product =
        products.find(
            p => p.id === id
        );

    if (!product) return;


    const modal =
        document.getElementById(
            "productModal"
        );

    const details =
        document.getElementById(
            "productDetails"
        );

    if (!modal || !details) {
        return;
    }


    details.innerHTML = `

        <div class="product-detail-grid">

            <div>

                <img
                    class="product-detail-image"
                    src="${product.image}"
                    alt="${escapeHTML(product.name)}"
                >

            </div>


            <div class="product-detail-content">

                <span class="product-badge">
                    ${product.badge}
                </span>


                <p class="product-category">
                    ${product.gender}
                    ·
                    ${product.category}
                </p>


                <h2>
                    ${escapeHTML(product.name)}
                </h2>


                <div class="rating">
                    ⭐ ${product.rating}
                    (${product.reviews} reviews)
                </div>


                <div class="detail-price">

                    ₹${product.price.toLocaleString("en-IN")}

                    <del>
                        ₹${product.oldPrice.toLocaleString("en-IN")}
                    </del>

                </div>


                <p>
                    Premium quality product from LavKart.
                    Carefully selected for comfort,
                    style, quality and everyday use.
                </p>


                <div class="detail-features">

                    ✓ Quality checked<br>
                    ✓ Fast delivery<br>
                    ✓ Easy 7-day returns<br>
                    ✓ Secure checkout<br>
                    ✓ Multiple payment options

                </div>


                <button
                    type="button"
                    class="add-button large"
                    onclick="addToCart(${product.id}); closeProductModal();"
                >
                    🛒 Add to Cart
                </button>

            </div>

        </div>

    `;


    modal.classList.add(
        "show"
    );

}


function closeProductModal() {

    document
        .getElementById(
            "productModal"
        )
        ?.classList.remove(
            "show"
        );

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


    const modal =
        document.getElementById(
            "checkoutModal"
        );


    if (modal) {

        modal.classList.add(
            "show"
        );

    }

}


function closeCheckout() {

    document
        .getElementById(
            "checkoutModal"
        )
        ?.classList.remove(
            "show"
        );

}


function placeOrder(event) {

    event.preventDefault();


    if (!cart.length) {

        showToast(
            "Your cart is empty"
        );

        return;

    }


    const payment =
        document.querySelector(
            'input[name="payment"]:checked'
        );


    const order = {

        id:
            "LK" +
            Date.now()
                .toString()
                .slice(-8),

        date:
            new Date()
                .toLocaleString(
                    "en-IN"
                ),

        customer: {

            firstName:
                document.getElementById(
                    "firstName"
                ).value,

            lastName:
                document.getElementById(
                    "lastName"
                ).value,

            email:
                document.getElementById(
                    "checkoutEmail"
                ).value,

            phone:
                document.getElementById(
                    "phone"
                ).value,

            address:
                document.getElementById(
                    "address"
                ).value,

            city:
                document.getElementById(
                    "city"
                ).value,

            pincode:
                document.getElementById(
                    "pincode"
                ).value

        },

        payment:
            payment
                ? payment.value
                : "cod",

        items:
            JSON.parse(
                JSON.stringify(cart)
            ),

        status:
            "Order Confirmed"

    };


    orders.unshift(order);


    localStorage.setItem(
        "lavkart_orders",
        JSON.stringify(orders)
    );


    cart = [];

    couponDiscount = 0;


    saveCart();

    updateCartCount();


    document
        .getElementById(
            "checkoutForm"
        )
        ?.reset();


    closeCheckout();


    showToast(
        `Order ${order.id} placed successfully 🎉`
    );

}


/* =========================================================
   ORDERS
========================================================= */

function openOrders() {

    const modal =
        document.getElementById(
            "ordersModal"
        );

    const container =
        document.getElementById(
            "ordersList"
        );

    if (!modal || !container) {
        return;
    }


    if (!orders.length) {

        container.innerHTML = `

            <div class="empty-products">

                <div>📦</div>

                <h3>
                    No orders yet
                </h3>

                <p>
                    Your orders will appear here.
                </p>

            </div>

        `;

    } else {

        container.innerHTML =
            orders.map(
                order => {

                    const total =
                        order.items.reduce(
                            (sum, item) => {

                                const product =
                                    products.find(
                                        p =>
                                            p.id ===
                                            item.id
                                    );

                                if (!product) {
                                    return sum;
                                }

                                return (
                                    sum +
                                    product.price *
                                    item.quantity
                                );

                            },
                            0
                        );


                    return `

                        <div class="order-card">

                            <div>

                                <strong>
                                    ${order.id}
                                </strong>

                                <span>
                                    ${order.date}
                                </span>

                            </div>


                            <div>

                                <strong>
                                    ₹${total.toLocaleString("en-IN")}
                                </strong>

                                <span class="order-status">
                                    ${order.status}
                                </span>

                            </div>

                        </div>

                    `;

                }
            ).join("");

    }


    modal.classList.add(
        "show"
    );

}


function closeOrders() {

    document
        .getElementById(
            "ordersModal"
        )
        ?.classList.remove(
            "show"
        );

}


/* =========================================================
   LOGIN
========================================================= */

function openLogin() {

    document
        .getElementById(
            "authModal"
        )
        ?.classList.add(
            "show"
        );

}


function closeLogin() {

    document
        .getElementById(
            "authModal"
        )
        ?.classList.remove(
            "show"
        );

}


function toggleAuthMode() {

    registerMode =
        !registerMode;


    const title =
        document.getElementById(
            "authTitle"
        );

    const nameGroup =
        document.getElementById(
            "nameGroup"
        );

    const submit =
        document.getElementById(
            "authSubmit"
        );

    const switchButton =
        document.getElementById(
            "switchAuth"
        );


    if (
        !title ||
        !nameGroup ||
        !submit ||
        !switchButton
    ) {
        return;
    }


    if (registerMode) {

        title.textContent =
            "Create Your Account";

        nameGroup.hidden =
            false;

        submit.textContent =
            "Create Account";

        switchButton.textContent =
            "Already have an account? Login";

    } else {

        title.textContent =
            "Welcome Back";

        nameGroup.hidden =
            true;

        submit.textContent =
            "Login";

        switchButton.textContent =
            "Create an account";

    }

}


function handleAuth(event) {

    event.preventDefault();


    const emailElement =
        document.getElementById(
            "authEmail"
        );

    if (!emailElement) {
        return;
    }


    const email =
        emailElement.value
            .trim();


    if (!email) return;


    localStorage.setItem(
        "lavkart_user",
        email
    );


    closeLogin();

    restoreLogin();


    showToast(
        registerMode
            ? "Account created successfully 🎉"
            : "Welcome back 👋"
    );

}


function restoreLogin() {

    const user =
        localStorage.getItem(
            "lavkart_user"
        );


    const button =
        document.getElementById(
            "loginButton"
        );


    if (
        button &&
        user
    ) {

        button.textContent =
            "✓ Logged In";

    }

}


/* =========================================================
   DARK MODE
========================================================= */

function toggleDarkMode() {

    const enabled =
        document.body.classList.toggle(
            "dark"
        );


    localStorage.setItem(
        "lavkart_dark",
        enabled
    );

}


function restoreDarkMode() {

    if (
        localStorage.getItem(
            "lavkart_dark"
        ) === "true"
    ) {

        document.body.classList.add(
            "dark"
        );

    }

}


/* =========================================================
   MOBILE MENU
========================================================= */

function toggleMobileMenu() {

    const navbar =
        document.getElementById(
            "navbar"
        );


    if (!navbar) return;


    navbar.classList.toggle(
        "mobile-open"
    );

}


/* Close mobile menu after clicking a nav link */

document.addEventListener(
    "click",
    function(event) {

        const target =
            event.target;


        if (
            target.matches(
                ".navbar a"
            )
        ) {

            document
                .getElementById(
                    "navbar"
                )
                ?.classList.remove(
                    "mobile-open"
                );

        }

    }
);


/* =========================================================
   CLOSE EVERYTHING
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
   TOAST
========================================================= */

function showToast(message) {

    const toast =
        document.getElementById(
            "toast"
        );


    if (!toast) return;


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(
            function() {

                toast.classList.remove(
                    "show"
                );

            },
            2500
        );

}


/* =========================================================
   HTML ESCAPE
========================================================= */

function escapeHTML(value) {

    return String(value)
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );

}
