import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
//tenemos un o importamos un Card y un CardText  de material-ui/Card
import RaisedButton from 'material-ui/RaisedButton';
//tenemos Un RaisedButton de material-ui/RasiedButton
import TextField from 'material-ui/TextField';




//importamos un TextField de material-ui/TextField
/* tenemos un Card
      un card es una targeta de materiañ que sirve como un punto
      de entrasda de informacion que sera mas detallada
      las targetas o CARDS pueden tener texto, foto y un enlace sobre un solo
      tipo de tema pueden mostar el contenido que tiene tenemos tambien
      son como si fueran un bloque de informacion
*/

const LoginForm = ({
  onSubmit,
  onChange,
  errors,
  successMessage,
  addAlert,
  user
}) => (
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
        <li><Link to="/insertaruni">Escuela</Link></li>
      </ul>
      <ul className="nav navbar-nav">
        <li><Link to="/insertarpro">Proyectos</Link></li>
      </ul>
      <ul className="nav navbar-nav">
        <li><Link to="/expolifd">Dias</Link></li>
      </ul>
      <ul className="nav navbar-nav">
        <li><Link to="/viewsescul"> Ver-Escuelas</Link></li>
      </ul>
      <ul className="nav navbar-nav">
        <li><Link to="/viewsproye"> Ver-Proyectos</Link></li>
      </ul>
      <ul className="nav navbar-nav">
        <li><Link to="/busquedau">FINDS-ESCUL</Link></li>
      </ul>
      <ul className="nav navbar-nav">
        <li><Link to="/busquedap">FINDS-Proye</Link></li>
      </ul>
      <ul className="nav navbar-nav">
        <li><Link to="/mensa">Mensa</Link></li>
      </ul>
    </div>
  </div>
</nav>
  <Card className="container">


    <form action="/" onSubmit={onSubmit}>

      <h2 className="card-heading">CODES-SCHOOL</h2>

      {errors.summary && <p className="error-message">Error</p>}

      <div className="field-line">
        <TextField
          floatingLabelText="codigo"
          name="codigo"
          type="Number"
          errorText={errors.codigo}
          onChange={onChange}
          value={user.codigo}
          multiLine={true}
        />
      </div>

      <div className="button-line">
        <RaisedButton type="submit" label="Save!" primary />
      </div>

    </form>
  </Card>
  </div>
);

export default LoginForm;
