const mongoose = require('mongoose');
const config = require('./settings');
const uri = `mongodb+srv://${config.USER}:${config.PASSWORD}@${config.CLUSTER}.hdjsg.mongodb.net/${config.DATABASE}?retryWrites=true&w=majority`
//console.log("URI: "+ uri);
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conectado a la base de datos')
  })
  .catch((e) => {
    console.log(`ERROR DB: ${e}`)
  });