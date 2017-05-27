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
  <Card className="container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">{user.name}</h2>

      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <TextField
          floatingLabelText="Escuela"
          name="escuela"
          hintText="Escuela Politecnica Guadalajara"
          errorText={errors.escuela}
          onChange={onChange}
          value={user.escuela}
        />
      </div>



      <div className="field-line">
        <TextField
          floatingLabelText="Direccion"
          name="direccion"
          hintText="Revoluccion #1541"
          errorText={errors.direccion}
          onChange={onChange}
          value={user.direccion}
        />
      </div>


      <div className="field-line" >
        <CardTitle> Turno</CardTitle>
            <select name="turno" onChange={onChange} value={user.turno} >
                <option value={'null'}> </option>
                <option value={'Matutino'}>MATUTINO</option>
                <option value={'Vespertino'}>VESPERTINO</option>
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
