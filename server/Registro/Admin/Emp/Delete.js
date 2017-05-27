const Emp = require('mongoose').model('Empresas');


function Delete(codigo,callback){
  Emp.find({'codigo':codigo}).remove().exec();
  callback(true);
}

module.exports={
  Delete:Delete
}
