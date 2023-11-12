import express from 'express';
import { createGame, getAllGames } from '../controller/gameController';

const router = express.Router();



router.use(express.json());


router
.get("/",getAllGames)
.post("/addGame",createGame);

export default router;
