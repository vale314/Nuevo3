const mongoose = require('mongoose');





const UniversidadeSchema = new mongoose.Schema({
  email:{
      type: String,


    },
  codigo:{
      type: Number,

    },
  password:{type:String, default:''},
  name:{type:String, default: ''},
  escuela:{type:String, default:''},
  direccion:{type:String, default:''},
  turno:{type:String, default:''},
});

module.exports = {
  UniversidadeSchema:UniversidadeSchema
}
