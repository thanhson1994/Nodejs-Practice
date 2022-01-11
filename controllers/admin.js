const Product = require('../models/product');

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, description, price);
  product
  .save()
  .then(result => {
    // console.log(result);
    console.log('Created Product');
  })
  .catch(err => {
    console.log(err);
  });
  res.status(201).json({
    message: 'Post created successfully!',
    post: { id: new Date().toISOString(), title: title, price: price, description: description }
  });
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
   
    res.status(200).json({
        posts: products
      });
  });
// res.status(200).json({
//     posts: [{ title: 'First Post', content: 'This is the first post!' }]
//   });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  const prodId = req.params.productId;
  Product.findById(prodId, product => {
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
  const product = new Product(prodId, title, description, price);
  product.save();
  res.status(201).json({
    message: 'Product update successfully!',
    post: { id: new Date().toISOString(), title: title, price: price, description: description }
  });
};

exports.deleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.deleteProduct(prodId);
  res.status(202).json({
    message: 'Product delete successfully!',
  });
};
