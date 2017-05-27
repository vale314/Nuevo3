const Hours =require('mongoose').model('Hours');

function get(){
  removes();
  var ts = Math.round((new Date()).getTime());
  const Horas = new Hours({name:'Hours',hours:ts,calificacion:97});
  Horas.save((err)=>{
    if(err) return (true);
    return
  })
}

function removes(){
  Hours.remove({},(err)=>{
    if(err) return console.log(err);
  })
}
module.exports={
  get:get
}
