const Expol = require('mongoose').model('HoursExpol');

function registro(dia,callback){
      Expol.findOne({'name':dia},(UserErr,User)=>{
        if(UserErr) return callback(1);
        if(!User) return callback(3);
        if(User) return callback(User)
      })

}

module.exports={
  registro:registro
}
