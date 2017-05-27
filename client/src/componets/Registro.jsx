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
  msj,
}) => (
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

    {!msj &&
      <div className="field-line" >
        <CardTitle> Carrera</CardTitle>
            <select name="carrera" onChange={onChange} value={user.carrera} >
                <option value={'null'}> </option>
                <option value={'Tecnologo Profesional En Sistemas Informaticos'}>tpsi</option>
                <option value={'Tecnologo Profesional En Plasticos'}>TPP</option>
                <option value={'Tecnologo Profesional En Metalurgia y Fundicion'}>TPMF</option>
                <option value={'Tecnologo Profesional En Procesos Quimicos Industriales'}>TPPQI</option>
                <option value={'Tecnologo Profesional Quimico En Analisis y Procesos de Alimentos'}>TPQAPA</option>
                <option value={'Tecnologo Profesioanl En Mecanica Industrial'}>TPMI</option>
                <option value={'Tecnologo Profesional En Electricidad Industrial'}>TPEI</option>
            </select>
      </div>
      }
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
    {!msj &&
      <div className="field-line" >
        <CardTitle> Turno</CardTitle>
            <select name="turno" onChange={onChange} value={user.turno} >
                <option value={'null'}> </option>
                <option value={'Matutino'}>MATUTINO</option>
                <option value={'Vespertino'}>VESPERTINO</option>
            </select>
      </div>
    }
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
          type="Number"
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
          type="Number"
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
          type="Number"
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
    {!msj &&
      <div className="field-line">
      <CardTitle> Sexo</CardTitle>
          <select name="sexo" onChange={onChange} value={user.sexo} >
              <option value={'null'}> </option>
              <option value={'Masculino'}>MASCULINO</option>
              <option value={'Femenino'}>FEMENINO</option>
          </select>
      </div>
    }
      <div className="button-line">
        <RaisedButton type="submit" label="Create New Account" primary />
      </div>

      <CardText>Already have an account? <Link to={'/login'}>Log in</Link></CardText>
    </form>
  </Card>
);

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default SignUpForm;
