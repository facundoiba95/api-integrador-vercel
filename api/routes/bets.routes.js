import { Router } from "express";
import { getBets, sendBet } from "../controllers/bets.controller.js";
import { verifyToken } from "../libs/AuthJwt.js";

const router = Router();

router.post('/sendBet', [ verifyToken ], sendBet);
router.get('/getBets', getBets);

export default router;