const mongoose = require('mongoose');

const ProyectosSchema = new mongoose.Schema({
  email:{
    type: String,

  },

  password:{type:String, default:'contrasena'},
  codigo:{
      type: Number,

    },
  name:{type:String, default: ''},
  celular:{type:Number, default:null},
  descripcion:{type:String, default:''},
  tamaño:{type:Number, default: ''},
});

module.exports = {
  ProyectosSchema:ProyectosSchema
}
