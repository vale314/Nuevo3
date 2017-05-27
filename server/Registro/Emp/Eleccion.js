const User = require('mongoose').model('Empresas');
const res = require('./Extra/res');

function eleccion(a,callback){
  const ids = a[0];
  const bod = a[1];
  //console.log(bod);
  var str = res.res(bod);

  User.update({_id:ids},{$set: {'carreras': str  }}, (err,user)=>{
    if(err){
      console.log(err);
    }
    //console.log(user)
    return callback(1);
  })
}


module.exports.eleccion = eleccion;
