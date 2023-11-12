const express = require('express');
const foodController = require('../controller/foodController')
const checkOutController = require('../controller/checkOutController')
const orderController = require('../controller/orderController')


const router = express.Router();

router.use(express.json());

router.get("/",foodController.getAllFoods);

router
.post("/checkOut",checkOutController.addCheckOut)


router
.route("/ordercart")
.get(orderController.getOrder)
.post(orderController.addOrder)
.put(orderController.updateOrder)


module.exports=router;