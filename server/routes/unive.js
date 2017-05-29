const express = require('express');
const FHFind = require('../Registro/Expolitec/Finds')
const FindHoras = require('../Registro/Expolitec/ViewFindHoras');

const router = new express.Router();

  router.get('/dashboard', (req, res) => {
    res.status(200).json({
      message: "Server"
    });
  });
router.get('/expolih',(req,res)=>{
  const token = req.headers.authorization.split(' ')[1];
  const dia = req.headers.codigo.split(' ')[1];
  FHFind.finds(token,(response)=>{
    if(response.escuela === '') return res.status(403).end();
    FHFind.tiempo([dia,response],(response)=>{
      res.status(200).json({
        user:response
      });
    })
  })
})

router.get('/horasescul',(req,res)=>{
  const tokens = req.headers.authorization.split(' ')[1];
  FindHoras.Views(tokens,(response)=>{
    if(response == false) return res.status(200).end();
    return res.status(200).json({
      user:response
    });
  })
})


module.exports = router;
