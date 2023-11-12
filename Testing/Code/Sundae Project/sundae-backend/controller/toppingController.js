const { toppings } = require("../utils/toppings")

exports.getTopping = (req,res,next)=>{
    try{
        res.status(200).send({
            status:"200 OK",
            data:toppings
        })
    }
    catch(err){
        res.status(500).send({
            status:"500 Internal Server Error",
            error:err
        })
    }
}