const express = require('express');
const { getTopping } = require('../controller/toppingController');

const router = express.Router();

router.get('/toppings',getTopping);


module.exports = router;