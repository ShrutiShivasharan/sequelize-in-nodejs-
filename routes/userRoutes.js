const express = require('express');
const router = express.Router();
const { getUser, addUser } = require("../controller/userController.js");

//api calling
router.get('/', getUser);
router.post('/',addUser);



module.exports = router;
