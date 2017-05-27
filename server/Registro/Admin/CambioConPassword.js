const Admins = require('mongoose').model('Admins');
const bcrypt = require('bcryptjs');
function registro(datas, callback){
  
  Admins.findById(datas.id, (userErr, user) => {
   if (userErr || !user) {
     return callback(1);
   }

   user.comparePassword(datas.password1, (passwordErr, isMatch) => {
     if(!isMatch){

       return callback(3);
     }

   return callback(false);

 });
});
}

function Cambio(datas,callback){

  bcrypt.genSalt(10,(saltError, salt) => {
    if (saltError) { console.log('error'); return callback(true); }

    console.log(datas.password5);
    bcrypt.hash(datas.password5, salt, (hashError, hash) => {
      if (hashError){ console.log('errorHash'); callback(true);}
      var NewPassword=hash;

          Admins.update({_id:datas.id},{$set: {'password':NewPassword}},(err,user)=>{
                if(err){
                  console.log('error en User')
                    return(true)
              }
              callback(false);
        });
    });
  });
}


module.exports={
  registro:registro,
  Cambio:Cambio
}
