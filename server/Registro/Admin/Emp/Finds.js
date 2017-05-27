const jwt = require('jsonwebtoken');
const User = require('mongoose').model('Empresas');

 function find(token, callback) {

     User.findOne({'codigo':token}, (userErr, user) => {
      if (userErr || !user) {
        //si hay un error o no se encontro en user
        return callback (false);
        //se manda status
      }
      return callback(user);
    });
  }


module.exports.find= find;
