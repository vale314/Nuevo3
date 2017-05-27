const Admins = require('mongoose').model('Admins');

function Nuevo(){
      const userData = {
        email: "simon@hotmail.com",
        password: "classs",
        name: "simon"
      };
       const newUser = new Admins(userData);

      newUser.save((error)=>{
        if(error){
          return (error);
        }
        console.log('restaurado');
      });
}

module.exports.Nuevo=Nuevo;
