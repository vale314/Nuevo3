const Expol = require('mongoose').model('HoursExpol');

function registro(dia,callback){
      Expol.findOne({'name':dia},(UserErr,User)=>{
        if(UserErr) return callback(1);
        if(User) return callback(3);
        if(!User){
              const Datas= new Expol({
                name:dia
              });
              Datas.save((err)=>{
                if(err) return callback(1)

                return callback(0);
              })
          }
      })

}

module.exports={
  registro:registro
}
