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
      <CardTitle title="Emrpesa" subtitle={user.name}/>
      <CardTitle title="Representante Legal Nombre" subtitle={user.repLegal}/>
      <CardTitle title="Formato" subtitle={user.formato}/>
      <CardTitle title="Telefono" subtitle={user.telefono}/>
      <CardTitle title="Celular" subtitle={user.celular}/>
      <CardTitle title="Rubro" subtitle={user.rubro}/>
      <CardTitle title="Tamaño" subtitle={user.tamaño}/>
      <CardTitle title="Numero De Trabajadores" subtitle={user.numT}/>
      <CardTitle title="Calle" subtitle={user.calle}/>
      <CardTitle title="Numero" subtitle={user.domN}/>
      <CardTitle title="Colonia" subtitle={user.colonia}/>
      <CardTitle title="Municipio" subtitle={user.municipio}/>
      <CardTitle title="Estado" subtitle={user.estado}/>
      <CardTitle title="Codigo Postal" subtitle={user.cp}/>
      <CardTitle title="Departamento De Asignacion" subtitle={user.depDA}/>
      <CardTitle title="Cargo" subtitle={user.cargo}/>
    </div>
  </Card>
);

export default Alumnos;
