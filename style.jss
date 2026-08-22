* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --orange: #ff6b00;
    --orange-dark: #e85d00;
    --orange-light: #fff3e8;
    --dark: #151515;
    --gray: #666;
    --light: #f7f7f7;
    --border: #e9e9e9;
    --white: #ffffff;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: "Inter", sans-serif;
    background: #fff;
    color: var(--dark);
}

/* TOP BAR */

.top-bar {
    height: 38px;
    background: #151515;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5%;
    font-size: 12px;
}

.top-links {
    display: flex;
    gap: 25px;
    color: #ddd;
}

/* HEADER */

.header {
    height: 82px;
    padding: 0 5%;
    display: flex;
    align-items: center;
    gap: 35px;
    background: #fff;
    border-bottom: 1px solid #eee;
}

.logo {
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 185px;
}

.logo-icon {
    width: 45px;
    height: 45px;
    border-radius: 13px;
    background: var(--orange);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 23px;
}

.logo strong {
    display: block;
    font-size: 22px;
    font-weight: 800;
}

.logo strong span,
.footer-logo span {
    color: var(--orange);
}

.logo small {
    font-size: 8px;
    color: #777;
}

.search-box {
    height: 46px;
    display: flex;
    flex: 1;
    max-width: 650px;
    background: #f6f6f6;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid #eee;
}

.search-box input {
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    padding: 0 18px;
    font-size: 14px;
}

.search-box button {
    width: 55px;
    border: none;
    background: var(--orange);
    color: #fff;
    font-size: 19px;
    cursor: pointer;
}

.header-actions {
    margin-left: auto;
    display: flex;
    gap: 10px;
}

.header-btn,
.cart-button {
    border: none;
    background: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 10px;
    font-size: 13px;
    position: relative;
}

.header-btn:hover {
    color: var(--orange);
}

