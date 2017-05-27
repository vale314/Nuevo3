const jwt = require('jsonwebtoken');
const Proyectos = require('mongoose').model('Proyectos');

 function find(body, callback) {

      if(body.codigo){
         Proyectos.findOne({'codigo':body.codigo}, (userErr, user) => {
          if (userErr || !user) {
            //si hay un error o no se encontro en user
            return callback (false);
            //se manda status
          }
          return callback(user);
        });
      }else{
              if(body.name){
                  Proyectos.findOne({'name':body.name}, (userErr, user) => {
                     if (userErr || !user) {
                       //si hay un error o no se encontro en user
                       return callback (false);
                       //se manda status
                     }
                     return callback(user);
                   });
              }else{
                      if(body.email){
                          Proyectos.findOne({'email':body.email}, (userErr, user) => {
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
