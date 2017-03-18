const mongoose = require('mongoose');
const fs = require('fs');
const config = require('./config');

// Models - require all Models
// this allows the user of the
// following syntax:
// const User = mongoose.mode('User');
console.log('Loaded Mongoose Models...')
fs.readdirSync(__dirname + '/model')
  .forEach(file => {
    if (file.indexOf('.js') && file.indexOf('.js.map') === -1) {
      require(__dirname + '/model/' + file);
    }
  });
console.log('Finished!');

module.exports = callback => {
  let db = mongoose.connect(config.mongoUrl);
  callback(db);
}