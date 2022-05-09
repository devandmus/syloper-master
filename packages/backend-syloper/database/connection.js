const mongoose = require('mongoose');

const MONGODB =
  'mongodb+srv://syloper:syloper@cluster0.y6prh.mongodb.net';
// 'mongodb://localhost/database';

mongoose.connect(MONGODB)
  .then(db => console.log(`DB connected at ${db.connection.host}`))
  .catch(err => console.error(err));
