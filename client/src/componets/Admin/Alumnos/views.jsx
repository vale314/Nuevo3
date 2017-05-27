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
    <Card className="container">
      <form action="/" onSubmit={onSubmit}>
        <h2 className="card-heading">{name}</h2>

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


        <div className="field-line" >
          <CardTitle> Carrera</CardTitle>
              <select name="carrera" onChange={onChange} value={user.carrera} >
                  <option value={''}> </option>
                  <option value={'Tecnologo Profesional En Sistemas Informaticos'}>tpsi</option>
                  <option value={'Tecnologo Profesional En Plasticos'}>TPP</option>
                  <option value={'Tecnologo Profesional En Metalurgia y Fundicion'}>TPMF</option>
                  <option value={'Tecnologo Profesional En Procesos Quimicos Industriales'}>TPPQI</option>
                  <option value={'Tecnologo Profesional Quimico En Analisis y Procesos de Alimentos'}>TPQAPA</option>
                  <option value={'Tecnologo Profesioanl En Mecanica Industrial'}>TPMI</option>
                  <option value={'Tecnologo Profesional En Electricidad Industrial'}>TPEI</option>
              </select>
        </div>

        <div className="field-line" >
          <TextField
            floatingLabelText="Grado"
            name="grado"
            onChange={onChange}
            value={user.grado}
                      disabled
            />
        </div>


        <div className="field-line">
          <TextField
            floatingLabelText="Grupo"
            name="grupo"
            errorText={errors.grupo}
            onChange={onChange}
            value={user.grupo}
          />
        </div>

        <div className="field-line" >
          <CardTitle> Turno</CardTitle>
              <select name="turno" onChange={onChange} value={user.turno} >
                  <option value={''}> </option>
                  <option value={'Matutino'}>MATUTINO</option>
                  <option value={'Vespertino'}>VESPERTINO</option>
              </select>
        </div>

        <div className="field-line">
          <TextField
            floatingLabelText="Calle"
            name="domicilio"
            hintText="NombreCalle"
            errorText={errors.domicilio}
            onChange={onChange}
            value={user.domicilio}
          />
        </div>

        <div className="field-line">
          <TextField
            floatingLabelText="Numero De Casa"
            name="domNU"
            type="Number"
            errorText={errors.domNU}

            onChange={onChange}
            value={user.domNU}
          />
        </div>

        <div className="field-line">
          <TextField
            floatingLabelText="Colonia"
            name="colonia"
            errorText={errors.colonia}
            onChange={onChange}
            value={user.colonia}
          />
        </div>

        <div className="field-line">
          <TextField
            floatingLabelText="postal"
            name="cp"
            type="Number"
            errorText={errors.cp}
            onChange={onChange}
            value={user.cp}
          />
        </div>

        <div className="field-line">
          <TextField
            floatingLabelText="Nombre Del Padre"
            hintText =" Nombre Apellido Apellido"
            name="padre"
            errorText={errors.padre}
            onChange={onChange}
            value={user.padre}
          />
        </div>

        <div className="field-line">
          <TextField
            floatingLabelText="Nombre De La Madre"
            name="madre"
            hintText =" Nombre Apellido Apellido"
            errorText={errors.madre}
            onChange={onChange}
            value={user.madre}
          />
        </div>

        <div className="field-line">
          <TextField
            floatingLabelText="Telefono Del Padre"
            name="telPadre"
            type="Number"
            errorText={errors.telPadre}
            onChange={onChange}
            value={user.telPadre}
          />
        </div>

        <div className="field-line">
          <TextField
            floatingLabelText="Telefono De Madre"
            name="telMadre"
            type="Number"
            errorText={errors.telMadre}
            onChange={onChange}
            value={user.telMadre}
          />
        </div>

        <div className="field-line">
          <TextField
            floatingLabelText="Municipio"
            name="municipio"
            errorText={errors.municipio}
            onChange={onChange}
            value={user.municipio}
          />
        </div>

        <div className="field-line">
          <TextField
            floatingLabelText="Estado"
            name="estado"
            errorText={errors.estado}
            onChange={onChange}
            value={user.estado}
          />
        </div>

        <div className="field-line">
          <TextField
            floatingLabelText="Telefono"
            name="telefono"
            type="Number"
            errorText={errors.telefono}
            onChange={onChange}
            value={user.telefono}
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
            floatingLabelText="TelEmergencia"
            name="telEmergencia"
            type="Number"
            errorText={errors.telEmergencia}
            onChange={onChange}
            value={user.telEmergencia}
          />
        </div>

        <div className="field-line">
          <TextField
            floatingLabelText="Nss"
            name="nss"
            type="Number"
            errorText={errors.nss}
            onChange={onChange}
            value={user.nss}
          />
        </div>

        <div className="field-line">
          <TextField
            floatingLabelText="Edad"
            name="edad"
            type="Number"
            errorText={errors.edad}
            onChange={onChange}
            value={user.edad}
          />
        </div>

        <div className="field-line">
          <TextField
            floatingLabelText="Nacioanlidad"
            name="nacionalidad"
            errorText={errors.nacionalidad}
            onChange={onChange}
            value={user.nacionalidad}
          />
        </div>

        <div className="field-line">
          <TextField
            floatingLabelText="Email"
            name="email"
            value={user.email}
            disabled
          />
        </div>

        <div className="field-line" >
          <CardTitle> Turno</CardTitle>
              <select name="sexo" onChange={onChange} value={user.sexo} >
                  <option value={'null'}> </option>
                  <option value={'Masculino'}>Masculino</option>
                  <option value={'Femenino'}>Femenino</option>
              </select>
        </div>
        <div className="field-line">
            <TextField
              floatingLabelText="calificacion"
              name="calificacion"
              type="Number"
              value={user.calificacion}
              errorText={errors.calificacion}
              onChange={onChange}
            />
        </div>



        <div className="field-line">
          <TextField
            floatingLabelText="Codigo De Empresa"
            name="codeEmp"
            type="Number"
            value={user.codeEmp}
            errorText={errors.codeEmp}
            onChange={onChange}
          />
        </div>

        <div className="field-line">
          <RaisedButton type="submit" label="Create New Account" primary />
        </div>
        <CardText>Password<Link to={'/passa'}>Alterar</Link></CardText>
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
