const express = require('express');
const Find = require('../Registro/Emp/find');
const router = new express.Router();
const saves = require('../Registro/Emp/save');
const Validator = require('../Registro/Emp/Validator');

  router.get('/dashboard', (req, res) => {
    saves.saves(req,(response)=>{
      if(response==false){
        return res.status(200).json({
          message: "Connection"
        });
      }else{
        return res.status(401).end();
      }
    })

  });

  router.get('/registroemp', (req, res) =>{
    const token = req.headers.authorization.split(' ')[1];
    const validate0 = req.headers.authorization.split(' ')[0];
    Find.find(token, (response)=>{

      if (validate0 === 'bearers' &&  !response.telefono) return res.status(409).end();

      if(validate0=='bearers'){
        Validator.validate((response3)=>{
          if(!response3){
            var user = response;
            let name = user.name;
            return res.status(200).json({
              name: user.name,
              user: user,
              id: user.id,
              carreras:user.carreras
            });
          }
          if(response3){
            return res.status(206).end();
          }
        })
      }else{
        var user = response;
        let name = user.name;

        res.status(200).json({
          name: user.name,
          user: user,
          id: user.id,
          carreras:user.carreras
        });
      }
      });
  });







module.exports = router;
