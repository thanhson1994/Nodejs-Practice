const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'cart.json'
);

module.exports = class Cart {
    static addProduct(id, productPrice) {
        //Fetch the previous cart

        fs.readFile(p, (err, fileContent) => {
            let cart = {products: [], totalPrice: 0};
            if(!err) {
                cart = JSON.parse(fileContent);
            }
            const exitingProductIndex = cart.products.findIndex(prod=> prod.id === id);
            const exitingProduct = cart.products[exitingProductIndex];
            let updateProduct;
            // Add new product/ increase quantity
    
            if(exitingProduct) {
                updateProduct = { ...exitingProduct }
                updateProduct.qty = exitingProduct.qty + 1;
                cart.products = [...cart.products];
                cart.products[exitingProductIndex] = updateProduct;
    
            } else {
                updateProduct = {
                    id: id,
                    qty: 1
                };
            cart.products = [...cart.products, updateProduct];
    
            }
            cart.totalPrice =  cart.totalPrice + +productPrice;
            fs.writeFile(p, JSON.stringify(cart), err => {
                console.log(err);
            })
        })
        // Analyze the cart => Find existing product
      
    };

    static deleteProduct(id, productPrice) {
        fs.readFile(p, (err, fileContent) => { 
            if(err) {
                return;
            }
            console.log('cart', cart);
            const updatedCart = { ...fileContent }
        })
    }
    

};
  