import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { Link, IndexLink } from 'react-router';


const Ingreso = () => (
  <Card className="container">
    <CardTitle
      title="Politecnico"
    />
    <div>
      <IndexLink to="/registrop">Registro</IndexLink>
    </div>
    <div>
      <IndexLink to="/registropa">Integrantes</IndexLink>
  </div>
  </Card>

);



export default Ingreso;
