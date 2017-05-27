const mongoose = require('mongoose');

const Userd = new mongoose.Schema({
  email:{
      type: String,
    },
  codigo:{
      type: Number,
    },
  password:{type:String},
  name:{type:String, default: ''},
  grado:{type:String, default: 8},
  carrera:{type:String, default:''},
  turno:{type:String, default:''},
  grupo:{type:String, default: ''},
  turno:{type:String, default: ''},
  domicilio:{type:String, default: ''},
  domNU:{type:Number, default:null},
  colonia:{type:String, default: ''},
  cp:{type:Number, default:null},
  padre:{type:String, default: ''},
  madre:{type:String, default: ''},
  telPadre:{type:Number, default:null},
  telMadre:{type:Number, default:null},
  municipio:{type:String, default: ''},
  estado:{type:String, default: ''},
  telefono:{type:Number, default:null},
  celular:{type:Number, default:null},
  telEmergencia:{type:Number, default:null},
  nss:{type:Number, default:null},
  sexo:{type:String,default:''},
  edad:{type:Number, default:null},
  nacionalidad:{type:String, default: ''},
  codeEmp:{type:String, default:''},
  empresa:{type:String, default:''},
  calificacion:{type:Number,default:null},
});


//exportamos un modelo llamado user y que se mande el schema
module.exports={
  Userd:Userd
}
