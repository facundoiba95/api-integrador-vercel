import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

//   routes
import leaguesRoutes from './routes/leagues.routes.js';
import matchesRoutes from './routes/matches.routes.js';
import indexRoutes from './routes/index.routes.js';

const app = express();

app.use(cors());
app.use(morgan('dev'));

app.use('/api/leagues', leaguesRoutes);
app.use('/api/matches', matchesRoutes);
app.use('/api/index', indexRoutes);

export default app;