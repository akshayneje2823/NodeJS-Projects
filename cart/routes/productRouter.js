const express = require('express');

let router = express.Router()


router.get("/", (req, res) => {
    res.send("<h1>Testing product Router</h1>")
})


// API Decelopement

/*





*/










router.get('/api/products',(req,res)=>{
    res.send('<h1>This IS API</h1>')
})

module.exports = router;