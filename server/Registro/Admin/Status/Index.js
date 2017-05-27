const Alumnos = require('./Alumnos');
const Empresas = require('./Empresas');
const Proyectos = require('./Proyectos');
const Universidades = require('./Universidades');


function calls(callback){

  var informacion ={Alumnos:{cantidad:'', todos:'',compañia:''},Empresas:{cantidad:'',all:''},Proyectos:{cantidad:'',todos:''},Universidades:{cantidad:'',todos:''}};
  Alumnos.General((response)=>{
    if(response== false) return callback(false)
    informacion.Alumnos=response;

    Empresas.General((response5)=>{
      if(response5== false) return callback (false)
      informacion.Empresas=response5;

      Proyectos.General((response9)=>{
        if(response9== false) return callback(false)
        informacion.Proyectos=response9;

        Universidades.General((response12)=>{
          if(response12== false) return callback(false)
          informacion.Universidades=response12;

          return callback(informacion)
        })
      })
    })
  })
}

module.exports={
  calls:calls
}
