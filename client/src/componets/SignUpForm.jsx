import React, { PropTypes } from 'react';
//importamos a reacr y PropTypes de React
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
//importamos Card Cardtext de mastererial-ui  Cards
import RaisedButton from 'material-ui/RaisedButton';
//importamos RasisedButton de
import TextField from 'material-ui/TextField';
//importamos TextField de material-uis
import Auth from '../modules/Auth';

const SignUpForm = ({
  onSubmit,
  onChange,
  errors,
  user,
}) => (
  <div>
  {Auth.isUserAuthenticated() ==3 ? (
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
            <li><Link to="/insertarC">insertar</Link></li>
          </ul>
          <ul className="nav navbar-nav">
            <li><Link to="/veral">ver</Link></li>
          </ul>
          <ul className="nav navbar-nav">
            <li><Link to="/busquedaa">modificar</Link></li>
          </ul>
          <ul className="nav navbar-nav">
            <li><Link to="/signup">Agregar</Link></li>
          </ul>
        </div>
      </div>
      </nav>

      </div>
      ) : (
        <div>

        </div>

      )}
    <Card className="container">
      <form action="/" onSubmit={onSubmit}>
        <h2 className="card-heading">Sign Up</h2>

        {errors.summary && <p className="error-message">{errors.summary}</p>}

        <div className="field-line">
          <TextField
            floatingLabelText="Name"
            name="name"
            errorText={errors.name}
            onChange={onChange}
            value={user.name}
          />
        </div>

        <div className="field-line">
          <TextField
            floatingLabelText="Email"
            name="email"
            errorText={errors.email}
            onChange={onChange}
            value={user.email}
          />
        </div>
        <div className="field-line">
          <TextField
            floatingLabelText="Codigo"
            type="number"
            name="codigo"
            errorText={errors.codigo}
            onChange={onChange}
            value={user.codigo}
          />
        </div>

        <div className="field-line">
          <TextField
            floatingLabelText="Password"
            type="password"
            name="password"
            onChange={onChange}
            errorText={errors.password}
            value={user.password}
          />
        </div>

        <div className="button-line">
          <RaisedButton type="submit" label="Create New Account" primary />
        </div>

        <CardText>Already have an account? <Link to={'/login'}>Log in</Link></CardText>

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
