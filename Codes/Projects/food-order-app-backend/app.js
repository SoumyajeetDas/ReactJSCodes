const express = require('express');
const appRouter = require('./router/appRouter');
const cors = require('cors')


const app = express();

app.use(cors({
    origin:"http://localhost:3000",
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

app.use("/api/v1/food", appRouter);

app.all("*", (req, res) => {
    res.status(404).send({
        status: "404 Error",
        message: "Url not present"
    })
})


module.exports = app;