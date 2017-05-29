const Empresas = require('mongoose').model('Empresas');

var JSZip = require('jszip');
var Docxtemplater = require('docxtemplater');

var fs = require('fs');
var path = require('path');

var zip = new require('node-zip')();





function finde(callback) {



   // cheacmos si existe el usuario en el schema  lo buscamos pos su id  le mandamos el userId donde tenemos el unicoId
   //si hay un error madamos un errro
   //si se encuentra el user se manada en user
    Empresas.find({}, (userErr, user) => {
     if (userErr || !user) {
       //si hay un error o no se encontro en user
       return callback(1);
       //se manda status
     }


     user.map((u)=>{
       var content = fs
          .readFileSync(__dirname+"/input.docx","binary");

      var zip = new JSZip(content);
      var doc = new Docxtemplater().loadZip(zip);

         doc.setData({
            "formato":u.formato,
            "repLegal":u.repLegal,
            "cargo":u.cargo,
            "name":u.name,
            "domicilio":u.calle,
            "domN":u.domN,
            "cp":u.cp,
            "municipio":u.municipio,
            "estado":u.estado
        });
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

         let names = `${u.name}`
        // buf is a nodejs buffer, you can either write it to a file or do anything else with it.
        fs.writeFileSync(path.resolve(process.cwd() + "/documents/emp",`${names}.docx`), buf)
     })
     return callback(false)














});
}
module.exports ={
finde:finde
}
