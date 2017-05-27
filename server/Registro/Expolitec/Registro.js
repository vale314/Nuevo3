const Universidades = require('mongoose').model('Universidades');
const token = require('./Token');


function registro(user , callback){
  console.log(user)
  token.find(user[0],(response)=>{
    if(!response) return callback(false);
    Universidades.findByIdAndUpdate(response._id, user[1], (err, Uni)=>{
      if(err) return callback(err);
      return callback();
    })
  })
}

module.exports={
  registro:registro
}
