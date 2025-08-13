const express = require('express');
const router = express.Router();

const { Products } = require('../models');

//get all poducts
router.get('/', async (req, res) => {
    try{
        const productData = await Products.findAll();
        res.json(productData);
    }catch(err){
        res.status(500).json({error : err.message});
    }
})

//add product 
router.post('/', async (req, res)=>{
    try{
        const productData = await Products.create(req.body);
        res.status(201).json(productData);
    }catch(err){
        res.status(500).json({error : err.message});
    }
})

//get by id 
router.get('/:id', async(req, res)=>{
    try{
        const productData = await Products.findByPk(req.params.id);
        if(!productData) return res.status(404).json({message: "Product not found!!"});
        res.json(productData);
    }catch(err){
        res.status(500).json({error : err.message});
    }
})

//update product
router.put('/:id', async(req, res)=>{
    try{
        const [updated] = await Products.update(req.body,{
            where : {id: req.params.id}
        });
        if(!updated) return res.status(404).json({message: "Product not found!"});
        res.json({message:"product updated!!"})
    }catch(err){
        res.status(500).json({error : err.message});
    }
})

//delete product
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Products.destroy({
            where: { id: req.params.id }
        });
        if (!deleted) return res.status(404).json({ message: "Product not found!" });
        res.json({ message: "Product deleted!!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


module.exports = router;

