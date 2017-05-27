const jwt = require('jsonwebtoken');
const User = require('mongoose').model('Empresas');

 function find(body, callback) {

      if(body.codigo){
         User.findOne({'codigo':body.codigo}, (userErr, user) => {
          if (userErr || !user) {
            //si hay un error o no se encontro en user
            return callback (false);
            //se manda status
          }
          return callback(user);
        });
      }else{
              if(body.name){
                  User.findOne({'name':body.name}, (userErr, user) => {
                     if (userErr || !user) {
                       //si hay un error o no se encontro en user
                       return callback (false);
                       //se manda status
                     }
                     return callback(user);
                   });
              }else{
                      if(body.email){
                          User.findOne({'email':body.email}, (userErr, user) => {
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
