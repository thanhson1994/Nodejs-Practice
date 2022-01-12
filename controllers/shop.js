const Cart = require('../models/cart');
const Product = require('../models/product');
const Order = require('../models/order');
exports.getProducts = (req, res, next) => {
  Product.find(products => {
  
  });
};

exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    Product.findById(prodId).then(product => {
        res.status(201).json({
            message: 'Post created successfully!',
            data: product
          });
    })
   
}

exports.getCart = (req, res, next) => {
  req.user.populate('cart.items.productId')
  .then(user => {
    const products = user.cart.items;
    res.status(201).json({
      message: 'Get Cart successfully!',
      data: products
    });
  })

};

exports.postCart = (req, res, next) => {
    const prodId =req.body.productId;
    Product.findById(prodId).then((product) => {
      return req.user.addToCart(product)
    }).then(product => {
      res.status(201).json({
        message: 'Add Cart successfully!',
        data: product
      });
    })
}

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  req.user.removeFromCart(prodId)
  .then(result => {
    res.status(201).json({
      message: 'Delete product from cart successfully',
      data: result
    });
  })
}

exports.getOrders = (req, res, next) => {
  Order.find().then(order => {
    res.status(201).json({
      message: 'Get order successfully!',
      data: order
    });
  })


};

exports.postOrder = (req, res, next) => {
  console.log('user', req.user);
  req.user.populate('cart.items.productId')
  .then(user => {
    console.log('item', user.cart.items)
    const products = user.cart.items.map(item => {
      return {
        quantity: item.quantity,
        productData: { ...item.productId._doc}
      }
    });
    const order = new Order({
      user: {
        name: req.user.name,
        userId: req.user
      },
      products: products
    })
    return order.save();
  }).then(() => {
    req.user.clearCart();
  }).then(result => {
    res.status(201).json({
      message: 'Post Order successfully!',
      data: result
    });
  })
};

exports.getCheckout = (req, res, next) => {
 
};
