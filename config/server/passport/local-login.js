const jwt = require('jsonwebtoken');
const User = require('mongoose').model('User');
const PassportLocalStrategy = require('passport-local').Strategy;
const config = require('../../config');


//requerimos a jsonwebtoken
//requerimos a mooogose el modelo   User
//manadamos llamara passport-local que sea una strategia




module.exports = new PassportLocalStrategy({
  //exportamos un new PassportLocalStrategy
  usernameField: 'email',
  //le decimos que el campo username es igual al email
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  //tenemos la pet el email el password y done
  const userData = {
    //en la constante userData el email es igual al email sin espacios
    email: email.trim(),
    password: password.trim()
  };

  //despues retornamos al user que en realidad en la base de datos
  //buscamos
  //que el email es igual al email introducido y nos mande unerror y un usuario
  return User.findOne({ email: userData.email }, (err, user) => {
    if (err) { return done(err); }
    //si hauy un error nos retorne un usuario

    if (!user) {
      //si user no tiene nada una constante es igual a un nuevo valor que es igual  a un error que nos manada un mensaje
      const error = new Error('Incorrect email or password');
      error.name = 'IncorrectCredentialsError';
      //el error en el campo name es igual a nombre del error que es  IncorrectCredentialsError

      return done(error);
      //y nos retorna  error con el tipo y msj y el nombre
    }

        // si lo de arriba no se cumplio entonces que retorne esto
        //que en el user comparePassword el compare es la functionq ue creamos en el modelo usuario
        //y creamos un callback que si tenemos un error
        return user.comparePassword(userData.password, (passwordErr, isMatch) => {
          //si hay un error made el error
            if (err) { return done(err); }
            //si no se encontro que se mande que es es diferente la contraseña
            if (!isMatch) {
              const error = new Error('Incorrect email or password');
              error.name = 'IncorrectCredentialsError';
              //se crea una constante error y es igual a un error con el mensaje
              //y error en el nombre en el campo nombre
              return done(error);
            }
            //tenemos una constante llamada payload que es igual a el user manadado en el findOne y el sub ees igual a la id
          const payload = {
            sub: user._id
          };

          //tenemos una constante lalmada token que es igual  a iniciar de jwt le pasamos el payload y de config le mandamos la pal.
          const token = jwt.sign(payload, config.jwtSecret);
          //tenemos una constante data que tiene a nombre del usuario que se encontro por la funcion
          const data = {
          name: user.name
        };
        //retornamos con el done le decimos que fianlizamos en local-login mandamos el token getInternalInstanceReadyForUpdate
        //y el dato que es el nombre del usuario encontrado
      return done(null, token, data);
    });
  });
});
