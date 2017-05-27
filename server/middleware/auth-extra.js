const config = require('../../config');

//exportamos el siguienete callback llamado
module.exports = (req, res, next) => {
  if (req.headers.authorization) {
    //si en la autorizacion no se encuentra un mensaje de authorization retornamos un mensaje
    return res.status(401).end();
  }

      return next();


  };
