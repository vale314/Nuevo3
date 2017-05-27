import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { Link, IndexLink } from 'react-router';


const Ingreso = ({ secretData }) => (
  <Card className="container">
  {document.body.id=""}
<CardTitle
      title="Politecnico"
      subtitle="Tu tienes accesso."
    />

    {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>{secretData}</CardText>}

    <CardText> Tu eres una Empresa Hola</CardText>

    <IndexLink to='/registroemp'>Registro</IndexLink>
    <IndexLink to="/viewsemp">Datos</IndexLink>
    <IndexLink to="/carreras">carreras</IndexLink>
  </Card>

);

Ingreso.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Ingreso;
