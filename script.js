/* =====================================================
   LAVKART E-COMMERCE WEBSITE
   Frontend-only JavaScript
   ===================================================== */


/* ================= PRODUCTS ================= */

const products = [

    {
        id: 1,
        name: "Classic Cotton T-Shirt",
        category: "Fashion",
        price: 799,
        oldPrice: 999,
        rating: 4.6,
        stock: 50,
        image:
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
        description:
            "Soft premium cotton t-shirt for everyday comfort."
    },

    {
        id: 2,
        name: "Premium Hoodie",
        category: "Fashion",
        price: 1499,
        oldPrice: 1999,
        rating: 4.7,
        stock: 30,
        image:
            "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=80",
        description:
            "Warm and comfortable hoodie with a modern fit."
    },

    {
        id: 3,
        name: "Wireless Headphones",
        category: "Electronics",
        price: 2499,
        oldPrice: 3499,
        rating: 4.5,
        stock: 25,
        image:
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
        description:
            "Bluetooth over-ear headphones with deep bass."
    },

    {
        id: 4,
        name: "Smart Watch Pro",
        category: "Electronics",
        price: 3299,
        oldPrice: 4999,
        rating: 4.4,
        stock: 18,
        image:
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
        description:
            "Fitness tracking, notifications and long battery life."
    },

    {
        id: 5,
        name: "Running Shoes",
        category: "Shoes",
        price: 2199,
        oldPrice: 2999,
        rating: 4.8,
        stock: 40,
        image:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
        description:
            "Lightweight running shoes for daily training."
    },

    {
        id: 6,
        name: "Casual Sneakers",
        category: "Shoes",
        price: 1899,
        oldPrice: 2499,
        rating: 4.5,
        stock: 35,
        image:
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=80",
        description:
            "Minimal sneakers for everyday outfits."
    },

    {
        id: 7,
        name: "Classic Wrist Watch",
        category: "Accessories",
        price: 1799,
        oldPrice: 2299,
        rating: 4.3,
        stock: 20,
        image:
            "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=80",
        description:
            "Elegant analog watch for office and occasions."
    },

    {
        id: 8,
        name: "Leather Backpack",
        category: "Accessories",
        price: 1599,
        oldPrice: 2199,
        rating: 4.7,
        stock: 22,
        image:
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80",
        description:
            "Durable backpack with laptop compartment."
    },

    {
        id: 9,
        name: "Sunglasses",
        category: "Accessories",
        price: 699,
        oldPrice: 999,
        rating: 4.4,
        stock: 60,
        image:
            "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80",
        description:
            "UV-protection sunglasses with a classic frame."
    },

    {
        id: 10,
        name: "Portable Speaker",
        category: "Electronics",
        price: 1299,
        oldPrice: 1799,
        rating: 4.6,
        stock: 28,
        image:
            "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=80",
        description:
            "Compact wireless speaker with powerful sound."
    },

    {
        id: 11,
        name: "Denim Jacket",
        category: "Fashion",
        price: 2299,
        oldPrice: 2999,
        rating: 4.6,
        stock: 17,
        image:
            "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=900&q=80",
        description:
            "Classic denim jacket with a comfortable fit."
    },

    {
        id: 12,
        name: "Sports Cap",
        category: "Fashion",
        price: 499,
        oldPrice: 699,
        rating: 4.2,
        stock: 80,
        image:
            "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=900&q=80",
        description:
            "Breathable adjustable sports cap."
    }

];


/* ================= APPLICATION STATE ================= */

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

let user =
    JSON.parse(
        localStorage.getItem("lavkart_user")
    ) || null;

let activeCategory = "all";

let couponDiscount = 0;

let couponCode = "";

let authMode = "login";


/* ================= SAVE ================= */

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

    localStorage.setItem(
        "lavkart_user",
        JSON.stringify(user)
    );

    updateCounts();
}


/* ================= MONEY ================= */

function money(value) {

    return (
        "₹" +
        Number(value || 0)
            .toLocaleString("en-IN")
    );

}


/* ================= TOAST ================= */

function toast(message) {

    const element =
        document.getElementById("toast");

    element.textContent = message;

    element.classList.add("show");

    setTimeout(() => {

        element.classList.remove("show");

    }, 2500);

}


