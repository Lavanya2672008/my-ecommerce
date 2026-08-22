/* =========================================
   ORANGECART PRODUCT DATABASE
========================================= */

const products = [

    {
        id: 1,
        name: "Apple AirPods Pro 2nd Gen",
        category: "Electronics",
        price: 19999,
        oldPrice: 24999,
        rating: 4.8,
        tag: "BESTSELLER",
        image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=700&q=85"
    },

    {
        id: 2,
        name: "Samsung Galaxy S25 Ultra",
        category: "Electronics",
        price: 109999,
        oldPrice: 129999,
        rating: 4.9,
        tag: "HOT DEAL",
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=700&q=85"
    },

    {
        id: 3,
        name: "Sony WH-1000XM5 Headphones",
        category: "Electronics",
        price: 27999,
        oldPrice: 34999,
        rating: 4.7,
        tag: "-20%",
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=700&q=85"
    },

    {
        id: 4,
        name: "Minimal Leather Backpack",
        category: "Accessories",
        price: 1499,
        oldPrice: 2499,
        rating: 4.6,
        tag: "TRENDING",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=85"
    },

    {
        id: 5,
        name: "Premium Running Sneakers",
        category: "Shoes",
        price: 3299,
        oldPrice: 4999,
        rating: 4.8,
        tag: "SALE",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=85"
    },

    {
        id: 6,
        name: "Classic Oversized Hoodie",
        category: "Fashion",
        price: 1299,
        oldPrice: 1999,
        rating: 4.5,
        tag: "-35%",
        image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=700&q=85"
    },

    {
        id: 7,
        name: "Smart LED Table Lamp",
        category: "Home",
        price: 899,
        oldPrice: 1499,
        rating: 4.4,
        tag: "NEW",
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=700&q=85"
    },

    {
        id: 8,
        name: "Luxury Skincare Gift Set",
        category: "Beauty",
        price: 1899,
        oldPrice: 2999,
        rating: 4.7,
        tag: "LIMITED",
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=700&q=85"
    },

    {
        id: 9,
        name: "Mechanical RGB Gaming Keyboard",
        category: "Gaming",
        price: 2499,
        oldPrice: 3999,
        rating: 4.7,
        tag: "GAMER PICK",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=700&q=85"
    },

    {
        id: 10,
        name: "Portable Bluetooth Speaker",
        category: "Electronics",
        price: 1799,
        oldPrice: 2999,
        rating: 4.6,
        tag: "HOT",
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=700&q=85"
    },

    {
        id: 11,
        name: "Modern Ceramic Vase",
        category: "Home",
        price: 799,
        oldPrice: 1199,
        rating: 4.3,
        tag: "NEW",
        image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&w=700&q=85"
    },

    {
        id: 12,
        name: "Everyday Cotton T-Shirt",
        category: "Fashion",
        price: 699,
        oldPrice: 999,
        rating: 4.5,
        tag: "VALUE",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=85"
    },

    {
        id: 13,
        name: "Gaming Wireless Controller",
        category: "Gaming",
        price: 2999,
        oldPrice: 4499,
        rating: 4.8,
        tag: "TOP RATED",
        image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=700&q=85"
    },

    {
        id: 14,
        name: "Aviator UV Sunglasses",
        category: "Accessories",
        price: 999,
        oldPrice: 1799,
        rating: 4.4,
        tag: "-44%",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=85"
    },

    {
        id: 15,
        name: "Smart Fitness Watch",
        category: "Electronics",
        price: 3999,
        oldPrice: 6999,
        rating: 4.6,
        tag: "SMART BUY",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=85"
    },

    {
        id: 16,
        name: "Women's Casual Handbag",
        category: "Fashion",
        price: 1699,
        oldPrice: 2799,
        rating: 4.7,
        tag: "TRENDING",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=85"
    }

];



/* =========================================
   STORAGE
========================================= */

let cartItems =
    JSON.parse(
        localStorage.getItem("orangeCart")
    ) || [];


let wishlistItems =
    JSON.parse(
        localStorage.getItem("orangeWishlist")
    ) || [];


let selectedCategory = "All";

let searchText = "";



/* =========================================
   HELPERS
========================================= */

function money(value) {

    return "₹" +
        value.toLocaleString("en-IN");

}


function saveData() {

    localStorage.setItem(
        "orangeCart",
        JSON.stringify(cartItems)
    );

    localStorage.setItem(
        "orangeWishlist",
        JSON.stringify(wishlistItems)
    );

    updateCartCount();

}



function updateCartCount() {

    const count =
        cartItems.reduce(
            (total, item) =>
                total + item.quantity,
            0
        );

    document.getElementById(
        "cartCount"
    ).textContent = count;

}



