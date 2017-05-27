import React from 'react';

function list(users){

  return (
    users.map((user)=>{
      return(<li key={user.codigo} onClick={x=>{handleClick(user.codigo)}}>{user.codigo}</li>)
    })
  );
}


function handleClick(codigo){



}

module.exports.list=list;
