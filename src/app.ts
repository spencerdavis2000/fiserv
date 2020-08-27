import { Application, NextFunction, Request, Response } from 'express';
import express = require('express');
import bodyParser from 'body-parser';

import routes from './routes';
import { errorCatchAllHandler } from './middleware/errorCatchAllHandler';

const app: Application = express();
app.use(bodyParser.json());

app.use((req: Request, res: Response, next: NextFunction) => {
    res.header('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
    res.header('Server', '');
    res.header('server', '');
    next();
  });

app.use(routes);
app.use(errorCatchAllHandler);
app.disable('x-powered-by');

export default app;