const express = require('express');
const Registrp = require('../Registro/Admin/Find');
const router = new express.Router();
const mongoose = require('mongoose');
const Views = require('../Registro/Admin/Emp/Views.js')
const Finds = require('../Registro/Admin/Emp/Finds.js')
const FindI = require('../Registro/Admin/Emp/Findi')
const FindC = require('../Registro/Admin/Emp/FindC')
const deleteEmp = require('../Registro/Admin/Emp/Delete')
const InsertA = require('../Registro/Admin/Alumnos/InsertA')
const DeleteAlumnos = require('../Registro/Admin/Alumnos/Delete')
const FindA = require('../Registro/Admin/Alumnos/FindS')
const FindCA = require('../Registro/Admin/Alumnos/FindC')
const ViewA = require('../Registro/Admin/Alumnos/Views')
const BusquedaA = require('../Registro/Admin/Alumnos/Findi')
const Delete = require('../Registro/Admin/Delete')
const Hours = require('../Registro/Seleccion/Hours');
const Fecha = require('../Registro/Seleccion/Dates')
const moment = require('moment');
const PasswordA = require('../Registro/Admin/Alumnos/Password');
const PasswordE = require('../Registro/Admin/Emp/Password');
const Fechas = require('../Registro/Admin/Alumnos/Fecha');
const DeleteF = require('../Registro/Admin/Alumnos/FDelete');
const MongoClient = require("mongodb").MongoClient;
const Smlab = require('../Registro/Admin/Saves/mlab');
const User= require('mongoose').model('User');
const Smla0 = require('../Registro/Admin/Saves/mlab0')
const insertU = require('../Registro/Admin/Expolitec/InsertUNI');
const insertP = require('../Registro/Admin/Expolitec/Proyectos/InsertProye');
const FDias = require('../Registro/Admin/Expolitec/FDias');
const FHoras = require('../Registro/Admin/Expolitec/FHoras')
const FHSave = require('../Registro/Admin/Expolitec/FHSaves')
const Fulls = require('../Registro/Admin/Expolitec/Fulls')
const ViewsEscul = require('../Registro/Admin/Expolitec/Views');
const DeleteEscul = require('../Registro/Admin/Expolitec/Delete');
const FindsProye = require('../Registro/Admin/Expolitec/Proyectos/Finds/Finds')
const DeleteProye = require('../Registro/Admin/Expolitec/Proyectos/Delete')
const FindEscul = require('../Registro/Admin/Expolitec/Find')
const HorasEscul = require('../Registro/Admin/Expolitec/Horas')
const findP = require('../Registro/Admin/Expolitec/Proyectos/Finds/FindC')
const PasswordExP = require('../Registro/Admin/Expolitec/Password')
const PasswordProye = require('../Registro/Admin/Expolitec/Proyectos/Password')
const BusquedaU = require('../Registro/Admin/Expolitec/Findi');
const BusquedaP = require('../Registro/Admin/Expolitec/Proyectos/Busqueda')
const Panorama = require('../Registro/Admin/Status/Index')
const Mensa = require('../Registro/Admin/Expolitec/Mensa')
const Files = require('../Registro/Admin/Emp/Files');
const FilesStudents = require('../Registro/Admin/Alumnos/Files')

  router.get('/dashboard', (req, res) => {

    Panorama.calls((response)=>{
        console.log(response)
        res.status(200).json({
          message: "Conncetion",
          status:response
        });
    })

    });

  router.get('/filesE',(req,res)=>{
    Files.finde((response)=>{
        if(response == 1) return res.status(400).end();
        //const paths = 'server/Registro/Admin/Emp/output.xml'
        if(response == false){
          // res.setHeader('Content-disposition', 'attachment; filename=' + 'output.xml');
          // var rstream = fs.createReadStream(paths);
          //hellosworlds
          // return res.download(paths);
          return res.status(200).end();
        }




  })
})

