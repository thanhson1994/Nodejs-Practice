const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();


// /admin/products => GET
router.get('/products', adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

router.get('/edit-product/:productId',adminController.getEditProduct);

router.put('/edit-product', adminController.postEditProduct);

router.delete('/delete', adminController.deleteProduct);


module.exports = router;
