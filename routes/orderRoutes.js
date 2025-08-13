const express = require('express');
const router = express.Router();

const { Orders } = require('../models');

//get all orders
router.get('/', async (req, res) => {
    try{
        const orderData = await Orders.findAll();
        res.json(orderData);
    }catch(err){
        res.status(500).json({error : err.message});
    }
})

//add orders 
router.post('/', async (req, res)=>{
    try{
        const orderData = await Orders.create(req.body);
        res.status(201).json(orderData);
    }catch(err){
        res.status(500).json({error : err.message});
    }
})


module.exports = router;

