/* =========================================================
   LAVKART - ONLINE SHOPPING
   Complete Frontend JavaScript
   Works directly with GitHub Pages
========================================================= */

const products = [

    /* ================= MEN'S FASHION ================= */

    {
        id: 1,
        name: "Classic Cotton T-Shirt",
        brand: "Roadster",
        category: "Fashion",
        gender: "Men",
        price: 899,
        oldPrice: 1499,
        rating: 4.5,
        reviews: 128,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80",
        description: "Premium soft cotton regular-fit T-shirt for everyday comfort."
    },

    {
        id: 2,
        name: "Premium Casual Shirt",
        brand: "Levis",
        category: "Fashion",
        gender: "Men",
        price: 1499,
        oldPrice: 2499,
        rating: 4.6,
        reviews: 94,
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
        description: "Smart casual shirt designed for office and weekend wear."
    },

    {
        id: 3,
        name: "Slim Fit Blue Jeans",
        brand: "Flying Machine",
        category: "Fashion",
        gender: "Men",
        price: 1799,
        oldPrice: 2999,
        rating: 4.4,
        reviews: 211,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=700&q=80",
        description: "Comfortable slim-fit denim with premium stretch fabric."
    },

    {
        id: 4,
        name: "Premium Hoodie",
        brand: "Puma",
        category: "Fashion",
        gender: "Men",
        price: 1999,
        oldPrice: 3499,
        rating: 4.7,
        reviews: 176,
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=700&q=80",
        description: "Warm fleece hoodie perfect for casual winter outfits."
    },

    {
        id: 5,
        name: "Formal Black Trousers",
        brand: "Van Heusen",
        category: "Fashion",
        gender: "Men",
        price: 1599,
        oldPrice: 2799,
        rating: 4.3,
        reviews: 87,
        image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=700&q=80",
        description: "Elegant formal trousers with a modern slim fit."
    },

    {
        id: 6,
        name: "Denim Jacket",
        brand: "Levis",
        category: "Fashion",
        gender: "Men",
        price: 2499,
        oldPrice: 3999,
        rating: 4.7,
        reviews: 145,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=80",
        description: "Classic denim jacket that works with almost any outfit."
    },

    {
        id: 7,
        name: "Cotton Polo T-Shirt",
        brand: "U.S. Polo Assn.",
        category: "Fashion",
        gender: "Men",
        price: 1299,
        oldPrice: 2199,
        rating: 4.5,
        reviews: 153,
        image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=700&q=80",
        description: "Classic polo T-shirt made from breathable cotton."
    },

    {
        id: 8,
        name: "Traditional Men's Kurta",
        brand: "Manyavar",
        category: "Fashion",
        gender: "Men",
        price: 1899,
        oldPrice: 2999,
        rating: 4.6,
        reviews: 76,
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=700&q=80",
        description: "Elegant ethnic kurta suitable for festivals and celebrations."
    },

    /* ================= WOMEN'S FASHION ================= */

    {
        id: 9,
        name: "Floral Summer Dress",
        brand: "AND",
        category: "Fashion",
        gender: "Women",
        price: 1799,
        oldPrice: 2999,
        rating: 4.7,
        reviews: 231,
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=700&q=80",
        description: "Beautiful floral dress designed for a comfortable summer look."
    },

    {
        id: 10,
        name: "Women's Casual Top",
        brand: "ONLY",
        category: "Fashion",
        gender: "Women",
        price: 999,
        oldPrice: 1699,
        rating: 4.5,
        reviews: 118,
        image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=700&q=80",
        description: "Stylish casual top suitable for everyday wear."
    },

    {
        id: 11,
        name: "Elegant Silk Saree",
        brand: "Libas",
        category: "Fashion",
        gender: "Women",
        price: 2499,
        oldPrice: 4499,
        rating: 4.8,
        reviews: 189,
        image: "https://images.unsplash.com/photo-1610030469668-8e9b4d8a5f2a?auto=format&fit=crop&w=700&q=80",
        description: "Elegant traditional saree with a premium festive look."
    },

    {
        id: 12,
        name: "Printed Women's Kurti",
        brand: "Biba",
        category: "Fashion",
        gender: "Women",
        price: 1199,
        oldPrice: 1999,
        rating: 4.6,
        reviews: 203,
        image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=700&q=80",
        description: "Comfortable printed kurti for daily and festive occasions."
    },

    {
        id: 13,
        name: "High Waist Jeans",
        brand: "Levis",
        category: "Fashion",
        gender: "Women",
        price: 1899,
        oldPrice: 2999,
        rating: 4.5,
        reviews: 164,
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80",
        description: "Trendy high-waist jeans with a comfortable stretch fit."
    },

    {
        id: 14,
        name: "Women's Denim Jacket",
        brand: "ONLY",
        category: "Fashion",
        gender: "Women",
        price: 2299,
        oldPrice: 3799,
        rating: 4.6,
        reviews: 92,
        image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=700&q=80",
        description: "Trendy denim jacket designed for modern casual outfits."
    },

    {
        id: 15,
        name: "Women's Casual Hoodie",
        brand: "H&M",
        category: "Fashion",
        gender: "Women",
        price: 1599,
        oldPrice: 2499,
        rating: 4.4,
        reviews: 113,
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=700&q=80",
        description: "Soft and comfortable hoodie for everyday casual wear."
    },

    {
        id: 16,
        name: "Party Wear Gown",
        brand: "Aurelia",
        category: "Fashion",
        gender: "Women",
        price: 2899,
        oldPrice: 4999,
        rating: 4.8,
        reviews: 68,
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=700&q=80",
        description: "Elegant party gown designed for special occasions."
    },

    /* ================= SHOES ================= */

    {
        id: 17,
        name: "Air Running Sneakers",
        brand: "Nike",
        category: "Shoes",
        gender: "Men",
        price: 3499,
        oldPrice: 5999,
        rating: 4.8,
        reviews: 324,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",
        description: "Lightweight running shoes with responsive cushioning."
    },

    {
        id: 18,
        name: "Classic White Sneakers",
        brand: "Adidas",
        category: "Shoes",
        gender: "Men",
        price: 2999,
        oldPrice: 4999,
        rating: 4.7,
        reviews: 286,
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=700&q=80",
        description: "Minimal white sneakers for everyday street style."
    },

    {
        id: 19,
        name: "Women's Fashion Sneakers",
        brand: "Puma",
        category: "Shoes",
        gender: "Women",
        price: 2799,
        oldPrice: 4499,
        rating: 4.6,
        reviews: 198,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=700&q=80",
        description: "Fashionable sneakers combining comfort and modern style."
    },

    {
        id: 20,
        name: "Women's Party Heels",
        brand: "Aldo",
        category: "Shoes",
        gender: "Women",
        price: 2399,
        oldPrice: 3999,
        rating: 4.5,
        reviews: 147,
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80",
        description: "Elegant heels for parties, events and special occasions."
    },

    {
        id: 21,
        name: "Comfort Sandals",
        brand: "Bata",
        category: "Shoes",
        gender: "Women",
        price: 899,
        oldPrice: 1499,
        rating: 4.4,
        reviews: 178,
        image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=700&q=80",
        description: "Lightweight sandals designed for all-day comfort."
    },

    /* ================= ELECTRONICS ================= */

    {
        id: 22,
        name: "Galaxy Smartphone Pro",
        brand: "Samsung",
        category: "Electronics",
        gender: "Unisex",
        price: 42999,
        oldPrice: 49999,
        rating: 4.8,
        reviews: 542,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=700&q=80",
        description: "Premium smartphone with advanced camera and high-performance processor."
    },

    {
        id: 23,
        name: "iPhone Pro",
        brand: "Apple",
        category: "Electronics",
        gender: "Unisex",
        price: 99999,
        oldPrice: 109999,
        rating: 4.9,
        reviews: 827,
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=700&q=80",
        description: "Powerful smartphone with a premium design and advanced camera."
    },

    {
        id: 24,
        name: "Wireless Earbuds Pro",
        brand: "Sony",
        category: "Electronics",
        gender: "Unisex",
        price: 4999,
        oldPrice: 7999,
        rating: 4.7,
        reviews: 412,
        image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=700&q=80",
        description: "Wireless earbuds with active noise cancellation."
    },

    {
        id: 25,
        name: "Noise Cancelling Headphones",
        brand: "Sony",
        category: "Electronics",
        gender: "Unisex",
        price: 8999,
        oldPrice: 12999,
        rating: 4.8,
        reviews: 365,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80",
        description: "Premium over-ear headphones with immersive sound."
    },

    {
        id: 26,
        name: "Smart Watch Series 9",
        brand: "Apple",
        category: "Electronics",
        gender: "Unisex",
        price: 39999,
        oldPrice: 44999,
        rating: 4.8,
        reviews: 318,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=700&q=80",
        description: "Smartwatch with fitness tracking, notifications and health features."
    },

    {
        id: 27,
        name: "Bluetooth Speaker",
        brand: "JBL",
        category: "Electronics",
        gender: "Unisex",
        price: 2999,
        oldPrice: 4999,
        rating: 4.7,
        reviews: 489,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=700&q=80",
        description: "Portable Bluetooth speaker with powerful bass and long battery life."
    },

    {
        id: 28,
        name: "Fast Charging Power Bank",
        brand: "Anker",
        category: "Electronics",
        gender: "Unisex",
        price: 1999,
        oldPrice: 2999,
        rating: 4.6,
        reviews: 254,
        image: "https://images.unsplash.com/photo-1609592424971-a9f8f3c6e4e4?auto=format&fit=crop&w=700&q=80",
        description: "High-capacity power bank with fast charging support."
    },

    {
        id: 29,
        name: "Ultra Slim Laptop",
        brand: "Dell",
        category: "Electronics",
        gender: "Unisex",
        price: 64999,
        oldPrice: 74999,
        rating: 4.7,
        reviews: 198,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=700&q=80",
        description: "Slim productivity laptop suitable for work, study and entertainment."
    },

    {
        id: 30,
        name: "Mechanical Gaming Keyboard",
        brand: "Logitech",
        category: "Gaming",
        gender: "Unisex",
        price: 3999,
        oldPrice: 5999,
        rating: 4.7,
        reviews: 287,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=700&q=80",
        description: "RGB mechanical keyboard built for competitive gaming."
    },

    /* ================= GAMING ================= */

    {
        id: 31,
        name: "Wireless Gaming Mouse",
        brand: "Logitech",
        category: "Gaming",
        gender: "Unisex",
        price: 2499,
        oldPrice: 3999,
        rating: 4.8,
        reviews: 342,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=700&q=80",
        description: "High-precision wireless gaming mouse with customizable buttons."
    },

    {
        id: 32,
        name: "Gaming Headset",
        brand: "HyperX",
        category: "Gaming",
        gender: "Unisex",
        price: 3499,
        oldPrice: 4999,
        rating: 4.6,
        reviews: 229,
        image: "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=700&q=80",
        description: "Immersive gaming headset with surround sound and microphone."
    },

    {
        id: 33,
        name: "Wireless Game Controller",
        brand: "Sony",
        category: "Gaming",
        gender: "Unisex",
        price: 5499,
        oldPrice: 6499,
        rating: 4.8,
        reviews: 183,
        image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?auto=format&fit=crop&w=700&q=80",
        description: "Wireless controller with responsive triggers and ergonomic design."
    },

    /* ================= ACCESSORIES ================= */

    {
        id: 34,
        name: "Classic Analog Watch",
        brand: "Fossil",
        category: "Accessories",
        gender: "Men",
        price: 5999,
        oldPrice: 8999,
        rating: 4.7,
        reviews: 174,
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=80",
        description: "Classic premium watch with a timeless design."
    },

    {
        id: 35,
        name: "Women's Fashion Watch",
        brand: "Titan",
        category: "Accessories",
        gender: "Women",
        price: 4499,
        oldPrice: 6999,
        rating: 4.6,
        reviews: 132,
        image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=700&q=80",
        description: "Elegant fashion watch designed for everyday and occasion wear."
    },

    {
        id: 36,
        name: "Premium Leather Wallet",
        brand: "Tommy Hilfiger",
        category: "Accessories",
        gender: "Men",
        price: 1499,
        oldPrice: 2499,
        rating: 4.5,
        reviews: 215,
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=80",
        description: "Compact genuine leather wallet with multiple card slots."
    },

    {
        id: 37,
        name: "Women's Handbag",
        brand: "Lavie",
        category: "Accessories",
        gender: "Women",
        price: 1999,
        oldPrice: 3499,
        rating: 4.7,
        reviews: 243,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=80",
        description: "Stylish spacious handbag for everyday use."
    },

    {
        id: 38,
        name: "Premium Sunglasses",
        brand: "Ray-Ban",
        category: "Accessories",
        gender: "Unisex",
        price: 4999,
        oldPrice: 6999,
        rating: 4.8,
        reviews: 157,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=80",
        description: "Classic sunglasses with UV protection and premium styling."
    },

    {
        id: 39,
        name: "Travel Backpack",
        brand: "American Tourister",
        category: "Accessories",
        gender: "Unisex",
        price: 1799,
        oldPrice: 2999,
        rating: 4.7,
        reviews: 321,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80",
        description: "Durable backpack with laptop compartment and travel storage."
    },

    /* ================= HOME ================= */

    {
        id: 40,
        name: "Modern Table Lamp",
        brand: "Philips",
        category: "Home",
        gender: "Unisex",
        price: 1299,
        oldPrice: 1999,
        rating: 4.5,
        reviews: 119,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=700&q=80",
        description: "Modern decorative table lamp for bedroom or workspace."
    },

    {
        id: 41,
        name: "Premium Bedsheet Set",
        brand: "Spaces",
        category: "Home",
        gender: "Unisex",
        price: 1499,
        oldPrice: 2499,
        rating: 4.6,
        reviews: 203,
        image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=700&q=80",
        description: "Soft premium cotton bedsheet set with elegant patterns."
    },

    {
        id: 42,
        name: "Decorative Cushion Set",
        brand: "Home Centre",
        category: "Home",
        gender: "Unisex",
        price: 799,
        oldPrice: 1299,
        rating: 4.4,
        reviews: 89,
        image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=700&q=80",
        description: "Decorative cushions to add a stylish touch to your living room."
    },

    {
        id: 43,
        name: "Kitchen Storage Set",
        brand: "Milton",
        category: "Home",
        gender: "Unisex",
        price: 999,
        oldPrice: 1499,
        rating: 4.5,
        reviews: 167,
        image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=700&q=80",
        description: "Practical storage containers for an organized kitchen."
    },

    /* ================= BEAUTY ================= */

    {
        id: 44,
        name: "Premium Eau De Parfum",
        brand: "Calvin Klein",
        category: "Beauty",
        gender: "Unisex",
        price: 2999,
        oldPrice: 4999,
        rating: 4.7,
        reviews: 234,
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=700&q=80",
        description: "Long-lasting premium fragrance with a sophisticated aroma."
    },

    {
        id: 45,
        name: "Hydrating Face Serum",
        brand: "The Ordinary",
        category: "Beauty",
        gender: "Unisex",
        price: 899,
        oldPrice: 1299,
        rating: 4.6,
        reviews: 412,
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=700&q=80",
        description: "Lightweight hydrating serum for daily skincare."
    },

    {
        id: 46,
        name: "Matte Lipstick Set",
        brand: "Maybelline",
        category: "Beauty",
        gender: "Women",
        price: 799,
        oldPrice: 1199,
        rating: 4.5,
        reviews: 321,
        image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=700&q=80",
        description: "Long-lasting matte lipstick collection with beautiful shades."
    },

    {
        id: 47,
        name: "Hair Care Essentials",
        brand: "L'Oreal",
        category: "Beauty",
        gender: "Unisex",
        price: 1199,
        oldPrice: 1799,
        rating: 4.5,
        reviews: 198,
        image: "https://images.unsplash.com/photo-1527799820374-dcf8c0a3c7d0?auto=format&fit=crop&w=700&q=80",
        description: "Complete hair-care set for smooth and healthy-looking hair."
    },

    /* ================= EXTRA PRODUCTS ================= */

    {
        id: 48,
        name: "Premium Running Shoes",
        brand: "Adidas",
        category: "Shoes",
        gender: "Men",
        price: 3999,
        oldPrice: 6499,
        rating: 4.8,
        reviews: 267,
        image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=700&q=80",
        description: "Performance running shoes designed for comfort and stability."
    },

    {
        id: 49,
        name: "Women's Casual Sandals",
        brand: "Metro",
        category: "Shoes",
        gender: "Women",
        price: 999,
        oldPrice: 1699,
        rating: 4.4,
        reviews: 156,
        image: "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=700&q=80",
        description: "Comfortable casual sandals for everyday outings."
    },

    {
        id: 50,
        name: "Smart Fitness Band",
        brand: "Fitbit",
        category: "Electronics",
        gender: "Unisex",
        price: 2999,
        oldPrice: 4499,
        rating: 4.6,
        reviews: 278,
        image: "https://images.unsplash.com/photo-1557935728-e6d1eaabe558?auto=format&fit=crop&w=700&q=80",
        description: "Fitness tracker with activity monitoring and smart notifications."
    },

    {
        id: 51,
        name: "Classic Leather Belt",
        brand: "Levis",
        category: "Accessories",
        gender: "Men",
        price: 899,
        oldPrice: 1499,
        rating: 4.5,
        reviews: 143,
        image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=700&q=80",
        description: "Classic leather belt suitable for formal and casual outfits."
    },

    {
        id: 52,
        name: "Women's Designer Handbag",
        brand: "Caprese",
        category: "Accessories",
        gender: "Women",
        price: 2499,
        oldPrice: 3999,
        rating: 4.7,
        reviews: 221,
        image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=700&q=80",
        description: "Premium designer handbag with spacious compartments."
    }

];


