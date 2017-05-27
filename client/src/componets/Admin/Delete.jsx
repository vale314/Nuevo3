import React from 'react';
import {Card, CardTitle} from 'material-ui/Card';
import { Link, IndexLink } from 'react-router';

const HomePage = () =>(
  // tenemos una constante llamada HomePage
  <div>
    <Card className="container">

      <CardTitle title="ALL" subtitle="Estas casi borrando la base de datos completamente regresa"/>
      <IndexLink to="/delete">Eliminar</IndexLink>
    </Card>
    <Card className="container">
      <CardTitle title="Empresas" subtitle="Estas casi borrando la base de datos completamente regresa"/>
      <IndexLink to="/deleteE">Eliminar</IndexLink>
    </Card>
    <Card className="container">
      <CardTitle title="Alumnos" subtitle="Estas casi borrando la base de datos completamente regresa"/>
      <IndexLink to="/deleteAl">Eliminar</IndexLink>
    </Card>
    <Card className="container">
      <CardTitle title="Codigos" subtitle="Estas casi borrando la base de datos completamente regresa"/>
      <IndexLink to="/deletec">Eliminar</IndexLink>
    </Card>
    <Card className="container">
      <CardTitle title="Codigos By Proyectos" subtitle="Estas casi borrando la base de datos completamente regresa"/>
      <IndexLink to="/deleteccp">Eliminar</IndexLink>
    </Card>
    <Card className="container">
      <CardTitle title="Codigos By Unive" subtitle="Estas casi borrando la base de datos completamente regresa"/>
      <IndexLink to="/deleteccu">Eliminar</IndexLink>
    </Card>
    <Card className="container">
      <CardTitle title="Proyectos" subtitle="Estas casi borrando la base de datos completamente regresa"/>
      <IndexLink to="/deletecp">Eliminar</IndexLink>
    </Card>
    <Card className="container">
      <CardTitle title="Universidades" subtitle="Estas casi borrando la base de datos completamente regresa"/>
      <IndexLink to="/deletecu">Eliminar</IndexLink>
    </Card>
  </div>
);

export default HomePage;
//tenemos una className llamada container
//expotamos una contante que tiene una clase y tiene un atrubuto Titulo
// tenemos un CardTitle  y titulo llamado React Application y un subtitle
