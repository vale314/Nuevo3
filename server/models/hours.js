const mongoose = require('mongoose');


// definimos el usuario
const HoursSchema = new mongoose.Schema({
  calificacion:{type:Number,default:''},
  name:{type:String,default:''},
  hours:{type:Number,default:null},
});

module.exports = mongoose.model('Hours', HoursSchema);
