const express = require('express');
let router = express.Router();
const Product = require('../model/Product')



router.get("/", (req, res) => {
    res.send("<h1>Testing product Router</h1>")
})

router.post("/product",(req,res)=>{
    console.log(req.body)
    res.send("Test Case 123")

})


module.exports = router;