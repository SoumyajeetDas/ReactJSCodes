const Order = require('../model/orderModel')


exports.getOrder = async (req, res, next) => {
    const orderData = await Order.find();

    try {
        if (orderData.length === 0) {
            return res.status(400).send({
                status: '400 Bad Request',
                message: "No data"
            })
        }
        res.status(200).send({
            status: '200 OK',
            length: orderData.length,
            orders: orderData
        });
    }

    catch (err) {
        res.status(500).send({
            status: '500 Internal Server Error',
            message: err.message
        })
    }

}



exports.addOrder = async (req, res, next) => {
    try {
        if (req.body === undefined) {
            return res.status(400).send({
                status: "400 Bad Request",
                message: "No Data"
            })
        }

        const data = req.body;

        const newOrder = await Order.create(data);

        // res.status(201).send({
        //     message: "Order Saved in Cart",
        //     newOrder
        // })
    }

    catch (ex) {
        res.status(500).send({
            status: "500 Internal Server Error",
            message: ex.message
        })
    }
}



exports.updateOrder = async (req, res, next) => {
    try {
        if (req.body === undefined) {
            return res.status(400).send({
                status: "400 Bad Request",
                message: "No Data"
            })
        }

        const id = await Order.find();


        const result = await Order.updateOne({ _id: id[0]._id.toString() }, { $set: req.body }, { runValidators: true });


        if (result.acknowledged && result.modifiedCount > 0) {
            res.status(200).send({
                status: "200 OK",
                message: "Data Got Updated"
            })
        }
        else {
            res.status(400).send({
                status: "400 Bad Request",
                message: "Data Not got Updated as there is nothing new in the data"
            })
        }
    }
    catch (ex) {
        res.status(500).send({
            status: "500 Internal Server Error",
            message: "Problem with the server"
        })
    }
}

