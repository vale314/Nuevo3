const mongoose = require('mongoose');


// definimos el usuario
const AdminSchema = new mongoose.Schema({
  email:{
      type: String,
      default:''
    },

  password:{type:String, default:''},
  name:{type:String, default: ''},
  hours:{type:Number,default:null},
});

module.exports = {
  Admind:AdminSchema
}
