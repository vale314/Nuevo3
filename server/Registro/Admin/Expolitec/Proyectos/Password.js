const Proyectos = require('mongoose').model('Proyectos');
const bcrypt = require('bcryptjs');
function New(array,callback){
  const codigo= array[0];
  const password=array[1];
  bcrypt.genSalt(10,(saltError, salt) => {
    if (saltError) { console.log('error'); return callback(false); }


    bcrypt.hash(password, salt, (hashError, hash) => {
      if (hashError){ console.log('errorHash');return callback(false);}
      var NewPassword=hash;

          Proyectos.update({'codigo':codigo},{$set: {'password':NewPassword}},(err,user)=>{
                if(err){
                  console.log('error en User')
                    return callback(false)
              }
              return  callback(true);
        });
    });
  });
}

module.exports={
    New:New
}
