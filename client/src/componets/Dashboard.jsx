import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { Link, IndexLink } from 'react-router';


const Dashboard = ({ secretData, fecha }) => (
<div>
    <Card className="container">
      {document.body.id=""}
      <CardTitle
        title="Politecnico"
        subtitle="Tu tienes accesso."
      />

      {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>{secretData}</CardText>}

      <CardText> los datos que proporciones seran bajo tu responsabilidad y su gramatica</CardText>
      <IndexLink to="/registro">Registro</IndexLink>
      <div>
      </div>
      <div>
      <IndexLink to="/vistas">Datos</IndexLink>
      </div>
      <div>
        <IndexLink to="/selview"> Empresas</IndexLink>
      </div>



    </Card>
    {fecha &&

      <Card className="container">

          <CardTitle title="Hora De Seleccion"/>
          <CardText>{fecha[0]}</CardText>
          <CardText>{fecha[1]}</CardText>

      </Card>
    }
  </div>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
