const express = require('express');
const router = express.Router();
const { getPost, searchPost } = require('../controller/postController.js'); 

//api calling
router.get('/', getPost);
router.get('/:name', searchPost);


module.exports = router;
