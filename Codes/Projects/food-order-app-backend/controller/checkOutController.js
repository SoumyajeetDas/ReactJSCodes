const CheckOut = require('../model/checkOutModel');


exports.addCheckOut = async (req,res,next)=>{
    try{

        if(req.body===undefined){
            return res.status(400).send({
                message:"400 Bad Request"
            })
        }

        const checkOut = {
            name:req.body.name,
            street:req.body.street,
            postalCode:req.body.postalCode,
            city:req.body.city,
            orders:req.body.orders
        }

        const newCheckOut = await CheckOut.create(checkOut);

        res.status(201).send({
            message:"Order Done",
            checkOutData : newCheckOut
        })
    }
    catch(ex){
        res.status(500).send({
            status:"500 Internal Server Error",
            message:ex.message
        })
    }
}