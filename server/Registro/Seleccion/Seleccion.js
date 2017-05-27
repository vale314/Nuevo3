const Empresas = require('mongoose').model('Empresas');

const User = require('mongoose').model('User');

function Seleccion (msj,callback ){
  const userA = msj[0];
  const codigo = msj[1];

  switch(userA.carrera){
      case ('Tecnologo Profesional En Sistemas Informaticos'):
            busqueda(codigo,(response)=>{
                  const res = busqueda1(response.carreras, 'TPSI');
                  Empresas.update({'codigo':codigo},{$set:{'carreras.TPSI.alumnos':res}},(userErr, user)=>{
                    if(userErr || !user)  return callback(3);

                    const bool = names(userA,codigo);
                    console.log(bool);
                    if(bool) return callback(response.codigo);
                    else  return callback(3)

                  })
            });

       break;

      case ('Tecnologo Profesional En Plasticos'):
      busqueda(codigo,(response)=>{

              const res = busqueda1(response.carreras, 'TPP');
              Empresas.update({'codigo':codigo},{$set:{'carreras.TPP.alumnos':res}},(userErr, user)=>{
                if(userErr || !user){
                  return callback(3);
                }
                const bool = names(userA,codigo);
                console.log(bool);
                if(bool) return callback(response.codigo)
                else  return callback(3)
              })
        });
       break;

      case ('Tecnologo Profesional En Metalurgia y Fundicion'):
      busqueda(codigo,(response)=>{
            const res = busqueda1(response.carreras, 'TPMF');
            Empresas.update({'codigo':codigo},{$set:{'carreras.TPSI.alumnos':res}},(userErr, user)=>{
              if(userErr || !user){
                return callback(3);
              }
              const bool = names(userA,codigo);
              console.log(bool);
              if(bool) return callback(response.codigo)
              else  return callback(3)
            })
      });
       break;


      case  ('Tecnologo Profesional En Procesos Quimicos Industriales'):
      busqueda(codigo,(response)=>{
            const res = busqueda1(response.carreras, 'TPPQI');
            Empresas.update({'codigo':codigo},{$set:{'carreras.TPSI.alumnos':res}},(userErr, user)=>{
              if(userErr || !user){
                return callback(3);
              }
              const bool = names(userA,codigo);
              console.log(bool);
              if(bool) return callback(response.codigo)
              else  return callback(3)
            })
      });
       break;

      case  ('Tecnologo Profesional Quimico En Anlisis Y Procesos De Alimentos'):
      busqueda(codigo,(response)=>{
            const res = busqueda1(response.carreras, 'TPQAPA');
            Empresas.update({'codigo':codigo},{$set:{'carreras.TPSI.alumnos':res}},(userErr, user)=>{
              if(userErr || !user){
                return callback(3);
              }
              const bool = names(userA,codigo);
              console.log(bool);
              if(bool) return callback(response.codigo)
              else  return callback(3)
            })
      });
       break;

      case  ('Tecnologo Profesional En Mecanica Industrial'):
      busqueda(codigo,(response)=>{
            const res = busqueda1(response.carreras, 'TPMI');
            Empresas.update({'codigo':codigo},{$set:{'carreras.TPSI.alumnos':res}},(userErr, user)=>{
              if(userErr || !user){
                return callback(3);
              }
              const bool = names(userA,codigo);
              console.log(bool);
              if(bool) return callback(response.codigo)
              else  return callback(3)
            })
      });
       break;

      case  ('Tecnologo Profesional En Electricidad Industrial'):
      busqueda(codigo,(response)=>{
            const res = busqueda1(response.carreras, 'TPSI');
            Empresas.update({'codigo':codigo},{$set:{'carreras.TPSI.alumnos':res}},(userErr, user)=>{
              if(userErr || !user){
                return callback(3);
              }
              const bool = names(userA,codigo);
              console.log(bool);
              if(bool) return callback(response.codigo)
              else  return callback(3)
            })
      });
      break;

    default:

          return callback(3);
}
};

function busqueda(codigo,callback){
    Empresas.findOne({'codigo':codigo},(userErr,user)=>{
      if(userErr || !user){
        console.log('error');
      }
      return callback(user);
    })
}

function  busqueda1(empresa,des){
        var restantes =empresa[0][des].alumnos;
        restantes--;
        return (restantes);

}

function names(codigo,empresa){
        busqueda(empresa,(response)=>{
          User.update({'codigo':codigo.codigo},{$set:{'codeEmp':response.codigo, 'empresa':response.name}},(userErr,user)=>{
            if(userErr || !user){

              return(0);
            }
              return;
          })
        })
        return(1);
}

module.exports={
  Seleccion:Seleccion
}
