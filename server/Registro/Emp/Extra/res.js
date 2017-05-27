

function res(bod){


  var bodys =JSON.stringify(bod);
  var res = bodys.slice(2);
  var length = res.length;

  res = res.slice( 0 ,length-5);
  var str = '"' + res + '"';
  str = JSON.parse(JSON.parse(str));
  //console.log(str);
  return(str)
}

module.exports={
  res:res
}
