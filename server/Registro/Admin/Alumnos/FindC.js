const Users = require('mongoose').model('User');

function find(req, callback) {


         Users.find({'carrera': req }, (userErr, user) => {
          if (userErr || !user) {
            //si hay un error o no se encontro en user
            return callback(1);
            //se manda status
          }
          return callback(user);
        });



}

module.exports ={
find:find
}
