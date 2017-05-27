const Expol = require('mongoose').model('HoursExpol');

const FHoras = require('./FHoras');

function registro(callback){
    FHoras.registro(1,(response)=>{
      if(response.fulls== true){
        Expol.remove({},(err)=>{
          if(err) console.log(err);
        })
        const dia = [1,2,3];
          dia.map((a)=>{
                    const Datas= new Expol({
                      name:a,
                      fulls:false
                    });
                    Datas.save((err)=>{
                      if(err) return callback(1)
                    })
                })
          return callback(5);
      }else{
            Expol.remove({},(err)=>{
              if(err) console.log(err);
            })
            const dia = [1,2,3];
              dia.map((a)=>{
                        const Datas= new Expol({
                          name:a,
                          fulls:true
                        });
                        Datas.save((err)=>{
                          if(err) return callback(1)
                        })
                    })
              return callback(0);
            }
    })

}


module.exports={
  registro:registro
}
