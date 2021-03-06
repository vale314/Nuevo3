const Universidades = require('mongoose').model('Universidades');
const bcrypt = require('bcryptjs');
const Desencrypt = require('./Token');

function registro(datas, callback){
  Desencrypt.find(datas[0], (response) => {
   if (response == false) {
     return callback(false);
   }

   response.comparePassword(datas[1].password1, (passwordErr, isMatch) => {
     if(!isMatch){

       return callback(false);
     }

   Cambio([datas[1].password5,response._id],(response)=>{
     if(response == false) return callback(false)
     return callback()
   })

 });
});
}

function Cambio(datas,callback){

  bcrypt.genSalt(10,(saltError, salt) => {
    if (saltError) { console.log('error'); return callback(true); }

    bcrypt.hash(datas[0], salt, (hashError, hash) => {
      if (hashError){ console.log('errorHash'); callback(true);}
      var NewPassword=hash;

          Universidades.update({_id:datas[1]},{$set: {'password':NewPassword}},(err,user)=>{
                if(err){
                  console.log('error en User')
                    return callback(false)
              }
              return callback();
        });
    });
  });
}


module.exports={
  registro : registro
}
