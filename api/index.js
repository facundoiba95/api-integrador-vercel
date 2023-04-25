import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { config } from 'dotenv';
config();

//   routes
import leaguesRoutes from './routes/leagues.routes.js';
import matchesRoutes from './routes/matches.routes.js';
import scorersRoutes from './routes/scorers.routes.js';
import teamsRoutes from './routes/teams.routes.js';
import indexRoutes from './routes/index.routes.js';

const app = express();

app.use(cors());
app.use(morgan('dev'));

if(process.env.ENVIROMENT === 'production'){
    app.use(express.json())
    app.use(express.urlencoded({ extended:false }));
}

app.use('/api/leagues', leaguesRoutes);
app.use('/api/matches', matchesRoutes);
app.use('/api/scorers', scorersRoutes);
app.use('/api/teams', teamsRoutes);
app.use('/api/index', indexRoutes);


export default app;