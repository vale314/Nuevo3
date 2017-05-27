const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


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
const UniversidadeSchema = new mongoose.Schema({
  email:{
      type: String,
      index:true,
      unique: true
    },
  codigo:{
      type: Number,
      unique: true
    },
  password:{type:String, default:''},
  name:{type:String, default: ''},
  dia1:[FechaSchema],
  dia2:[FechaSchema],
  dia3:[FechaSchema],
  escuela:{type:String, default:''},
  direccion:{type:String, default:''},
  turno:{type:String, default:''},
});



//tenemos un metodo llamado comparePassword esto es igual a comparePassword  y entra la contraseña  y un callback
//llamammos a bcrypt compara la contraseña mandada y se compara con la contraseña en el schema
UniversidadeSchema.methods.comparePassword = function comparePassword(password, callback) {
  bcrypt.compare(password, this.password, callback);
};
//antes de guardar el schema llama a una function cuando se valla ha guardar  esto nos manda a una function llamada saveHook y su siguienete
//middleware con el next
 UniversidadeSchema.pre('save', function saveHook(next) {
  //asignamos a user el this de la o el schema de el usuario para poderlo usar
  const user = this;

  // le decimos que si la contraseña no ha sido modificado
  //pues user es this
  //retorne el siguiente middleware
  if (!user.isModified('password')) return next();

   //retorna una function de bcrypt llamada genSalt el numero 10 es atribuido a el encriptacion por
   //default
   //si tenemos un error lo mandara en saltError si no lo regresara la varviable salt
  return bcrypt.genSalt(10,(saltError, salt) => {
    if (saltError) { return next(saltError); }
    //si hay algun error entonces madada el error

    //si no hay error manada una function de bcrypt llamada hash
    //la cual recibe
    //user.password la contraseña del usuario de la base de datos salt la codificacion esto
    //llamamos a una function que nos madara eror y el hash
    return bcrypt.hash(user.password, salt, (hashError, hash) => {
      //si hay algun error manadamos a el error hashError
      if (hashError) { return next(hashError); }

      //tenemos la contraseña modificacada y la guaramos en el user
      user.password = hash;

      return next();
    });
  });
});
module.exports = mongoose.model('Universidades', UniversidadeSchema);