router.get('/filesS',(req,res)=>{
  FilesStudents.finde((response)=>{
      if(response == 1) return res.status(400).end();
      //const paths = 'server/Registro/Admin/Emp/output.xml'
      if(response == false){
        // res.setHeader('Content-disposition', 'attachment; filename=' + 'output.xml');
        // var rstream = fs.createReadStream(paths);
        //hellosworlds
        // return res.download(paths);
        return res.status(200).end();
      }




})
})
  router.get('/registro', (req, res) =>{
    const token = req.headers.authorization.split(' ')[1];
    Registrp.find(token, (response)=>{

      var user = response;
      let name = user.name;

      res.status(200).json({
        name: user.name,
        user: user,
        id: user.id
      });
    });
  });

  router.get('/ddb',(req,res)=>{

        mongoose.connection.db.dropDatabase();
        res.status(200).end();


  });

  router.get('/dae',(req,res)=>{
          Delete.Empresa();
          res.status(200).end();
  });

  router.get('/daa',(req,res)=>{
        Delete.User()
        res.status(200).end();
  });

  router.get('/dac',(req,res)=>{
        Delete.Codigo()
        res.status(200).end();
  });

  router.get('/dacps',(req,res)=>{
        Delete.CodigoPF()
        res.status(200).end();
  });
  router.get('/dacus',(req,res)=>{
        Delete.CodigosUniveF()
        res.status(200).end();
  });
  router.get('/dap',(req,res)=>{
        Delete.ProyectosF()
        res.status(200).end();
  });
  router.get('/dau',(req,res)=>{
        Delete.UniversidadesF()
        res.status(200).end();
  });


router.get('/viewse',(req,res)=>{
    Views.find(req,(response)=>{

      res.status(200).json({
        users:response
      });
    });
});


router.get('/cambioemp',(req,res)=>{
    const token = req.headers.accepts.split(' ')[1];
    Finds.find(token,(respo)=>{
      if(respo == false){
        res.status(404);
      }
      if(respo){
          res.status(200).json({
            name: respo.name,
            user: respo,
            id: respo.id
          })
      }
    })
})

router.post('/passworde',(req,res)=>{
  const codigo = req.headers.codigo.split(' ')[1];
  const array=[];
  array[0]= codigo;
  array[1]=req.body.password;
  PasswordE.New(array,(response)=>{
    if(response) return res.status(200).end();
    else return res.status(400).end();
  })
})

  router.post('/modificars',(req,res)=>{
    const body = req.body;

    FindI.find(body,(respo)=>{
      if(respo==false){
        res.status(404).json({
          errors:null,
          error:'Not-Found'
        });
      }
      if(respo){
        res.status(200).json({
          res:respo
        })
      }
    })
  })


  router.post('/busquedaa',(req,res)=>{
    const body = req.body;

    BusquedaA.find(body,(respo)=>{
      if(respo==false){
        res.status(404).json({
          errors:null,
          error:'Not-Found'
        });
      }
      if(respo){
        res.status(200).json({
          res:respo
        })
      }
    })
  })

  router.post('/busquedau',(req,res)=>{
    const body = req.body;

    BusquedaU.find(body,(respo)=>{
      if(respo==false){
        res.status(404).json({
          errors:null,
          error:'Not-Found'
        });
      }
      if(respo){
        res.status(200).json({
          res:respo
        })
      }
    })
  })

  router.post('/busquedap',(req,res)=>{
    const body = req.body;

    BusquedaP.find(body,(respo)=>{
      if(respo==false){
        res.status(404).json({
          errors:null,
          error:'Not-Found'
        });
      }
      if(respo){
        res.status(200).json({
          res:respo
        })
      }
    })
  })

  router.get('/registroempc',(req, res)=>{
    const token ={codigo:req.headers.codigo.split(' ')[1],name:'',email:''};
    FindI.find(token,(response)=>{
      if(response==false){
        res.status(404).json({
          errors:null,
        })
      }
      if(response){
        res.status(200).json({
          user:response.carreras
        })
      }
    })
  })


  router.get('/sel',(req,res)=>{
    const carrera = req.headers.carrera.split(' ');
    var union = carrera.slice(1);
    const string = union.join(' ')

    FindC.find(string,(response)=>{
      if(response == 1) return res.status(404).end();
      res.status(200).json({
        res:response
      })
    })
  })


  router.post('/insertC',(req , res)=>{
    var cuerpos = req.body.codigo.split('\n');
    InsertA.registro(cuerpos,(respuesta)=>{
      if (respuesta){
        return res.status(409).end();
      } else if(respuesta == null){
        return  res.status(200).end();
      }
    })
  })

