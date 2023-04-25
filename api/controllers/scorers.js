import { options, optionsApiArgentina } from "./libs.js";

export const getScorersByLeagues = async ( req,res ) => {
    try {
        const reqApi = await fetch(`https://api.football-data.org/v4/competitions/FL1/scorers`, options)
        const resApi = await reqApi.json();
        res.status(200).json(resApi)
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}

export const getScorersByLeagueArgentina = async ( req,res ) => {
    try {
        const reqApi = await fetch('https://api-football-v1.p.rapidapi.com/v3/players/topscorers?league=128&season=2023', optionsApiArgentina);
        const resApi = await reqApi.json();
        res.status(200).json(resApi);
    } catch (error) {
        console.log(error);
        res.status(400).json({error});
    }   
}
