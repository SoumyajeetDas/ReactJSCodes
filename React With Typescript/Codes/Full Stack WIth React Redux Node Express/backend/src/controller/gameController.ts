import { Request, Response } from "express";
import Games from "../models/gameModel";


export let getAllGames = async(req:Request,res: Response)=>{

    try{
        const games = await Games.find({});

        return res.status(200).send({
            status:"200 OK",
            data:{
                games
            }
        })
    }
    catch(err:any){
        res.status(500).send({
            status:"500 Internal Server Error",
            error:err.message
        })
    }
}


export let createGame = async(req:Request, res:Response)=>{
    try{
        if(Object.keys(req.body).length === 0){
            return res.status(400).send({
                status:"400 Bad Request",
                message:"No data in the body"
            })
        }

        const game = await Games.create(req.body);

        res.status(201).send({
            status:"201 Created",
            data:{
                game
            }
        });
    }

    catch(err){
       
        res.status(500).send({
            status:"500 Internal Server Error",
            error:err
        })
    }
}