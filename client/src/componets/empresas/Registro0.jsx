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
  <Card className="container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">{name}</h2>

      {errors.summary && <p className="error-message">{errors.summary}</p>}


      <div className="field-line" >
        <CardTitle> Tecnologo Profesional En Sistemas Informaticos</CardTitle>
            <div className="field-line">
              <TextField
                floatingLabelText="Cantidad"
                name="TPSI"
                type="Number"
                errorText={errors.TPSIC}
                onChange={onChange}
                id={'cantidad'}
                value={user.TPSI.cantidad}
              />
            </div>
      </div>
      <div className="field-line" >
        <CardTitle> Turno</CardTitle>
            <select name="TPSI" onChange={onChange} value={user.TPSI.sexo} id={'sexo'} >
                <option value={'null'}> </option>
                <option value={'Indistinto'}>INDISTINTO</option>
                <option value={'Masculino'}>MASCULINO</option>
                <option value={'Femenino'}>FEMENINO</option>
            </select>
      </div>
      <div className="field-line" >
      <CardTitle> Tecnologo Profesional En Plasticos</CardTitle>
          <div className="field-line">
            <TextField
              floatingLabelText="Cantidad"
              name="TPP"
              type="Number"
              errorText={errors.TPPC}
              onChange={onChange}
              id={'cantidad'}
              value={user.TPP.cantidad}
            />
          </div>
      </div>
      <div className="field-line" >
        <CardTitle> Turno</CardTitle>
            <select name="TPP" onChange={onChange} value={user.TPP.sexo} id={'sexo'} >
                <option value={'null'}> </option>
                <option value={'Indistinto'}>INDISTINTO</option>
                <option value={'Masculino'}>MASCULINO</option>
                <option value={'Femenino'}>FEMENINO</option>
            </select>
      </div>

      <div className="field-line" >
        <CardTitle> Tecnologo Profesional En Metalurgia y Fundicion</CardTitle>
            <div className="field-line">
              <TextField
                floatingLabelText="Cantidad"
                name="TPMF"
                type="Number"
                errorText={errors.TPMFC}
                onChange={onChange}
                id={'cantidad'}
                value={user.TPMF.cantidad}
              />
            </div>
      </div>
      <div className="field-line" >
        <CardTitle> Turno</CardTitle>
            <select name="TPMF" onChange={onChange} value={user.TPMF.sexo} id={'sexo'} >
                <option value={'null'}> </option>
                <option value={'Indistinto'}>INDISTINTO</option>
                <option value={'Masculino'}>MASCULINO</option>
                <option value={'Femenino'}>FEMENINO</option>
            </select>
      </div>

      <div className="field-line" >
        <CardTitle> Tecnologo Profesional En Procesos Quimicos Industriales</CardTitle>
            <div className="field-line">
              <TextField
                floatingLabelText="Cantidad"
                name="TPPQI"
                type="Number"
                errorText={errors.TPPQIC}
                onChange={onChange}
                id={'cantidad'}
                value={user.TPPQI.cantidad}
              />
            </div>
      </div>
      <div className="field-line" >
        <CardTitle> Turno</CardTitle>
            <select name="TPPQI" onChange={onChange} value={user.TPPQI.sexo} id={'sexo'} >
                <option value={'null'}> </option>
                <option value={'Indistinto'}>INDISTINTO</option>
                <option value={'Masculino'}>MASCULINO</option>
                <option value={'Femenino'}>FEMENINO</option>
            </select>
      </div>

      <div className="field-line" >
        <CardTitle> Tecnologo Profesional Quimico En Anlisis Y Procesos De Alimentos</CardTitle>
            <div className="field-line">
              <TextField
                floatingLabelText="Cantidad"
                name="TPQAPA"
                type="Number"
                errorText={errors.TPQAPAC}
                onChange={onChange}
                id={'cantidad'}
                value={user.TPQAPA.cantidad}
              />
            </div>
      </div>
      <div className="field-line" >
        <CardTitle> Turno</CardTitle>
            <select name="TPQAPA" onChange={onChange} value={user.TPQAPA.sexo} id={'sexo'} >
                <option value={'null'}> </option>
                <option value={'Indistinto'}>INDISTINTO</option>
                <option value={'Masculino'}>MASCULINO</option>
                <option value={'Femenino'}>FEMENINO</option>
            </select>
      </div>

      <div className="field-line" >
        <CardTitle> Tecnologo Profesional En Mecanica Industrial</CardTitle>
            <div className="field-line">
              <TextField
                floatingLabelText="Cantidad"
                name="TPMI"
                type="Number"
                errorText={errors.TPMIC}
                onChange={onChange}
                id={'cantidad'}
                value={user.TPMI.cantidad}
              />
            </div>
      </div>
      <div className="field-line" >
        <CardTitle> Turno</CardTitle>
            <select name="TPMI" onChange={onChange} value={user.TPMI.sexo} id={'sexo'} >
                 <option value={'null'}> </option>
                 <option value={'Indistinto'}>INDISTINTO</option>
                 <option value={'Masculino'}>MASCULINO</option>
                 <option value={'Femenino'}>FEMENINO</option>
            </select>
      </div>

      <div className="field-line" >
        <CardTitle> Tecnologo Profesional En Electricidad Industrial</CardTitle>
            <div className="field-line">
              <TextField
                floatingLabelText="Cantidad"
                name="TPEI"
                type="Number"
                errorText={errors.TPEIC}
                onChange={onChange}
                id={'cantidad'}
                value={user.TPEI.cantidad}
              />
            </div>
      </div>
      <div className="field-line" >
        <CardTitle> Turno</CardTitle>
            <select name="TPEI" onChange={onChange} value={user.TPEI.sexo} id={'sexo'} >
                <option value={'null'}> </option>
                <option value={'Indistinto'}>INDISTINTO</option>
                <option value={'Masculino'}>MASCULINO</option>
                <option value={'Femenino'}>FEMENINO</option>
            </select>
      </div>

      <div className="button-line">
        <RaisedButton type="submit" label="Create New Account" primary />
      </div>
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
