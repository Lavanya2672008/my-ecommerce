* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --orange: #ff6900;
    --orange-dark: #e95700;
    --orange-light: #fff1e6;

    --black: #151515;
    --dark: #222222;

    --gray: #777;
    --light-gray: #f7f7f7;
    --border: #e8e8e8;

    --white: #ffffff;

    --shadow:
        0 10px 35px rgba(0, 0, 0, 0.08);
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: "Inter", Arial, sans-serif;
    color: var(--dark);
    background: #fff;
    line-height: 1.5;
}

button,
input,
select {
    font-family: inherit;
}

button {
    cursor: pointer;
}


/* =====================================================
   TOP BAR
===================================================== */

.topbar {
    height: 38px;

    background: #171717;

    color: #fff;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 5%;

    font-size: 11px;
}

.topbar-left {
    color: #fff;
}

.topbar-right {
    display: flex;
    gap: 25px;
    color: #cfcfcf;
}

.topbar-right span {
    cursor: pointer;
}

.topbar-right span:hover {
    color: var(--orange);
}


/* =====================================================
   HEADER
===================================================== */

.header {
    min-height: 82px;

    display: flex;
    align-items: center;

    gap: 30px;

    padding: 14px 5%;

    background: #fff;

    border-bottom: 1px solid var(--border);
}


/* LOGO */

.logo-area {
    display: flex;
    align-items: center;

    gap: 10px;

    min-width: 190px;
}

.logo-icon {
    width: 46px;
    height: 46px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 13px;

    background: var(--orange);

    font-size: 22px;

    box-shadow:
        0 8px 20px rgba(255, 105, 0, 0.25);
}

.logo-text h1 {
    font-size: 22px;
    line-height: 1;

    font-weight: 800;
}

.logo-text h1 span {
    color: var(--orange);
}

.logo-text p {
    font-size: 8px;

    color: #888;

    margin-top: 5px;
}


/* SEARCH */

.search-container {
    height: 46px;

    flex: 1;

    max-width: 650px;

    display: flex;

    background: #f7f7f7;

    border: 1px solid #e4e4e4;

    border-radius: 9px;

    overflow: hidden;

    transition: 0.2s;
}

.search-container:focus-within {
    border-color: var(--orange);

    box-shadow:
        0 0 0 3px rgba(255, 105, 0, 0.08);
}

.search-container input {
    flex: 1;

    border: 0;
    outline: 0;

    background: transparent;

    padding: 0 18px;

    font-size: 13px;
}

.search-container button {
    width: 58px;

    border: 0;

    background: var(--orange);

    color: #fff;

    font-size: 18px;

    transition: 0.2s;
}

.search-container button:hover {
    background: var(--orange-dark);
}


/* HEADER ACTIONS */

.header-actions {
    margin-left: auto;

    display: flex;

    align-items: center;

    gap: 5px;
}

.header-action,
.cart-header-button {
    position: relative;

    border: 0;

    background: #fff;

    display: flex;
    align-items: center;

    gap: 6px;

    padding: 9px;

    font-size: 12px;

    color: #333;
}

.header-action:hover,
.cart-header-button:hover {
    color: var(--orange);
}

.action-icon {
    font-size: 18px;
}

.cart-header-button {
    padding-right: 16px;
}

.cart-count {
    position: absolute;

    top: 1px;
    right: 1px;

    width: 18px;
    height: 18px;

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--orange);

    color: #fff;

    font-size: 9px;

    font-weight: 800;
}


/* =====================================================
   NAVIGATION
===================================================== */

.navigation {
    background: #fff;

    border-bottom: 1px solid var(--border);

    position: sticky;

    top: 0;

    z-index: 50;
}

.nav-inner {
    padding: 0 5%;

    display: flex;

    overflow-x: auto;

    scrollbar-width: none;
}

.nav-inner::-webkit-scrollbar {
    display: none;
}

.nav-link {
    flex-shrink: 0;

    border: 0;

    background: transparent;

    padding: 15px 19px;

    color: #444;

    font-size: 12px;

    font-weight: 600;

    border-bottom: 3px solid transparent;

    transition: 0.2s;
}

