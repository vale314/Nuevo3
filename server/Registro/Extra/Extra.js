const Extra = require('mongoose').model('Extra');







function finds(callback){
  Extra.findOne({'id':1},(err,user)=>{
    if(err || !user) return callback(false);
    return callback(user)
  })
}



module.exports={
  finds:finds
}
