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
  name,
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
        <h2 className="card-heading">{name}</h2>

        {errors.summary && <p className="error-message">{errors.summary}</p>}


        <div className="field-line" >
          <CardTitle> 9-10</CardTitle>
              <div className="field-line">
                <TextField
                  floatingLabelText="Cantidad"
                  name="A"
                  type="Number"
                  errorText={errors.A}
                  onChange={onChange}
                  value={user.A}
                />
              </div>
        </div>
        <div className="field-line" >
          <CardTitle> 10-11</CardTitle>
              <div className="field-line">
                <TextField
                  floatingLabelText="Cantidad"
                  name="B"
                  type="Number"
                  errorText={errors.B}
                  onChange={onChange}
                  value={user.B}
                />
              </div>
        </div>
        <div className="field-line" >
          <CardTitle> 11-12</CardTitle>
              <div className="field-line">
                <TextField
                  floatingLabelText="Cantidad"
                  name="C"
                  type="Number"
                  errorText={errors.C}
                  onChange={onChange}
                  value={user.C}
                />
              </div>
        </div>
        <div className="field-line" >
          <CardTitle> 12-13</CardTitle>
              <div className="field-line">
                <TextField
                  floatingLabelText="Cantidad"
                  name="D"
                  type="Number"
                  errorText={errors.D}
                  onChange={onChange}
                  value={user.D}
                />
              </div>
        </div>
        <div className="field-line" >
          <CardTitle> 13-14</CardTitle>
              <div className="field-line">
                <TextField
                  floatingLabelText="Cantidad"
                  name="E"
                  type="Number"
                  errorText={errors.E}
                  onChange={onChange}
                  value={user.E}
                />
              </div>
        </div>
        <div className="field-line" >
          <CardTitle> 14-15</CardTitle>
              <div className="field-line">
                <TextField
                  floatingLabelText="Cantidad"
                  name="F"
                  type="Number"
                  errorText={errors.F}
                  onChange={onChange}
                  value={user.F}
                />
              </div>
        </div>
        <div className="field-line" >
          <CardTitle> 15-16</CardTitle>
              <div className="field-line">
                <TextField
                  floatingLabelText="Cantidad"
                  name="G"
                  type="Number"
                  errorText={errors.G}
                  onChange={onChange}
                  value={user.G}
                />
              </div>
        </div>
        <div className="field-line" >
          <CardTitle> 16-17</CardTitle>
              <div className="field-line">
                <TextField
                  floatingLabelText="Cantidad"
                  name="H"
                  type="Number"
                  errorText={errors.H}
                  onChange={onChange}
                  value={user.H}
                />
              </div>
        </div>


        <div className="button-line">
          <RaisedButton type="submit" label="Save!" primary />
        </div>
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
