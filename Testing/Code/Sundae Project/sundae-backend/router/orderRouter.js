const express = require('express');
const {addOrder}  = require('../controller/orderController')

const router = express.Router();

router.post('/addOrder',addOrder);

module.exports = router;