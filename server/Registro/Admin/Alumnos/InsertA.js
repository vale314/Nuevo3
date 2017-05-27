const Alumnos = require('mongoose').model('Codigos');

function registro(cuerpos,callback){
      var myJsonString = ''
      var cue

      cuerpos.map((cuerpo)=>{
        cue = Number(cuerpo);
        const newAlumno = new Alumnos({codigo:cue});

        newAlumno.save((err) => {
          if (err) { return callback(err); }
          //si hay un error se encuentar un error se manda
          //si no solamenete se manda done para finalizar el  local y null
          //xd
          return callback (null);

        });
      })

}

module.exports={
  registro:registro
}
