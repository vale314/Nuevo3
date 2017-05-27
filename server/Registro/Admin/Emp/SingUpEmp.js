const Universidad = require('mongoose').model('Universidades');
const Users = require('mongoose').model('User');
const Admins = require('mongoose').model('Admins');
const Proyectos = require('mongoose').model('Proyectos');

const Empresas = require('mongoose').model('Empresas')
function registro(cuerpo,callback){
  const userData = {
    email: cuerpo.body.email,
    password: cuerpo.body.password,
    name: cuerpo.body.name,
    codigo: cuerpo.body.codigo
  };



  Users.findOne({'email':userData.email},(err,user)=>{
    if (err){
      return callback(err);
    }
    var error={};
    error.name = 'MongoError';
    error.code = 11000
    if(user) return callback(error);

    Admins.findOne({'email':userData.email},(err,user)=>{
      if (err)  return callback(err);

      if(user) return callback(error);
        if(!user){
                  Universidad.findOne({'email':userData.email},(err,user)=>{
                    if (err) return callback(err);

                    var e={};
                    e.name = 'MongoError';
                    e.code = 11000
                    if(user) return callback(e)

                    if(!user){
                      Proyectos.findOne({'email':userData.email},(err,user)=>{
                        if (err) return callback(err);


                        e={};
                        e.name = 'MongoError';
                        e.code = 11000
                        if(user) return callback(e)

                        if(!user){
                          Empresas.findOne({'codigo':userData.codigo},(err,user)=>{
                              if(err) return callback(err);

                              e={};
                              e.codigo = 'MongoError';
                              e.code = 11000
                              if(user) return callback(e);

                              const newUser = new Empresas(userData);
                              newUser.save((err) => {
                                if (err) { return callback(err); }
                                //si hay un error se encuentar un error se manda
                                //si no solamenete se manda done para finalizar el  local y null
                                //xd
                              return callback (null);
                            });
                          });
                        }
                      });
                    }
                  });
              }
          });
    });

}

module.exports={
  registro:registro
}
