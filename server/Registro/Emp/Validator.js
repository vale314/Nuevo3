const Hours = require('mongoose').model('Hours');
const moment = require('moment');
function validate(callback){
  var ts = Math.round((new Date()).getTime());
  const ciclo = (10000*14);
  Hours.findOne({'name':'Hours'},(userErr,user)=>{
    if(userErr || !user)  return callback(false);
    if(ts<user.hours || ts>user.hours+ciclo)   return callback(false);
    else  return callback(true);
  })
}

module.exports={
  validate:validate
}
