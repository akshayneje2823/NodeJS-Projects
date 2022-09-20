const express = require('express');
let router = express.Router();
const Product = require('../model/Product')



router.get("/", (req, res) => {
    res.send("<h1>Testing product Router</h1>")
})


// API Decelopement
/*     Info : Get All Products
       URL : http//8080/api/products
       METHOD : GET
       Require Fields : No             */

router.get('/products', async (request, response) => {
    let products = await Product.find();
    if (!products) {
        response.status(401).json({ message: 'Products Not Found' })
    }
    response.status(401).json(products)
})


/*
Info : Create All Products
URL : http//8080/api/products
METHOD : POST
Require Fields : name,image,prixe, qty,
*/
router.post("/products/",  (request, response) => {
    console.log("inside create Product API")
    console.log(request.body.name)
    // try {
    //     //reading data from form body
    //     let newProduct = {
    //         name: request.body.name,
    //         price: request.body.price,
    //         image: request.body.image,
    //         qty: request.body.qty,
    //         info: request.body.info
    //     }
    //     let product = new Product(newProduct);
    //     product = await product.save()
    //     response.status(200).json({ result: "Product created Successfully", product: product })
    // }
    // catch (err) {
    //     console.log(err)
    //     return response.status(500).json({ message: "message" })
    // }

})

// router.get('/api/products', (req, res) => {
//     res.send('<h1>This IS API</h1>')
// })

module.exports = router;