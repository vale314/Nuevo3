import React, { PropTypes } from 'react';
//importamos a reacr y PropTypes de React
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
//importamos Card Cardtext de mastererial-ui  Cards
import RaisedButton from 'material-ui/RaisedButton';
//importamos RasisedButton de
import TextField from 'material-ui/TextField';
//importamos TextField de material-uis

const PerfilPage = ({
  onSubmit,
  onChange,
  users,
  errors,
}) => (
  <Card className="container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">Password</h2>

      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <TextField
          floatingLabelText="Password Old"
          type="password"
          name="password1"
          onChange={onChange}
          errorText={errors.password1}
          value={users.password1}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Password New"
          type="password"
          name="password5"
          onChange={onChange}
          errorText={errors.password5}
          value={users.password5}
        />
      </div>

      <div className="button-line">
        <RaisedButton type="submit" label="Save!" primary />
      </div>


    </form>
  </Card>
);

PerfilPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired
};

export default PerfilPage;
