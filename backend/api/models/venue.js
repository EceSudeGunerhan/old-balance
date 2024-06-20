var mongoose = require("mongoose");

/*

const hour = new mongoose.Schema({
days: { type: String, required: true },
open: String,
close: String,
isClosed: { type: Boolean, required: false }
});

const comment = new mongoose.Schema({
author: { type: String, required: true },
rating: { type: Number, min: 0, max: 5, required: true },
text: { type: String, required: true },
date: { type: Date, default: Date.now }
});

const venue = new mongoose.Schema({
name: { type: String, required: true },
address: String,
rating: { type: Number, min: 0, max: 5, default: 0 },
coordinates: { type: [Number], index: '2dsphere' },
foodanddrink: [String],
hours: [hour],
comments: [comment]
});

mongoose.model("venue", venue, "venues");

*/

// Ürün şeması
var productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    description: String,
    category: String,
    stock: { type: Number, required: true, min: 0 },
    photos: [String], // Ürün fotoğrafları için dizi
    sizes: [String], // Ürün bedenleri için dizi
    colors: [String] // Ürün renkleri için dizi
});

// Müşteri şeması
var customerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    city: { type: String },
    country: { type: String },
    gender: { type: String, enum: ['Male', 'Female', 'Other'] } // Cinsiyet seçenekleri
});

// Ödeme şeması
var paymentSchema = new mongoose.Schema({
    amount: { type: Number, required: true },
    method: { type: String, enum: ['Credit Card', 'Debit Card', 'PayPal', 'Bank Transfer'], required: true },
    status: { type: String, enum: ['Pending', 'Completed', 'Failed'], default: 'Pending' },
    score: { type: Number, default: 0 }, // Ödeme skoru
    date: { type: Date, default: Date.now }
});

// Sepet ürünü şeması
var cartItemSchema = new mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
    quantity: { type: Number, required: true, min: 1 },
    price: { type: Number, required: true },
    size: { type: String },
    color: { type: String }
});

// Sipariş kalemi şeması
var orderItemSchema = new mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
    quantity: { type: Number, required: true, min: 1 },
    price: { type: Number, required: true },
    size: { type: String },
    color: { type: String }
});

// Sipariş şeması
var orderSchema = new mongoose.Schema({
    customer: { type: mongoose.Schema.Types.ObjectId, ref: "Customer", required: true },
    orderDate: { type: Date, default: Date.now },
    status: { type: String, required: true, enum: ['Pending', 'Shipped', 'Delivered', 'Cancelled'], default: 'Pending' },
    items: [orderItemSchema],
    totalAmount: { type: Number, required: true },
    payment: { type: paymentSchema, required: true }
});

// Sepet şeması
var cartSchema = new mongoose.Schema({
    customer: { type: mongoose.Schema.Types.ObjectId, ref: "Customer", required: true },
    items: [cartItemSchema],
    createdAt: { type: Date, default: Date.now }
});

// Şemaların modelleri
/*
mongoose.model("Product", productSchema, "products");
mongoose.model("Customer", customerSchema, "customers");
mongoose.model("Payment", paymentSchema, "payments");
mongoose.model("CartItem", cartItemSchema, "cartItems");
mongoose.model("OrderItem", orderItemSchema, "orderItems");
mongoose.model("Order", orderSchema, "orders");
mongoose.model("Cart", cartSchema, "carts");
*/

const Product = mongoose.model("Product", productSchema);
const Customer = mongoose.model("Customer", customerSchema);
const Payment = mongoose.model("Payment", paymentSchema);
const CartItem = mongoose.model("CartItem", cartItemSchema);
const OrderItem = mongoose.model("OrderItem", orderItemSchema);
const Order = mongoose.model("Order", orderSchema);
const Cart = mongoose.model("Cart", cartSchema);

module.exports = {
    Product,
    Customer,
    Payment,
    CartItem,
    OrderItem,
    Order,
    Cart
};

//model şemalarını tanımladığımız yer (veritabanı)