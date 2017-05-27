const Msj = require('mongoose').model('Extra');

function mensajese(msj,callback){
  drop((response)=>{
    if ( response == false) return callback(false)

    const Msjes = new Msj({id:1,msj:msj[0],url:msj[1]});
    Msjes.save((err)=>{
      if(err) return callback(false);
      return callback();
    })
  })

}




function drop(callback){
  Msj.remove({},(err)=>{
    if(err) return callback(false)
    return callback()
  })
}




module.exports={
  mensajese:mensa
}
