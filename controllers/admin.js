const Product = require('../models/product');

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product({
    title: title,
    price: price,
    description: description,
    userId: req.user
  });
  product.save()
  .then(result => {
    console.log('Created Product');
    res.status(201).json({
      message: 'Post created successfully!',
      post: { id: new Date().toISOString(), title: title, price: price, description: description }
    });
  })
  .catch(err => {
    console.log(err);
  });
 
};

exports.getProducts = (req, res, next) => {
  Product.find().populate('userId').then(products => {
    res.status(200).json({
        data: products
      });
  });
// res.status(200).json({
//     posts: [{ title: 'First Post', content: 'This is the first post!' }]
//   });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  const prodId = req.params.productId;
  Product.findById(prodId).then(product => {
    if(!product) {
      res.status(404)
    }
    res.status(200).json({
      data: product
    });
  })

};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const title = req.body.title;
  const price = req.body.price;
  const description = req.body.description;
  Product.findById(prodId).then(product => {
    product.title = title;
    product.price = price;
    product.description = description;
    return product.save();
  }).then(product => {
    res.status(201).json({
      message: 'Product update successfully!',
      data: product
    })
  }
   
  ).catch(err => console.log(err));
};

exports.deleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findByIdAndRemove(prodId).then(() => {
    res.status(202).json({
      message: 'Product delete successfully!',
    })
  });
};
