const http = require('http');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const config = require('./config');
const routes = require('./routes');

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

module.exports = app;