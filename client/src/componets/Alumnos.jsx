import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, CardText, CardTitle } from 'material-ui/Card';
//tenemos un o importamos un Card y un CardText  de material-ui/Card
import RaisedButton from 'material-ui/RaisedButton';
//tenemos Un RaisedButton de material-ui/RasiedButton
import TextField from 'material-ui/TextField';

const Alumnos=({
  user
})=>(
  <Card className="container">
    <CardTitle title="Documento"/>
    <div>
      <CardTitle title="NOMBRE" subtitle={user.name}/>
      <CardTitle title="CODIGO" subtitle={user.codigo}/>
      <CardTitle title="CARRERA" subtitle={user.carrera}/>
      <CardTitle title="GRADO" subtitle={user.grado}/>
      <CardTitle title="GRUPO" subtitle={user.grupo}/>
      <CardTitle title="TURNO" subtitle={user.turno}/>
      <CardTitle title="DOMICILIO" subtitle={user.domicilio}/>
      <CardTitle title="NUMERO DE CASA" subtitle={user.domNU}/>
      <CardTitle title="COLONIA" subtitle={user.colonia}/>
      <CardTitle title="CODIGO POSTAL" subtitle={user.cp}/>
      <CardTitle title="PADRE" subtitle={user.padre}/>
      <CardTitle title="MADRE" subtitle={user.madre}/>
      <CardTitle title="TELEFONO DE PADRE" subtitle={user.telPadre}/>
      <CardTitle title="TELEFONO DE MADRE" subtitle={user.telMadre}/>
      <CardTitle title="MUNICIPIO" subtitle={user.municipio}/>
      <CardTitle title="ESTADO" subtitle={user.estado}/>
      <CardTitle title="TELEFONO" subtitle={user.telefono}/>
      <CardTitle title="ESTADO" subtitle={user.estado}/>
      <CardTitle title="CELULAR" subtitle={user.celular}/>
      <CardTitle title="TELEFONO DE EMERGENCIA" subtitle={user.telEmergencia}/>
      <CardTitle title="NSS" subtitle={user.nss}/>
      <CardTitle title="ESTADO" subtitle={user.estado}/>
      <CardTitle title="EDAD" subtitle={user.edad}/>
      <CardTitle title="NACIONALIDAD" subtitle={user.nacionalidad}/>
    </div>
  </Card>
);

export default Alumnos;
