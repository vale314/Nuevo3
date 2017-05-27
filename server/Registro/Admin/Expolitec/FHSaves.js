const Expol = require('mongoose').model('HoursExpol');
const res = require('../../Emp/Extra/res');

function registro(dia,callback){
    const d=dia[0];

    var hours=res.res(dia[1])



    // var bodys =JSON.stringify(hours);
    // var str = '[' + bodys + ']';
    // str = JSON.parse(str);

    // const lyrics = ['A','B','C','D','E','F','G','H'];
    // lyrics.map((l)=>{
    //   var n = Number(str[0][l].alumnos)
    //   str[0][l].alumnos = n;
    //
    // })



      Expol.update({'name':d},{$set:{'hours':hours}},(UserErr,User)=>{

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
