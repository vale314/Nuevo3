const jwt = require('jsonwebtoken');
const Universidad = require('mongoose').model('Universidades');
const config = require('../../../config');

 function find(token, callback) {
  return jwt.verify(token, config.jwtSecret, (err, decoded) => {
    // the 401 code is for unauthorized status
    if (err) { return callback(false); }
    //tenemos la constante userId esd igual en el decoded en el atributo sub que es el id del user
    const userId = decoded.sub;

    // cheacmos si existe el usuario en el schema  lo buscamos pos su id  le mandamos el userId donde tenemos el unicoId
    //si hay un error madamos un errro
    //si se encuentra el user se manada en user
     Universidad.findById(userId, (userErr, user) => {
      if (userErr || !user) {
        //si hay un error o no se encontro en user
        return callback(false)
        //se manda status
      }
      return callback(user);
    });
  });
}

module.exports.find= find;