.cart-button b {
    position: absolute;
    top: 0;
    right: 0;
    background: var(--orange);
    color: #fff;
    width: 18px;
    height: 18px;
    font-size: 10px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* NAVIGATION */

.navigation {
    border-bottom: 1px solid #eee;
    background: #fff;
}

.nav-inner {
    padding: 0 5%;
    display: flex;
    overflow-x: auto;
}

.nav-item {
    border: none;
    background: transparent;
    padding: 16px 20px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    white-space: nowrap;
    border-bottom: 3px solid transparent;
}

.nav-item:hover,
.nav-item.active {
    color: var(--orange);
    border-bottom-color: var(--orange);
}

.deal-nav {
    color: #e74c00;
}

/* HERO */

.hero {
    background:
        radial-gradient(circle at 80% 20%, rgba(255, 150, 50, .2), transparent 35%),
        linear-gradient(120deg, #fff7ef, #fff);
    overflow: hidden;
}

.hero-content {
    max-width: 1400px;
    margin: auto;
    min-height: 520px;
    padding: 60px 5%;
    display: flex;
    align-items: center;
}

.hero-text {
    width: 55%;
    z-index: 2;
}

.hero-badge {
    display: inline-block;
    background: #fff0e3;
    color: var(--orange);
    padding: 9px 15px;
    border-radius: 30px;
    font-size: 11px;
    font-weight: 800;
    margin-bottom: 20px;
}

.hero h1 {
    font-size: clamp(40px, 5vw, 70px);
    line-height: 1.04;
    letter-spacing: -3px;
    max-width: 720px;
}

.hero h1 span {
    color: var(--orange);
    display: block;
}

.hero p {
    max-width: 600px;
    color: #666;
    line-height: 1.8;
    margin: 22px 0;
    font-size: 15px;
}

.hero-buttons {
    display: flex;
    gap: 12px;
}

.primary-btn,
.secondary-btn {
    padding: 15px 25px;
    border-radius: 9px;
    font-weight: 700;
    cursor: pointer;
    border: none;
}

.primary-btn {
    color: #fff;
    background: var(--orange);
}

.primary-btn:hover {
    background: var(--orange-dark);
    transform: translateY(-2px);
}

.secondary-btn {
    background: #fff;
    border: 1px solid #ddd;
}

.hero-features {
    display: flex;
    gap: 30px;
    margin-top: 45px;
}

.hero-features div {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.hero-features strong {
    font-size: 12px;
}

.hero-features small {
    color: #888;
    font-size: 10px;
}

.hero-image {
    width: 45%;
    position: relative;
    height: 420px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.hero-circle {
    position: absolute;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: #ffdfbd;
}

.hero-image img {
    width: 440px;
    height: 390px;
    object-fit: cover;
    border-radius: 25px;
    position: relative;
    box-shadow: 0 30px 70px rgba(0, 0, 0, .15);
}

.floating-offer {
    position: absolute;
    right: 0;
    bottom: 30px;
    width: 110px;
    height: 110px;
    border-radius: 50%;
    background: var(--orange);
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: rotate(10deg);
    box-shadow: 0 15px 35px rgba(255, 107, 0, .3);
}

.floating-offer strong {
    font-size: 29px;
}

.floating-offer span {
    font-size: 11px;
}

/* GENERAL SECTIONS */

.categories-section,
.products-section {
    max-width: 1400px;
    margin: auto;
    padding: 70px 5%;
}

.section-heading {
    display: flex;
    align-items: end;
    justify-content: space-between;
    margin-bottom: 30px;
}

.section-label {
    font-size: 10px;
    color: var(--orange);
    font-weight: 800;
    letter-spacing: 2px;
}

.section-heading h2 {
    font-size: 30px;
    margin-top: 7px;
}

.view-all {
    background: none;
    border: none;
    color: var(--orange);
    font-weight: 700;
    cursor: pointer;
}

/* CATEGORIES */

.category-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 15px;
}

.category-card {
    text-align: center;
    border: 1px solid #eee;
    border-radius: 15px;
    padding: 25px 10px;
    cursor: pointer;
    transition: .25s;
    background: #fff;
}

.category-card:hover {
    transform: translateY(-7px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, .08);
    border-color: #ffd5b8;
}

.category-icon {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin: auto auto 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
}

.category-icon.orange {
    background: #fff0e3;
}

.category-icon.purple {
    background: #f0eaff;
}

.category-icon.blue {
    background: #e8f4ff;
}

.category-icon.green {
    background: #e8f8ef;
}

.category-icon.pink {
    background: #ffeaf1;
}

.category-icon.dark {
    background: #eeeeee;
}

.category-card h3 {
    font-size: 13px;
}

.category-card p {
    color: #999;
    font-size: 10px;
    margin-top: 5px;
}

/* DEAL BANNER */

.deal-banner {
    max-width: 1300px;
    margin: 20px auto 70px;
    padding: 35px 50px;
    background: linear-gradient(110deg, #ff6b00, #ff933f);
    border-radius: 20px;
    color: #fff;
    display: flex;
    align-items: center;
    gap: 50px;
    box-shadow: 0 20px 50px rgba(255, 107, 0, .2);
}

.deal-banner > div:first-child {
    flex: 1;
}

.deal-banner span {
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 2px;
}

.deal-banner h2 {
    font-size: 30px;
    margin: 8px 0;
}

.deal-banner p {
    opacity: .9;
    font-size: 13px;
}

.deal-discount {
    display: flex;
    flex-direction: column;
    text-align: center;
}

.deal-discount strong {
    font-size: 11px;
}

.deal-discount b {
    font-size: 50px;
    line-height: 1;
}

.deal-banner button {
    background: #fff;
    color: var(--orange);
    border: none;
    border-radius: 8px;
    padding: 14px 22px;
    font-weight: 800;
    cursor: pointer;
}

/* PRODUCTS */

.sort-box select {
    padding: 11px 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background: white;
    outline: none;
    cursor: pointer;
}

.product-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 22px;
}

.product-card {
    border: 1px solid #eee;
    border-radius: 15px;
    overflow: hidden;
    background: #fff;
    transition: .3s;
    position: relative;
}

.product-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 40px rgba(0, 0, 0, .1);
}

.product-image {
    height: 245px;
    background: #f7f7f7;
    position: relative;
    overflow: hidden;
}

.product-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: .4s;
}

.product-card:hover .product-image img {
    transform: scale(1.06);
}

.discount-badge {
    position: absolute;
    top: 12px;
    left: 12px;
    background: #e84118;
    color: #fff;
    font-size: 10px;
    font-weight: 800;
    padding: 6px 9px;
    border-radius: 5px;
}

.wishlist {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 34px;
    height: 34px;
    background: rgba(255, 255, 255, .95);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    font-size: 17px;
}

.wishlist.active {
    color: #e84118;
}

.product-info {
    padding: 16px;
}

.product-category {
    color: #999;
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.product-name {
    font-size: 14px;
    margin: 7px 0;
    line-height: 1.4;
    height: 40px;
}

.rating {
    display: flex;
    align-items: center;
    gap: 6px;
    margin: 8px 0;
}

.rating-stars {
    color: #f5a623;
    font-size: 12px;
}

.rating-count {
    color: #999;
    font-size: 10px;
}

.price-row {
    display: flex;
    align-items: center;
    gap: 8px;
}

.current-price {
    color: var(--orange);
    font-size: 18px;
    font-weight: 800;
}

.old-price {
    color: #aaa;
    text-decoration: line-through;
    font-size: 11px;
}

.add-cart {
    width: 100%;
    margin-top: 13px;
    padding: 11px;
    background: #fff4eb;
    border: none;
    color: var(--orange);
    border-radius: 7px;
    font-weight: 700;
    cursor: pointer;
}

.add-cart:hover {
    background: var(--orange);
    color: #fff;
}

/* NEWSLETTER */

.newsletter {
    margin-top: 30px;
    padding: 55px 8%;
    background: #171717;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
}

.newsletter span {
    color: var(--orange);
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 2px;
}

.newsletter h2 {
    margin: 8px 0;
    font-size: 28px;
}

.newsletter p {
    color: #aaa;
    font-size: 13px;
}

.newsletter-form {
    display: flex;
    width: 450px;
}

.newsletter-form input {
    flex: 1;
    padding: 15px;
    border: none;
    outline: none;
    border-radius: 7px 0 0 7px;
}

.newsletter-form button {
    border: none;
    background: var(--orange);
    color: #fff;
    padding: 0 22px;
    font-weight: 700;
    border-radius: 0 7px 7px 0;
    cursor: pointer;
}

/* FOOTER */

footer {
    background: #0e0e0e;
    color: #fff;
}

.footer-main {
    padding: 60px 7%;
    display: grid;
    grid-template-columns: 2fr repeat(4, 1fr);
    gap: 45px;
}

.footer-about p {
    color: #999;
    font-size: 12px;
    line-height: 1.8;
    margin: 15px 0;
    max-width: 280px;
}

.footer-logo {
    font-size: 20px;
    font-weight: 800;
}

.footer-main h3 {
    font-size: 13px;
    margin-bottom: 18px;
}

.footer-main a {
    display: block;
    color: #999;
    text-decoration: none;
    font-size: 11px;
    margin-bottom: 12px;
}

.footer-main a:hover {
    color: var(--orange);
}

.footer-main p {
    color: #999;
    font-size: 11px;
    margin-bottom: 12px;
}

.socials {
    display: flex;
    gap: 8px;
}

.socials span {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #222;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.footer-bottom {
    border-top: 1px solid #222;
    padding: 20px;
    text-align: center;
    color: #777;
    font-size: 10px;
}

/* CART */

.cart-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, .45);
    z-index: 90;
    opacity: 0;
    pointer-events: none;
    transition: .3s;
}