/* =========================================
   FILTER PRODUCTS
========================================= */

function getVisibleProducts() {

    let list =
        products.filter(product => {

            let categoryMatch =
                selectedCategory === "All" ||
                (
                    selectedCategory === "Deals" &&
                    product.oldPrice - product.price > 500
                ) ||
                product.category === selectedCategory;


            let searchMatch =
                product.name
                    .toLowerCase()
                    .includes(
                        searchText.toLowerCase()
                    ) ||

                product.category
                    .toLowerCase()
                    .includes(
                        searchText.toLowerCase()
                    );


            return categoryMatch && searchMatch;

        });


    const sort =
        document.getElementById(
            "sortProducts"
        ).value;


    if (sort === "low") {

        list.sort(
            (a,b) => a.price - b.price
        );

    }


    if (sort === "high") {

        list.sort(
            (a,b) => b.price - a.price
        );

    }


    if (sort === "rating") {

        list.sort(
            (a,b) => b.rating - a.rating
        );

    }


    return list;

}



/* =========================================
   RENDER PRODUCTS
========================================= */

function renderProducts() {

    const grid =
        document.getElementById(
            "productGrid"
        );


    const title =
        document.getElementById(
            "productTitle"
        );


    if (searchText) {

        title.textContent =
            `Search Results: "${searchText}"`;

    }

    else if (selectedCategory === "All") {

        title.textContent =
            "Trending Products";

    }

    else if (selectedCategory === "Deals") {

        title.textContent =
            "🔥 Today's Deals";

    }

    else {

        title.textContent =
            selectedCategory;

    }


    const list =
        getVisibleProducts();


    if (!list.length) {

        grid.innerHTML = `

            <div style="
                grid-column:1/-1;
                text-align:center;
                padding:60px;
                background:white;
                border-radius:15px;
            ">

                <h3>
                    😔 No products found
                </h3>

                <p>
                    Try another search or category.
                </p>

            </div>

        `;

        return;

    }


    grid.innerHTML =
        list.map(product => {

            const wished =
                wishlistItems.includes(
                    product.id
                );


            return `

            <article class="product-card">

                <div class="product-image">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        loading="lazy"
                    >

                    <span class="product-tag">
                        ${product.tag}
                    </span>


                    <button
                        class="
                            wishlist-button
                            ${wished ? "active" : ""}
                        "
                        onclick="
                            toggleWishlist(${product.id})
                        "
                    >

                        ${wished ? "♥" : "♡"}

                    </button>

                </div>


                <div class="product-info">

                    <div class="product-category">

                        ${product.category}

                    </div>


                    <h3>

                        ${product.name}

                    </h3>


                    <div class="rating">

                        ★ ${product.rating}

                        <span>
                            (${Math.floor(
                                product.rating * 100
                            )})
                        </span>

                    </div>


                    <div class="price">

                        ${money(product.price)}

                        <span class="old-price">

                            ${money(product.oldPrice)}

                        </span>

                    </div>


                    <button
                        class="add-cart"
                        onclick="
                            addToCart(${product.id})
                        "
                    >

                        🛒 Add to Cart

                    </button>

                </div>

            </article>

            `;

        }).join("");

}



/* =========================================
   CATEGORY
========================================= */

function filterCategory(category) {

    selectedCategory = category;

    searchText = "";

    document.getElementById(
        "searchInput"
    ).value = "";

    renderProducts();

    scrollToProducts();

}



/* =========================================
   SEARCH
========================================= */

function searchProducts() {

    searchText =
        document.getElementById(
            "searchInput"
        ).value.trim();

    selectedCategory = "All";

    renderProducts();

}



/* =========================================
   CART
========================================= */

function addToCart(productId) {

    const existing =
        cartItems.find(
            item =>
                item.id === productId
        );


    if (existing) {

        existing.quantity++;

    }

    else {

        cartItems.push({

            id: productId,

            quantity: 1

        });

    }


    saveData();


    alert(
        "🛒 Product added to cart!"
    );

}



