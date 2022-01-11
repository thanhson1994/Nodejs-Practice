const Cart = require('../models/cart');
const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
  
  });
};

exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    Product.findById(prodId, (product) => {
        res.status(201).json({
            message: 'Post created successfully!',
            data: product
          });
    })
   
}

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
  
  });
};

exports.getCart = (req, res, next) => {

};

exports.postCart = (req, res, next) => {
    const prodId =req.body.productId;
    Product.findById(prodId, (product) => {
        Cart.addProduct(prodId, product.price);
    })

};

exports.getOrders = (req, res, next) => {

};

exports.getCheckout = (req, res, next) => {
 
};
