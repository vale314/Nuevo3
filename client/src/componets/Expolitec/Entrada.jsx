import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { Link, IndexLink } from 'react-router';


const Ingreso = ({ secretData }) => (
  <Card className="container">
    <CardTitle
      title="Politecnico"
      subtitle="Tu tienes accesso."
    />

    {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>{secretData}</CardText>}

    <CardText> Tu eres una Universidad Hola</CardText>

    <IndexLink to='/expolfechau'>Fecha </IndexLink>
    <IndexLink to='/registrouni'>Registro</IndexLink>
  </Card>

);

Ingreso.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Ingreso;
