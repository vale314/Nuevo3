const User = require('mongoose').model('Empresas');
const config = require('../../../config');
const jwt = require('jsonwebtoken');
const path = require('path');

function saves(req, callback){
  const token = req.headers.authorization.split(' ')[1];

  jwt.verify(token, config.jwtSecret, (err, decoded) => {
    // the 401 code is for unauthorized status
    if (err) { return callback(1) }
    //tenemos la constante userId esd igual en el decoded en el atributo sub que es el id del user
    const userId = decoded.sub;

    // cheacmos si existe el usuario en el schema  lo buscamos pos su id  le mandamos el userId donde tenemos el unicoId
    //si hay un error madamos un errro
    //si se encuentra el user se manada en user
    const datas = req.headers.fecha;
    var union = datas.slice(6);


      User.update({_id:userId},{$set: {'tiempo':union}},(err,user)=>{
            if(err){
              console.log('error en User')
                return(1)
          }
        return  callback(false);
    });
    });
  }




  module.exports={
    saves:saves
  }