/* ================= DARK MODE ================= */

function toggleDarkMode() {

    document.body.classList.toggle("dark");

    localStorage.setItem(
        "lavkart_dark",
        document.body.classList.contains("dark")
            ? "1"
            : "0"
    );

}


/* ================= CATEGORY ================= */

function filterCategory(category) {

    activeCategory = category;

    renderProducts();

    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* ================= RENDER PRODUCTS ================= */

function renderProducts() {

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


    let list =
        products.filter(product => {

            const categoryMatch =
                activeCategory === "all" ||
                product.category === activeCategory;

            const searchMatch =
                product.name
                    .toLowerCase()
                    .includes(search) ||

                product.description
                    .toLowerCase()
                    .includes(search);

            return categoryMatch && searchMatch;

        });


    /* SORT */

    if (sort === "low") {

        list.sort(
            (a,b) =>
                a.price - b.price
        );

    }

    if (sort === "high") {

        list.sort(
            (a,b) =>
                b.price - a.price
        );

    }

    if (sort === "rating") {

        list.sort(
            (a,b) =>
                b.rating - a.rating
        );

    }

    if (sort === "name") {

        list.sort(
            (a,b) =>
                a.name.localeCompare(b.name)
        );

    }


    const container =
        document.getElementById(
            "productContainer"
        );


    if (!list.length) {

        container.innerHTML = `
            <div class="empty">
                No products found.
            </div>
        `;

        return;

    }


    container.innerHTML =
        list.map(productCard).join("");

}


/* ================= PRODUCT CARD ================= */

function productCard(product) {

    const liked =
        wishlist.includes(product.id);


    return `

        <article class="product-card">

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

                ${
                    product.oldPrice
                    ?
                    `<span class="sale">
                        SALE
                    </span>`
                    :
                    ""
                }

                <button
                    class="heart ${
                        liked ? "liked" : ""
                    }"
                    onclick="
                        toggleWishlist(
                            ${product.id}
                        )
                    "
                >
                    ♥
                </button>

            </div>


            <div class="product-info">

                <small>
                    ${product.category}
                </small>

                <h3>
                    ${product.name}
                </h3>

                <div class="rating">
                    ★ ${product.rating}
                </div>

                <div class="price">

                    ${money(product.price)}

                    ${
                        product.oldPrice
                        ?
                        `<del>
                            ${money(product.oldPrice)}
                        </del>`
                        :
                        ""
                    }

                </div>

                <div class="stock">

                    ${
                        product.stock > 0
                        ?
                        `${product.stock} available`
                        :
                        "Out of stock"
                    }

                </div>


                <div class="card-buttons">

                    <button
                        onclick="
                            showProduct(
                                ${product.id}
                            )
                        "
                    >
                        View
                    </button>

                    <button
                        class="primary"
                        onclick="
                            addToCart(
                                ${product.id}
                            )
                        "
                        ${
                            product.stock < 1
                            ? "disabled"
                            : ""
                        }
                    >
                        Add to Cart
                    </button>

                </div>

            </div>

        </article>

    `;

}


/* ================= ADD CART ================= */

function addToCart(id) {

    const product =
        products.find(
            product =>
                product.id === id
        );


    if (!product) {

        return;

    }


    if (product.stock <= 0) {

        toast("Product is out of stock");

        return;

    }


    const item =
        cart.find(
            item =>
                item.id === id
        );


    if (item) {

        if (
            item.quantity >=
            product.stock
        ) {

            toast(
                "Maximum available quantity reached"
            );

            return;

        }

        item.quantity++;

    }

    else {

        cart.push({

            id: id,

            quantity: 1

        });

    }


    saveData();

    toast(
        "Product added to cart"
    );

    openCart();

}


/* ================= UPDATE CART ================= */

function updateCart(
    id,
    quantity
) {

    const item =
        cart.find(
            item =>
                item.id === id
        );


    const product =
        products.find(
            product =>
                product.id === id
        );


    if (!item || !product) {

        return;

    }


    if (quantity <= 0) {

        removeFromCart(id);

        return;

    }


    item.quantity =
        Math.min(
            quantity,
            product.stock
        );


    saveData();

    renderCart();

}


/* ================= REMOVE CART ================= */

function removeFromCart(id) {

    cart =
        cart.filter(
            item =>
                item.id !== id
        );

    saveData();

    renderCart();

    toast(
        "Product removed"
    );

}


/* ================= CLEAR CART ================= */

function clearCart() {

    cart = [];

    couponDiscount = 0;

    couponCode = "";

    saveData();

    renderCart();

    toast(
        "Cart cleared"
    );

}


/* ================= CART TOTALS ================= */

function getCartTotals() {

    let subtotal = 0;


    cart.forEach(item => {

        const product =
            products.find(
                p =>
                    p.id === item.id
            );

        if (product) {

            subtotal +=
                product.price *
                item.quantity;

        }

    });


    const shipping =
        subtotal === 0
        ?
        0
        :
        subtotal >= 999
        ?
        0
        :
        79;


    const discount =
        Math.min(
            couponDiscount,
            subtotal
        );


    const total =
        Math.max(
            0,
            subtotal +
            shipping -
            discount
        );


    return {

        subtotal,

        shipping,

        discount,

        total

    };

}


/* ================= RENDER CART ================= */

function renderCart() {

    const container =
        document.getElementById(
            "cartItems"
        );


    if (!cart.length) {

        container.innerHTML = `

            <div class="empty">

                Your cart is empty.

                <br><br>

                <a href="#products"
                   onclick="closeCart()">

                    Start shopping

                </a>

            </div>

        `;

    }

    else {

        container.innerHTML =
            cart.map(item => {

                const product =
                    products.find(
                        p =>
                            p.id === item.id
                    );


                return `

                    <div class="cart-item">

                        <img
                            src="${product.image}"
                            alt="${product.name}"
                        >


                        <div>

                            <h3>
                                ${product.name}
                            </h3>

                            <div>
                                ${money(
                                    product.price
                                )}
                            </div>


                            <div class="qty">

                                <button
                                    onclick="
                                        updateCart(
                                            ${product.id},
                                            ${item.quantity - 1}
                                        )
                                    "
                                >
                                    −
                                </button>

                                <b>
                                    ${item.quantity}
                                </b>

                                <button
                                    onclick="
                                        updateCart(
                                            ${product.id},
                                            ${item.quantity + 1}
                                        )
                                    "
                                >
                                    +
                                </button>


                                <button
                                    class="remove"
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


                        <strong>

                            ${money(
                                product.price *
                                item.quantity
                            )}

                        </strong>

                    </div>

                `;

            }).join("");

    }


    const totals =
        getCartTotals();


    document.getElementById(
        "subtotal"
    ).textContent =
        money(totals.subtotal);


    document.getElementById(
        "shipping"
    ).textContent =
        money(totals.shipping);


    document.getElementById(
        "discount"
    ).textContent =
        "-" +
        money(totals.discount);


    document.getElementById(
        "discountRow"
    ).hidden =
        totals.discount <= 0;


    document.getElementById(
        "cartTotal"
    ).textContent =
        money(totals.total);

}


/* ================= CART OPEN/CLOSE ================= */

function openCart() {

    renderCart();

    document
        .getElementById(
            "cartSidebar"
        )
        .classList.add("open");

    document
        .getElementById(
            "overlay"
        )
        .classList.add("show");

}


function closeCart() {

    document
        .getElementById(
            "cartSidebar"
        )
        .classList.remove("open");

    document
        .getElementById(
            "overlay"
        )
        .classList.remove("show");

}


function closeAll() {

    closeCart();

}


/* ================= PRODUCT DETAILS ================= */

function showProduct(id) {

    const product =
        products.find(
            p =>
                p.id === id
        );


    if (!product) {

        return;

    }


    document.getElementById(
        "productDetails"
    ).innerHTML = `

        <div class="product-detail">

            <img
                src="${product.image}"
                alt="${product.name}"
            >


            <div>

                <small>
                    ${product.category}
                </small>

                <h2>
                    ${product.name}
                </h2>

                <div class="rating">
                    ★ ${product.rating}
                </div>

                <div class="large-price">

                    ${money(product.price)}

                    ${
                        product.oldPrice
                        ?
                        `<del>
                            ${money(
                                product.oldPrice
                            )}
                        </del>`
                        :
                        ""
                    }

                </div>

                <p>
                    ${product.description}
                </p>

                <p>
                    ${product.stock}
                    units available.
                </p>

                <button
                    class="place-order-button"
                    onclick="
                        addToCart(
                            ${product.id}
                        );
                        closeProductModal();
                    "
                >
                    Add to Cart
                </button>

            </div>

        </div>

    `;


    document
        .getElementById(
            "productModal"
        )
        .classList.add("open");

}


function closeProductModal() {

    document
        .getElementById(
            "productModal"
        )
        .classList.remove("open");

}


/* ================= WISHLIST ================= */

function toggleWishlist(id) {

    if (
        wishlist.includes(id)
    ) {

        wishlist =
            wishlist.filter(
                item =>
                    item !== id
            );

        toast(
            "Removed from wishlist"
        );

    }

    else {

        wishlist.push(id);

        toast(
            "Added to wishlist ❤️"
        );

    }


    saveData();

    renderProducts();

}


function openWishlist() {

    const container =
        document.getElementById(
            "wishlistItems"
        );


    const list =
        products.filter(
            product =>
                wishlist.includes(
                    product.id
                )
        );


    if (!list.length) {

        container.innerHTML = `

            <div class="empty">

                Your wishlist is empty.

            </div>

        `;

    }

    else {

        container.innerHTML =
            list.map(
                productCard
            ).join("");

    }


    document
        .getElementById(
            "wishlistModal"
        )
        .classList.add("open");

}


function closeWishlist() {

    document
        .getElementById(
            "wishlistModal"
        )
        .classList.remove("open");

}


/* ================= COUPONS ================= */

function applyCoupon() {

    const code =
        document
            .getElementById(
                "couponInput"
            )
            .value
            .trim()
            .toUpperCase();


    const subtotal =
        getCartTotals()
            .subtotal;


    if (
        code === "WELCOME10"
    ) {

        couponCode = code;

        couponDiscount =
            subtotal * 0.10;

        toast(
            "10% discount applied"
        );

    }

    else if (
        code === "SAVE500"
    ) {

        couponCode = code;

        couponDiscount = 500;

        toast(
            "₹500 discount applied"
        );

    }

    else {

        couponCode = "";

        couponDiscount = 0;

        toast(
            "Invalid coupon code"
        );

    }


    renderCart();

}


/* ================= CHECKOUT ================= */

function openCheckout() {

    if (!cart.length) {

        toast(
            "Your cart is empty"
        );

        return;

    }


    document
        .getElementById(
            "checkoutModal"
        )
        .classList.add("open");


    closeCart();


    if (user) {

        document.getElementById(
            "checkoutEmail"
        ).value =
            user.email || "";

        document.getElementById(
            "firstName"
        ).value =
            user.name
                ?.split(" ")[0] || "";

    }

}


function closeCheckout() {

    document
        .getElementById(
            "checkoutModal"
        )
        .classList.remove("open");

}


/* ================= PLACE ORDER ================= */

function placeOrder(event) {

    event.preventDefault();


    const totals =
        getCartTotals();


    const payment =
        document.querySelector(
            'input[name="payment"]:checked'
        ).value;


    const order = {

        id:
            "LK" +
            Date.now()
                .toString()
                .slice(-8),

        date:
            new Date()
                .toLocaleString(),

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

        payment,

        status:
            "Order Placed",

        items:
            cart.map(
                item =>
                    ({
                        ...item
                    })
            ),

        subtotal:
            totals.subtotal,

        shipping:
            totals.shipping,

        discount:
            totals.discount,

        total:
            totals.total

    };


    orders.unshift(order);


    cart = [];

    couponDiscount = 0;

    couponCode = "";


    saveData();


    document
        .getElementById(
            "checkoutForm"
        )
        .reset();


    closeCheckout();

    renderCart();

    toast(
        "Order placed successfully 🎉"
    );


    setTimeout(
        openOrders,
        400
    );

}


/* ================= ORDERS ================= */

function openOrders() {

    const container =
        document.getElementById(
            "ordersList"
        );


    if (!orders.length) {

        container.innerHTML = `

            <div class="empty">

                No orders yet.

            </div>

        `;

    }

    else {

        container.innerHTML =
            orders.map(order => {

                return `

                    <div class="order-card">

                        <div class="order-head">

                            <div>

                                <b>
                                    ${order.id}
                                </b>

                                <br>

                                <small>
                                    ${order.date}
                                </small>

                            </div>


                            <strong>

                                ${money(
                                    order.total
                                )}

                            </strong>

                        </div>


                        <span class="status">

                            ${order.status}

                        </span>


                        <div style="margin-top:12px">

                            ${
                                order.items
                                    .map(item => {

                                        const product =
                                            products.find(
                                                p =>
                                                    p.id ===
                                                    item.id
                                            );

                                        return `
                                            ${product.name}
                                            ×
                                            ${item.quantity}
                                        `;

                                    })
                                    .join("<br>")
                            }

                        </div>

                    </div>

                `;

            }).join("");

    }


    document
        .getElementById(
            "ordersModal"
        )
        .classList.add("open");

}


function closeOrders() {

    document
        .getElementById(
            "ordersModal"
        )
        .classList.remove("open");

}


/* ================= LOGIN ================= */

function openLogin() {

    if (user) {

        const logout =
            confirm(
                `You are logged in as ${user.name}.\n\nDo you want to logout?`
            );


        if (logout) {

            user = null;

            saveData();

            toast(
                "Logged out successfully"
            );

        }

        return;

    }


    document
        .getElementById(
            "authModal"
        )
        .classList.add("open");

}


function closeLogin() {

    document
        .getElementById(
            "authModal"
        )
        .classList.remove("open");

}


/* ================= LOGIN / REGISTER ================= */

function toggleAuthMode() {

    authMode =
        authMode === "login"
        ?
        "register"
        :
        "login";


    document.getElementById(
        "authTitle"
    ).textContent =
        authMode === "login"
        ?
        "Welcome Back"
        :
        "Create Account";


    document.getElementById(
        "authSubmit"
    ).textContent =
        authMode === "login"
        ?
        "Login"
        :
        "Register";


    document.getElementById(
        "nameGroup"
    ).hidden =
        authMode === "login";


    document.getElementById(
        "authName"
    ).required =
        authMode === "register";


    document.getElementById(
        "switchAuth"
    ).textContent =
        authMode === "login"
        ?
        "Create an account"
        :
        "Already have an account? Login";

}


function handleAuth(event) {

    event.preventDefault();


    const email =
        document.getElementById(
            "authEmail"
        ).value
        .trim()
        .toLowerCase();


    const password =
        document.getElementById(
            "authPassword"
        ).value;


    const name =
        document.getElementById(
            "authName"
        ).value
        .trim();


    if (
        authMode === "register"
        &&
        !name
    ) {

        toast(
            "Please enter your name"
        );

        return;

    }


    /*
        Demo frontend authentication.

        In a real production application,
        password authentication must happen
        on a backend.
    */

    user = {

        name:
            authMode === "register"
            ?
            name
            :
            email.split("@")[0],

        email: email,

        role: "customer"

    };


    saveData();

    closeLogin();


    toast(
        authMode === "login"
        ?
        "Login successful"
        :
        "Account created successfully"
    );

}


/* ================= UPDATE HEADER ================= */

function updateCounts() {

    document.getElementById(
        "cartCount"
    ).textContent =
        cart.reduce(
            (total,item) =>
                total + item.quantity,
            0
        );


    document.getElementById(
        "wishlistCount"
    ).textContent =
        wishlist.length;


    document.getElementById(
        "loginButton"
    ).textContent =
        user
        ?
        `Hi, ${user.name.split(" ")[0]}`
        :
        "Login";

}


/* ================= INITIALIZE ================= */

window.addEventListener(
    "load",
    function() {

        if (
            localStorage.getItem(
                "lavkart_dark"
            ) === "1"
        ) {

            document.body.classList.add(
                "dark"
            );

        }


        renderProducts();

        renderCart();

        updateCounts();

    }
);
