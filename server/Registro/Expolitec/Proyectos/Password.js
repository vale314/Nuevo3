const Proyectos = require('mongoose').model('Proyectos');
const bcrypt = require('bcryptjs');
const Desencrypt = require('./find');

function registro(datas, callback){
  Desencrypt.find(datas[0], (response) => {
   if (response == false) {
     return callback(false);
   }
   console.log(datas[1].password1)
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

          Proyectos.update({_id:datas[1]},{$set: {'password':NewPassword}},(err,user)=>{
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