function openCart() {

    let html = `

        <h2>
            🛒 Your Shopping Cart
        </h2>

    `;


    if (!cartItems.length) {

        html += `

            <p>
                Your cart is empty.
            </p>

            <button
                class="checkout-button"
                onclick="closeModal()"
            >
                Continue Shopping
            </button>

        `;

        openModal(html);

        return;

    }


    let total = 0;


    cartItems.forEach(item => {

        const product =
            products.find(
                p => p.id === item.id
            );


        const itemTotal =
            product.price *
            item.quantity;


        total += itemTotal;


        html += `

            <div class="cart-row">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

                <div style="flex:1">

                    <h4>
                        ${product.name}
                    </h4>

                    <strong>
                        ${money(product.price)}
                    </strong>


                    <div class="quantity">

                        <button
                            onclick="
                                changeQuantity(
                                    ${product.id},
                                    -1
                                )
                            "
                        >
                            −
                        </button>


                        ${item.quantity}


                        <button
                            onclick="
                                changeQuantity(
                                    ${product.id},
                                    1
                                )
                            "
                        >
                            +
                        </button>


                        <button
                            onclick="
                                removeFromCart(
                                    ${product.id}
                                )
                            "
                        >
                            🗑️
                        </button>

                    </div>

                </div>

            </div>

        `;

    });


    html += `

        <div class="cart-total">

            Total:
            ${money(total)}

        </div>


        <button
            class="checkout-button"
            onclick="checkout()"
        >

            Proceed to Checkout →

        </button>

    `;


    openModal(html);

}



function changeQuantity(
    productId,
    amount
) {

    const item =
        cartItems.find(
            x => x.id === productId
        );


    if (!item) return;


    item.quantity += amount;


    if (item.quantity <= 0) {

        cartItems =
            cartItems.filter(
                x => x.id !== productId
            );

    }


    saveData();

    openCart();

}



function removeFromCart(productId) {

    cartItems =
        cartItems.filter(
            item =>
                item.id !== productId
        );


    saveData();

    openCart();

}



/* =========================================
   WISHLIST
========================================= */

function toggleWishlist(productId) {

    if (
        wishlistItems.includes(productId)
    ) {

        wishlistItems =
            wishlistItems.filter(
                id => id !== productId
            );

    }

    else {

        wishlistItems.push(
            productId
        );

    }


    saveData();

    renderProducts();

}



function openWishlist() {

    const items =
        products.filter(
            product =>
                wishlistItems.includes(
                    product.id
                )
        );


    let html = `

        <h2>
            ❤️ My Wishlist
        </h2>

    `;


    if (!items.length) {

        html += `

            <p>
                Your wishlist is empty.
            </p>

        `;

    }


    items.forEach(product => {

        html += `

            <div class="cart-row">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

                <div style="flex:1">

                    <h4>
                        ${product.name}
                    </h4>

                    <strong>
                        ${money(product.price)}
                    </strong>

                    <br><br>

                    <button
                        class="add-cart"
                        onclick="
                            addToCart(
                                ${product.id}
                            )
                        "
                    >

                        Add to Cart

                    </button>

                </div>

            </div>

        `;

    });


    openModal(html);

}



/* =========================================
   ACCOUNT
========================================= */

function showAccount() {

    openModal(`

        <h2>
            👤 My Account
        </h2>

        <p>
            Welcome to OrangeCart!
        </p>

        <p>
            Account login and order
            history can be connected
            to a backend later.
        </p>

        <button
            class="checkout-button"
            onclick="closeModal()"
        >

            Continue Shopping

        </button>

    `);

}



/* =========================================
   CHECKOUT
========================================= */

function checkout() {

    openModal(`

        <h2>
            💳 Checkout
        </h2>

        <p>
            This is a frontend demo checkout.
        </p>

        <p>
            Your order total has been calculated
            from the cart.
        </p>

        <button
            class="checkout-button"
            onclick="
                alert(
                    'Order placed successfully! 🎉'
                );
                closeModal();
                cartItems=[];
                saveData();
            "
        >

            Place Demo Order

        </button>

    `);

}



/* =========================================
   MODAL
========================================= */

function openModal(content) {

    document.getElementById(
        "modalContent"
    ).innerHTML = content;


    document.getElementById(
        "modal"
    ).classList.add("show");

}



function closeModal() {

    document.getElementById(
        "modal"
    ).classList.remove("show");

}



function closeModalOutside(event) {

    if (
        event.target.id === "modal"
    ) {

        closeModal();

    }

}



/* =========================================
   NEWSLETTER
========================================= */

function subscribe() {

    const email =
        document.getElementById(
            "emailInput"
        ).value.trim();


    if (!email.includes("@")) {

        alert(
            "Please enter a valid email address."
        );

        return;

    }


    alert(
        "🎉 You are successfully subscribed!"
    );


    document.getElementById(
        "emailInput"
    ).value = "";

}



/* =========================================
   HOME
========================================= */

function goHome() {

    selectedCategory = "All";

    searchText = "";

    document.getElementById(
        "searchInput"
    ).value = "";


    renderProducts();


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });


}



/* =========================================
   SCROLL
========================================= */

function scrollToProducts() {

    document
        .getElementById(
            "productsSection"
        )
        .scrollIntoView({

            behavior: "smooth"

        });

}



/* =========================================
   START WEBSITE
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        renderProducts();

        updateCartCount();

    }
);
