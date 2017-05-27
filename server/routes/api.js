const express = require('express');
const Registrp = require('../Registro/find');
const Views = require('../Registro/Admin/Emp/FindC')
const router = new express.Router();
const View = require('../Registro/Admin/Emp/Findi')
const Seleccion = require('../Registro/Seleccion/Seleccion.js')
const Validation = require('../Registro/validation')
const Datas = require('../Registro/Datas')
  router.get('/dashboard', (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    Registrp.find(token,(response)=>{
      Datas.datas(token.calificacion,(response3)=>{

        if (response3==3){
          res.status(200).json({
            message: "Aviso",
            fecha:false
          });
        }else if(response){
          res.status(200).json({
            fecha:response3,
            message: "Aviso"
          });
        }
      })

    })
  });

  router.get('/registro', (req, res) =>{
    const token = req.headers.authorization.split(' ')[1];
    Registrp.find(token, (response)=>{

      var user = response;
      let name = user.name;


      if(response.empresa){
        return res.status(200).json({
          name: user.name,
          user:user,
          id: user.id,
          msj:'true'
        })
      }
      return res.status(200).json({
        name: user.name,
        user: user,
        id: user.id
      });
    });
  });



router.get('/views', (req, res)=>{
  const token = req.headers.authorization.split(' ')[1];
  Registrp.find(token , (response)=>{
    Views.find(response.carrera,(response1,cantidad)=>{
      if(response1==1) {
        return res.status(404).end();
      }
      if(!response.sexo|| !response.carrera) return res.status(409).end();
      if(response.empresa) return res.status(201).json({
        codeEmp:response.codeEmp
      });
      Validation.validate(response.calificacion,(response5)=>{

        if(response5==0) return res.status(206).end();
        if(response5==403) return res.status(403).end();
        if(response5==417) return res.status(417).end();

        if(response5 ===200){


          const array={sex:response.sexo,carrera:response.carrera,users:response1};

          const response3 =Views.sex(array);
            return res.status(200).json({
              users:response3,
              cantidad:cantidad
            });
        }

      })
  })
  })
})


router.get('/view',(req,res)=>{
  const token = req.headers.accepts.split(' ')[1];
  const codigo={codigo:token, name:'', email:''};
  View.find(codigo,(respuesta)=>{
    if(respuesta== false){
      return res.status(404).end();
    }
    res.status(200).json({
      user:respuesta
    });
  })
})


router.get('/seleccion',(req,res)=>{
  const token = req.headers.authorization.split(' ')[1];
  const codigo = req.headers.accepts.split(' ')[1];
  Registrp.find(token,(response3)=>{
    Validation.validate(response3.calificacion,(response5)=>{
      if(response5==0) return res.status(206).end();
      if(response5==403){
        return res.status(403).end()
      }else if(response5 ==417){
        return res.status(417).end();
      }
        if(response5==200){
            View.find(response3,(response)=>{
              const msj =[response3,codigo];
              Seleccion.Seleccion(msj,(response1)=>{
                if(response1===3){
                  return res.status(500).end();
                  console.log('error');
                }
                return res.status(200).json({
                  codeEmp:response1
                });
              })
            })
          }
    })

  })
})



module.exports = router;
