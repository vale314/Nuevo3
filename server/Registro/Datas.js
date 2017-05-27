const Hours = require('mongoose').model('Hours');

const moment = require('moment');

function datas(calificaciones,callback){
  Hours.findOne({'name':'Hours'},(userErr,user)=>{
    if(userErr || !user){
      return callback(3);
    }

  const r =  calificacion(calificaciones,97,user.hours)
    if (r) return callback(r);
  })
}

function calificacion(calificaciones,times,hours){
  if(calificaciones>times && calificaciones<=times+3){
     var hours3=moment(hours).format('MMMM Do YYYY, h:mm:ss a');
     var hours5=moment(hours+10000).format('MMMM Do YYYY, h:mm:ss a');
    return [hours3,hours5];
  }
if(times <=60){
    var hours3=moment(hours).format('MMMM Do YYYY, h:mm:ss a');
    var hours5=moment(hours+10000).format('MMMM Do YYYY, h:mm:ss a');
    return [hours3,hours5];
  }
  return calificacion(calificaciones,times-3,hours+10000)
}

module.exports={
  datas:datas
}
