const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Product', productSchema);



// const getDb = require('../util/database');

// class Product {
//   constructor(title, price, description) {
//     this.title = title;
//     this.price = price;
//     this.description = description;
//   }

//   save() {
//     console.log('getdb', getDb);
//     const db = getDb.getDb();
//     return db
//       .collection('products')
//       .insertOne(this)
//       .then(result => {
//         console.log(result);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }

//   static fetchAll() {
//     const db = getDb();
//     return db
//       .collection('products')
//       .find()
//       .toArray()
//       .then(products => {
//         console.log(products);
//         return products;
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }
// }

// module.exports = Product;