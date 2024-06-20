const { Customer } = require('../models');

// Tüm müşterileri getir
const getAllCustomers = async (req, res) => {
    try {
        const customers = await Customer.find();
        res.json(customers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Tek bir müşteriyi getir
const getCustomerById = async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.id);
        if (customer == null) {
            return res.status(404).json({ message: 'Müşteri bulunamadı' });
        }
        res.json(customer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Yeni müşteri oluştur
const createCustomer = async (req, res) => {
    const customer = new Customer(req.body);
    try {
        const newCustomer = await customer.save();
        res.status(201).json(newCustomer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Müşteriyi güncelle
const updateCustomer = async (req, res) => {
    try {
        const updatedCustomer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (updatedCustomer == null) {
            return res.status(404).json({ message: 'Müşteri bulunamadı' });
        }
        res.json(updatedCustomer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Müşteriyi sil
const deleteCustomer = async (req, res) => {
    try {
        const customer = await Customer.findByIdAndDelete(req.params.id);
        if (customer == null) {
            return res.status(404).json({ message: 'Müşteri bulunamadı' });
        }
        res.json({ message: 'Müşteri silindi' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Dışa aktarım
module.exports = {
    getAllCustomers,
    getCustomerById,
    createCustomer,
    updateCustomer,
    deleteCustomer
};