.nav-link:hover,
.nav-link.active {
    color: var(--orange);

    border-bottom-color: var(--orange);
}

.deals-link {
    color: #e74c00;
}


/* =====================================================
   HERO
===================================================== */

.hero {
    background:
        radial-gradient(
            circle at 75% 30%,
            rgba(255, 173, 101, 0.3),
            transparent 35%
        ),
        linear-gradient(
            120deg,
            #fff7ef,
            #fff
        );

    overflow: hidden;
}

.hero-container {
    max-width: 1450px;

    min-height: 520px;

    margin: auto;

    padding: 60px 5%;

    display: flex;

    align-items: center;
}

.hero-content {
    width: 56%;

    position: relative;

    z-index: 2;
}

.hero-badge {
    display: inline-block;

    padding: 8px 14px;

    border-radius: 50px;

    background: #fff0e4;

    color: var(--orange);

    font-size: 10px;

    font-weight: 800;

    letter-spacing: 0.5px;

    margin-bottom: 20px;
}

.hero-content h2 {
    max-width: 750px;

    font-size: clamp(42px, 5vw, 70px);

    line-height: 1.03;

    letter-spacing: -3px;

    font-weight: 800;
}

.hero-content h2 span {
    display: block;

    color: var(--orange);
}

.hero-content > p {
    max-width: 600px;

    color: #707070;

    font-size: 14px;

    line-height: 1.8;

    margin: 22px 0;
}

.hero-buttons {
    display: flex;

    gap: 12px;
}

.btn-primary,
.btn-secondary {
    padding: 14px 23px;

    border-radius: 8px;

    font-size: 12px;

    font-weight: 800;

    transition: 0.2s;
}

.btn-primary {
    border: 0;

    background: var(--orange);

    color: #fff;

    box-shadow:
        0 8px 20px rgba(255, 105, 0, 0.2);
}

.btn-primary:hover {
    background: var(--orange-dark);

    transform: translateY(-2px);
}

.btn-secondary {
    border: 1px solid #ddd;

    background: #fff;

    color: #333;
}

.btn-secondary:hover {
    border-color: var(--orange);

    color: var(--orange);
}


/* HERO BENEFITS */

.hero-benefits {
    display: flex;

    gap: 25px;

    margin-top: 40px;
}

.benefit {
    display: flex;

    align-items: center;

    gap: 9px;
}

.benefit-icon {
    width: 34px;
    height: 34px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 8px;

    background: #fff;

    box-shadow: 0 4px 15px rgba(0,0,0,.05);
}

.benefit strong {
    display: block;

    font-size: 10px;
}

.benefit small {
    display: block;

    color: #999;

    font-size: 8px;

    margin-top: 2px;
}


/* HERO IMAGE */

.hero-visual {
    width: 44%;

    height: 430px;

    position: relative;

    display: flex;

    align-items: center;

    justify-content: center;
}

.hero-background-circle {
    position: absolute;

    width: 390px;
    height: 390px;

    border-radius: 50%;

    background: #ffe0c3;
}

.hero-main-image {
    position: relative;

    width: 450px;
    height: 360px;

    object-fit: cover;

    border-radius: 25px;

    box-shadow:
        0 25px 60px rgba(0,0,0,.16);
}

.offer-circle {
    position: absolute;

    right: 0;
    bottom: 30px;

    width: 105px;
    height: 105px;

    border-radius: 50%;

    background: var(--orange);

    color: #fff;

    display: flex;

    flex-direction: column;

    align-items: center;

    justify-content: center;

    transform: rotate(8deg);

    box-shadow:
        0 15px 30px rgba(255,105,0,.25);
}

.offer-circle strong {
    font-size: 28px;
}

.offer-circle span {
    font-size: 10px;

    font-weight: 800;
}

.floating-card {
    position: absolute;

    left: 0;
    bottom: 20px;

    display: flex;

    align-items: center;

    gap: 10px;

    padding: 12px;

    border-radius: 10px;

    background: rgba(255,255,255,.96);

    box-shadow:
        0 12px 30px rgba(0,0,0,.12);
}

.floating-product-icon {
    width: 38px;
    height: 38px;

    border-radius: 8px;

    background: var(--orange-light);

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 19px;
}

