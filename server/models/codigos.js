const mongoose = require('mongoose');


// definimos el usuario
const CodigosSchema = new mongoose.Schema({
  codigo:{type:Number, default:null},

});
//cuenta con un email de tipo String es unico y un password string y un nombre string


//exportamos un modelo llamado user y que se mande el schema
module.exports = mongoose.model('Codigos', CodigosSchema);
