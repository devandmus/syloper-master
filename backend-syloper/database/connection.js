const mongoose = require('mongoose');
const init = require('./data/init');

mongoose.connect('mongodb://mongo/database')
  .then(db => console.log(`DB connected at ${db.connection.host}`))
  .then(() => init())
  .catch(err => console.error(err));
