const Hours = require('mongoose').model('Hours');
const moment = require('moment');
function fecha(callback){
  Hours.findOne({'name':'Hours'},(userErr,user)=>{
    if(userErr || !user) return callback(0)
    const hours=user.hours;
    const times=user.calificacion;
    const hours5=[];
    const r=views(100,times,hours,hours,hours5)
    if(r){
      return callback(r);
    }else{
      return callback();
    }
  });


}


function views(calificacion,times,hours,hours1,hoursP){

  if(calificacion>times && calificacion<=times+3){
     var hours3=moment(hours).format('MMMM Do YYYY, h:mm:ss a');
     var hours5=moment(hours+10000).format('MMMM Do YYYY, h:mm:ss a');

      hoursP.push(`${times+3} de a ${times+1} de ${hours3} a ${hours5}`);
     if(times <=60){
       return (hoursP)
     }
    return views(calificacion-3,times-3,hours+10000,hours1,hoursP)
  }
}

module.exports={
  fecha:fecha
}
