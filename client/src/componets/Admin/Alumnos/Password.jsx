 import React, { PropTypes } from 'react';
//importamos a reacr y PropTypes de React
import { Link } from 'react-router';
import { Card, CardText, CardTitle } from 'material-ui/Card';
//importamos Card Cardtext de mastererial-ui  Cards
import RaisedButton from 'material-ui/RaisedButton';
//importamos RasisedButton de
import TextField from 'material-ui/TextField';
//importamos TextField de material-uis

const PerfilPage = ({
  onSubmit,
  onChange,
  user
}) => (

      <Card className="container">
      <form action="/" onSubmit={onSubmit}>
            <div className="button-line">
              <TextField
                floatingLabelText="Password"
                name="password"
                value={user.password}
                onChange={onChange}
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
  user: PropTypes.object.isRequired,
};

export default PerfilPage;
