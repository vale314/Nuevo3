import React from 'react';
import {Card, CardTitle} from 'material-ui/Card';
import {CardText} from 'material-ui';
import { Link, IndexLink } from 'react-router';

const HomePgE = () =>(
  // tenemos una constante llamada HomePage
  <Card className="container">

    <CardTitle title="Politecnico" />
    <CardText>
          Para Cambiar Email
    </CardText>
    <IndexLink to="/perfiladmin">EMAIL</IndexLink>
    <IndexLink to="/perfilpasswordadmin">PASSWORD</IndexLink>
  </Card>
);

export default HomePgE;