.floating-card small {
    display: block;

    color: #999;

    font-size: 8px;
}

.floating-card strong {
    display: block;

    font-size: 10px;
}


/* =====================================================
   GENERAL SECTIONS
===================================================== */

.section {
    max-width: 1450px;

    margin: auto;

    padding: 70px 5%;
}

.section-header {
    display: flex;

    align-items: flex-end;

    justify-content: space-between;

    margin-bottom: 30px;
}

.section-kicker {
    display: block;

    color: var(--orange);

    font-size: 9px;

    font-weight: 800;

    letter-spacing: 2px;

    margin-bottom: 5px;
}

.section-header h2 {
    font-size: 29px;

    line-height: 1.2;
}

.view-all {
    border: 0;

    background: transparent;

    color: var(--orange);

    font-size: 12px;

    font-weight: 700;
}


/* =====================================================
   CATEGORIES
===================================================== */

.category-grid {
    display: grid;

    grid-template-columns:
        repeat(6, 1fr);

    gap: 15px;
}

.category-card {
    padding: 25px 10px;

    text-align: center;

    border: 1px solid var(--border);

    border-radius: 15px;

    background: #fff;

    cursor: pointer;

    transition: 0.25s;
}

.category-card:hover {
    transform: translateY(-6px);

    border-color: #ffd0ad;

    box-shadow: var(--shadow);
}

.category-circle {
    width: 70px;
    height: 70px;

    margin: 0 auto 13px;

    border-radius: 50%;

    display: flex;

    align-items: center;

    justify-content: center;

    font-size: 29px;
}

.orange-bg {
    background: #fff0e4;
}

.purple-bg {
    background: #f0eaff;
}

.blue-bg {
    background: #e8f4ff;
}

.green-bg {
    background: #e8f8ef;
}

.pink-bg {
    background: #ffeaf1;
}

.dark-bg {
    background: #eeeeee;
}

.category-card h3 {
    font-size: 12px;
}

.category-card p {
    color: #999;

    font-size: 9px;

    margin-top: 4px;
}


/* =====================================================
   PROMO
===================================================== */

.promo-wrapper {
    max-width: 1300px;

    margin: 0 auto 20px;

    padding: 0 20px;
}

.promo-banner {
    min-height: 155px;

    padding: 30px 45px;

    display: flex;

    align-items: center;

    gap: 40px;

    color: #fff;

    border-radius: 18px;

    background:
        linear-gradient(
            110deg,
            #ff6900,
            #ff923d
        );

    box-shadow:
        0 18px 45px rgba(255,105,0,.18);
}

.promo-content {
    flex: 1;
}

.promo-content span {
    font-size: 9px;

    font-weight: 800;

    letter-spacing: 2px;
}

.promo-content h2 {
    font-size: 27px;

    margin: 5px 0;
}

.promo-content p {
    font-size: 11px;

    opacity: .9;
}

.promo-discount {
    display: flex;

    flex-direction: column;

    align-items: center;
}

.promo-discount small {
    font-size: 9px;

    font-weight: 800;
}

.promo-discount strong {
    font-size: 48px;

    line-height: 1;
}

.promo-discount span {
    font-size: 9px;

    font-weight: 800;
}

.promo-banner > button {
    border: 0;

    background: #fff;

    color: var(--orange);

    padding: 13px 20px;

    border-radius: 8px;

    font-size: 11px;

    font-weight: 800;
}


/* =====================================================
   PRODUCT CONTROLS
===================================================== */

.product-controls {
    display: flex;

    align-items: center;

    gap: 12px;
}

.product-count {
    color: #999;

    font-size: 10px;
}

.product-controls select {
    padding: 10px 12px;

    border: 1px solid #ddd;

    border-radius: 7px;

    background: #fff;

    outline: none;

    font-size: 10px;
}


/* =====================================================
   PRODUCT GRID
===================================================== */

.product-grid {
    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 20px;
}


/* PRODUCT CARD */

.product-card {
    overflow: hidden;

    background: #fff;

    border: 1px solid var(--border);

    border-radius: 15px;

    transition: .25s;

    position: relative;
}

