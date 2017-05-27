import React from 'react';
import {Card, CardTitle} from 'material-ui/Card';
import {CardText} from 'material-ui';
import { Link, IndexLink } from 'react-router';
const HomePgE = () =>(
  // tenemos una constante llamada HomePage
  <Card className="container">

    <CardTitle title="Bienvenidos Sea Usted" />
    <CardText>
          Para el Registro PorFavor Contactese con El profesor simon en el siguiente correo electronico:
    </CardText>
    <IndexLink to="/entrar">Log In</IndexLink>

  </Card>
);

export default HomePgE;
