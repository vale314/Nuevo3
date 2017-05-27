const Empresas = require('mongoose').model('Empresas');

function General(callback){
  Cantidad((response1)=>{
    if(response1 == 'error') return callback(false)
    All((response3)=>{
      if(response3 == 'error') return callback(false)
         const object = {'cantidad':response1,'all':response3};
         return callback(object)

    })
  });
}



function Cantidad(callback){
  Empresas.find({},null,(userErr, user) => {
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
  Empresas.find({'cargo':''},(userErr, user) => {
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
