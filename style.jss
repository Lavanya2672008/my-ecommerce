* {
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    color: #18161d;
    background: #ffffff;
    transition: 0.3s;
}

body.dark {
    background: #101014;
    color: #ffffff;
}

button,
input,
select,
textarea {
    font: inherit;
}

button {
    cursor: pointer;
}

a {
    text-decoration: none;
    color: inherit;
}


/* ================= HEADER ================= */

.header {
    height: 75px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 5%;

    position: sticky;
    top: 0;

    z-index: 100;

    background: rgba(255,255,255,0.95);

    backdrop-filter: blur(15px);

    border-bottom: 1px solid #eeeeee;
}

.dark .header {
    background: rgba(16,16,20,0.95);
    border-color: #2c2c32;
}

.logo {
    font-size: 30px;
    font-weight: 900;
}

.logo span,
.footer-logo span,
.hero h1 span,
.about-content h2 span,
.auth-logo span {
    color: #ff6b00;
}

.navbar {
    display: flex;
    gap: 25px;
}

.navbar a {
    font-weight: 700;
    color: #555;
}

.dark .navbar a {
    color: #ddd;
}

.navbar a:hover {
    color: #ff6b00;
}

.header-actions {
    display: flex;
    gap: 8px;
    align-items: center;
}

.header-btn {
    border: 0;
    background: #f4f4f6;
    border-radius: 10px;
    padding: 10px 12px;
}

.dark .header-btn {
    background: #25252c;
    color: white;
}

.login-button {
    border: 0;
    border-radius: 10px;

    padding: 11px 18px;

    background: #18161d;
    color: white;

    font-weight: 700;
}


/* ================= HERO ================= */

.hero {
    min-height: 620px;

    padding: 80px 9%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background:
        linear-gradient(
            135deg,
            #fff0f5,
            #f4f0ff
        );
}

.dark .hero {
    background:
        linear-gradient(
            135deg,
            #21161b,
            #18172a
        );
}

.hero-content {
    max-width: 650px;
}

.small-title {
    color: #ff6b00;

    font-size: 12px;

    font-weight: 900;

    letter-spacing: 2px;
}

.hero h1 {
    font-size: clamp(45px, 6vw, 75px);

    line-height: 1.02;

    margin: 20px 0;
}

.hero-description {
    color: #666;

    font-size: 19px;

    line-height: 1.7;
}

.dark .hero-description {
    color: #bbb;
}

.hero-buttons {
    display: flex;
    gap: 12px;

    margin-top: 30px;
}

.primary-button,
.secondary-button {
    padding: 14px 23px;

    border-radius: 12px;

    font-weight: 800;
}

.primary-button {
    background: #18161d;
    color: white;
}

.secondary-button {
    background: white;
    border: 1px solid #ddd;
}

.dark .secondary-button {
    background: #222229;
    border-color: #444;
    color: white;
}

.hero-features {
    display: flex;
    gap: 25px;

    margin-top: 35px;

    color: #666;
}

.dark .hero-features {
    color: #ddd;
}

.hero-image {
    width: 430px;
    height: 430px;

    display: grid;
    place-items: center;

    position: relative;
}

.hero-circle {
    width: 340px;
    height: 340px;

    border-radius: 50%;

    display: grid;
    place-items: center;

    background: white;

    font-size: 120px;

    box-shadow:
        0 30px 80px
        rgba(0,0,0,0.15);
}

.dark .hero-circle {
    background: #29252d;
    box-shadow: none;
}

.floating-card {
    position: absolute;

    background: white;

    padding: 15px 20px;

    border-radius: 14px;

    font-weight: 800;

    box-shadow:
        0 15px 40px
        rgba(0,0,0,0.12);
}

.dark .floating-card {
    background: #292930;
}

.floating-one {
    top: 45px;
    left: 0;
}

.floating-two {
    right: 0;
    bottom: 55px;
}


/* ================= SECTION ================= */

.section {
    padding: 90px 7%;
}

.section-heading {
    text-align: center;

    margin-bottom: 45px;
}

.section-heading p {
    color: #ff6b00;

    font-size: 12px;

    font-weight: 900;

    letter-spacing: 2px;
}

.section-heading h2 {
    font-size: 42px;

    margin: 10px;
}

.section-heading span {
    color: #777;
}


