const Horas = require('mongoose').model('Hours');

function remove(callback){
  Horas.remove({},(err)=>{
    if(!err) return callback()

    else return callback(3)
  })
}

module.exports={
  removes:remove
}
