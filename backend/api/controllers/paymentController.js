const { Payment } = require('../models');

// Tüm ödemeleri getir
const getAllPayments = async (req, res) => {
    try {
        const payments = await Payment.find();
        res.json(payments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Tek bir ödemeyi getir
const getPaymentById = async (req, res) => {
    try {
        const payment = await Payment.findById(req.params.id);
        if (payment == null) {
            return res.status(404).json({ message: 'Ödeme bulunamadı' });
        }
        res.json(payment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Yeni ödeme oluştur
const createPayment = async (req, res) => {
    const payment = new Payment(req.body);
    try {
        const newPayment = await payment.save();
        res.status(201).json(newPayment);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Ödemeyi güncelle
const updatePayment = async (req, res) => {
    try {
        const updatedPayment = await Payment.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (updatedPayment == null) {
            return res.status(404).json({ message: 'Ödeme bulunamadı' });
        }
        res.json(updatedPayment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Ödemeyi sil
const deletePayment = async (req, res) => {
    try {
        const payment = await Payment.findByIdAndDelete(req.params.id);
        if (payment == null) {
            return res.status(404).json({ message: 'Ödeme bulunamadı' });
        }
        res.json({ message: 'Ödeme silindi' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Dışa aktarım
module.exports = {
    getAllPayments,
    getPaymentById,
    createPayment,
    updatePayment,
    deletePayment
};
