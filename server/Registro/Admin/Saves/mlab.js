const mongoose = require('mongoose');

const dbs = mongoose.createConnection('mongodb://vale314:contrasena@ds119081.mlab.com:19081/alumnos3');

var Schema = new mongoose.Schema({})

const UDS= require('../../../models/Mlab/userd')
var Usersd = dbs.model('users', UDS.Userd);

const UHS= require('../../../models/Mlab/hoursd')
var Hoursd = dbs.model('hours', UHS.Hoursd);

const UES= require('../../../models/Mlab/empresasd')
var Empresasd = dbs.model('empresas',UES.empresad);


const UCS = require('../../../models/Mlab/codigosd')
var Codigosd = dbs.model('codigos',UCS.codigosd);

const UAS = require('../../../models/Mlab/admind')
var Adminsd = dbs.model('admins',UAS.Admind);

const UCodePS = require('../../../models/Mlab/CodeByProyectos')
var CodigosProyeS = dbs.model('codeps',UCodePS.ProyectosSchema);


const UCodeUS = require('../../../models/Mlab/CodeByUniversidades')
var CodigosUniveS = dbs.model('codeus',UCodeUS.CodigosUSchema);

const UPS = require('../../../models/Mlab/Proyectos');
var ProyectosSS = dbs.model('proyes',UPS.ProyectosSchema);

const UUS = require('../../../models/Mlab/Universidades');
var UniversidadeS = dbs.model('Unive',UUS.UniversidadeSchema);

const Empresas = require('mongoose').model('Empresas');
const User = require('mongoose').model('User');
const Codigos = require('mongoose').model('Codigos');
const Hours = require('mongoose').model('Hours');
const Admins = require('mongoose').model('Admins');
const CodigosP = require('mongoose').model('CodeProyectos');
const CodigosUnive = require('mongoose').model('CodeUniversidades');
const Proyectos = require('mongoose').model('Proyectos');
const Universidades = require('mongoose').model('Universidades');

function guardar(callback){
  var x=removes();

  Usersf((response)=>{
      Hoursf((response3)=>{
        Empresasf((response5)=>{
                ProyectosF((response13)=>{
                  UniversidadesF((response15)=>{
                      if(response==0 || response3==0 || response5==0  || response13 ==0 || response15 == 0){
                        return callback(true)
                      }else{
                        return callback(false)
                      }
                    })
                  })
        })
      })
  })


}

function removes(){
  Usersd.remove({},(err)=>{
    //  console.log(err);
  });

  Hoursd.remove({},(err)=>{
    // console.log(err)
  })

  Empresasd.remove({},(err)=>{
    // console.log(err)
  })
  Codigosd.remove({},(err)=>{
    // console.log(err)
  })
  Adminsd.remove({},(err)=>{
    // console.log(err)
  })
  CodigosProyeS.remove({},(err)=>{
    //console.log(err)
  })
  CodigosUniveS.remove({},(err)=>{
    //console.log(err);
  })
  ProyectosSS.remove({},(err)=>{
    //conosle.log
  })
  UniversidadeS.remove({},(err)=>{
    //
  })
}


function Usersf(callback){
    User.find({},(err,user)=> {
      if(err){
        return callback(0);
      }else{
        if(user[0] == null) return callback(1)
        user.map((u)=>{
          const newUser= new Usersd({'_id':u._id,'calificacion':u.calificacion,'empresa':u.empresa,'codeEmp':u.codeEmp,'nacionalidad':u.nacionalidad,'edad':u.edad,'sexo':u.sexo,'nss':u.nss,
          'telEmergencia':u.telEmergencia,'celular':u.celular,'telefono':u.telefono,'estado':u.estado,'municipio':u.municipio,'telPadre':u.telPadre,'madre':u.madre,'padre':u.padre,'cp':u.cp,
          'colonia':u.colonia,'domicilio':u.domicilio,'grupo':u.grupo,'turno':u.turno,'carrera':u.carrera,'grado':u.grado,'name':u.name,'codigo':u.codigo,'email':u.email});
          newUser.save((err,res)=>{
            if(err){
            return callback(0)
          }
          return callback(1)

        })
      })
    }
  })
}

