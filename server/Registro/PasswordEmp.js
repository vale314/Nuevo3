const Empresas = require('mongoose').model('Empresas');
const bcrypt = require('bcryptjs');
function registro(datas, callback){
  Empresas.findById(datas.id, (userErr, user) => {
   if (userErr || !user) {
     return callback(true);
   }

   user.comparePassword(datas.password1, (passwordErr, isMatch) => {
     if(!isMatch){

       return callback(true);
     }

   return callback(false);

 });
});
}

function Cambio(datas,callback){

  // bcrypt.genSalt(10,(saltError, salt) => {
  //   if (saltError) { console.log('error'); return callback(true); }
  //
  //   console.log(datas.password5);
  //   bcrypt.hash(datas.password5, salt, (hashError, hash) => {
  //     if (hashError){ console.log('errorHash'); callback(true);}
  //     NewPassword = hash;
  //
  //         Empresas.update({_id:datas.id},{$set: {'password':NewPassword}},(err,user)=>{
  //               if(err){
  //                 console.log('error en User')
  //                   return(true)
  //             }
  //             callback(false);
  //       });
  //   });
  //});
}


module.exports={
  registro : registro,
  Cambio : Cambio
}