/* ================= CATEGORY ================= */

.category-grid {
    display: grid;

    grid-template-columns:
        repeat(5, 1fr);

    gap: 18px;
}

.category-card {
    border: 1px solid #eeeeee;

    background: #fafafa;

    border-radius: 18px;

    padding: 28px 15px;

    text-align: center;

    transition: 0.2s;
}

.dark .category-card {
    background: #1b1b20;
    border-color: #303038;
    color: white;
}

.category-card:hover {
    transform: translateY(-5px);

    border-color: #ff6b00;
}

.category-icon {
    font-size: 40px;
}

.category-card h3 {
    margin: 12px 0 5px;
}

.category-card p {
    margin: 0;

    color: #888;
}


/* ================= PRODUCTS ================= */

.product-tools {
    max-width: 900px;

    margin:
        0 auto 30px;

    display: flex;

    gap: 12px;
}

.product-tools input,
.product-tools select {
    padding: 14px;

    border:
        1px solid #ddd;

    border-radius: 10px;

    background: white;

    outline: none;
}

.dark .product-tools input,
.dark .product-tools select {
    background: #1b1b20;
    color: white;
    border-color: #383840;
}

.product-tools input {
    flex: 1;
}

.product-tools select {
    width: 220px;
}

.product-grid {
    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 22px;
}

.product-card {
    background: white;

    border:
        1px solid #eeeeee;

    border-radius: 18px;

    overflow: hidden;

    transition: 0.2s;
}

.dark .product-card {
    background: #19191e;
    border-color: #303039;
}

.product-card:hover {
    transform: translateY(-5px);

    box-shadow:
        0 20px 45px
        rgba(0,0,0,0.10);
}

.product-image {
    height: 270px;

    position: relative;

    background: #f3f3f3;
}

.product-image img {
    width: 100%;
    height: 100%;

    object-fit: cover;
}

.sale {
    position: absolute;

    top: 12px;
    left: 12px;

    background: #ff6b00;

    color: white;

    padding: 5px 9px;

    border-radius: 7px;

    font-size: 11px;

    font-weight: 900;
}

.heart {
    position: absolute;

    right: 12px;
    top: 12px;

    width: 38px;
    height: 38px;

    border-radius: 50%;

    background: white;

    color: #777;

    font-size: 20px;
}

.heart.liked {
    color: #ff6b00;
}

.product-info {
    padding: 17px;
}

.product-info small {
    color: #ff6b00;

    font-weight: 800;
}

.product-info h3 {
    margin: 7px 0;
}

.rating {
    color: #e7a000;

    font-weight: 800;
}

.price {
    font-size: 21px;

    font-weight: 900;

    margin-top: 8px;
}

.price del {
    font-size: 13px;

    color: #999;

    margin-left: 5px;
}

.stock {
    font-size: 12px;

    color: #777;

    margin-top: 5px;
}

.card-buttons {
    display: flex;

    gap: 8px;

    margin-top: 14px;
}

.card-buttons button {
    flex: 1;

    padding: 10px;

    border: 0;

    border-radius: 10px;
}

.card-buttons .primary {
    background: #18161d;

    color: white;
}


/* ================= ABOUT ================= */

.about-section {
    padding: 90px 7%;

    display: grid;

    grid-template-columns:
        1fr 1fr;

    gap: 70px;

    align-items: center;

    background: #fafafa;
}

.dark .about-section {
    background: #15151a;
}

.about-content h2 {
    font-size: 55px;

    margin: 15px 0;
}

.about-content > p {
    color: #777;

    font-size: 18px;

    line-height: 1.7;
}

.about-points {
    display: grid;

    grid-template-columns:
        1fr 1fr;

    gap: 14px;

    margin-top: 25px;
}

.about-points div {
    background: white;

    padding: 17px;

    border-radius: 12px;
}

.dark .about-points div {
    background: #222229;
}

.about-points b {
    color: #ff6b00;

    margin-right: 10px;
}

.about-image {
    height: 330px;

    border-radius: 35px;

    background:
        linear-gradient(
            135deg,
            #ffe0e9,
            #e7dcff
        );

    display: grid;

    place-items: center;

    font-size: 120px;
}


/* ================= NEWSLETTER ================= */

