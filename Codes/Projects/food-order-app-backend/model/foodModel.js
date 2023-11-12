const mongoose = require('mongoose');


const foodSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter the food"],
        unique:true
    },
    description:String,
    price:{
        type:Number,
        required:[true,"Please enter the price"]
    }
});


let Food = mongoose.model('foods',foodSchema);


module.exports = Food;