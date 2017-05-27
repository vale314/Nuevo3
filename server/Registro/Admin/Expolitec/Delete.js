const Universidades = require('mongoose').model('Universidades');


function deletes(codigo,callback){
  Universidades.find({'codigo':codigo}).remove().exec();
  return callback(true);
}

module.exports={
  deletes:deletes
}
