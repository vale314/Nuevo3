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
  message,

}) => (
  <Card className="container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">Email</h2>

      {errors.summary && <p className="error-message">{errors.summary}</p>}
      {message.summary && <p className="error-message">{message.summary}</p>}
      <div className="field-line">
        <TextField
          floatingLabelText="email Old"
          type="email"
          name="email"
          onChange={onChange}
          errorText={errors.email}
          value={users.email}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="email New"
          type="email"
          name="email5"
          onChange={onChange}
          errorText={errors.email5}
          value={users.email5}
        />
      </div>

      <div className="button-line">
        <RaisedButton type="submit" label="Submit" primary />
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
