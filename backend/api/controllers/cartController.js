const { Cart } = require('../models');

// Tüm sepetleri getir
const getAllCarts = async (req, res) => {
    try {
        const carts = await Cart.find().populate('customer items.product');
        res.json(carts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Tek bir sepeti getir
const getCartById = async (req, res) => {
    try {
        const cart = await Cart.findById(req.params.id).populate('customer items.product');
        if (cart == null) {
            return res.status(404).json({ message: 'Sepet bulunamadı' });
        }
        res.json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Yeni sepet oluştur
const createCart = async (req, res) => {
    const cart = new Cart(req.body);
    try {
        const newCart = await cart.save();
        res.status(201).json(newCart);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Sepeti güncelle
const updateCart = async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (updatedCart == null) {
            return res.status(404).json({ message: 'Sepet bulunamadı' });
        }
        res.json(updatedCart);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Sepeti sil
const deleteCart = async (req, res) => {
    try {
        const cart = await Cart.findByIdAndDelete(req.params.id);
        if (cart == null) {
            return res.status(404).json({ message: 'Sepet bulunamadı' });
        }
        res.json({ message: 'Sepet silindi' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Dışa aktarım
module.exports = {
    getAllCarts,
    getCartById,
    createCart,
    updateCart,
    deleteCart
};
