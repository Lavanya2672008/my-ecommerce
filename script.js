/* =====================================================
   ORANGECART
   Ecommerce functionality
===================================================== */


/* =====================================================
   PRODUCT DATABASE
===================================================== */

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
        description:
            "Experience next-generation smartphone performance with a premium titanium design, advanced camera system and powerful processor."
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
        description:
            "A premium smartphone featuring an amazing display, powerful camera system and excellent performance."
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
        description:
            "Premium wireless headphones with immersive audio, comfortable ear cushions and excellent noise isolation."
    },

    {
        id: 4,
        name: "MacBook Air",
        category: "electronics",
        price: 104999,
        oldPrice: 119999,
        rating: 4.9,
        reviews: 642,
        discount: 13,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=700&q=85",
        description:
            "Powerful and lightweight laptop designed for work, creativity and everyday productivity."
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
        description:
            "Soft premium cotton T-shirt with a comfortable modern fit for everyday wear."
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
        description:
            "A stylish classic denim jacket that works perfectly with casual outfits."
    },

    {
        id: 7,
        name: "Premium Casual Hoodie",
        category: "fashion",
        price: 1299,
        oldPrice: 2499,
        rating: 4.5,
        reviews: 912,
        discount: 48,
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=700&q=85",
        description:
            "Comfortable everyday hoodie made for casual wear and cool evenings."
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
        description:
            "Elegant summer dress featuring a modern style and comfortable lightweight material."
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
        description:
            "Lightweight running shoes designed for comfort, daily exercise and performance."
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
        description:
            "Modern sports sneakers featuring comfortable cushioning and stylish design."
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
        description:
            "Premium formal leather shoes for office wear, business meetings and special occasions."
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
        description:
            "Minimal modern table lamp designed to add warmth and style to your room."
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
        description:
            "Comfortable modern lounge chair designed to enhance your living room."
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
        description:
            "Beautiful minimalist wall clock with a timeless modern design."
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
        description:
            "Make delicious coffee at home with this stylish and easy-to-use coffee maker."
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
        description:
            "Premium skincare serum designed for a fresh and healthy-looking appearance."
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
        description:
            "A complete makeup collection containing essential products for your everyday look."
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
        description:
            "Responsive wireless controller designed for an immersive gaming experience."
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
        description:
            "Mechanical gaming keyboard with responsive switches and premium construction."
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
        description:
            "High precision gaming mouse with ergonomic design and accurate tracking."
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
        description:
            "Spacious and durable backpack perfect for travel, college and work."
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
        description:
            "Stylish sunglasses designed for everyday fashion and outdoor use."
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
        description:
            "Smart wearable featuring fitness tracking, notifications and a modern design."
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
        description:
            "Compact Bluetooth speaker with powerful sound and long battery life."
    }

];


/* =====================================================
   APPLICATION STATE
===================================================== */

let displayedProducts = [...products];

let cart = JSON.parse(
    localStorage.getItem("orangeCart")
) || [];

let wishlist = JSON.parse(
    localStorage.getItem("orangeWishlist")
) || [];


/* =====================================================
   DOM READY
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    renderProducts();

    updateCartCount();

    renderCart();

    setupSearch();

    updateWishlistButtons();

});


/* =====================================================
   FORMAT PRICE
===================================================== */

function formatPrice(price) {

    return new Intl.NumberFormat(
        "en-IN",
        {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0
        }
    ).format(price);

}


/* =====================================================
   STARS
===================================================== */

function getStars(rating) {

    let result = "";

    for (let i = 1; i <= 5; i++) {

        result +=
            rating >= i
                ? "★"
                : "☆";

    }

    return result;

}


/* =====================================================
   RENDER PRODUCTS
===================================================== */

