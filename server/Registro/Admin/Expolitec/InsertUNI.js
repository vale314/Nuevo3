const Universidades = require('mongoose').model('CodeUniversidades');

function registro(cuerpos,callback){
      var myJsonString = ''
      var cue

      cuerpos.map((cuerpo)=>{
        cue = Number(cuerpo);
        const newAlumno = new Universidades({codigo:cue});

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
