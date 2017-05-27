const express = require('express');

const router = new express.Router();

const Extra = require('../Registro/Extra/Extra');

router.get('/expolitec',(req,res)=>{
  Extra.finds((response)=>{
    if(response == false) return res.status(400).end();
    return res.status(200).json({
      user:response
    });
  })
})

module.exports = router;
