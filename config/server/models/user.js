const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// definimos el usuario
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    index: { unique: true }
  },
  password: String,
  name: String,
  carrera:String,
  grado:String,
  grupo:String,
  turno:String,
  domicilio:String,
  colonia:String,
  cp:Number,
  padre:String,
  madre:String,
  telPadre:Number,
  telMadre:Number,
  municipio:String,
  estado:String,
  telefono:Number,
  celular:Number,
  email:String,
  telEmergencia:Number,
  nss:Number,
  edad:Number,
  nacionalidad:String,
  codigo:Number
});
//cuenta con un email de tipo String es unico y un password string y un nombre string


UserSchema.methods.comparePassword = function comparePassword(password, callback) {
  bcrypt.compare(password, this.password, callback);
};
//tenemos un metodo llamado comparePassword esto es igual a comparePassword  y entra la contraseña  y un callback
//llamammos a bcrypt compara la contraseña mandada y se compara con la contraseña en el schema



//antes de guardar el schema llama a una function cuando se valla ha guardar  esto nos manda a una function llamada saveHook y su siguienete
//middleware con el next
UserSchema.pre('save', function saveHook(next) {
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

//exportamos un modelo llamado user y que se mande el schema
module.exports = mongoose.model('User', UserSchema);
