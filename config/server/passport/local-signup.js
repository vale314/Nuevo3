const User = require('mongoose').model('User');
const PassportLocalStrategy = require('passport-local').Strategy;


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
      email: email.trim(),
      password: password.trim(),
      name: req.body.name.trim()
    };


    const newUser = new User(userData);
    //tenemos una constante new User que es igual un nuevo user de la base y se le manada los datos registrados
    //se guaradan los datos con save
    //si hay algun error se mada a ese callback
    newUser.save((err) => {
      if (err) { return done(err); }
      //si hay un error se encuentar un error se manda
      //si no solamenete se manda done para finalizar el  local y null
      //xd
    return done(null);
    });
  });
