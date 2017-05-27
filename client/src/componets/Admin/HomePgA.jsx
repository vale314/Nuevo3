import React from 'react';
import {Card, CardTitle} from 'material-ui/Card';
import {CardText} from 'material-ui';
import { Link, IndexLink } from 'react-router';
const HomePgA = () =>(
  // tenemos una constante llamada HomePage
  <Card className="container">

    <CardTitle title="Bienvenidos Sea Usted" />
    <CardText>
          Si no eres el Admin(Administrador) regresa de lo contrario se tomaran procedimeintos en tu contra
    </CardText>
    <IndexLink to="/adminlogin">Log In</IndexLink>

  </Card>
);

export default HomePgA;
