const User = require('mongoose').model('Proyectos');
const bcrypt = require('bcryptjs');
const Finds = require('./Finds/find')
function registro(datas, callback){




Finds.find(datas[0],(response)=>{

  var dat = datas[1].carreras;

  dat=JSON.parse(dat);



  dat=dat.slice(0,response.tamaño);



  User.update({_id:response.id} ,{$set:{'carreras':dat}}, (err, alumnoUpdate) =>{

        if(err){

          return callback (true);
        }

       return callback(false);
    });

})
}



module.exports.registro = registro;
