const express = require('express');
const router = express.Router();

const {getProductWithOrders, addOrders} = require('../controller/loaderController.js');

router.get('/',getProductWithOrders);
router.post('/addOder', addOrders);



module.exports = router;

