const Universidad = require('mongoose').model('Universidades');
const res = require('../../Emp/Extra/res');
const Finds = require('./Find');


function registro(users,callback){
    Finds.find(users[0],(responses)=>{


        if(!responses) return callback(false);
          Universidad.findByIdAndUpdate(responses._id, users[1], (err, Uni)=>{
            if(err) return callback(err);
            return callback();
        })


      })

}


module.exports={
  registro:registro
}
