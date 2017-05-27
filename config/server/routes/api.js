const express = require('express');

const router = new express.Router();

router.get('/dashboard', (req, res) => {
  res.status(200).json({
    message: "Aviso"
  });
});

router.get('/registro', (req, res) =>{
  const token = req.headers.authorization.split(' ')[1];
  console.log(token);
  res.status(200).json({
    message: " hello"
  });
});



module.exports = router;
