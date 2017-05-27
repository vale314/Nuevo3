const Universidad = require('mongoose').model('Universidades');
const res = require('../../Emp/Extra/res');
const Finds = require('./Find');


function registro(dia,callback){
    const d=dia[0];
    const hours=res.res(dia[1])
    Finds.find(dia[2],(responses)=>{

        if(responses == false) return callback(false);


        if(d=='1'){

                Universidad.update({'_id':responses._id},{$set:{'dia1':hours}},(UserErr,User)=>{
                  if(UserErr || !User) {
                    console.log(UserErr)
                    return callback(false);
                  }
                return callback()
                })

          }
        else if(d=='2'){

                Universidad.update({'_id':responses._id},{$set:{'dia2':hours}},(UserErr,User)=>{
                  if(UserErr || !User) {
                    console.log(UserErr)
                    return callback(false);
                  }
                return callback()
              })
        }
        else if(d=='3'){

                Universidad.update({'_id':responses._id},{$set:{'dia3':hours}},(UserErr,User)=>{

                  if(UserErr || !User) {
                    console.log(UserErr)
                    return callback(false);
                  }
                return callback()
              })

        }

      })






}


module.exports={
  registro:registro
}
