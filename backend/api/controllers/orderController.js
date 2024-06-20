const { Order } = require('../models');

// Tüm siparişleri getir
const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate('customer items.product payment');
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}; 

// Tek bir siparişi getir
const getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id).populate('customer items.product payment');
        if (order == null) {
            return res.status(404).json({ message: 'Sipariş bulunamadı' });
        }
        res.json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Yeni sipariş oluştur
const createOrder = async (req, res) => {
    const order = new Order(req.body);
    try {
        const newOrder = await order.save();
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Siparişi güncelle
const updateOrder = async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (updatedOrder == null) {
            return res.status(404).json({ message: 'Sipariş bulunamadı' });
        }
        res.json(updatedOrder);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Siparişi sil
const deleteOrder = async (req, res) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.id);
        if (order == null) {
            return res.status(404).json({ message: 'Sipariş bulunamadı' });
        }
        res.json({ message: 'Sipariş silindi' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Dışa aktarım
module.exports = {
    getAllOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder
};
