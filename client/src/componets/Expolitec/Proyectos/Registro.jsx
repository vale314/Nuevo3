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
          type="Number"
          errorText={errors.tamaño}
          onChange={onChange}
          value={user.tamaño}
        />
      </div>


      <div className="button-line">
        <RaisedButton type="submit" label="Save!" primary />
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
