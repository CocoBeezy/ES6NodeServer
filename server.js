const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// DB Setup
mongoose.connect('mongodb://localhost:27017/node-server-setup');

// App Setup
app.use(morgan('combined'));
app.use(bodyParser.json({type: '*/*'}));
app.use(cors());

// Router Reference
router(app);

// Server Setup
const port = process.env.PORT2 || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
