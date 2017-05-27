const jwt = require('jsonwebtoken');
const Admin = require('mongoose').model('Proyectos');
const config = require('../../config');




//exportamos el siguienete callback llamado
module.exports = (req, res, next) => {
  if (!req.headers.authorization) {
    //si en la autorizacion no se encuentra un mensaje de authorization retornamos un mensaje
    return res.status(401).end();
  }

  // divimos el token en la peticion donde encuentre un espacio y tomamos el 1
  const token = req.headers.authorization.split(' ')[1];

  // decodificamos el token retornando esto el token se manada que es el que nos enviaron los userId se mada la clave secreta
  //y hacemos un callbacj si hay un err
  //y tenemos la decoded decodificado
  return jwt.verify(token, config.jwtSecret, (err, decoded) => {
    // the 401 code is for unauthorized status
    if (err) { return res.status(401).end(); }
    //tenemos la constante userId esd igual en el decoded en el atributo sub que es el id del user
    const userId = decoded.sub;

    // cheacmos si existe el usuario en el schema  lo buscamos pos su id  le mandamos el userId donde tenemos el unicoId
    //si hay un error madamos un errro
    //si se encuentra el user se manada en user
    return Admin.findById(userId, (userErr, user) => {
      if (userErr || !user) {
        //si hay un error o no se encontro en user
        console.log(user);
        return res.status(401).end();
        //se manda status
      }

      return next();
      //retornamos el siguienete middleware
    });
  });
};
