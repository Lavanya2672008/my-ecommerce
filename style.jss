:root {

    --orange: #ff6a00;
    --orange-light: #ff8c00;
    --dark: #171717;
    --gray: #777;
    --light: #fffaf6;
    --border: #eee4db;
    --white: #ffffff;

}


* {
    box-sizing: border-box;
}


html {
    scroll-behavior: smooth;
}


body {

    margin: 0;

    font-family:
        Inter,
        Arial,
        sans-serif;

    background: var(--light);

    color: var(--dark);

}


button,
input,
select {
    font-family: inherit;
}


button {
    cursor: pointer;
    border: none;
}


.sale-bar {

    background: #171717;

    color: white;

    padding: 9px 4%;

    text-align: center;

    font-size: 13px;

    font-weight: 700;

}


.top-links {

    float: right;

    color: #cccccc;

    font-weight: 500;

}



/* HEADER */

.header {

    background: white;

    position: sticky;

    top: 0;

    z-index: 100;

    box-shadow:
        0 2px 15px rgba(0,0,0,.06);

}


.header-main {

    width: 92%;

    max-width: 1180px;

    margin: auto;

    min-height: 78px;

    display: flex;

    align-items: center;

    gap: 25px;

}


.logo {

    text-decoration: none;

    color: #171717;

    font-size: 23px;

    font-weight: 800;

    white-space: nowrap;

}


.logo span {

    color: var(--orange);

}


.logo small {

    display: block;

    margin-left: 34px;

    margin-top: 4px;

    font-size: 9px;

    color: #999;

    letter-spacing: .4px;

}


.search-box {

    display: flex;

    height: 45px;

    flex: 1;

    max-width: 560px;

    background: #fafafa;

    border: 1px solid #ddd;

    border-radius: 10px;

    overflow: hidden;

}


.search-box input {

    flex: 1;

    border: none;

    outline: none;

    padding: 0 15px;

    background: transparent;

}


.search-box button {

    width: 55px;

    background: var(--orange);

    color: white;

    font-size: 18px;

}


.header-actions {

    margin-left: auto;

    display: flex;

    gap: 12px;

}


.header-actions button {

    background: transparent;

    font-size: 12px;

    color: #333;

}


.cart-button b {

    background: var(--orange);

    color: white;

    border-radius: 20px;

    padding: 3px 7px;

}



/* NAV */

.navigation {

    display: flex;

    justify-content: center;

    overflow-x: auto;

    border-top: 1px solid #f3f3f3;

}


.navigation button {

    background: white;

    padding: 13px 15px;

    color: #555;

    font-size: 13px;

    font-weight: 600;

    white-space: nowrap;

}


.navigation button:hover {

    color: var(--orange);

    border-bottom: 2px solid var(--orange);

}


.deal-link {

    color: var(--orange) !important;

}



/* HERO */

.hero {

    width: 92%;

    max-width: 1180px;

    margin: 28px auto 0;

    padding: 50px;

    min-height: 450px;

    display: grid;

    grid-template-columns: 1fr 1fr;

    align-items: center;

    border-radius: 24px;

    overflow: hidden;

    background:
        linear-gradient(
            135deg,
            #fff0e1,
            #ffdfbf
        );

}


.hero-label {

    color: var(--orange);

    font-size: 11px;

    font-weight: 800;

    letter-spacing: 1.5px;

}


.hero h1 {

    font-size: 48px;

    line-height: 1.1;

    margin: 15px 0;

}


.hero h1 span {

    color: var(--orange);

}


.hero p {

    max-width: 560px;

    color: #666;

    line-height: 1.7;

}


.hero-buttons {

    margin-top: 25px;

}


.primary-button,
.secondary-button {

    padding: 13px 22px;

    border-radius: 9px;

    font-weight: 800;

    margin-right: 8px;

}


.primary-button {

    background: var(--orange);

    color: white;

    box-shadow:
        0 8px 22px rgba(255,106,0,.25);

}


.secondary-button {

    background: white;

    color: #333;

}


.benefits {

    display: flex;

    gap: 25px;

    margin-top: 35px;

}


.benefits div {

    font-size: 12px;

}


.benefits strong,
.benefits small {

    display: block;

    margin-left: 25px;

}


.benefits strong {

    margin-top: -19px;

}


.benefits small {

    color: #888;

    margin-top: 4px;

}


