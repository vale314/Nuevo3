const Admins = require('mongoose').model('Admins');
const bcrypt = require('bcryptjs');
const User = require('mongoose').model('User');
const Empresas = require('mongoose').model('Empresas');

function registro(datas, callback){
  Admins.findById(datas.id, (adminErr, admin) => {
   if (adminErr || !admin) {
     return callback(true);
   }

    if(datas.email == admin.email){
      return callback(false);
    }else{
      return callback(true);
    }

});
}

function Cambio(datas,callback){
      Empresas.findOne({'email':datas.email5},(err,empresa)=>{
        if(err) return callback(true);

        if(empresa != null) return callback(true);

          User.findOne({'email':datas.email5},(err,users)=>{
            if(err) return callback(true);

            if(users != null) return callback(true);

                Admins.update({_id:datas.id},{$set: {'email':datas.email5}},(err,admin)=>{
                      if(err){
                        console.log('error en User')
                          return callback(true)
                        }
                        callback(false);
                });

        });


    });
  };


module.exports={
  registro : registro,
  Cambio : Cambio
}