router.get('/deleteemp',(req,res)=>{
  const codigo = req.headers.accepts.split(' ')[1];
  deleteEmp.Delete(codigo,(respuesta)=>{
    if(respuesta){
      res.status(200).end();
    }
  })
})

router.get('/deletea',(req,res)=>{
  const codigo = req.headers.accepts.split(' ')[1];
  DeleteAlumnos.Delete(codigo,(respuesta)=>{
    if(respuesta){
      res.status(200).end();
    }
  })
})

router.get('/cambioA',(req,res)=>{
    const token = req.headers.accepts.split(' ')[1];
    FindA.find(token,(respo)=>{
      if(respo == false){
        res.status(404);
      }
      if(respo){
          res.status(200).json({
            name: respo.name,
            user: respo,
            id: respo.id
          })
      }
    })
})
router.post('/passworda',(req,res)=>{
  const codigo = req.headers.codigo.split(' ')[1];
  const array=[];
  array[0]= codigo;
  array[1]=req.body.password;
  console.log([array])
  PasswordA.New(array,(response)=>{
    if(response) return res.status(200).end();
    else return res.status(400).end();
  })
})



router.post('/passwordex',(req,res)=>{
  const codigo = req.headers.codigo.split(' ')[1];
  const array=[];
  array[0]= codigo;
  array[1]=req.body.password;
  console.log([array])
  PasswordExP.New(array,(response)=>{
    if(response) return res.status(200).end();
    else return res.status(400).end();
  })
})



router.post('/passwordproye',(req,res)=>{
  const codigo = req.headers.codigo.split(' ')[1];
  const array=[];
  array[0]= codigo;
  array[1]=req.body.password;
  console.log([array])
  PasswordProye.New(array,(response)=>{
    if(response) return res.status(200).end();
    else return res.status(400).end();
  })
})

router.get('/sela',(req,res)=>{
  const carrera = req.headers.carrera.split(' ');
  var union = carrera.slice(1);
  const string = union.join(' ')

  FindCA.find(string,(response)=>{
    if(response == 1) return res.status(404).end();
    res.status(200).json({
      res:response
    })
  })
})


router.get('/viewsa',(req,res)=>{
    ViewA.find(req,(response)=>{

      res.status(200).json({
        users:response
      });
    });
});

router.get('/seleccion',(req,res)=>{
  const val= Hours.get();
  Fecha.fecha((response)=>{
  response=moment(response).format('MMMM Do YYYY, h:mm:ss a');
   return res.status(200).json({
     fecha:response
   });
 })
})

router.get('/viewseleccion',(req,res)=>{
   Fecha.fecha((response)=>{
    if(response===3) return res.status(403).end();
    response=moment(response).format('MMMM Do YYYY, h:mm:ss a');
    return res.status(200).json({
      fecha:response
    });
  })
})

router.get('/fecha',(req,res)=>{
  Fechas.fecha((response)=>{
   if(response){
    return res.status(200).json({
      datas:response
    });
  }else if(!response)   return res.status(404).end()

  });
})

router.get('/fechadelete',(req,res)=>{
  DeleteF.removes( (response)=>{
    if(!response) return res.status(200).end();
    else if(response) return res.status(404).end();
  })
})

router.get('/backup',(req,res)=>{
  Smlab.guardar((response5)=>{
    console.log(response5)
    if(response5==true){
      return res.status(403).end();
    }else{
      return res.status(200).end();
    }
  })
})


router.get('/backup3',(req,res)=>{
  Smla0.guardar((response5)=>{
    if(response5==true){
      return res.status(403).end()
    }else{
      return res.status(200).end()
    }

  })
})

router.post('/insertU',(req,res)=>{
  var cuerpos = req.body.codigo.split('\n');
  insertU.registro(cuerpos ,(respuesta)=>{
    if(respuesta){
      return res.status(409).end();
    }else{
      return res.status(200).end();
    }
  })
})

