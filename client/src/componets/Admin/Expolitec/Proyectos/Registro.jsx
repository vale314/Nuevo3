import React, { PropTypes } from 'react';
//importamos a reacr y PropTypes de React
import { Link } from 'react-router';
import { Card, CardText, CardTitle } from 'material-ui/Card';
//importamos Card Cardtext de mastererial-ui  Cards
import RaisedButton from 'material-ui/RaisedButton';
//importamos RasisedButton de
import TextField from 'material-ui/TextField';
//importamos TextField de material-uis
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const SignUpForm = ({
  onSubmit,
  onChange,
  errors,
  user,
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
          <h2 className="card-heading">{user.name}</h2>

          {errors.summary && <p className="error-message">{errors.summary}</p>}

          <div className="field-line">
            <TextField
              floatingLabelText="Nombre"
              name="name"
              hintText="Valentin Alejandro Ruiz Ortiz"
              errorText={errors.name}
              onChange={onChange}
              value={user.name}
            />
          </div>



          <div className="field-line">
            <TextField
              floatingLabelText="descripcion"
              name="descripcion"
              hintText="Que hace la empresa Nombrad"
              errorText={errors.descripcion}
              onChange={onChange}
              value={user.descripcion}
              multiLine={true}
            />
          </div>



          <div className="field-line">
            <TextField
              floatingLabelText="Celular"
              name="celular"
              type="Number"
              errorText={errors.celular}
              onChange={onChange}
              value={user.celular}
            />
          </div>

          <div className="field-line">
            <TextField
              floatingLabelText="tamaño"
              name="tamaño"
              errorText={errors.tamaño}
              onChange={onChange}
              value={user.tamaño}
            />
          </div>


          <div className="button-line">
            <RaisedButton type="submit" label="Save!" primary />
          </div>



          <CardText>Registro<Link to={'/registroproyea'}>Alterar</Link></CardText>

          <CardText>Password<Link to={'/passwordaproye'}>Alterar</Link></CardText>
        </form>
      </Card>
    </div>
);

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default SignUpForm;
