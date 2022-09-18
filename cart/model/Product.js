const mongoose = require('mongoose');

// Creating Peoduct Scema  

let productScem = mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: String, required: true },
    qty: { type: String, required: true },
    info: { type: String, required: true }
})

let Product = mongoose.model('product', productScem);

/*
 model = for creating collection('products) and passing defiend scema
 'product' => collection name
*/

module.exports = Product;