const express = require('express');
const config = require('../config');
const middleware = require('../middleware');
const initializeDb = require('../db');
const user = require('../controller/user');

let router = express();

// Connec to db
initializeDb(db => {

  // Internal Middleware
  router.use(middleware({ config, db }));

  // API routes v1 (/v1)
  router.use('/user', user({ config, db }));
});

module.exports = router;