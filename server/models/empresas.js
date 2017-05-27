
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const carrerasSchema = new mongoose.Schema({

    TPSI:{
      carrera:{type:String, default:'Tecnologo Profesional En Sistemas Informaticos'},
      cantidad:{type:Number, default:0},
      sexo:{type:String, default:'null'},
      aceptaccion:{type:String},
      alumnos:{type:Number, default:null}
    },
    TPP:{
      carrera:{type:String, default:'Tecnologo Profesional En Plasticos'},
      cantidad:{type:Number, default:0},
      sexo:{type:String, default:'null'},
      aceptaccion:{type:String},
      alumnos:{type:Number, default:null}
    },
    TPMF:{
      carrera:{type:String, default:'Tecnologo Profesional En Metalurgia y Fundicion'},
      cantidad:{type:Number, default:0},
      sexo:{type:String, default:'null'},
      aceptaccion:{type:String},
      alumnos:{type:Number, default:null}
    },
    TPPQI:{
      carrera:{type:String, default:'Tecnologo Profesional En Procesos Quimicos Industriales'},
      cantidad:{type:Number, default:0},
      sexo:{type:String, default:'null'},
      aceptaccion:{type:String},
      alumnos:{type:Number, default:null}
    },
    TPQAPA:{
      carrera:{type:String, default:'Tecnologo Profesional Quimico En Anlisis Y Procesos De Alimentos'},
      cantidad:{type:Number, default:0},
      sexo:{type:String, default:'null'},
      aceptaccion:{type:String},
      alumnos:{type:Number, default:null}
    },
    TPMI:{
      carrera:{type:String, default:'Tecnologo Profesional En Mecanica Industrial'},
      cantidad:{type:Number, default:0},
      sexo:{type:String, default:'null'},
      aceptaccion:{type:String},
      alumnos:{type:Number, default:null}
    },
    TPEI:{
      carrera:{type:String, default:'Tecnologo Profesional En Electricidad Industrial'},
      cantidad:{type:Number, default:0},
      sexo:{type:String, default:'null'},
      aceptaccion:{type:String},
      alumnos:{type:Number, default:null}
    }

});
// definimos el usuario
const EmpresasSchema = new mongoose.Schema({
  email:{
    type: String,
    index:true,
    unique: true
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
  carreras:[carrerasSchema],
});



//cuenta con un email de tipo String es unico y un password string y un nombre string


EmpresasSchema.methods.comparePassword = function comparePassword(password, callback) {
  bcrypt.compare(password, this.password, callback);
};
//tenemos un metodo llamado comparePassword esto es igual a comparePassword  y entra la contraseña  y un callback
//llamammos a bcrypt compara la contraseña mandada y se compara con la contraseña en el schema



//antes de guardar el schema llama a una function cuando se valla ha guardar  esto nos manda a una function llamada saveHook y su siguienete
//middleware con el next
EmpresasSchema.pre('save', function saveHook(next) {


  //asignamos a user el this de la o el schema de el usuario para poderlo usar
  const empresas = this;



  // le decimos que si la contraseña no ha sido modificado
  //pues user es this
  //retorne el siguiente middleware
  if (!empresas.isModified('password')) return next();

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
    return bcrypt.hash(empresas.password, salt, (hashError, hash) => {
      //si hay algun error manadamos a el error hashError
      if (hashError) { return next(hashError); }

      //tenemos la contraseña modificacada y la guaramos en el user
      empresas.password = hash;

      return next();
    });
  });
});

//exportamos un modelo llamado user y que se mande el schema
module.exports = mongoose.model('Empresas', EmpresasSchema);
