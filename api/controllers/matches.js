import { config } from 'dotenv';
// import fetch from 'node-fetch'
config();

const options = {
    method: "GET",
    headers: {
        'X-Auth-Token': process.env.API_KEY_FOOTBALLDATA,
    },
}

const optionsApiArgentina = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.API_KEY_RAPIDAPI,
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
	}
};

export const getMatchesLeagues = async ( req,res ) => {
    try {
          const ID = req.body.idLeague;
         const reqApi = await fetch(`https://api.football-data.org/v4/competitions/${ID}/matches`, options)
         const resApi = [ await reqApi.json() ];

         const matches = resApi[0].matches.map(item => {
           return { ... item, date: item.utcDate.slice(0,10), hour: item.utcDate.slice(11,16) }
         })

         res.status(200).json({matches})
    } catch (error) {
        console.log(error);
        res.json({error})
    }
}

export const getMatchesLeaguesToday = async ( req,res ) => {
    try {
        const ID = req.body.idLeague;
            const connect = await fetch(`https://api.football-data.org/v4/competitions/${ID}/matches`,options)
            const resApi = [ await connect.json() ];

            const date = new Date().toISOString().slice(0,10);
            
            const matches = resApi[0].matches.map(item => {
                const localHour = `${item.utcDate.slice(11,13) - 3}${item.utcDate.slice(13,16)}` 
                return { ... item, date: item.utcDate.slice(0,10), hour: localHour }
            })

            const filterMatchesToday =  matches.filter(match => match.date === date);
            res.status(200).json({filterMatchesToday})
    } catch (error) {
        console.log(error);
        res.json({error})
    }
}

export const getMatchesLeagueArgentina = async ( req,res ) => {
    try {
        const date = new Date().toISOString().slice(0,10);
           const connect = await fetch(`https://api-football-v1.p.rapidapi.com/v3/fixtures?date=${date}&league=128&season=2023`, optionsApiArgentina)
           const resApi = [await connect.json()];
           const matches = resApi[0].response.map(item => {
            const localHour = `${item.fixture.date.slice(11,13) - 3}${item.fixture.date.slice(13,16)}` 
            return { ... item, date: item.fixture.date.slice(0,10), hour: localHour }
           })

           res.status(200).json({matches})
    } catch (error) {
        console.log(error);
        res.json({message: error})
    }
}