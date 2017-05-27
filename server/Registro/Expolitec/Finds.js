const Universidad = require('mongoose').model('Universidades');
const token = require('./Token');


function finds(user,callback){
  token.find(user,(response)=>{
      return callback(response);
    })
}

function tiempo(dates,callback){
  if(dates[0] == 1) return callback(dates[1].dia1)
  if(dates[0] == 2) return callback(dates[1].dia2)
  if(dates[0] == 3) return callback(dates[1].dia3)

}




module.exports={
  finds:finds,
  tiempo:tiempo
};
