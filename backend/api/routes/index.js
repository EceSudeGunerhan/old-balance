/*

const express = require("express");

const router = express.Router();

const venueController = require("../controllers/venueController")
const commentController = require('../controllers/commentController')

router
    .route('/venues')
    .get(venueController.venuesGetAll)
    .post(venueController.venuesAddOne)

router
    .route('/venues/:venueid')
    .get(venueController.venuesReadOne)
    .put(venueController.venuesUpdateOne)
    .delete(venueController.venuesDeleteOne)

router
    .route('/venues/:venueid/comments')
    .post(commentController.commentsAddOne)

router
    .route('/venues/:venueid/comments/:commentid')
    .get(commentController.commentsReadOne)
    .put(commentController.commentsUpdateOne)
    .delete(commentController.commentsDeleteOne)

module.exports = router;

*/

const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const productController = require('../controllers/productController');
const paymentController = require('../controllers/paymentController');
const orderController = require('../controllers/orderController');
const customerController = require('../controllers/customerController');


router.get('/', cartController.getAllCarts);
router.get('/:id', cartController.getCartById);
router.post('/', cartController.createCart);
router.put('/:id', cartController.updateCart);
router.delete('/:id', cartController.deleteCart);



router.get('/', customerController.getAllCustomers);
router.get('/:id', customerController.getCustomerById);
router.post('/', customerController.createCustomer);
router.put('/:id', customerController.updateCustomer);
router.delete('/:id', customerController.deleteCustomer);




router.get('/', orderController.getAllOrders);
router.get('/:id', orderController.getOrderById);
router.post('/', orderController.createOrder);
router.put('/:id', orderController.updateOrder);
router.delete('/:id', orderController.deleteOrder);



router.get('/', paymentController.getAllPayments);
router.get('/:id', paymentController.getPaymentById);
router.post('/', paymentController.createPayment);
router.put('/:id', paymentController.updatePayment);
router.delete('/:id', paymentController.deletePayment);




router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
