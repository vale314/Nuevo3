import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { Link, IndexLink } from 'react-router';


const Dashboard = ({ secretData, Alumnos, Empresas,Proyectos,Universidades }) => (
  <div>
    <Card className="container">
      {document.body.id=""}
      <CardTitle
        title="Politecnico"
        subtitle="Tu tienes accesso."
      />

      {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>{secretData}</CardText>}

    </Card>

    <Card className="container">
      {document.body.id=""}
      <CardTitle
        title="Alumnos"
      />



      <div className="alert alert-success" role="alert">{Alumnos.cantidad}</div>
      <div className="alert alert-warning" role="alert">{Alumnos.todos}</div>
      <div className="alert alert-danger" role="alert">{Alumnos.compañia}</div>





    </Card>

    <Card className="container">
      {document.body.id=""}
      <CardTitle
        title="Empresas"
      />



      <div className="alert alert-success" role="alert">{Empresas.cantidad}</div>
      <div className="alert alert-danger" role="alert">{Empresas.all}</div>

    </Card>

    <Card className="container">
      {document.body.id=""}
      <CardTitle
        title="Proyectos"
      />



      <div className="alert alert-success" role="alert">{Proyectos.cantidad}</div>
      <div className="alert alert-warning" role="alert">{Proyectos.todos}</div>

    </Card>

    <Card className="container">
      {document.body.id=""}
      <CardTitle
        title="Universidades"
      />



      <div className="alert alert-success" role="alert">{Universidades.cantidad}</div>
      <div className="alert alert-warning" role="alert">{Universidades.todos}</div>

    </Card>

</div>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
