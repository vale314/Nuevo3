const Emp = require('mongoose').model('User');


function Delete(codigo,callback){
  Emp.find({'codigo':codigo}).remove().exec();
  return callback(true);
}

module.exports={
  Delete:Delete
}
