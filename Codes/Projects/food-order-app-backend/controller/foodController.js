const Food = require('../model/foodModel')


exports.getAllFoods = async(req,res,next)=>{

    const foodData = await Food.find();

    try {
        if(foodData.length===0){
            return res.status(400).send({
                status: '400 Bad Request',
                message:"No data"
            })
        }
        res.status(200).send({
            status: '200 OK',
            length: foodData.length,
            data: {
                foods:foodData
            }
        });
    }
    catch(err){
        res.status(500).send({
            status: '500 Internal Server Error',
            message:err.message
        })
    }
}