.product-card:hover {
    transform: translateY(-5px);

    box-shadow:
        0 15px 40px rgba(0,0,0,.09);
}

.product-image-wrapper {
    height: 245px;

    background: #f6f6f6;

    position: relative;

    overflow: hidden;
}

.product-image-wrapper img {
    width: 100%;
    height: 100%;

    display: block;

    object-fit: cover;

    transition: .4s;
}

.product-card:hover
.product-image-wrapper img {
    transform: scale(1.06);
}


/* BADGE */

.discount-badge {
    position: absolute;

    left: 11px;
    top: 11px;

    padding: 5px 8px;

    border-radius: 5px;

    background: #e84118;

    color: #fff;

    font-size: 8px;

    font-weight: 800;
}


/* WISHLIST */

.wishlist-button {
    position: absolute;

    right: 10px;
    top: 10px;

    width: 34px;
    height: 34px;

    border: 0;

    border-radius: 50%;

    background: rgba(255,255,255,.95);

    font-size: 17px;

    display: flex;

    align-items: center;

    justify-content: center;

    transition: .2s;
}

.wishlist-button:hover {
    transform: scale(1.08);
}

.wishlist-button.active {
    color: #e84118;
}


/* PRODUCT INFO */

.product-info {
    padding: 15px;
}

.product-category {
    color: #999;

    font-size: 8px;

    font-weight: 700;

    letter-spacing: 1px;

    text-transform: uppercase;
}

.product-name {
    height: 39px;

    overflow: hidden;

    margin: 6px 0;

    font-size: 13px;

    line-height: 1.5;

    font-weight: 600;

    cursor: pointer;
}

.product-name:hover {
    color: var(--orange);
}


/* RATING */

.product-rating {
    display: flex;

    align-items: center;

    gap: 6px;

    margin: 7px 0;
}

.stars {
    color: #f5a623;

    font-size: 11px;

    letter-spacing: -2px;
}

.rating-number {
    color: #999;

    font-size: 9px;
}


/* PRICE */

.price-row {
    display: flex;

    align-items: center;

    gap: 8px;
}

.current-price {
    color: var(--orange);

    font-size: 17px;

    font-weight: 800;
}

.old-price {
    color: #aaa;

    font-size: 10px;

    text-decoration: line-through;
}


/* ADD CART */

.add-cart-button {
    width: 100%;

    border: 0;

    border-radius: 7px;

    padding: 10px;

    margin-top: 11px;

    background: var(--orange-light);

    color: var(--orange);

    font-size: 11px;

    font-weight: 800;

    transition: .2s;
}

.add-cart-button:hover {
    background: var(--orange);

    color: #fff;
}


/* =====================================================
   EMPTY SEARCH
===================================================== */

.no-products {
    grid-column: 1 / -1;

    text-align: center;

    padding: 80px 20px;

    color: #888;
}

.no-products .no-icon {
    font-size: 55px;

    margin-bottom: 15px;
}

.no-products h3 {
    color: #333;

    margin-bottom: 5px;
}


/* =====================================================
   WHY SHOP
===================================================== */

.why-section {
    padding: 65px 5%;

    background: #fafafa;
}

.centered {
    justify-content: center;

    text-align: center;
}

.why-grid {
    max-width: 1200px;

    margin: auto;

    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 20px;
}

.why-card {
    padding: 30px 20px;

    text-align: center;

    background: #fff;

    border-radius: 14px;

    border: 1px solid #eee;
}

.why-icon {
    width: 55px;
    height: 55px;

    display: flex;

    align-items: center;

    justify-content: center;

    margin: 0 auto 15px;

    border-radius: 14px;

    background: var(--orange-light);

    font-size: 25px;
}

.why-card h3 {
    font-size: 13px;

    margin-bottom: 7px;
}

.why-card p {
    color: #888;

    font-size: 10px;

    line-height: 1.6;
}


/* =====================================================
   NEWSLETTER
===================================================== */

.newsletter {
    padding: 55px 8%;

    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 40px;

    color: #fff;

    background: #171717;
}

.newsletter-content span {
    color: var(--orange);

    font-size: 9px;

    font-weight: 800;

    letter-spacing: 2px;
}