.newsletter {
    margin: 70px 7%;

    padding: 55px 7%;

    border-radius: 28px;

    background: #18161d;

    color: white;

    display: flex;

    align-items: center;

    justify-content: space-between;
}

.newsletter p {
    color: #ff6b00;

    font-weight: 900;

    letter-spacing: 2px;
}

.newsletter h2 {
    font-size: 38px;
}

.newsletter .primary-button {
    background: white;

    color: #18161d;
}


/* ================= FOOTER ================= */

footer {
    background: #111;

    color: #ddd;

    padding:
        65px 7% 25px;
}

.footer-grid {
    display: grid;

    grid-template-columns:
        2fr 1fr 1fr 1fr;

    gap: 40px;
}

.footer-grid > div {
    display: flex;

    flex-direction: column;

    gap: 11px;
}

.footer-logo {
    font-size: 30px;

    font-weight: 900;
}

.footer-grid button {
    background: none;

    border: 0;

    color: #ddd;

    text-align: left;

    padding: 0;
}

.copyright {
    margin-top: 45px;

    padding-top: 20px;

    border-top: 1px solid #333;

    color: #888;
}


/* ================= CART ================= */

.overlay {
    position: fixed;

    inset: 0;

    background: rgba(0,0,0,0.55);

    opacity: 0;

    visibility: hidden;

    z-index: 150;

    transition: 0.2s;
}

.overlay.show {
    opacity: 1;

    visibility: visible;
}

.cart-sidebar {
    position: fixed;

    right: -520px;
    top: 0;

    width: min(500px,100%);

    height: 100vh;

    z-index: 200;

    background: white;

    display: flex;

    flex-direction: column;

    padding: 25px;

    transition: 0.3s;
}

.dark .cart-sidebar {
    background: #19191e;
}

.cart-sidebar.open {
    right: 0;
}

.drawer-header {
    display: flex;

    align-items: center;

    justify-content: space-between;

    border-bottom: 1px solid #eee;

    padding-bottom: 15px;
}

.drawer-header button {
    border: 0;

    background: none;

    font-size: 22px;
}

.cart-items {
    flex: 1;

    overflow-y: auto;
}

.cart-item {
    display: grid;

    grid-template-columns:
        75px 1fr auto;

    gap: 12px;

    align-items: center;

    padding: 15px 0;

    border-bottom: 1px solid #eee;
}

.cart-item img {
    width: 75px;
    height: 75px;

    object-fit: cover;

    border-radius: 10px;
}

.cart-item h3 {
    font-size: 15px;

    margin: 0 0 5px;
}

.qty {
    display: flex;

    gap: 8px;

    align-items: center;

    margin-top: 8px;
}

.qty button {
    border: 0;

    background: #eee;

    border-radius: 6px;

    padding: 3px 8px;
}

.qty .remove {
    background: none;

    color: #e33;

    margin-left: 8px;
}

.cart-bottom {
    border-top: 1px solid #eee;

    padding-top: 15px;
}

.coupon-box {
    display: flex;

    gap: 8px;

    margin-bottom: 15px;
}

.coupon-box input {
    flex: 1;

    padding: 11px;

    border:
        1px solid #ddd;

    border-radius: 9px;
}

.coupon-box button {
    padding: 11px;

    border: 0;

    border-radius: 9px;
}

.summary-row,
.total-row {
    display: flex;

    justify-content: space-between;

    margin: 12px 0;
}

.total-row {
    font-size: 20px;

    border-top: 1px solid #ddd;

    padding-top: 14px;
}

.checkout-button,
.clear-button {
    width: 100%;

    padding: 14px;

    border: 0;

    border-radius: 10px;

    font-weight: 800;

    margin-top: 8px;
}

.checkout-button {
    background: #18161d;

    color: white;
}

.clear-button {
    background: #eee;
}


/* ================= MODALS ================= */

.modal {
    position: fixed;

    inset: 0;

    background: rgba(0,0,0,0.65);

    z-index: 300;

    display: none;

    place-items: center;

    padding: 20px;
}

.modal.open {
    display: grid;
}

.modal-box {
    position: relative;

    width: min(550px,100%);

    max-height: 92vh;

    overflow-y: auto;

    background: white;

    color: #18161d;

    padding: 30px;

    border-radius: 20px;
}

.dark .modal-box {
    background: #1b1b20;

    color: white;
}

