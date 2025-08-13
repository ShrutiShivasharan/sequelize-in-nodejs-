const { Post } = require("../models");
const { Op } = require('sequelize');

//get post 
const getPost = async (req, res)=>{
    try{
        const postData = await Post.findAll();
        res.json(postData);
    }catch(err){
        res.status(500).json({error: err.message});
    }
}

//search by post name
const searchPost = async (req, res) => {
    try{
        const postName = req.params.name
        const postData = await Post.findAll({
            where : postName ? {name : { [Op.like]: `%${postName}%` }} : {}
        });
        res.json(postData);
    }catch(err){
        res.status(500).json({error: err.message});
    }
}


module.exports = { getPost ,searchPost};