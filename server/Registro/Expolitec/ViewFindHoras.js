const Token = require('./Token');

function Views(token,callback){



  Token.find(token,(response)=>{
    if(response == false) return callback(false);
    return callback(response)
  })
}



module.exports={
  Views:Views
};
