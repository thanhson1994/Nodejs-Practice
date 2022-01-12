const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/products', shopController.getProducts);

// products/1234
router.get('/product/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.post('/cart',shopController.postCart)

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

router.delete('/cart-delete-item',shopController.postCartDeleteProduct);

router.post('/create-order', shopController.postOrder);




module.exports = router;
