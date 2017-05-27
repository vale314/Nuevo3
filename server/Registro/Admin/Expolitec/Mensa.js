const Extra = require('mongoose').model('Extra');

function mensajese(msj,callback){
  drop((response)=>{
    if ( response == false) return callback(false)

    const Msjes = new Extra({id:1,msj:msj.msj,url:msj.url});
    Msjes.save((err)=>{
      if(err) return callback(false);
      return callback();
    })
  })

}




function drop(callback){
  Extra.remove({},(err)=>{
    if(err) return callback(false)
    return callback()
  })
}





function finds(callback){
  Extra.findOne({'id':1},(err,user)=>{
    if(err || !user) return callback(false);
    return callback(user)
  })
}



module.exports={
  mensa:mensajese,
  finds:finds

}
