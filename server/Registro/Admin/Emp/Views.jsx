const Empresas = require('mongoose').model('Empresas');

function find(req, callback) {


   // cheacmos si existe el usuario en el schema  lo buscamos pos su id  le mandamos el userId donde tenemos el unicoId
   //si hay un error madamos un errro
   //si se encuentra el user se manada en user
    Empresas.find({}, (userErr, user) => {
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
