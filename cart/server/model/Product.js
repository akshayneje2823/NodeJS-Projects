const mongoose = require('mongoose');

// Creating Peoduct Scema  

let productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, require: true },
    image: { type: String, require: true },
    price: { type: Number, require: true },
    qty: { type: Number, require: true },
    info: { type: String, require: true }
})

let Product = mongoose.model('product', productSchema);

/*
 model = for creating collection('products) and passing defiend scema
 'product' => collection name
*/

module.exports = Product;