function Hoursf(callback){

  Hours.find({},(err,user)=>{
    if(err){
      return callback(0);
    }else{
      if(user[0] == null) return callback(1)
        user.map((u)=>{
          const newUser= new Hoursd({'calificacion':u.calificacion,'name':u.name,'hours':u.hours});
           newUser.save((err,res)=>{
            if(err){
            return callback(0)
          }

          return callback(1)

        })
      })
    }
  })
}


function Empresasf(callback){
  Empresas.find({},(err,user)=>{
    if(err){
      return callback(0);
    }
    else{
      if(user[0] == null) return callback(1)
      user.map((u)=>{
        const newUser= new Empresasd({
          email: u.email,
          password:u.password,
          name:u.name,
          repLegal:u.repLegal,
          formato:u.formato,
          telefono:u.telefono,
          celular:u.celular,
          codigo:u.codigo,
          rubro:u.rubro,
          tamaño:u.tamaño,
          numT:u.numT,
          calle:u.calle,
          domN:u.domN,
          colonia:u.colonia,
          municipio:u.municipio,
          estado:u.estado,
          cp:u.cp,
          depDA:u.depDA,
          cargo:u.cargo,
          tiempo:u.tiempo});
         newUser.save((err,res)=>{
          if(err){
          return callback(0)
        }
          return callback(1)

      })
    })
  }
  })
}


function Codigosf(callback){
  Codigos.find({},(err,user)=>{
      if(err){
        return callback(0);
      }else{
        if(user[0] == null) return callback(1)

         user.map((u)=>{
             const newUser = Codigosd({"codigo":u.codigo});
              newUser.save((err,res)=>{
             if(err){
               return callback(0)
              }
           })
         })
         return callback(1)
      }
  })
}


function Adminsf(callback){
  Admins.find({},(err,user)=>{
    if(err){
      return callback(0);
    }else{
      if(user[0] == null) return callback(1)
        user.map((u)=>{
          const newUser = Adminsd({"email":u.email,"password":u.password,"name":u.name,"hours":u.hours})
           newUser.save((err,res)=>{
          if(err){
            return callback(0)
          }
          return callback(1)
          })
        })
    }
  })
}

function CodigosProye(callback){
  CodigosP.find({},(err,user)=>{

      if(err){
        return callback(0);
      }else{
        if(user[0] == null) return callback(1)

         user.map((u)=>{
             const newUser = CodigosProyeS({"codigo":u.codigo});
              newUser.save((err,res)=>{
             if(err){
               return callback(0)
              }
           })
           return callback(1)
         })
      }
  })
}
function CodigosUniveF(callback){
  CodigosUnive.find({},(err,user)=>{

      if(err){
        return callback(0);
      }else{
        if(user[0] == null) return callback(1)

         user.map((u)=>{
             const newUser = CodigosUniveS({"codigo":u.codigo});
              newUser.save((err,res)=>{
             if(err){
               return callback(0)
              }
              return callback(1)

           })
         })
      }
  })
}
function ProyectosF(callback){
  Proyectos.find({},(err,user)=>{

      if(err){
        return callback(0);
      }else{
        if(user[0] == null) return callback(1)

         user.map((u)=>{
             const newUser = ProyectosSS({"email":u.email,"password":u.password,"codigo":u.codigo,"name":u.name,"celular":u.celular,"descripcion":u.descripcion,"tamaño":u.tamaño});
              newUser.save((err,res)=>{
             if(err){
               console.log(err)
               return callback(0)
              }
              return callback(1)

           })
         })
      }
  })
}
function UniversidadesF(callback){
  Universidades.find({},(err,user)=>{
      if(err){
        return callback(0);
      }else{
        if(user[0] == null) return callback(1)

         user.map((u)=>{
             const newUser = UniversidadeS({"email":u.email,"password":u.password,"codigo":u.codigo,"name":u.name,"escuela":u.escuela,"direccion":u.direccion,"turno":u.turno});
              newUser.save((err,res)=>{
             if(err){
               return callback(0)
              }
              return callback(1)

           })
         })
      }
  })
}
module.exports={
  guardar:guardar
}
