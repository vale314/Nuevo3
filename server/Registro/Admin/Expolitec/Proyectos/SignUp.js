const Universidad = require('mongoose').model('Universidades');
const Users = require('mongoose').model('User');
const Lista = require('mongoose').model('CodeProyectos');
const Admins = require('mongoose').model('Admins');
const Proyectos = require('mongoose').model('Proyectos');

const Empresas = require('mongoose').model('Empresas');
function registro(cuerpo,callback){
  const userData = {
    email: cuerpo.body.email,
    password: cuerpo.body.password,
    name: cuerpo.body.name,
    codigo: cuerpo.body.codigo
  };



  Users.findOne({'email':userData.email},(err,user)=>{
    if (err)  return callback(err=true);

    var error={};
    error.name = 'MongoError';
    error.code = 11000
    if(user) return callback(error);

    Admins.findOne({'email':userData.email},(err,user)=>{
      if (err) return callback(err=true);

      var e={};
      e.name = 'MongoError';
      e.code = 11000
      if(user) return callback(e);
        if(!user){
          Lista.findOne({'codigo':userData.codigo},(err,user)=>{
            if (err)  return callback(err=true);

          var errs1={lista:11001};
          if(!user) return callback(errs1);

            Universidad.findOne({'email':userData.email},(err,user)=>{
                if(err)  return callback(err=true);

                e={};
                e.name = 'MongoError';
                e.code = 11000
                if(user) return callback(e);
                if(!user){
                    Empresas.findOne({'email':userData.email},(err,user)=>{
                      if(err)  return callback(err=true);

                      e={};
                      e.name = 'MongoError';
                      e.code = 11000
                      if(user)return callback(e);

                      if(!user){
                            Proyectos.findOne({'codigo':userData.codigo},(err,user)=>{
                              if(err)  return callback(err)

                              e={};
                              e.codigo = 'MongoError';
                              e.code = 11000
                              if(user)  return callback(e)


                              const newUser = new Proyectos(userData);
                              newUser.save((err) => {
                                if (err) {return callback(err); }
                                //si hay un error se encuentar un error se manda
                                //si no solamenete se manda done para finalizar el  local y null
                                //xd
                              return callback (null);
                            })
                          });
                    }
                  })
              }
            });
         });
        }
      })
  })

}

module.exports={
  registro:registro
}
