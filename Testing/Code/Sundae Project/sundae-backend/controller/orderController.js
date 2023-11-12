exports.addOrder = async(req,res)=>{

    try{
        const orderNumber = Math.floor(Math.random() * 10000000000);
    
        res.status(201).send({
            status:"201 Created",
            orderNumber
        })
    }
    catch(err){
        res.status(500).send({
            status:"500 Internal Server Error",
            error:err
        })
    }
}