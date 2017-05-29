const User = require('mongoose').model('User');

var JSZip = require('jszip');
var Docxtemplater = require('docxtemplater');

var fs = require('fs');
var path = require('path');

var zip = new require('node-zip')();

const Empre = require('mongoose').model('Empresas');




function finde(callback) {



   // cheacmos si existe el usuario en el schema  lo buscamos pos su id  le mandamos el userId donde tenemos el unicoId
   //si hay un error madamos un errro
   //si se encuentra el user se manada en user
    User.find({}, (userErr, user) => {
     if (userErr || !user) {
       //si hay un error o no se encontro en user
       return callback(1);
       //se manda status
     }






     user.map((u)=>{
       Empre.findOne({'codigo':u.codeEmp}, (userErr, user) => {
        if (userErr) {
          //si hay un error o no se encontro en user
          return callback(1);
          //se manda status
        }
       var content = fs
          .readFileSync(__dirname+"/input.docx","binary");

      var zip = new JSZip(content);
      var doc = new Docxtemplater().loadZip(zip);
      if(!user){

          doc.setData({
             "codigo":u.codigo,
             "name":u.name,
             "carrera":u.carrera,
             "grado":u.grado,
             "grupo":u.grupo,
             "turno":u.turno,
             "domicilio":u.domicilio,
             "domN":u.domNU,
             "colonia":u.colonia,
             "cp":u.cp,
             "municipio":u.municipio,
             "estado":u.estado,
             "telefono":u.telefono,
             "celular":u.celular,
             "email":u.email,
             "telEmergencia":u.telEmergencia,
             "nss":u.nss,
             "edad":u.edad,
             "nacionalidad":u.nacionalidad,
             "padre":u.padre,
             "madre":u.madre,
             "telPadre":u.telPadre,
             "telMadre":u.telMadre,

         });
        }

        if(user){
          doc.setData({
            "codigo":u.codigo,
            "name":u.name,
            "carrera":u.carrera,
            "grado":u.grado,
            "grupo":u.grupo,
            "turno":u.turno,
            "domicilio":u.domicilio,
            "domN":u.domNU,
            "colonia":u.colonia,
            "cp":u.cp,
            "municipio":u.municipio,
            "estado":u.estado,
            "telefono":u.telefono,
            "celular":u.celular,
            "email":u.email,
            "telEmergencia":u.telEmergencia,
            "nss":u.nss,
            "edad":u.edad,
            "nacionalidad":u.nacionalidad,
            "padre":u.padre,
            "madre":u.madre,
            "telPadre":u.telPadre,
            "telMadre":u.telMadre,
            "name.emp":user.name,
            "repre":user.repLegal,
            "cargo":user.cargo
          })

        }
        try {
        // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
        doc.render()
        }
        catch (error) {
            var e = {
                message: error.message,
                name: error.name,
                stack: error.stack,
                properties: error.properties,
            }

            // The error thrown here contains additional information when logged with JSON.stringify (it contains a property object).
            throw error;
        }
        var buf = doc.getZip()
                     .generate({type: 'nodebuffer'});

         let names = `${u.codigo}`
        // buf is a nodejs buffer, you can either write it to a file or do anything else with it.
        fs.writeFileSync(path.resolve(process.cwd() + "/documents/students",`${names}.docx`), buf)
      })
     })
     return callback(false)















    })
  }


module.exports ={
finde:finde
}