.cart-overlay.show {
    opacity: 1;
    pointer-events: all;
}

.cart-panel {
    position: fixed;
    right: -450px;
    top: 0;
    height: 100vh;
    width: 420px;
    max-width: 100%;
    background: white;
    z-index: 100;
    box-shadow: -10px 0 40px rgba(0, 0, 0, .15);
    transition: .35s;
    display: flex;
    flex-direction: column;
}

.cart-panel.open {
    right: 0;
}

.cart-header {
    padding: 22px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
}

.cart-header button {
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
}

.cart-items {
    flex: 1;
    overflow-y: auto;
    padding: 20px;
}

.empty-cart {
    text-align: center;
    padding-top: 100px;
    color: #888;
}

.empty-cart div {
    font-size: 55px;
}

.empty-cart h3 {
    color: #333;
    margin: 15px;
}

.cart-item {
    display: flex;
    gap: 12px;
    margin-bottom: 18px;
    padding-bottom: 18px;
    border-bottom: 1px solid #eee;
}

.cart-item img {
    width: 75px;
    height: 75px;
    object-fit: cover;
    border-radius: 8px;
}

.cart-item-info {
    flex: 1;
}

.cart-item-info h4 {
    font-size: 12px;
    margin-bottom: 8px;
}

.cart-item-info strong {
    color: var(--orange);
}

.quantity {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 8px;
}

.quantity button {
    width: 25px;
    height: 25px;
    border: 1px solid #ddd;
    background: white;
    border-radius: 5px;
    cursor: pointer;
}

.remove {
    border: none;
    background: none;
    color: #e84118;
    cursor: pointer;
    font-size: 11px;
}

.cart-footer {
    padding: 20px;
    border-top: 1px solid #eee;
}

.subtotal {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
}

