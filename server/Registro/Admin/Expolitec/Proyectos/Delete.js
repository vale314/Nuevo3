const Proyectos = require('mongoose').model('Proyectos');


function deletes(codigo,callback){
  Proyectos.find({'codigo':codigo}).remove().exec();
  return callback(true);
}

module.exports={
  deletes:deletes
}
