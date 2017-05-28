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

    <CardText> Tu Ya Eres Politecnico</CardText>
    <div>
      <IndexLink to='/registroemp'>Registro</IndexLink>
    </div>
    <div>
      <IndexLink to="/viewsemp">Datos</IndexLink>
    </div>
    <div>
      <IndexLink to="/carreras">carreras</IndexLink>
    </div>
      
  </Card>

);

Ingreso.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Ingreso;
