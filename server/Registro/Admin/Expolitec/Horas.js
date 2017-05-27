const Universidad = require('mongoose').model('Universidades');
const Find = require('./Find');


function finds(user,callback){
  console.log(user[0])
  Find.find(user[0],(response)=>{
      if(response==false) return callback(false)
      if(user[1] == 1) return callback(response.dia1)
      if(user[1] == 2) return callback(response.dia2)
      if(user[1] == 3) return callback(response.dia3)
    })
}





module.exports={
  finds:finds,
};
