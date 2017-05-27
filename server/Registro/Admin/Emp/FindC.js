const Empresas = require('mongoose').model('Empresas');

function find(req, callback) {

  var cantidad =[];
   // cheacmos si existe el usuario en el schema  lo buscamos pos su id  le mandamos el userId donde tenemos el unicoId
   //si hay un error madamos un errro
   //si se encuentra el user se manada en user
   switch(req){
       case ('Tecnologo Profesional En Sistemas Informaticos'):
         Empresas.find({'carreras.TPSI.aceptaccion': 'true' }, (userErr, user) => {
          if (userErr || !user) {
            //si hay un error o no se encontro en user
            return callback(1);
            //se manda status
          }
          cantidad = carreras(user,'TPSI');
          return callback(user,cantidad);
        });
        break;

       case ('Tecnologo Profesional En Plasticos'):
         Empresas.find({'carreras.TPP.aceptaccion': 'true'}, (userErr, user) => {
          if (userErr || !user) {
            //si hay un error o no se encontro en user
            return callback(1);
            //se manda status
          }
          cantidad = carreras(user,'TPP');
          return callback(user,cantidad);
        });
        break;

       case ('Tecnologo Profesional En Metalurgia y Fundicion'):
         Empresas.find({'carreras.TPMF.aceptaccion': 'true'}, (userErr, user) => {
          if (userErr || !user) {
            //si hay un error o no se encontro en user
            return callback(1);
            //se manda status
          }
          cantidad = carreras(user,'TPMF');
          return callback(user,cantidad);
        });
        break;


       case  ('Tecnologo Profesional En Procesos Quimicos Industriales'):
         Empresas.find({'carreras.TPPQI.aceptaccion': 'true'}, (userErr, user) => {
          if (userErr || !user) {
            //si hay un error o no se encontro en user
            return callback(1);
            //se manda status
          }
          cantidad = carreras(user,'TPPQI');
          return callback(user,cantidad);
        });
        break;

       case  ('Tecnologo Profesional Quimico En Anlisis Y Procesos De Alimentos'):
         Empresas.find({'carreras.TPQAPA.aceptaccion':'true'}, (userErr, user) => {
          if (userErr || !user) {
            //si hay un error o no se encontro en user
            return callback(1);
            //se manda status
          }
          cantidad = carreras(user,'TPQAPA');
          return callback(user,cantidad);
        });
        break;

       case  ('Tecnologo Profesional En Mecanica Industrial'):
         Empresas.find({'carreras.TPMI.aceptaccion': 'true'}, (userErr, user) => {
          if (userErr || !user) {
            //si hay un error o no se encontro en user
            return callback(1);
            //se manda status
          }
          cantidad = carreras(user,'TPMI');
          return callback(user,cantidad);
        });
        break;

       case  ('Tecnologo Profesional En Electricidad Industrial'):
         Empresas.find({'carreras.TPEI.aceptaccion': 'true'}, (userErr, user) => {
          if (userErr || !user) {
            //si hay un error o no se encontro en user
            return callback(1);
            //se manda status
          }
          cantidad = carreras(user,'TPEI');
          return callback(user,cantidad);
        });
       break;

     default:

           return callback(3);

   }


function carreras(user,carrera){
  var cantidad=[];
  if(user){
    user.map((use)=>{
      use.carreras.map((carreras)=>{
        cantidad.push(carreras[carrera].cantidad);
      })
    })
    return(cantidad);
  }
}
}



function sex(array){
  const sex = array.sex;
  const carrera = carre(array.carrera);
  const users = array.users;
  var sexos=[];

  if(users){
    users.map((use)=>{
      use.carreras.map((carreras)=>{
        if(carreras[carrera].sexo === sex || carreras[carrera].sexo ===  'Indistinto'){
          sexos.push(use);
        }
      })
    })
    return(sexos);
  }
}


function carre(carreras){
  switch (carreras) {
    case ('Tecnologo Profesional En Sistemas Informaticos'):
          return ('TPSI');
     break;

    case ('Tecnologo Profesional En Plasticos'):
          return('TPP');
     break;

    case ('Tecnologo Profesional En Metalurgia y Fundicion'):
          return('TPMF');
     break;


    case  ('Tecnologo Profesional En Procesos Quimicos Industriales'):
          return('TPPQI');
     break;

    case  ('Tecnologo Profesional Quimico En Anlisis Y Procesos De Alimentos'):
          return('TPQAPA');
     break;

    case  ('Tecnologo Profesional En Mecanica Industrial'):
          return('TPMI');
     break;

    case  ('Tecnologo Profesional En Electricidad Industrial'):
          return('TPEI');
    break;

    default:
        return('');
  }
}
module.exports ={
find:find,
sex:sex
}
