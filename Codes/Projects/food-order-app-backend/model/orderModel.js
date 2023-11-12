const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    
    items:{
        type:[mongoose.SchemaTypes.Mixed]
    },
    totalPrice:Number
});

let Order = mongoose.model('orders',orderSchema);

module.exports = Order;