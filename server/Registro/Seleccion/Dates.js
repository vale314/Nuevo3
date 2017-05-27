const Hours = require('mongoose').model('Hours');

function fecha(callback){
  Hours.findOne({'name':'Hours'},(userErr,user)=>{
    if(userErr || !user){
      return callback(3);
    }
    return callback(user.hours);
  })
}


module.exports={
  fecha:fecha
}
