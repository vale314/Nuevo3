import React from 'react';
import {Card, CardTitle} from 'material-ui/Card';
import { Link, IndexLink } from 'react-router';

const HomePage = () =>(
  // tenemos una constante llamada HomePage
  <div>
    <Card className="container">
      <CardTitle subtitle="Estas casi borrando la base de datos completamente regresa"/>
      <CardTitle title="ALL"/>
      <IndexLink to="/delete">Eliminar</IndexLink>
    </Card>
    <Card className="container">
      <CardTitle title="Empresas" />
      <IndexLink to="/deleteE">Eliminar</IndexLink>
    </Card>
    <Card className="container">
      <CardTitle title="Alumnos"/>
      <IndexLink to="/deleteAl">Eliminar</IndexLink>
    </Card>
    <Card className="container">
      <CardTitle title="Codigos"/>
      <IndexLink to="/deletec">Eliminar</IndexLink>
    </Card>
    <Card className="container">
      <CardTitle title="Codigos By Proyectos"/>
      <IndexLink to="/deleteccp">Eliminar</IndexLink>
    </Card>
    <Card className="container">
      <CardTitle title="Codigos By Unive"/>
      <IndexLink to="/deleteccu">Eliminar</IndexLink>
    </Card>
    <Card className="container">
      <CardTitle title="Proyectos"/>
      <IndexLink to="/deletecp">Eliminar</IndexLink>
    </Card>
    <Card className="container">
      <CardTitle title="Universidades"/>
      <IndexLink to="/deletecu">Eliminar</IndexLink>
    </Card>
  </div>
);

export default HomePage;
//tenemos una className llamada container
//expotamos una contante que tiene una clase y tiene un atrubuto Titulo
// tenemos un CardTitle  y titulo llamado React Application y un subtitle
