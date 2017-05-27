const mongoose = require('mongoose');


// definimos el usuario
const ExtraSchema = new mongoose.Schema({
  id:{type:Number, default:null},
  msj:{type:String, default:''},
  url:{type:String,default:''}

});
//cuenta con un email de tipo String es unico y un password string y un nombre string


//exportamos un modelo llamado user y que se mande el schema
module.exports = mongoose.model('Extra', ExtraSchema);
