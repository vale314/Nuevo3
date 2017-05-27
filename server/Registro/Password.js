const User = require('mongoose').model('User');
const bcrypt = require('bcryptjs');
function registro(datas, callback){
  User.findById(datas.id, (userErr, user) => {
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

  bcrypt.genSalt(10,(saltError, salt) => {
    if (saltError) { console.log('error'); return callback(true); }


    bcrypt.hash(datas.password5, salt, (hashError, hash) => {
      if (hashError){ console.log('errorHash');return callback(true);}
      var NewPassword=hash;

          User.update({_id:datas.id},{$set: {'password':NewPassword}},(err,user)=>{
                if(err){
                  console.log('error en User')
                    return callback(true)
              }
              return  callback(false);
        });
    });
  });
}


module.exports={
  registro : registro,
  Cambio : Cambio
}
