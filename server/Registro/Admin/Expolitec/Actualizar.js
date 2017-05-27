const Universidad = require('mongoose').model('Universidades');
const res = require('../../Emp/Extra/res');
const Find = require('./find');
const FHoras = require('./FHoras');
const Expol = require('mongoose').model('HoursExpol');

function registro(a,callback){
    const codigo=a[0];
    const hours=res.res(a[1])
    const d = a[2];
    Find.find(a[0],(responses)=>{

        if(responses == false) return callback(false);


        if(d=='1'){

            Finds(d,(response)=>{
              if(response.fulls ==1){
                Universidad.update({'_id':responses._id},{$set:{'dia1':hours}},(UserErr,User)=>{
                  if(UserErr || !User) {
                    console.log(UserErr)
                    return callback(false);
                  }
                return callback()
                })
              }else{
                  if(response == 1) return callback(1)
                  if (response == 3) return callback(3)
                  decremento([d,hours,response.hours],(response)=>{
                    if(response == 1) return callback(1)
                    if(response) return callback(response)
                    Universidad.update({'_id':responses._id},{$set:{'dia1':hours}},(UserErr,User)=>{
                      if(UserErr || !User) {
                        console.log(UserErr)
                        return callback(false);
                      }
                    return callback()

                  })
                })
              }
          })
        }
        else if(d=='2'){

            Finds(d,(response)=>{
              if(response == 1) return callback(1)
              if (response == 3) return callback(3)
              decremento([d,hours,response.hours],(response)=>{
                if(response == 1) return callback(1)
                if(response) return callback(response)
                Universidad.update({'_id':responses._id},{$set:{'dia2':hours}},(UserErr,User)=>{
                  if(UserErr || !User) {
                    console.log(UserErr)
                    return callback(false);
                  }
                return callback()
              })
            })
          })
        }
        else if(d=='3'){

            Finds(d,(response)=>{
              if(response == 1) return callback(1)
              if (response == 3) return callback(3)
              decremento([d,hours,response.hours],(response)=>{
                if(response == 1) return callback(1)
                if(response) return callback(response)
                Universidad.update({'_id':responses._id},{$set:{'dia3':hours}},(UserErr,User)=>{

                  if(UserErr || !User) {
                    console.log(UserErr)
                    return callback(false);
                  }
                return callback()
              })
            })
          })
        }

      })





    // var bodys =JSON.stringify(hours);
    // var str = '[' + bodys + ']';
    // str = JSON.parse(str);

    // const lyrics = ['A','B','C','D','E','F','G','H'];
    // lyrics.map((l)=>{
    //   var n = Number(str[0][l].alumnos)
    //   str[0][l].alumnos = n;
    //
    // })
    // console.log(hours)




}





function Finds(dia,callback){
  FHoras.registro(dia,(response)=>{
    if (response == 1) return callback(1)
    if (response == 3) return callback(3)
     return callback(response);
  })
}

function decremento(datas,callback){
  const dia = datas[0];
  const horas = datas[1];
  var Fhoras = datas[2][0];
  const errors ={};
  var booleans = false;
  if(Fhoras == null) return callback(1);
  const alpha =['A','B','C','D','E','F','G','H'];
  alpha.map((h)=>{
    Fhoras[h] = Fhoras[h]-horas[h]
    if(Fhoras[h]<0){
     errors[h] = "por favor una cantidad menor "
     booleans = true;
    }
  });
  if(booleans){
    return callback(errors);
  }



  Expol.update({'name':dia},{$set:{'hours':Fhoras}},(UserErr,User)=>{

    if(UserErr || !User) {

      console.log(UserErr)
      return callback(1);
    }
    return callback()
  })
}

module.exports={
  registro:registro
}
