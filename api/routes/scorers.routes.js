import { Router } from "express";
import { getScorersByLeagueArgentina, getScorersByLeagues } from "../controllers/scorers.js";

const router = Router();

router.get('/getScorersByLeagues', getScorersByLeagues);
router.get('/getScorersByLeagueArgentina', getScorersByLeagueArgentina )

export default router;