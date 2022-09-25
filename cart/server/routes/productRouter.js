const { request, response } = require('express');
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
       Require Fields : No             
*/

router.get("/products", async (request, response) => {
    let products = await Product.find();
    if (!products) {
        response.status(401).json({ message: "Product Not Found" })
    }
    response.status(200).json(products)
})


/*
Info : Create All Products
URL : http//8080/api/products
METHOD : POST
Require Fields : name,image,prixe, qty,info
*/
router.post("/products/", async (request, response) => {
    console.log("inside create Product API")
    // console.log(request.body.name)
    try {
        //reading data from form body
        let newProduct = {
            _id: request.params._id,
            name: request.body.name,
            price: request.body.price,
            image: request.body.image,
            qty: request.body.qty,
            info: request.body.info
        }
        let product = new Product(newProduct);
        product = await product.save()
        response.status(200).json({ result: "Product created Successfully", product: product })
    }
    catch (err) {
        console.log(err)
        return response.status(500).json({ message: "message" })
    }

})

/*
Info : Get Single Products
URL : http//8080/api/product/:id
METHOD : GET
Require Fields : No,
*/
router.get("/product/:id", async (request, response) => {

    try {
        let productId = request.params.id;
        console.log(productId)
        let product = await Product.findById(productId);
        if (!product) {
            return response.status(401).json({ message: "Product Not Found" })
        }
        response.status(500).json(product)
    }
    catch (err) {
        console.log(err)
        response.status(200).json({ message: "Something is wrong" })
    }

})

/*
Info : Delete Products
URL : http://localhost:8080/api/product
METHOD : DLETE
Req. Field : No
*/
router.delete('/product/:id', async (request, response) => {
    console.log(request.params.id)
    try {

        let productId = request.params.id;

        let product = await Product.findByIdAndDelete(productId);
        response.status(200).json({ result: `${productId} is deleted successfully` })

    } catch (err) {
        console.error(err)
        response.status(500).json({ message: "Sorry, something wron" })
    }
})

/*
Info : Update Product
URL : http://localhost:8080/api/product
METHOD : PUT
Requre Field : name,image,price, qty,info
*/
router.put('/product/:id', async (request, respone) => {
    console.log(request.params.id);
    try {
        let productId = request.params.id;

        let allProduct = await Product.findOneAndUpdate({ _id: productId }, {
            $set: {
                name: request.body.name,
                price: request.body.price,
                image: request.body.image,
                qty: request.body.qty,
                info: request.body.info
            }
        })

        respone.status(200).json(allProduct);

    } catch (error) {
        console.error(error);
        respone.status(500).json({ Result: "Try again,Something is wrong" })
    }
})

module.exports = router;