.hero-image {

    position: relative;

    text-align: center;

}


.hero-image img {

    width: 90%;

    height: 340px;

    object-fit: cover;

    border-radius: 20px;

    box-shadow:
        0 15px 40px rgba(0,0,0,.15);

}


.sale-circle {

    position: absolute;

    right: 0;

    top: 0;

    width: 100px;

    height: 100px;

    border-radius: 50%;

    background: var(--orange);

    color: white;

    display: grid;

    place-content: center;

    font-size: 10px;

    font-weight: 700;

}


.sale-circle strong {

    font-size: 23px;

}


.floating-card {

    position: absolute;

    left: 10px;

    bottom: 20px;

    background: white;

    padding: 14px 18px;

    border-radius: 12px;

    box-shadow:
        0 10px 30px rgba(0,0,0,.12);

    font-size: 12px;

}



/* SECTIONS */

.section {

    width: 92%;

    max-width: 1180px;

    margin: auto;

    padding-top: 48px;

}


.section-heading {

    display: flex;

    justify-content: space-between;

    align-items: end;

    margin-bottom: 20px;

}


.section-heading span {

    color: var(--orange);

    font-size: 11px;

    font-weight: 800;

    letter-spacing: 1.4px;

}


.section-heading h2 {

    font-size: 27px;

    margin: 5px 0;

}


.section-heading select {

    padding: 9px 12px;

    background: white;

    border: 1px solid #ddd;

    border-radius: 8px;

}



/* CATEGORIES */

.category-grid {

    display: grid;

    grid-template-columns:
        repeat(6, 1fr);

    gap: 14px;

}


.category-grid button {

    background: white;

    border: 1px solid var(--border);

    border-radius: 14px;

    padding: 22px 5px;

    transition: .2s;

}


.category-grid button:hover {

    transform: translateY(-5px);

    border-color: #ffc49b;

    box-shadow:
        0 12px 30px rgba(0,0,0,.08);

}


.category-grid div {

    font-size: 32px;

    margin-bottom: 10px;

}


.category-grid strong,
.category-grid small {

    display: block;

}


.category-grid small {

    margin-top: 5px;

    color: #999;

    font-size: 10px;

}



/* PRODUCTS */

.product-grid {

    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 18px;

}


.product-card {

    background: white;

    border: 1px solid var(--border);

    border-radius: 15px;

    overflow: hidden;

    transition: .25s;

}


.product-card:hover {

    transform: translateY(-5px);

    box-shadow:
        0 12px 35px rgba(0,0,0,.10);

}


.product-image {

    height: 230px;

    position: relative;

    overflow: hidden;

    background: #f4f4f4;

}


.product-image img {

    width: 100%;

    height: 100%;

    object-fit: cover;

    transition: .3s;

}


.product-card:hover
.product-image img {

    transform: scale(1.06);

}


.product-tag {

    position: absolute;

    left: 10px;

    top: 10px;

    background: var(--orange);

    color: white;

    padding: 5px 8px;

    border-radius: 5px;

    font-size: 9px;

    font-weight: 800;

}


.wishlist-button {

    position: absolute;

    right: 10px;

    top: 10px;

    width: 34px;

    height: 34px;

    border-radius: 50%;

    background: white;

    font-size: 18px;

}


.wishlist-button.active {

    color: red;

}


.product-info {

    padding: 14px;

}


.product-category {

    color: #999;

    font-size: 9px;

    text-transform: uppercase;

}


.product-info h3 {

    font-size: 13px;

    line-height: 1.4;

    height: 38px;

    margin: 6px 0;

}


.rating {

    color: #f59e0b;

    font-size: 12px;

}


.rating span {

    color: #999;

}


.price {

    font-size: 18px;

    font-weight: 800;

    margin: 8px 0;

}


.old-price {

    text-decoration: line-through;

    color: #aaa;

    font-size: 11px;

    margin-left: 5px;

    font-weight: 500;

}


.add-cart {

    width: 100%;

    padding: 10px;

    border-radius: 8px;

    background: #fff1e7;

    color: var(--orange);

    font-weight: 800;

}


.add-cart:hover {

    background: var(--orange);

    color: white;

}



/* OFFER */

