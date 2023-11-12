const mongoose = require('mongoose');


const checkOutSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter the name"]
    },
    street: {
        type: String,
        required: [true, "Please enter the street"]
    },
    postalCode: {
        type: Number,
        validate:{
            validator:function(val){
                return val.toString().length===5
            },
            message: "Please enter the postal code of length 5"
        }
    },
    city: {
        type: String,
        required: [true, "Please enter the city"]
    },
    orders: {

        type: [
            {
                id: {
                    type:String,
                    required: [true, "Please enter the id"]
                },
                name: {
                    type:String,
                    required: [true, "Please enter the food name"]
                },
                amount: {
                    type:Number,
                    required: [true, "Please enter the amount"]
                },
                price: {
                    type:Number,
                    required: [true, "Please enter the price"]
                },
            }
        ],

        validate: {
            validator: function (val) {
                return Array.isArray(val) && val.length > 0
            },
            message: "Please enter the orders properly"
        }
    },
    


});

const CheckOut = mongoose.model('checkOut', checkOutSchema);

module.exports = CheckOut;