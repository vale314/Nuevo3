const User = require('mongoose').model('User');

function registro(datas, callback){
    let id = datas.id;
    let Respuesta=false;


    User.findByIdAndUpdate(id ,datas, (err, alumnoUpdate) =>{

        if(err) return callback (Respuesta=true);
      return callback(Respuesta=false);
    });

}


module.exports.registro = registro;