.checkout-btn {
    width: 100%;
    background: var(--orange);
    color: #fff;
    border: none;
    padding: 15px;
    border-radius: 8px;
    font-weight: 800;
    cursor: pointer;
}

/* MODAL */

.modal {
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, .65);
    z-index: 200;
    padding: 30px;
    overflow-y: auto;
}

.modal.show {
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background: white;
    max-width: 900px;
    width: 100%;
    border-radius: 18px;
    padding: 30px;
    position: relative;
}

.modal-close {
    position: absolute;
    right: 20px;
    top: 20px;
    border: none;
    background: #f5f5f5;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    cursor: pointer;
}

.modal-product {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 35px;
}

.modal-product img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 12px;
}

.modal-product h2 {
    font-size: 28px;
    margin: 10px 0;
}

.modal-product p {
    color: #666;
    line-height: 1.7;
    margin: 20px 0;
}

.modal-price {
    font-size: 28px;
    font-weight: 800;
    color: var(--orange);
}

.modal-add {
    width: 100%;
    padding: 15px;
    background: var(--orange);
    color: white;
    border: none;
    border-radius: 8px;
    margin-top: 25px;
    font-weight: 800;
    cursor: pointer;
}

/* TOAST */

.toast {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: #171717;
    color: #fff;
    padding: 15px 22px;
    border-radius: 8px;
    z-index: 500;
    transform: translateY(100px);
    opacity: 0;
    transition: .3s;
    font-size: 13px;
}

.toast.show {
    transform: translateY(0);
    opacity: 1;
}

/* RESPONSIVE */

@media (max-width: 1100px) {

    .header {
        gap: 15px;
    }

    .header-btn span,
    .cart-button span {
        display: none;
    }

    .category-grid {
        grid-template-columns: repeat(3, 1fr);
    }

    .product-grid {
        grid-template-columns: repeat(3, 1fr);
    }

    .footer-main {
        grid-template-columns: repeat(3, 1fr);
    }

}

@media (max-width: 800px) {

    .top-links {
        display: none;
    }

    .top-bar {
        justify-content: center;
    }

    .header {
        height: auto;
        padding: 15px 4%;
        flex-wrap: wrap;
    }

    .logo {
        min-width: auto;
    }

    .search-box {
        order: 3;
        flex-basis: 100%;
        max-width: none;
    }

    .header-actions {
        margin-left: auto;
    }

    .hero-content {
        flex-direction: column;
        padding-top: 45px;
    }

    .hero-text,
    .hero-image {
        width: 100%;
    }

    .hero-text {
        text-align: center;
    }

    .hero h1 {
        letter-spacing: -2px;
    }

    .hero-buttons,
    .hero-features {
        justify-content: center;
    }

    .hero-image {
        margin-top: 35px;
        height: 330px;
    }

    .hero-circle {
        width: 280px;
        height: 280px;
    }

    .hero-image img {
        width: 320px;
        height: 280px;
    }

    .floating-offer {
        width: 80px;
        height: 80px;
    }

    .floating-offer strong {
        font-size: 20px;
    }

    .product-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .deal-banner {
        margin-left: 4%;
        margin-right: 4%;
        padding: 30px;
    }

    .newsletter {
        flex-direction: column;
        align-items: stretch;
    }

    .newsletter-form {
        width: 100%;
    }

}

@media (max-width: 550px) {

    .logo strong {
        font-size: 18px;
    }

    .nav-item {
        padding: 14px 12px;
    }

    .hero-content {
        min-height: auto;
    }

    .hero h1 {
        font-size: 40px;
    }

    .hero p {
        font-size: 13px;
    }

    .hero-features {
        display: none;
    }

    .hero-image {
        height: 260px;
    }

    .hero-image img {
        width: 270px;
        height: 230px;
    }

    .hero-circle {
        width: 230px;
        height: 230px;
    }

    .category-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .product-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
    }

    .product-image {
        height: 180px;
    }

    .product-info {
        padding: 10px;
    }

    .current-price {
        font-size: 15px;
    }

    .deal-banner {
        flex-direction: column;
        text-align: center;
        gap: 20px;
    }

    .deal-banner h2 {
        font-size: 23px;
    }

    .section-heading h2 {
        font-size: 22px;
    }

    .sort-box select {
        font-size: 10px;
        padding: 8px;
    }

    .footer-main {
        grid-template-columns: 1fr 1fr;
        padding: 40px 7%;
    }

    .footer-about {
        grid-column: 1 / -1;
    }

    .modal-product {
        grid-template-columns: 1fr;
    }

    .modal-product img {
        height: 280px;
    }

}
