const express = require('express');

const router = new express.Router();
const findP = require('../Registro/Admin/Expolitec/Proyectos/Finds/find')
  router.get('/dashboard', (req, res) => {
    res.status(200).json({
      message: "Aviso"
    });
  });

router.get('/registrop', (req,res) =>{
  const token = req.headers.authorization.split(' ')[1];
  findP.find(token, (response)=>{

    var user = response;
    let name = user.name;

    return res.status(200).json({
      user: user,
    });
  });
})


router.get('/carreras',(req,res)=>{
  const token = req.headers.authorization.split(' ')[1];
  findP.find(token,(response)=>{
    var alumnos = new Array();
    for(let i=0;i<response.tamaño;i++){
      alumnos.push(i)
    }

    return res.status(200).json({
      carreras:response.carreras,
      cantidad:alumnos
    });
  });
});



module.exports = router;
