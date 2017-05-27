const User = require('mongoose').model('User');
const PassportLocalStrategy = require('passport-local').Strategy;
const Universidad = require('mongoose').model('Universidades');
const Users = require('mongoose').model('User');
const Lista = require('mongoose').model('Codigos');
const Admins = require('mongoose').model('Admins');
const Proyectos = require('mongoose').model('Proyectos');

const Empresas = require('mongoose').model('Empresas')
//llammaos a user ademas el modelo User
module.exports = new PassportLocalStrategy({
  //solamente son los parametros que se van ha recibir
  //esportamos los siguientes modulos creamos un new PassportLocalStrategy
  usernameField: 'email',
  //el campo username es igual a un email
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  //llamammos a un callback
  //y
  //teemos una constante llamada userData que que guarada el email pasdo perosin espacios
  //y lo mismo hace con el password
  //y tenemos que lo mismo hace con el nombre
  const userData = {
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    codigo: req.body.codigo
  };



  Proyectos.findOne({'email':userData.email},(err,user)=>{
    if (err)  return done(err);

    var error={};
    error.name = 'MongoError';
    error.code = 11000
    if(user) return done(error);

    Admins.findOne({'email':userData.email},(err,user)=>{
      if (err) return done(err);

      var e={};
      e.name = 'MongoError';
      e.code = 11000
      if(user) return done(e);
        if(!user){
          Lista.findOne({'codigo':userData.codigo},(err,user)=>{
            if (err)  return done(err);

          if(!user) return done(213);

            Universidad.findOne({'email':userData.email},(err,user)=>{
                if(err)  return done(err);

                e={};
                e.name = 'MongoError';
                e.code = 11000
                if(user) return done(e);
                if(!user){
                    Empresas.findOne({'email':userData.email},(err,user)=>{
                      if(err)  return done(err);

                      e={};
                      e.name = 'MongoError';
                      e.code = 11000
                      if(user)return done(e);

                      if(!user){
                            Users.findOne({'codigo':userData.codigo},(err,user)=>{
                              if(err)  return done(err)

                              e={};
                              e.codigo = 'MongoError';
                              e.code = 11000
                              if(user)  return done(e)


                              const newUser = new Users(userData);
                              newUser.save((err) => {
                                if (err) {return done(err); }
                                //si hay un error se encuentar un error se manda
                                //si no solamenete se manda done para finalizar el  local y null
                                //xd
                              return done (null);
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






  });
