import http from 'http';
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import config from './config';
import routes from './routes';

let app = express();
app.server = http.createServer(app);

/**************
 * Middleware *
 **************/
// Morgan
app.use(morgan('combined'));

// Parse Application/JSON
app.use(bodyParser.json({
  limit: config.bodyLimit
}));

// Cross Origin Resource Sharing
app.use(cors());

// Passport config

// API Routes v1
app.use('/v1', routes);

app.server.listen(config.port);
console.log(`Started on port ${app.server.address().port}`);

export default app;