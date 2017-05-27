const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


// definimos el usuario
const EmpresasSchema = new mongoose.Schema({
  email:{
    type: String,
  },

  password:{type:String, default:'contrasena'},
  name:{type:String, default: ''},
  repLegal:{type:String, default: ''},
  formato:{type:String, default: ''},
  telefono:{type:Number, default:null},
  celular:{type:Number, default:null},
  codigo:{type:Number, default:null, unique:true},
  rubro:{type:String, default: ''},
  tamaño:{type:String, default: ''},
  numT:{type:Number, default:null},
  calle:{type:String, default: ''},
  domN:{type:Number, default:null},
  colonia:{type:String, default: ''},
  municipio:{type:String, default: ''},
  estado:{type:String, default: ''},
  cp:{type:Number, default:''},
  depDA:{type:String, default: ''},
  cargo:{type:String, default:''},
  tiempo:{type:String},

});



module.exports = {
  empresad:EmpresasSchema
}
