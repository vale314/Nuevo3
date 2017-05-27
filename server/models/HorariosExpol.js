const mongoose = require('mongoose');

const FechaSchema = new mongoose.Schema({


      A:{type:Number, default:null},
      B:{type:Number, default:null},
      C:{type:Number, default:null},
      D:{type:Number, default:null},
      E:{type:Number, default:null},
      F:{type:Number, default:null},
      G:{type:Number, default:null},
      H:{type:Number, default:null},
});
// definimos el usuario
const HoursSchema = new mongoose.Schema({
  dia:{type:Number,default:null},
  name:{type:String,default:''},
  hours:[FechaSchema],

  fulls:{type:Boolean}
  });

module.exports = mongoose.model('HoursExpol', HoursSchema);
