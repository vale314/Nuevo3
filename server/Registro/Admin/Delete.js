const Empresas = require('mongoose').model('Empresas');
const Users = require('mongoose').model('User');
const Codigos = require('mongoose').model('Codigos');
const Hours = require('mongoose').model('Hours');
const CodigosP = require('mongoose').model('CodeProyectos');
const CodigosUnive = require('mongoose').model('CodeUniversidades');
const Proyectos = require('mongoose').model('Proyectos');
const Universidades = require('mongoose').model('Universidades');

function Empresa(){
  Empresas.remove({},(err)=>{
    if(err) console.log(err);
  })
}

function User(){
  Users.remove({},(err)=>{
    if(err) console.log(err);
  })
}

function Codigo(){
  Codigos.remove({},(err)=>{
    if(err) console.log(err);
  })
}

function HoursF(){
  Hours.remove({},(err)=>{
    if(err) console.log(err);
  })
}
function CodigoPF(){
  CodigosP.remove({},(err)=>{
    if(err) console.log(err);
  })
}

function CodigosUniveF(){
  CodigosUnive.remove({},(err)=>{
    if(err) console.log(err);
  })
}

function ProyectosF(){
  Proyectos.remove({},(err)=>{
    if(err) console.log(err);
  })
}
function UniversidadesF(){
  Universidades.remove({},(err)=>{
    if(err) console.log(err);
  })
}
module.exports={
  Empresa:Empresa,
  User:User,
  Codigo: Codigo,
  CodigoPF:CodigoPF,
  CodigosUniveF:CodigosUniveF,
  ProyectosF:ProyectosF,
  UniversidadesF:UniversidadesF,

}
