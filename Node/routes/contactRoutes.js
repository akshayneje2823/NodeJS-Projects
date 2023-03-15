const express = require('express');
const router = express.Router()


router.route('/').get((req,res) => {
    res.status(200).json({message : "Hey it worked..."})
});

router.route('/').post((req,res) => {
    res.status(200).json({message : "Contact created successfully"})
})


router.route('/:id').put((req,res) => {
    res.status(200).json({message : "Get Contact for " +   req.params.id })
})

router.route('/:id').get((req,res) => {
    res.status(200).json({message :  req.params.id + " Updated Successfully"})
})

router.route('/:id').delete((req,res) => {
    res.status(200).json({message : req.params.id + " Deleted Successfully"})
})

module.exports = router


