const Proyectos = require('mongoose').model('Proyectos');


 function find(codigo, callback) {

     Proyectos.findOne({'codigo':codigo}, (userErr, user) => {
      if (userErr || !user) {
        //si hay un error o no se encontro en user
        return callback(false);
        //se manda status
      }
      return callback(user);
    });
}

module.exports.find= find;