function renderProducts() {

    const grid =
        document.getElementById(
            "productGrid"
        );

    const count =
        document.getElementById(
            "productCount"
        );

    if (!grid) {
        return;
    }


    count.textContent =
        `${displayedProducts.length} Products`;


    if (displayedProducts.length === 0) {

        grid.innerHTML = `

            <div class="no-products">

                <div class="no-icon">
                    🔎
                </div>

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


    grid.innerHTML =
        displayedProducts.map(
            product => createProductCard(product)
        ).join("");


    updateWishlistButtons();

}


/* =====================================================
   PRODUCT CARD
===================================================== */

function createProductCard(product) {

    const isWishlisted =
        wishlist.includes(product.id);

    return `

        <article class="product-card">

            <div class="product-image-wrapper">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                    onerror="
                        this.src='https://placehold.co/700x700/fff1e6/ff6900?text=OrangeCart'
                    "
                >

                <span class="discount-badge">
                    ${product.discount}% OFF
                </span>


                <button
                    class="
                        wishlist-button
                        ${isWishlisted ? "active" : ""}
                    "
                    data-product-id="${product.id}"
                    onclick="toggleWishlist(${product.id})"
                >
                    ${isWishlisted ? "♥" : "♡"}
                </button>

            </div>


            <div class="product-info">

                <span class="product-category">
                    ${product.category}
                </span>


                <h3
                    class="product-name"
                    onclick="showProduct(${product.id})"
                >
                    ${product.name}
                </h3>


                <div class="product-rating">

                    <span class="stars">
                        ${getStars(product.rating)}
                    </span>

                    <span class="rating-number">
                        ${product.rating}
                        (${product.reviews})
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
                    class="add-cart-button"
                    onclick="addToCart(${product.id})"
                >
                    🛒 Add to Cart
                </button>

            </div>

        </article>

    `;

}


/* =====================================================
   FILTER PRODUCTS
===================================================== */

function filterProducts(category) {

    document
        .querySelectorAll(".nav-link")
        .forEach(button => {

            button.classList.remove(
                "active"
            );

        });


    const selected =
        document.querySelector(
            `.nav-link[data-category="${category}"]`
        );

    if (selected) {

        selected.classList.add("active");

    }


    if (category === "all") {

        displayedProducts =
            [...products];

        setProductTitle(
            "Trending Products"
        );

    }

    else if (category === "deals") {

        displayedProducts =
            products.filter(
                product =>
                    product.discount >= 40
            );

        setProductTitle(
            "🔥 Today's Best Deals"
        );

    }

    else {

        displayedProducts =
            products.filter(
                product =>
                    product.category === category
            );

        setProductTitle(
            `${capitalize(category)} Collection`
        );

    }


    resetSort();

    renderProducts();

    scrollToProducts();

}


/* =====================================================
   PRODUCT TITLE
===================================================== */

function setProductTitle(title) {

    document.getElementById(
        "productTitle"
    ).textContent = title;

}


/* =====================================================
   CAPITALIZE
===================================================== */

function capitalize(text) {

    return text.charAt(0).toUpperCase()
        + text.slice(1);

}


/* =====================================================
   SEARCH
===================================================== */

function setupSearch() {

    const input =
        document.getElementById(
            "searchInput"
        );

    const button =
        document.getElementById(
            "searchButton"
        );


    button.addEventListener(
        "click",
        searchProducts
    );


    input.addEventListener(
        "keydown",
        event => {

            if (event.key === "Enter") {

                searchProducts();

            }

        }
    );


    input.addEventListener(
        "input",
        () => {

            if (
                input.value.trim() === ""
            ) {

                displayedProducts =
                    [...products];

                setProductTitle(
                    "Trending Products"
                );

                renderProducts();

            }

        }
    );

}


/* =====================================================
   SEARCH FUNCTION
===================================================== */

function searchProducts() {

    const input =
        document.getElementById(
            "searchInput"
        );

    const query =
        input.value
            .trim()
            .toLowerCase();


    if (!query) {

        displayedProducts =
            [...products];

        setProductTitle(
            "Trending Products"
        );

        renderProducts();

        return;

    }


    displayedProducts =
        products.filter(
            product =>

                product.name
                    .toLowerCase()
                    .includes(query)

                ||

                product.category
                    .toLowerCase()
                    .includes(query)

                ||

                product.description
                    .toLowerCase()
                    .includes(query)

        );


    setProductTitle(
        `Search Results for "${query}"`
    );


    renderProducts();

    scrollToProducts();

}


/* =====================================================
   SORT
===================================================== */

function sortProducts() {

    const select =
        document.getElementById(
            "sortSelect"
        );

    const value =
        select.value;


    if (value === "low") {

        displayedProducts.sort(
            (a, b) =>
                a.price - b.price
        );

    }

    else if (value === "high") {

        displayedProducts.sort(
            (a, b) =>
                b.price - a.price
        );

    }

    else if (value === "rating") {

        displayedProducts.sort(
            (a, b) =>
                b.rating - a.rating
        );

    }

    else if (value === "discount") {

        displayedProducts.sort(
            (a, b) =>
                b.discount - a.discount
        );

    }


    renderProducts();

}


/* =====================================================
   RESET SORT
===================================================== */

function resetSort() {

    const select =
        document.getElementById(
            "sortSelect"
        );

    select.value = "default";

}


/* =====================================================
   CART
===================================================== */

function addToCart(productId) {

    const product =
        products.find(
            p => p.id === productId
        );


    if (!product) {
        return;
    }


    const existing =
        cart.find(
            item =>
                item.id === productId
        );


    if (existing) {

        existing.quantity += 1;

    }

    else {

        cart.push({
            id: productId,
            quantity: 1
        });

    }


    saveCart();


    showToast(
        `${product.name} added to cart 🛒`
    );

}


/* =====================================================
   SAVE CART
===================================================== */

function saveCart() {

    localStorage.setItem(
        "orangeCart",
        JSON.stringify(cart)
    );

    updateCartCount();

    renderCart();

}


/* =====================================================
   CART COUNT
===================================================== */

function updateCartCount() {

    const count =
        cart.reduce(
            (total, item) =>
                total + item.quantity,
            0
        );


    document.getElementById(
        "cartCount"
    ).textContent = count;

}


/* =====================================================
   RENDER CART
===================================================== */

function renderCart() {

    const container =
        document.getElementById(
            "cartItems"
        );

    if (!container) {
        return;
    }


    if (cart.length === 0) {

        container.innerHTML = `

            <div class="empty-cart">

                <div class="empty-cart-icon">
                    🛒
                </div>

                <h3>
                    Your cart is empty
                </h3>

                <p>
                    Add some amazing products!
                </p>

            </div>

        `;


        document.getElementById(
            "cartTotal"
        ).textContent = "₹0";

        return;

    }


    let total = 0;


    container.innerHTML =
        cart.map(item => {

            const product =
                products.find(
                    p => p.id === item.id
                );


            if (!product) {
                return "";
            }


            total +=
                product.price *
                item.quantity;


            return `

                <div class="cart-item">

                    <img
                        class="cart-item-image"
                        src="${product.image}"
                        alt="${product.name}"
                    >


                    <div class="cart-item-info">

                        <h4>
                            ${product.name}
                        </h4>

                        <div class="cart-item-price">
                            ${formatPrice(product.price)}
                        </div>


                        <div class="cart-controls">

                            <button
                                class="quantity-button"
                                onclick="
                                    changeQuantity(
                                        ${product.id},
                                        -1
                                    )
                                "
                            >
                                −
                            </button>


                            <span class="quantity-number">
                                ${item.quantity}
                            </span>


                            <button
                                class="quantity-button"
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
                                class="remove-button"
                                onclick="
                                    removeFromCart(
                                        ${product.id}
                                    )
                                "
                            >
                                Remove
                            </button>

                        </div>

                    </div>

                </div>

            `;

        }).join("");


    document.getElementById(
        "cartTotal"
    ).textContent =
        formatPrice(total);

}


/* =====================================================
   CHANGE QUANTITY
===================================================== */

function changeQuantity(
    productId,
    amount
) {

    const item =
        cart.find(
            item =>
                item.id === productId
        );


    if (!item) {
        return;
    }


    item.quantity += amount;


    if (item.quantity <= 0) {

        cart =
            cart.filter(
                item =>
                    item.id !== productId
            );

    }


    saveCart();

}


/* =====================================================
   REMOVE CART ITEM
===================================================== */

function removeFromCart(productId) {

    cart =
        cart.filter(
            item =>
                item.id !== productId
        );


    saveCart();


    showToast(
        "Product removed from cart"
    );

}


/* =====================================================
   OPEN CART
===================================================== */

function openCart() {

    document
        .getElementById("cartPanel")
        .classList.add("open");


    document
        .getElementById("cartOverlay")
        .classList.add("show");


    document.body.style.overflow =
        "hidden";

}


/* =====================================================
   CLOSE CART
===================================================== */

function closeCart() {

    document
        .getElementById("cartPanel")
        .classList.remove("open");


    document
        .getElementById("cartOverlay")
        .classList.remove("show");


    document.body.style.overflow =
        "";

}


/* =====================================================
   PRODUCT DETAILS
===================================================== */

function showProduct(productId) {

    const product =
        products.find(
            p => p.id === productId
        );


    if (!product) {
        return;
    }


    const modal =
        document.getElementById(
            "productModal"
        );


    const content =
        document.getElementById(
            "modalContent"
        );


    content.innerHTML = `

        <div class="modal-product">

            <div>

                <img
                    class="modal-product-image"
                    src="${product.image}"
                    alt="${product.name}"
                >

            </div>


            <div>

                <span class="modal-product-category">
                    ${product.category}
                </span>


                <h2>
                    ${product.name}
                </h2>


                <div class="product-rating">

                    <span class="stars">
                        ${getStars(product.rating)}
                    </span>

                    <span class="rating-number">
                        ${product.rating}
                        (${product.reviews} reviews)
                    </span>

                </div>


                <div class="modal-price">
                    ${formatPrice(product.price)}
                </div>


                <div class="modal-old-price">
                    ${formatPrice(product.oldPrice)}
                </div>


                <p class="modal-product-description">
                    ${product.description}
                </p>


                <div class="modal-features">

                    🚚 Free delivery on orders above ₹499
                    <br>

                    🔄 7-day easy returns
                    <br>

                    🔒 Secure checkout
                    <br>

                    ⭐ Highly rated product

                </div>


                <button
                    class="modal-add-button"
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


    modal.classList.add("show");

    document.body.style.overflow =
        "hidden";

}


/* =====================================================
   CLOSE PRODUCT MODAL
===================================================== */

function closeProductModal() {

    document
        .getElementById(
            "productModal"
        )
        .classList.remove("show");


    document.body.style.overflow =
        "";

}


/* =====================================================
   MODAL OUTSIDE CLICK
===================================================== */

document.addEventListener(
    "click",
    event => {

        const modal =
            document.getElementById(
                "productModal"
            );


        if (
            event.target === modal
        ) {

            closeProductModal();

        }

    }
);


/* =====================================================
   ESC KEY
===================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeProductModal();

            closeCart();

        }

    }
);


/* =====================================================
   WISHLIST
===================================================== */

function toggleWishlist(productId) {

    const index =
        wishlist.indexOf(productId);


    if (index === -1) {

        wishlist.push(productId);

        showToast(
            "Added to wishlist ❤️"
        );

    }

    else {

        wishlist.splice(
            index,
            1
        );

        showToast(
            "Removed from wishlist"
        );

    }


    localStorage.setItem(
        "orangeWishlist",
        JSON.stringify(wishlist)
    );


    updateWishlistButtons();

}


/* =====================================================
   UPDATE WISHLIST BUTTONS
===================================================== */

function updateWishlistButtons() {

    document
        .querySelectorAll(
            ".wishlist-button"
        )
        .forEach(button => {

            const id =
                Number(
                    button.dataset.productId
                );


            if (
                wishlist.includes(id)
            ) {

                button.classList.add(
                    "active"
                );

                button.textContent =
                    "♥";

            }

            else {

                button.classList.remove(
                    "active"
                );

                button.textContent =
                    "♡";

            }

        });

}


/* =====================================================
   SHOW WISHLIST
===================================================== */

function showWishlist() {

    if (wishlist.length === 0) {

        showToast(
            "Your wishlist is empty ❤️"
        );

        return;

    }


    displayedProducts =
        products.filter(
            product =>
                wishlist.includes(
                    product.id
                )
        );


    setProductTitle(
        "❤️ My Wishlist"
    );


    renderProducts();

    scrollToProducts();

}


/* =====================================================
   TOAST
===================================================== */

let toastTimer;


function showToast(message) {

    const toast =
        document.getElementById(
            "toast"
        );


    clearTimeout(toastTimer);


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


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


/* =====================================================
   NEWSLETTER
===================================================== */

function subscribeNewsletter() {

    const input =
        document.getElementById(
            "emailInput"
        );


    const email =
        input.value.trim();


    if (!email) {

        showToast(
            "Please enter your email 📧"
        );

        return;

    }


    if (
        !email.includes("@") ||
        !email.includes(".")
    ) {

        showToast(
            "Please enter a valid email"
        );

        return;

    }


    input.value = "";


    showToast(
        "Successfully subscribed! 🎉"
    );

}


/* =====================================================
   CHECKOUT
===================================================== */

function checkout() {

    if (cart.length === 0) {

        showToast(
            "Your cart is empty 🛒"
        );

        return;

    }


    alert(
        "OrangeCart Checkout\n\n" +
        "Your order is ready!\n\n" +
        "Payment gateway can be connected next."
    );

}


/* =====================================================
   SCROLL TO PRODUCTS
===================================================== */

function scrollToProducts() {

    document
        .getElementById(
            "productsSection"
        )
        .scrollIntoView({
            behavior: "smooth"
        });

}
