const mongoose = require('mongoose');
const uri = `mongodb+srv://aplicacion:jMIrkT9ZnIsCaspD@gestionproyectos.hdjsg.mongodb.net/SSP_DB?retryWrites=true&w=majority`
//console.log("URI: "+ uri);
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conectado a la base de datos')
  })
  .catch((e) => {
    console.log(`ERROR DB: ${e}`)
  });