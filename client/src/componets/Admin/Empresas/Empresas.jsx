import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { Link, IndexLink } from 'react-router';


const Dashboard = ({ secretData }) => (
<div>
  <nav className="nav navbar navbar-default navbar-fixed-right" role="navigation" id="nav2">
    <div className="container-fluid">
      <div className="nav-header">
        <button className="navbar-toggle collapsed"
                type="button" data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
         </button>
      </div>
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
          <li><Link to="/insertaremp">insertar</Link></li>
        </ul>
        <ul className="nav navbar-nav">
          <li><Link to="/viewse">ver</Link></li>
        </ul>
        <ul className="nav navbar-nav">
          <li><Link to="/modificars">modificar</Link></li>
        </ul>
      </div>
    </div>
  </nav>
  <Card className="container">
    <CardTitle
      title="Empresas"
      subtitle="Actualizar"
    />

  </Card>

</div>




);



export default Dashboard;