.modal-close {
    position: absolute;

    right: 15px;
    top: 12px;

    width: 35px;
    height: 35px;

    border: 0;

    border-radius: 50%;

    background: #eee;
}

.dark .modal-close {
    background: #303038;

    color: white;
}

.wide {
    width: min(1050px,100%);
}


/* ================= PRODUCT DETAILS ================= */

.product-detail {
    display: grid;

    grid-template-columns:
        1fr 1fr;

    gap: 30px;

    align-items: center;
}

.product-detail img {
    width: 100%;

    border-radius: 15px;
}

.product-detail p {
    color: #777;

    line-height: 1.7;
}

.large-price {
    font-size: 32px;

    font-weight: 900;

    margin: 15px 0;
}


/* ================= FORMS ================= */

.form-group {
    display: flex;

    flex-direction: column;

    gap: 6px;

    margin: 14px 0;
}

.form-group input,
.form-group textarea {
    padding: 13px;

    border:
        1px solid #ddd;

    border-radius: 10px;

    outline: none;
}

.dark .form-group input,
.dark .form-group textarea {
    background: #19191e;

    color: white;

    border-color: #383840;
}

.form-row {
    display: grid;

    grid-template-columns:
        1fr 1fr;

    gap: 12px;
}

.payment-option {
    display: block;

    padding: 13px;

    border:
        1px solid #ddd;

    border-radius: 10px;

    margin: 8px 0;
}

.place-order-button {
    width: 100%;

    padding: 14px;

    border: 0;

    border-radius: 10px;

    background: #18161d;

    color: white;

    font-weight: 800;
}

.auth-logo {
    font-size: 30px;

    font-weight: 900;
}

.switch-auth {
    width: 100%;

    border: 0;

    background: none;

    color: #ff6b00;

    font-weight: 800;

    margin-top: 15px;
}

.muted {
    color: #777;
}


/* ================= ORDERS ================= */

.order-card {
    border:
        1px solid #ddd;

    border-radius: 13px;

    padding: 17px;

    margin: 12px 0;
}

.order-head {
    display: flex;

    justify-content: space-between;
}

.status {
    display: inline-block;

    margin-top: 10px;

    padding: 5px 9px;

    background: #eee;

    border-radius: 7px;

    font-size: 12px;
}


/* ================= TOAST ================= */

.toast {
    position: fixed;

    right: 25px;
    bottom: 25px;

    z-index: 500;

    background: #18161d;

    color: white;

    padding: 14px 20px;

    border-radius: 11px;

    opacity: 0;

    transform: translateY(70px);

    transition: 0.3s;
}

.toast.show {
    opacity: 1;

    transform: translateY(0);
}

.empty {
    text-align: center;

    padding: 50px;

    color: #777;
}


/* ================= RESPONSIVE ================= */

@media(max-width:1000px) {

    .navbar {
        display: none;
    }

    .hero {
        padding: 70px 6%;
    }

    .hero-image {
        width: 330px;
    }

    .hero-circle {
        width: 270px;
        height: 270px;
    }

    .category-grid {
        grid-template-columns:
            repeat(3,1fr);
    }

    .product-grid {
        grid-template-columns:
            repeat(3,1fr);
    }

    .footer-grid {
        grid-template-columns:
            repeat(2,1fr);
    }

}

@media(max-width:700px) {

    .hero {
        display: block;
    }

    .hero-image {
        margin: 40px auto;
    }

    .hero-features {
        display: block;
    }

    .hero-features div {
        margin: 10px 0;
    }

    .category-grid,
    .product-grid {
        grid-template-columns:
            repeat(2,1fr);
    }

    .about-section {
        grid-template-columns: 1fr;
    }

    .newsletter {
        display: block;
    }

    .newsletter .primary-button {
        display: inline-block;

        margin-top: 20px;
    }

    .product-detail {
        grid-template-columns: 1fr;
    }

    .form-row {
        grid-template-columns: 1fr;
    }

}

@media(max-width:450px) {

    .category-grid,
    .product-grid {
        grid-template-columns: 1fr;
    }

    .hero h1 {
        font-size: 43px;
    }

    .hero-buttons {
        flex-direction: column;
    }

    .footer-grid {
        grid-template-columns: 1fr;
    }

    .header {
        padding: 0 3%;
    }

    .logo {
        font-size: 24px;
    }

}
