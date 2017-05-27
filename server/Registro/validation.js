const User = require('mongoose').model('User');

const Hours = require('mongoose').model('Hours');

 function validate(calificacion,callback) {
   if(calificacion){
     var hours;
     var times;
     Hours.findOne({'name':'Hours'},(userErr,user)=>{
       if(userErr || !user) return callback(0)
       hours=user.hours;
       times=user.calificacion;

       const r=time(calificacion,times,hours,hours)
       if(r==1){
         return callback(200);
       }else{
         return callback(403);
       }
     });
   }else{
     return callback(417);
   }
}

function time(calificacion,times,hours,hours1){
  var ts = Math.round((new Date()).getTime());
  if(times<=60 && ts<=hours+1000 && ts>=hours) return (1)
  if(times<=60 && ts<hours1) return(3) //todavia nop abre
  if(calificacion>times && calificacion<=times+3 && ts<=hours+10000 && ts>=hours){
    return (1);
  }else if(times <=60){
    return(3)
  }else{
    return time(calificacion,times-3,hours+10000,hours1)
  }

}

module.exports={
  validate:validate
};
