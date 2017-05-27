import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { Link, IndexLink } from 'react-router';


const Ingreso = () => (
  <Card className="container">
    <CardTitle
      title="Politecnico"
      subtitle="HELLOS"
    />
    <IndexLink to="/registrop">Registro</IndexLink>
    <IndexLink to="/registropa">Integrantes</IndexLink>
  </Card>

);



export default Ingreso;
