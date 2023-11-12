import express, { Request, Response } from "express";
import GameRouter from './routes/gameRoute';
import cors from 'cors'


const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'] // This will allow CORS to be effective for all the route methods otherwise
    // by default only for GET
}));


app.use("/api/v1/gaming", GameRouter);


app.all("*", (req: Request, res: Response) => {
    res.status(404).send({
        status: "404 Not Found",
        message: "URL not found " + req.baseUrl
    })
})

export default app;

