import { config } from "dotenv"
config();

export const options = {
    method: "GET",
    headers: {
        'X-Auth-Token': process.env.API_KEY_FOOTBALLDATA,
    },
}

export const optionsApiArgentina = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.API_KEY_RAPIDAPI,
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
	}
};