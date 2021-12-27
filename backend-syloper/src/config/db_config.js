const mongoose = require('mongoose');
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@${process.env.CLUSTER}.hdjsg.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`
//console.log("URI: "+ uri);
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conectado a la base de datos')
  })
  .catch((e) => {
    console.log(`ERROR DB: ${e}`)
  });