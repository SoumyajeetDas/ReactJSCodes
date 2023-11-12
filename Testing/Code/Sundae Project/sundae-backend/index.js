const express = require('express');
const flavourRouter = require("./router/flavourRouter");
const toppingRouter = require("./router/toppingRouter");
const orderRouter = require("./router/orderRouter");
const cors = require('cors');


const app = express();


app.use(cors({
    origin:"http://localhost:3000",
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
}))

app.use('/api/v1/flavour',flavourRouter);
app.use('/api/v1/topping',toppingRouter);
app.use('/api/v1/order',orderRouter);

app.all('*',(req,res,next)=>{
    res.status(404).send({message:"404 Not Found"})
})

let PORT = 3030;
app.listen(PORT, ()=>{
    console.log("Connected to PORT", PORT);
})