/* =========================================================
   STATE
========================================================= */

let cart = JSON.parse(localStorage.getItem("lavkart_cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("lavkart_wishlist")) || [];
let orders = JSON.parse(localStorage.getItem("lavkart_orders")) || [];

let currentCategory = "all";
let currentGender = "all";
let couponApplied = false;
let authMode = "login";


/* =========================================================
   SAVE DATA
========================================================= */

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
        document.getElementById("searchInput")
            ?.value
            ?.toLowerCase()
            .trim() || "";

    const sort =
        document.getElementById("sortSelect")
            ?.value || "default";


    let filtered = products.filter(product => {

        const categoryMatch =
            currentCategory === "all" ||
            product.category === currentCategory;

        const genderMatch =
            currentGender === "all" ||
            product.gender === currentGender ||
            product.gender === "Unisex";

        const searchMatch =
            product.name.toLowerCase().includes(search) ||
            product.brand.toLowerCase().includes(search) ||
            product.category.toLowerCase().includes(search) ||
            product.gender.toLowerCase().includes(search);

        return categoryMatch &&
               genderMatch &&
               searchMatch;

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

    if (sort === "name") {

        filtered.sort(
            (a, b) =>
                a.name.localeCompare(b.name)
        );

    }


    if (filtered.length === 0) {

        container.innerHTML = `
            <div class="empty-products">
                <div>🔎</div>
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

    const discount =
        Math.round(
            ((product.oldPrice - product.price) /
            product.oldPrice) * 100
        );


    const isWishlisted =
        wishlist.includes(product.id);


    return `

        <article class="product-card">

            <div class="product-image-wrapper">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    class="product-image"
                    loading="lazy"
                    onerror="this.src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80'"
                >

                <span class="discount-badge">
                    ${discount}% OFF
                </span>

                <button
                    class="wishlist-btn ${isWishlisted ? "active" : ""}"
                    onclick="toggleWishlist(${product.id})"
                    title="Wishlist"
                >
                    ${isWishlisted ? "❤️" : "♡"}
                </button>

            </div>


            <div class="product-info">

                <div class="product-brand">
                    ${product.brand}
                </div>

                <h3 class="product-name">
                    ${product.name}
                </h3>

                <div class="product-meta">

                    <span>
                        ${product.gender === "Men"
                            ? "👨 Men"
                            : product.gender === "Women"
                                ? "👩 Women"
                                : "👨‍👩‍👧 Unisex"}
                    </span>

                    <span>
                        ${product.category}
                    </span>

                </div>


                <div class="rating">

                    <span class="stars">
                        ${getStars(product.rating)}
                    </span>

                    <span>
                        ${product.rating}
                    </span>

                    <small>
                        (${product.reviews})
                    </small>

                </div>


                <div class="price-row">

                    <strong class="product-price">
                        ₹${product.price.toLocaleString("en-IN")}
                    </strong>

                    <del>
                        ₹${product.oldPrice.toLocaleString("en-IN")}
                    </del>

                </div>


                <div class="product-actions">

                    <button
                        class="details-btn"
                        onclick="openProduct(${product.id})"
                    >
                        View Details
                    </button>

                    <button
                        class="add-cart-btn"
                        onclick="addToCart(${product.id})"
                    >
                        🛒 Add
                    </button>

                </div>

            </div>

        </article>

    `;

}


/* =========================================================
   STARS
========================================================= */

function getStars(rating) {

    let stars = "";

    for (let i = 1; i <= 5; i++) {

        if (rating >= i) {
            stars += "★";
        } else if (rating >= i - 0.5) {
            stars += "★";
        } else {
            stars += "☆";
        }

    }

    return stars;
}


/* =========================================================
   CATEGORY FILTER
========================================================= */

function filterCategory(category) {

    currentCategory = category;
    currentGender = "all";

    renderProducts();

    document
        .getElementById("products")
        ?.scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================================================
   GENDER FILTER
========================================================= */

function filterGender(gender) {

    currentGender = gender;

    renderProducts();

    document
        .getElementById("products")
        ?.scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================================================
   ADD TO CART
========================================================= */

function addToCart(id) {

    const product =
        products.find(p => p.id === id);

    if (!product) return;


    const existing =
        cart.find(item => item.id === id);


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            id: product.id,
            quantity: 1

        });

    }


    saveData();

    updateCart();

    showToast(
        `🛒 ${product.name} added to cart`
    );

}


/* =========================================================
   CART
========================================================= */

function updateCart() {

    const cartCount =
        document.getElementById("cartCount");

    const totalItems =
        cart.reduce(
            (sum, item) =>
                sum + item.quantity,
            0
        );


    if (cartCount) {

        cartCount.textContent =
            totalItems;

    }


    renderCart();

}


function renderCart() {

    const container =
        document.getElementById("cartItems");

    if (!container) return;


    if (cart.length === 0) {

        container.innerHTML = `

            <div class="empty-cart">

                <div>🛒</div>

                <h3>Your cart is empty</h3>

                <p>Add something you love.</p>

                <button
                    class="checkout-button"
                    onclick="closeCart(); document.getElementById('products').scrollIntoView({behavior:'smooth'})"
                >
                    Start Shopping
                </button>

            </div>

        `;

        updateSummary();

        return;

    }


    container.innerHTML =
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

                    <div class="cart-item-info">

                        <h4>
                            ${product.name}
                        </h4>

                        <small>
                            ${product.brand}
                        </small>

                        <strong>
                            ₹${product.price.toLocaleString("en-IN")}
                        </strong>


                        <div class="quantity-controls">

                            <button
                                onclick="changeQuantity(${product.id}, -1)"
                            >
                                −
                            </button>

                            <span>
                                ${item.quantity}
                            </span>

                            <button
                                onclick="changeQuantity(${product.id}, 1)"
                            >
                                +
                            </button>

                            <button
                                class="remove-item"
                                onclick="removeFromCart(${product.id})"
                            >
                                🗑️
                            </button>

                        </div>

                    </div>

                </div>

            `;

        }).join("");


    updateSummary();

}


function changeQuantity(id, amount) {

    const item =
        cart.find(i => i.id === id);

    if (!item) return;


    item.quantity += amount;


    if (item.quantity <= 0) {

        cart =
            cart.filter(
                i => i.id !== id
            );

    }


    saveData();

    updateCart();

}


function removeFromCart(id) {

    cart =
        cart.filter(
            item => item.id !== id
        );

    saveData();

    updateCart();

    showToast("Product removed from cart");

}


function clearCart() {

    if (!cart.length) return;


    cart = [];

    couponApplied = false;

    saveData();

    updateCart();

    showToast("Cart cleared");

}


/* =========================================================
   CART SUMMARY
========================================================= */

function calculateSubtotal() {

    return cart.reduce(
        (sum, item) => {

            const product =
                products.find(
                    p => p.id === item.id
                );

            return sum +
                (product
                    ? product.price * item.quantity
                    : 0);

        },
        0
    );

}


function updateSummary() {

    const subtotal =
        calculateSubtotal();


    const shipping =
        subtotal === 0
            ? 0
            : subtotal >= 499
                ? 0
                : 49;


    const discount =
        couponApplied
            ? Math.round(subtotal * 0.10)
            : 0;


    const total =
        subtotal +
        shipping -
        discount;


    setText(
        "subtotal",
        `₹${subtotal.toLocaleString("en-IN")}`
    );


    setText(
        "shipping",
        shipping === 0
            ? "FREE"
            : `₹${shipping}`
    );


    setText(
        "discount",
        `-₹${discount.toLocaleString("en-IN")}`
    );


    setText(
        "cartTotal",
        `₹${Math.max(0, total).toLocaleString("en-IN")}`
    );


    const row =
        document.getElementById(
            "discountRow"
        );

    if (row) {

        row.hidden =
            !couponApplied;

    }

}


function applyCoupon() {

    const input =
        document.getElementById(
            "couponInput"
        );

    if (!input) return;


    const code =
        input.value.trim().toUpperCase();


    if (code === "WELCOME10") {

        couponApplied = true;

        updateSummary();

        showToast(
            "🎉 10% discount applied!"
        );

    } else {

        couponApplied = false;

        updateSummary();

        showToast(
            "❌ Invalid coupon. Try WELCOME10"
        );

    }

}


/* =========================================================
   WISHLIST
========================================================= */

function toggleWishlist(id) {

    const product =
        products.find(
            p => p.id === id
        );

    if (!product) return;


    if (wishlist.includes(id)) {

        wishlist =
            wishlist.filter(
                item => item !== id
            );

        showToast(
            "Removed from wishlist"
        );

    } else {

        wishlist.push(id);

        showToast(
            "❤️ Added to wishlist"
        );

    }


    saveData();

    updateWishlistCount();

    renderProducts();

}


function updateWishlistCount() {

    const element =
        document.getElementById(
            "wishlistCount"
        );

    if (element) {

        element.textContent =
            wishlist.length;

    }

}


function renderWishlist() {

    const container =
        document.getElementById(
            "wishlistItems"
        );

    if (!container) return;


    const items =
        products.filter(
            product =>
                wishlist.includes(
                    product.id
                )
        );


    if (items.length === 0) {

        container.innerHTML = `

            <div class="empty-cart">

                <div>❤️</div>

                <h3>Your wishlist is empty</h3>

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
   PRODUCT DETAILS
========================================================= */

function openProduct(id) {

    const product =
        products.find(
            p => p.id === id
        );

    if (!product) return;


    const discount =
        Math.round(
            ((product.oldPrice - product.price) /
            product.oldPrice) * 100
        );


    const container =
        document.getElementById(
            "productDetails"
        );


    if (!container) return;


    container.innerHTML = `

        <div class="detail-layout">

            <div class="detail-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

            </div>


            <div class="detail-content">

                <span class="detail-brand">
                    ${product.brand}
                </span>

                <h2>
                    ${product.name}
                </h2>

                <div class="rating">

                    <span class="stars">
                        ${getStars(product.rating)}
                    </span>

                    ${product.rating}
                    (${product.reviews} reviews)

                </div>


                <div class="detail-price">

                    <strong>
                        ₹${product.price.toLocaleString("en-IN")}
                    </strong>

                    <del>
                        ₹${product.oldPrice.toLocaleString("en-IN")}
                    </del>

                    <span>
                        ${discount}% OFF
                    </span>

                </div>


                <p>
                    ${product.description}
                </p>


                <div class="detail-info">

                    <div>
                        <strong>Category</strong>
                        <span>${product.category}</span>
                    </div>

                    <div>
                        <strong>Gender</strong>
                        <span>${product.gender}</span>
                    </div>

                    <div>
                        <strong>Delivery</strong>
                        <span>🚚 Free delivery over ₹499</span>
                    </div>

                    <div>
                        <strong>Returns</strong>
                        <span>↩️ 7-day easy returns</span>
                    </div>

                </div>


                <button
                    class="place-order-button"
                    onclick="addToCart(${product.id}); closeProductModal(); openCart();"
                >
                    🛒 Add to Cart
                </button>

            </div>

        </div>

    `;


    const modal =
        document.getElementById(
            "productModal"
        );

    if (modal) {

        modal.classList.add("active");

    }

}


function closeProductModal() {

    document
        .getElementById("productModal")
        ?.classList.remove("active");

}


/* =========================================================
   CART SIDEBAR
========================================================= */

function openCart() {

    document
        .getElementById("cartSidebar")
        ?.classList.add("active");

    document
        .getElementById("overlay")
        ?.classList.add("active");

}


function closeCart() {

    document
        .getElementById("cartSidebar")
        ?.classList.remove("active");

    document
        .getElementById("overlay")
        ?.classList.remove("active");

}


/* =========================================================
   WISHLIST MODAL
========================================================= */

function openWishlist() {

    renderWishlist();

    document
        .getElementById("wishlistModal")
        ?.classList.add("active");

}


function closeWishlist() {

    document
        .getElementById("wishlistModal")
        ?.classList.remove("active");

}


/* =========================================================
   CHECKOUT
========================================================= */

function openCheckout() {

    if (cart.length === 0) {

        showToast(
            "Your cart is empty"
        );

        return;

    }


    closeCart();

    document
        .getElementById("checkoutModal")
        ?.classList.add("active");

}


function closeCheckout() {

    document
        .getElementById("checkoutModal")
        ?.classList.remove("active");

}


function placeOrder(event) {

    event.preventDefault();


    if (cart.length === 0) {

        showToast(
            "Your cart is empty"
        );

        return;

    }


    const firstName =
        document.getElementById(
            "firstName"
        )?.value || "";


    const lastName =
        document.getElementById(
            "lastName"
        )?.value || "";


    const email =
        document.getElementById(
            "checkoutEmail"
        )?.value || "";


    const total =
        calculateSubtotal();


    const order = {

        id:
            "LK" +
            Date.now()
                .toString()
                .slice(-8),

        date:
            new Date()
                .toLocaleString("en-IN"),

        customer:
            `${firstName} ${lastName}`,

        email,

        total,

        items:
            [...cart],

        status:
            "Order Placed"

    };


    orders.unshift(order);

    cart = [];

    couponApplied = false;

    saveData();

    updateCart();

    closeCheckout();


    document
        .getElementById(
            "checkoutForm"
        )
        ?.reset();


    showToast(
        `🎉 Order ${order.id} placed successfully!`
    );

}


/* =========================================================
   ORDERS
========================================================= */

function openOrders() {

    renderOrders();

    document
        .getElementById("ordersModal")
        ?.classList.add("active");

}


function closeOrders() {

    document
        .getElementById("ordersModal")
        ?.classList.remove("active");

}


function renderOrders() {

    const container =
        document.getElementById(
            "ordersList"
        );

    if (!container) return;


    if (orders.length === 0) {

        container.innerHTML = `

            <div class="empty-cart">

                <div>📦</div>

                <h3>No orders yet</h3>

                <p>
                    Your completed orders will appear here.
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

                    <p>
                        ${order.date}
                    </p>

                </div>

                <div>

                    <strong>
                        ₹${order.total.toLocaleString("en-IN")}
                    </strong>

                    <span class="order-status">
                        ${order.status}
                    </span>

                </div>

            </div>

        `).join("");

}


/* =========================================================
   LOGIN / REGISTER
========================================================= */

function openLogin() {

    document
        .getElementById("authModal")
        ?.classList.add("active");

}


function closeLogin() {

    document
        .getElementById("authModal")
        ?.classList.remove("active");

}


function toggleAuthMode() {

    authMode =
        authMode === "login"
            ? "register"
            : "login";


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


    if (authMode === "register") {

        if (title)
            title.textContent =
                "Create Account";

        if (nameGroup)
            nameGroup.hidden = false;

        if (submit)
            submit.textContent =
                "Create Account";

        if (switchButton)
            switchButton.textContent =
                "Already have an account? Login";

    } else {

        if (title)
            title.textContent =
                "Welcome Back";

        if (nameGroup)
            nameGroup.hidden = true;

        if (submit)
            submit.textContent =
                "Login";

        if (switchButton)
            switchButton.textContent =
                "Create an account";

    }

}


function handleAuth(event) {

    event.preventDefault();


    const email =
        document.getElementById(
            "authEmail"
        )?.value || "";


    if (authMode === "register") {

        const name =
            document.getElementById(
                "authName"
            )?.value || "Customer";


        localStorage.setItem(
            "lavkart_user",
            JSON.stringify({
                name,
                email
            })
        );


        showToast(
            "🎉 Account created successfully!"
        );

    } else {

        showToast(
            "👋 Welcome back to LavKart!"
        );

    }


    closeLogin();


    updateLoginButton();

}


function updateLoginButton() {

    const button =
        document.getElementById(
            "loginButton"
        );

    if (!button) return;


    const user =
        JSON.parse(
            localStorage.getItem(
                "lavkart_user"
            )
        );


    if (user) {

        button.textContent =
            `Hi, ${user.name.split(" ")[0]}`;

    } else {

        button.textContent =
            "Login";

    }

}


/* =========================================================
   DARK MODE
========================================================= */

function toggleDarkMode() {

    document.body.classList.toggle(
        "dark-mode"
    );


    localStorage.setItem(
        "lavkart_dark",
        document.body.classList.contains(
            "dark-mode"
        )
    );

}


function loadDarkMode() {

    const dark =
        localStorage.getItem(
            "lavkart_dark"
        );


    if (dark === "true") {

        document.body.classList.add(
            "dark-mode"
        );

    }

}


/* =========================================================
   OVERLAY / CLOSE
========================================================= */

function closeAll() {

    closeCart();

    closeProductModal();

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

    if (!toast) return;


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(toastTimer);


    toastTimer =
        setTimeout(() => {

            toast.classList.remove(
                "show"
            );

        }, 2500);

}


/* =========================================================
   HELPER
========================================================= */

function setText(id, value) {

    const element =
        document.getElementById(id);

    if (element) {

        element.textContent =
            value;

    }

}


/* =========================================================
   INITIALIZE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderProducts();

        updateCart();

        updateWishlistCount();

        updateLoginButton();

        loadDarkMode();

    }
);


/* =========================================================
   GLOBAL CATEGORY/GENDER SHORTCUTS
========================================================= */

window.filterCategory =
    filterCategory;

window.filterGender =
    filterGender;

window.addToCart =
    addToCart;

window.changeQuantity =
    changeQuantity;

window.removeFromCart =
    removeFromCart;

window.clearCart =
    clearCart;

window.applyCoupon =
    applyCoupon;

window.openCart =
    openCart;

window.closeCart =
    closeCart;

window.openWishlist =
    openWishlist;

window.closeWishlist =
    closeWishlist;

window.toggleWishlist =
    toggleWishlist;

window.openProduct =
    openProduct;

window.closeProductModal =
    closeProductModal;

window.openCheckout =
    openCheckout;

window.closeCheckout =
    closeCheckout;

window.placeOrder =
    placeOrder;

window.openOrders =
    openOrders;

window.closeOrders =
    closeOrders;

window.openLogin =
    openLogin;

window.closeLogin =
    closeLogin;

window.toggleAuthMode =
    toggleAuthMode;

window.handleAuth =
    handleAuth;

window.toggleDarkMode =
    toggleDarkMode;

window.closeAll =
    closeAll;

window.renderProducts =
    renderProducts;