.newsletter-content h2 {
    font-size: 28px;

    margin: 5px 0;
}

.newsletter-content p {
    color: #999;

    font-size: 11px;
}

.newsletter-form {
    display: flex;

    width: 430px;

    height: 45px;
}

.newsletter-form input {
    flex: 1;

    border: 0;

    outline: 0;

    padding: 0 15px;

    border-radius: 7px 0 0 7px;

    font-size: 11px;
}

.newsletter-form button {
    width: 110px;

    border: 0;

    background: var(--orange);

    color: #fff;

    border-radius: 0 7px 7px 0;

    font-size: 11px;

    font-weight: 800;
}


/* =====================================================
   FOOTER
===================================================== */

footer {
    background: #0d0d0d;

    color: #fff;
}

.footer-content {
    padding: 55px 7%;

    display: grid;

    grid-template-columns:
        2fr repeat(4, 1fr);

    gap: 40px;
}

.footer-logo {
    font-size: 20px;

    font-weight: 800;

    margin-bottom: 12px;
}

.footer-logo span {
    color: var(--orange);
}

.footer-brand p {
    max-width: 280px;

    color: #888;

    font-size: 10px;

    line-height: 1.8;
}

.social-icons {
    display: flex;

    gap: 7px;

    margin-top: 18px;
}

.social-icons span {
    width: 30px;
    height: 30px;

    display: flex;

    align-items: center;

    justify-content: center;

    border-radius: 50%;

    background: #222;

    color: #bbb;

    font-size: 12px;
}

.footer-column h3 {
    font-size: 12px;

    margin-bottom: 16px;
}

.footer-column a,
.footer-column p {
    display: block;

    color: #888;

    text-decoration: none;

    font-size: 10px;

    margin-bottom: 11px;
}

.footer-column a:hover {
    color: var(--orange);
}

.footer-bottom {
    padding: 18px;

    border-top: 1px solid #222;

    color: #666;

    text-align: center;

    font-size: 9px;
}


/* =====================================================
   CART OVERLAY
===================================================== */

.cart-overlay {
    position: fixed;

    inset: 0;

    z-index: 100;

    background: rgba(0,0,0,.55);

    opacity: 0;

    visibility: hidden;

    transition: .3s;
}

.cart-overlay.show {
    opacity: 1;

    visibility: visible;
}


/* =====================================================
   CART PANEL
===================================================== */

.cart-panel {
    position: fixed;

    top: 0;
    right: -450px;

    z-index: 110;

    width: 420px;
    max-width: 100%;

    height: 100vh;

    display: flex;

    flex-direction: column;

    background: #fff;

    box-shadow:
        -10px 0 40px rgba(0,0,0,.15);

    transition: .35s;
}

.cart-panel.open {
    right: 0;
}

.cart-header {
    padding: 20px;

    border-bottom: 1px solid #eee;

    display: flex;

    justify-content: space-between;

    align-items: center;
}

.cart-kicker {
    color: var(--orange);

    font-size: 8px;

    font-weight: 800;

    letter-spacing: 2px;
}

.cart-header h2 {
    font-size: 20px;

    margin-top: 4px;
}

.close-button {
    width: 34px;
    height: 34px;

    border: 0;

    border-radius: 50%;

    background: #f5f5f5;

    font-size: 14px;
}

.cart-items {
    flex: 1;

    overflow-y: auto;

    padding: 20px;
}


/* EMPTY CART */

.empty-cart {
    padding-top: 100px;

    text-align: center;

    color: #999;
}

.empty-cart-icon {
    font-size: 55px;

    margin-bottom: 15px;
}

.empty-cart h3 {
    color: #333;

    font-size: 16px;

    margin-bottom: 5px;
}

.empty-cart p {
    font-size: 11px;
}


/* CART ITEM */

.cart-item {
    display: flex;

    gap: 12px;

    padding-bottom: 16px;

    margin-bottom: 16px;

    border-bottom: 1px solid #eee;
}

.cart-item-image {
    width: 75px;
    height: 75px;

    flex-shrink: 0;

    border-radius: 8px;

    object-fit: cover;
}

.cart-item-info {
    flex: 1;
}