.offer-banner {

    width: 92%;

    max-width: 1180px;

    margin: 55px auto 0;

    padding: 30px 40px;

    border-radius: 18px;

    color: white;

    background:
        linear-gradient(
            100deg,
            var(--orange),
            var(--orange-light)
        );

    display: flex;

    align-items: center;

    justify-content: space-between;

}


.offer-banner span {

    font-size: 11px;

    font-weight: 800;

}


.offer-banner h2 {

    margin: 8px 0;

}


.offer-banner p {

    margin: 0;

}


.white-button {

    padding: 13px 22px;

    border-radius: 9px;

    background: white;

    color: var(--orange);

    font-weight: 800;

}



/* REVIEWS */

.reviews {

    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 18px;

}


.reviews article {

    background: white;

    border: 1px solid var(--border);

    padding: 24px;

    border-radius: 14px;

    line-height: 1.7;

}


.reviews p {

    color: #666;

    font-size: 13px;

}



/* FOOTER */

footer {

    margin-top: 60px;

    background: #171717;

    color: #aaa;

}


.footer-container {

    width: 92%;

    max-width: 1180px;

    margin: auto;

    padding: 45px 0;

    display: grid;

    grid-template-columns:
        1.5fr 1fr 1fr 1.4fr;

    gap: 35px;

}


.footer-container h2,
.footer-container h4 {

    color: white;

}


.footer-container a {

    display: block;

    margin: 11px 0;

    font-size: 13px;

    cursor: pointer;

}


.newsletter {

    display: flex;

    background: #292929;

    border-radius: 8px;

    overflow: hidden;

}


.newsletter input {

    flex: 1;

    min-width: 0;

    background: transparent;

    border: 0;

    padding: 11px;

    color: white;

    outline: none;

}


.newsletter button {

    width: 45px;

    background: var(--orange);

    color: white;

}


.copyright {

    text-align: center;

    border-top: 1px solid #292929;

    padding: 18px;

    font-size: 11px;

}



/* MODAL */

.modal {

    position: fixed;

    inset: 0;

    background: rgba(0,0,0,.55);

    z-index: 500;

    display: none;

    place-items: center;

    padding: 15px;

}


.modal.show {

    display: grid;

}


.modal-box {

    width: min(560px, 100%);

    max-height: 90vh;

    overflow: auto;

    background: white;

    border-radius: 16px;

    padding: 25px;

    position: relative;

}


.close-button {

    position: absolute;

    right: 12px;

    top: 10px;

    width: 32px;

    height: 32px;

    border-radius: 50%;

    background: #eee;

    font-size: 22px;

}


.cart-row {

    display: flex;

    gap: 12px;

    padding: 12px 0;

    border-bottom: 1px solid #eee;

}


.cart-row img {

    width: 70px;

    height: 70px;

    object-fit: cover;

    border-radius: 8px;

}


.cart-row h4 {

    margin: 3px 0 8px;

}


.quantity {

    margin-top: 8px;

}


.quantity button {

    width: 27px;

    height: 27px;

}


.cart-total {

    text-align: right;

    font-size: 20px;

    font-weight: 800;

    margin: 18px 0;

}


.checkout-button {

    width: 100%;

    padding: 13px;

    background: var(--orange);

    color: white;

    border-radius: 8px;

    font-weight: 800;

}



/* MOBILE */

@media(max-width: 900px) {

    .header-main {

        flex-wrap: wrap;

        padding: 12px 0;

    }


    .search-box {

        order: 3;

        flex-basis: 100%;

        max-width: none;

    }


    .hero {

        grid-template-columns: 1fr;

        padding: 35px;

    }


    .hero-image {

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


    .footer-container {

        grid-template-columns:
            repeat(2, 1fr);

    }

}


@media(max-width: 600px) {

    .sale-bar {

        font-size: 11px;

    }


    .top-links {

        display: none;

    }


    .header-actions span {

        display: none;

    }


    .hero {

        margin-top: 15px;

        padding: 25px;

    }


    .hero h1 {

        font-size: 35px;

    }


    .benefits {

        display: grid;

        gap: 15px;

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


    .product-image {

        height: 170px;

    }


    .product-info h3 {

        font-size: 11px;

    }


    .price {

        font-size: 15px;

    }


    .offer-banner {

        display: block;

        padding: 25px;

    }


    .reviews {

        grid-template-columns: 1fr;

    }


    .footer-container {

        grid-template-columns: 1fr;

    }

}
