const { flavours } = require("../utils/flavoursData");

exports.getFlavours = (req,res,next)=>{

    try{

        res.status(200).send({
            status:"200 OK",
            data:flavours
        })
    }
    catch(err){
        res.status(500).send({
            status:"500 Internal Server Error",
            error:err
        })
    }
}