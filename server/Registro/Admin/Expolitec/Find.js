const jwt = require('jsonwebtoken');
const Universidades = require('mongoose').model('Universidades');

 function find(token, callback) {

     Universidades.findOne({'codigo':token}, (userErr, user) => {
      if (userErr || !user) {
        //si hay un error o no se encontro en user
        return callback (false);
        //se manda status
      }
      return callback(user);
    });
  }


module.exports.find= find;
