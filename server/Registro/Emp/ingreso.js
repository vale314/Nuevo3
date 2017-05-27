const User = require('mongoose').model('Empresas');
const bcrypt = require('bcryptjs');
function registro(datas, callback){
    let id = datas.id;

    let Respuesta=false;
    User.findByIdAndUpdate(id ,datas, (err, alumnoUpdate) =>{

        if(err) return callback (Respuesta=true);

       return callback(Respuesta=false);
    });
    if(datas.password){
      bcrypt.genSalt(10,(saltError, salt) => {
        if (saltError) { console.log('error'); return callback(true); }


        bcrypt.hash(datas.password, salt, (hashError, hash) => {
          if (hashError){ console.log('errorHash'); return callback(true);}
          var NewPassword=hash;

              User.update({_id:datas.id},{$set: {'password':NewPassword}},(err,user)=>{
                    if(err){
                      console.log('error en User')
                        return callback(true)
                  }
                  return callback(false);
            });
        });
      });
    }
}


module.exports.registro = registro;