router.post('/insertP',(req,res)=>{
  var cuerpos = req.body.codigo.split('\n');
  insertP.registro(cuerpos ,(respuesta)=>{
    if(respuesta){
      return res.status(409).end();
    }else{
      return res.status(200).end();
    }
  })
})

router.get('/expolidias',(req,res)=>{
  const codigo = req.headers.dia.split(' ')[1];
  FDias.registro(codigo,(response)=>{
    if(response == 1){
      return res.status(400).end();
    }
    if(response == 3){
      return  res.status(201).end();
    }
    if(response == 0){
      return res.status(200).end();
    }
  })
})

router.get('/expolih',(req,res)=>{
  const codigo = req.headers.codigo.split(' ')[1];
  FHoras.registro(codigo,(respuesta)=>{
    if(respuesta==1){
      res.status(400).end();
      console.log('error')
    }
    if(respuesta == 3){
      console.log('Not-Found');
      return res.status(200).end();
    }
    res.status(200).json({
      user:respuesta
    });

  })
})

router.put('/expolih',(req,res)=>{
  const codigo = req.headers.codigo.split(' ')[1];
  const user = req.body;
  FHSave.registro([codigo,user],(response)=>{
    if(response == 1) return res.status(400).end();
    res.status(200).end();
  })
})
router.get('/fulls',(req,res)=>{
  Fulls.registro((response)=>{
    if(response==1) return res.status(403).end();
    if(response == 5) return res.status(200).json({
      fulls:false
    });
    return res.status(200).json({
      fulls:true
    })
  })
})

router.get('/viewfulls',(req,res)=>{
  FHoras.registro(1,(response)=>{
    if(response == 1) return res.status(400);
    if(response == 3) return res.status(403);
    return res.status(200).json({
      fulls:response.fulls
    })
  })
})
router.get('/viewsescul',(req,res)=>{
  ViewsEscul.find((response)=>{
    if(response == 1) return res.status(400).end();
    return res.status(200).json({
      users:response
    });
  })
})


router.get('/carreras',(req,res)=>{
  const codigo = req.headers.codigo.split(' ')[1];
  findP.find(codigo,(response)=>{
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

router.get('/deleteescul',(req,res)=>{
  const codigo = req.headers.codigo.split(' ')[1];
  DeleteEscul.deletes(codigo,(response)=>{
    if(response) return res.status(200).end();
  })
})

router.get('/viewsproye',(req,res)=>{
  FindsProye.find((response)=>{
    if(response == 1) return res.status(400).end();
    return res.status(200).json({
      users:response
    });
  })
})

router.get('/deleteproye',(req,res)=>{
  const codigo = req.headers.deletes.split(' ')[1];
  DeleteProye.deletes(codigo,(response)=>{
    if(response) return res.status(200).end();
  });
})

router.get('/viewescul',(req,res)=>{
  const codigo = req.headers.accepts.split(' ')[1];
  FindEscul.find(codigo,(response)=>{
    if(!response) return res.status(400).end();
    return res.status(200).json({
      user:response
    });
  })
})

router.get('/horasescul',(req,res)=>{
  const codigo = req.headers.codigo.split(' ')[1];
  const dia = req.headers.dia.split(' ')[1];

  HorasEscul.finds([codigo,dia],(response)=>{
    if(response==false) return res.status(400).end();
    return res.status(200).json({
      user:response
    });
  })

})
router.get('/registrop', (req,res) =>{
  const codigo = req.headers.codigo.split(' ')[1];

  findP.find(codigo, (response)=>{


  return res.status(200).json({
      user: response,
    });
  });
})
router.post('/mensa',(req,res)=>{
  const bodys = req.body;
  Mensa.mensa(bodys,(response)=>{
    if(response == false) return res.status(400).end();

    return res.status(200).end()
  })
})

router.get('/mensa',(req,res)=>{
  Mensa.finds((response)=>{
    if(response == false) return res.status(400).end();

    return res.status(200).json({
      user:response
    });
  })
})
module.exports = router;
