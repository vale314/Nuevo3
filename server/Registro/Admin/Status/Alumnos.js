const Alumnos = require('mongoose').model('User');


function General(callback){
  Cantidad((response1)=>{
    if(response1 == 'error') return callback(false)
    All((response3)=>{
      if(response3 == 'error') return callback(false)
      Compañia((response5)=>{
         if(response5 == 'error') return callbcak(false)
         const object = {'cantidad':response1,'todos':response3,'compañia':response5};
         return callback(object);
      })
    })
  });
}



function Cantidad(callback){
  Alumnos.find({},null,(userErr, user) => {
       if (userErr || !user) {
         //si hay un error o no se encontro en user
         return callback('error');
         //se manda status
       }
       const length = user.length;
       return callback(length);
     });
}


function All(callback){
  Alumnos.find({'carrera':''},(userErr, user) => {
   if (userErr || !user) {
     //si hay un error o no se encontro en user
     return callback('error');
     //se manda status
   }
   const length = user.length;
   return callback(length);
 });
}

function Compañia(callback){
  Alumnos.find({'codeEmp':''},(userErr, user) => {
   if (userErr || !user) {
     //si hay un error o no se encontro en user
     return callback('error');
     //se manda status
   }
   const length = user.length;
   return callback(length);
 });
}

module.exports={
  General:General
}
