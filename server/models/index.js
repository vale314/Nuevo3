const mongoose = require('mongoose');

//tenemos un modulo que exportamos recibe a uri que es donde esta la base de datos
module.exports.connect = (uri) => {
  mongoose.connect(uri).connection;
  // plomesas
  mongoose.Promise = global.Promise;


  mongoose.connection.on('error', (err) => {
    console.error(`Mongoose connection error: ${err}`);
    process.exit(1);
  });
  // load models
  require('./user');
  require('./empresas');
  require('./admin');
  require('./codigos')
  require('./hours')
  require('./CodeByUniversidades')
  require('./Universidades')
  require('./proyectos')
  require('./codeByProyectos')
  require('./HorariosExpol')
  require('./Extra')
};
