const jwt = require('jsonwebtoken');
const Universidades = require('mongoose').model('Universidades');

 function find(body, callback) {

      if(body.codigo){
         Universidades.findOne({'codigo':body.codigo}, (userErr, user) => {
          if (userErr || !user) {
            //si hay un error o no se encontro en user
            return callback (false);
            //se manda status
          }
          return callback(user);
        });
      }else{
              if(body.name){
                  Universidades.findOne({'name':body.name}, (userErr, user) => {
                     if (userErr || !user) {
                       //si hay un error o no se encontro en user
                       return callback (false);
                       //se manda status
                     }
                     return callback(user);
                   });
              }else{
                      if(body.email){
                          Universidades.findOne({'email':body.email}, (userErr, user) => {
                             if (userErr || !user) {
                               //si hay un error o no se encontro en user
                               return callback (false);
                               //se manda status
                             }
                             return callback(user);
                           });
                        }else{
                              return callback(false);
                        }
                    }
            }

  }


module.exports.find= find;
