import express, { Express, Request, Response } from 'express';
import cors from 'cors'

import acl from './utils/acl';
import routes from './routes';

const app: Express = express();
const port: string|number = process.env.PORT || 8081;

const corsOptions = {
    credentials: true,
    origin: [],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

app.use(
    express.urlencoded({
      limit: '50mb',
      extended: true
    })
  );
app.use(express.json());

/**
 * Middleware
 * Auth Check
 * 
 * Routes
 * 1. Auth route (Basic Auth)
 * 2. Events route
 * 3. Models route
 * 4. Schema route
 */
app.get('/', (req, res) => res.json({ message: 'Welcome to Zapier Docnsdata API' }));
app.use(acl())
app.use('/v1/', routes);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});