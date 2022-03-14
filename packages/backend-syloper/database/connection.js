const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/database')
  .then(db => console.log(`DB connected at ${db.connection.host}`))
  .catch(err => console.error(err));