.cart-item-info h4 {
    font-size: 11px;

    line-height: 1.4;

    margin-bottom: 5px;
}

.cart-item-price {
    color: var(--orange);

    font-size: 13px;

    font-weight: 800;
}

.cart-controls {
    display: flex;

    align-items: center;

    gap: 8px;

    margin-top: 8px;
}

.quantity-button {
    width: 25px;
    height: 25px;

    border: 1px solid #ddd;

    background: #fff;

    border-radius: 5px;
}

.quantity-number {
    min-width: 18px;

    text-align: center;

    font-size: 10px;
}

.remove-button {
    margin-left: auto;

    border: 0;

    background: transparent;

    color: #e84118;

    font-size: 9px;
}


/* CART FOOTER */

.cart-footer {
    padding: 20px;

    border-top: 1px solid #eee;
}

.cart-summary {
    display: flex;

    align-items: center;

    justify-content: space-between;
}

.cart-summary span {
    color: #666;

    font-size: 12px;
}

.cart-summary strong {
    color: var(--orange);

    font-size: 20px;
}

.free-delivery-note {
    color: #888;

    font-size: 9px;

    margin: 8px 0 15px;
}

.checkout-button {
    width: 100%;

    padding: 14px;

    border: 0;

    border-radius: 8px;

    background: var(--orange);

    color: #fff;

    font-size: 11px;

    font-weight: 800;
}

.checkout-button:hover {
    background: var(--orange-dark);
}


/* =====================================================
   MODAL
===================================================== */

.modal {
    position: fixed;

    inset: 0;

    z-index: 200;

    display: none;

    align-items: center;

    justify-content: center;

    padding: 25px;

    background: rgba(0,0,0,.65);
}

.modal.show {
    display: flex;
}

.modal-box {
    width: 900px;

    max-width: 100%;

    max-height: 90vh;

    overflow-y: auto;

    padding: 30px;

    position: relative;

    border-radius: 17px;

    background: #fff;
}

.modal-close {
    position: absolute;

    top: 15px;
    right: 15px;

    width: 35px;
    height: 35px;

    border: 0;

    border-radius: 50%;

    background: #f3f3f3;

    z-index: 2;
}

.modal-product {
    display: grid;

    grid-template-columns:
        1fr 1fr;

    gap: 35px;
}

.modal-product-image {
    width: 100%;

    height: 420px;

    object-fit: cover;

    border-radius: 12px;
}

.modal-product-category {
    color: var(--orange);

    font-size: 9px;

    font-weight: 800;

    letter-spacing: 1px;

    text-transform: uppercase;
}

.modal-product h2 {
    font-size: 28px;

    margin: 8px 0;
}

.modal-product-description {
    color: #666;

    font-size: 12px;

    line-height: 1.8;

    margin: 20px 0;
}

.modal-price {
    color: var(--orange);

    font-size: 27px;

    font-weight: 800;
}

.modal-old-price {
    color: #999;

    font-size: 11px;

    text-decoration: line-through;

    margin-top: 3px;
}

.modal-features {
    padding: 15px;

    border-radius: 9px;

    background: var(--orange-light);

    color: #a94b0b;

    font-size: 10px;

    line-height: 2;
}

.modal-add-button {
    width: 100%;

    border: 0;

    background: var(--orange);

    color: #fff;

    padding: 14px;

    border-radius: 8px;

    margin-top: 20px;

    font-size: 11px;

    font-weight: 800;
}


/* =====================================================
   TOAST
===================================================== */

.toast {
    position: fixed;

    right: 25px;
    bottom: 25px;

    z-index: 500;

    max-width: 320px;

    padding: 13px 18px;

    border-radius: 8px;

    background: #171717;

    color: #fff;

    font-size: 11px;

    box-shadow:
        0 10px 30px rgba(0,0,0,.2);

    transform: translateY(100px);

    opacity: 0;

    transition: .3s;
}

.toast.show {
    transform: translateY(0);

    opacity: 1;
}


/* =====================================================
   RESPONSIVE
===================================================== */

