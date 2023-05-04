import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { config } from 'dotenv';
import helmet from 'helmet';
config();

const app = express();

//   routes
import leaguesRoutes from './routes/leagues.routes.js';
import matchesRoutes from './routes/matches.routes.js';
import scorersRoutes from './routes/scorers.routes.js';
import teamsRoutes from './routes/teams.routes.js';
import indexRoutes from './routes/index.routes.js';
import usersRoutes from './routes/users.routes.js';

//   middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended:false }));

app.use('/api/leagues', leaguesRoutes);
app.use('/api/matches', matchesRoutes);
app.use('/api/scorers', scorersRoutes);
app.use('/api/teams', teamsRoutes);
app.use('/api/index', indexRoutes);
app.use('/api/users', usersRoutes)


export default app;