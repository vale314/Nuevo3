const User = require('mongoose').model('Proyectos');
const bcrypt = require('bcryptjs');
const Finds = require('./Finds/find')
function registro(datas, callback){




Finds.find(datas[0],(response)=>{
  const data = datas[1];


  var dat = response.carreras;



  dat=dat.slice(0,response.tamaño);

  const resta = 5-response.carreras.length

  for(var i=0;i<=resta;i++){
      dat.push({carrera:'null',sexo:'null',  codigo:null,name:'',numero:null,});
  }



  User.findByIdAndUpdate(response.id ,data, (err, alumnoUpdate) =>{

    if(err) return callback (true);

  User.update({_id:response.id} ,{$set:{'carreras':dat}}, (err, alumnoUpdate) =>{

        if(err) return callback (true);


       return callback(false);

  });
  });
});
}



module.exports.registro = registro;