@media (max-width: 1100px) {

    .header {
        gap: 15px;
    }

    .logo-area {
        min-width: 170px;
    }

    .action-text {
        display: none;
    }

    .category-grid {
        grid-template-columns:
            repeat(3, 1fr);
    }

    .product-grid {
        grid-template-columns:
            repeat(3, 1fr);
    }

    .footer-content {
        grid-template-columns:
            repeat(3, 1fr);
    }

    .footer-brand {
        grid-column: span 3;
    }

}


/* TABLET */

@media (max-width: 800px) {

    .topbar {
        justify-content: center;
    }

    .topbar-right {
        display: none;
    }

    .header {
        flex-wrap: wrap;

        padding: 14px 4%;
    }

    .search-container {
        order: 3;

        flex-basis: 100%;

        max-width: none;
    }

    .hero-container {
        flex-direction: column;

        padding-top: 50px;
    }

    .hero-content {
        width: 100%;

        text-align: center;
    }

    .hero-content > p {
        margin-left: auto;
        margin-right: auto;
    }

    .hero-buttons {
        justify-content: center;
    }

    .hero-benefits {
        justify-content: center;
    }

    .hero-visual {
        width: 100%;

        height: 340px;

        margin-top: 25px;
    }

    .hero-background-circle {
        width: 300px;
        height: 300px;
    }

    .hero-main-image {
        width: 350px;
        height: 290px;
    }

    .product-grid {
        grid-template-columns:
            repeat(2, 1fr);
    }

    .why-grid {
        grid-template-columns:
            repeat(2, 1fr);
    }

    .newsletter {
        flex-direction: column;

        align-items: stretch;
    }

    .newsletter-form {
        width: 100%;
    }

    .promo-banner {
        flex-wrap: wrap;
    }

}


/* MOBILE */

@media (max-width: 550px) {

    .header {
        min-height: 120px;
    }

    .logo-text h1 {
        font-size: 18px;
    }

    .logo-icon {
        width: 40px;
        height: 40px;
    }

    .hero-content h2 {
        font-size: 39px;

        letter-spacing: -2px;
    }

    .hero-content > p {
        font-size: 12px;
    }

    .hero-benefits {
        display: none;
    }

    .hero-visual {
        height: 280px;
    }

    .hero-background-circle {
        width: 230px;
        height: 230px;
    }

    .hero-main-image {
        width: 280px;
        height: 230px;
    }

    .offer-circle {
        width: 75px;
        height: 75px;

        right: 4%;
    }

    .offer-circle strong {
        font-size: 20px;
    }

    .floating-card {
        left: 2%;
    }

    .section {
        padding: 50px 4%;
    }

    .section-header h2 {
        font-size: 22px;
    }

    .category-grid {
        grid-template-columns:
            repeat(2, 1fr);
    }

    .product-grid {
        grid-template-columns:
            repeat(2, 1fr);

        gap: 10px;
    }

    .product-image-wrapper {
        height: 175px;
    }

    .product-info {
        padding: 10px;
    }

    .product-name {
        font-size: 11px;

        height: 34px;
    }

    .current-price {
        font-size: 14px;
    }

    .old-price {
        font-size: 8px;
    }

    .product-count {
        display: none;
    }

    .product-controls select {
        padding: 8px;

        font-size: 9px;
    }

    .promo-wrapper {
        padding: 0 4%;
    }

    .promo-banner {
        flex-direction: column;

        text-align: center;

        gap: 18px;

        padding: 28px 20px;
    }

    .promo-content h2 {
        font-size: 22px;
    }

    .why-grid {
        grid-template-columns:
            repeat(2, 1fr);

        gap: 10px;
    }

    .why-card {
        padding: 20px 10px;
    }

    .newsletter {
        padding: 45px 5%;
    }

    .newsletter-content h2 {
        font-size: 23px;
    }

    .newsletter-form {
        height: 42px;
    }

    .footer-content {
        grid-template-columns:
            repeat(2, 1fr);

        padding: 40px 6%;
    }

    .footer-brand {
        grid-column: span 2;
    }

    .modal {
        padding: 10px;
    }

    .modal-box {
        padding: 20px;
    }

    .modal-product {
        grid-template-columns: 1fr;
    }

    .modal-product-image {
        height: 270px;
    }

    .modal-product h2 {
        font-size: 22px;
    }

}
