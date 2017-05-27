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
  onClick,
  Click,
  Clickend,
}) => (
    <div>
      <Card className="container">
        <CardTitle title="backup"/>
          <div className="button-line">
            <RaisedButton type="submit" label="NOW" primary onClick={onClick} />
          </div>
      </Card>
      <Card className="container">
        <CardTitle title="backup"/>
          <div className="button-line">
            <RaisedButton type="submit" label="NOW" primary onClick={Click} />
          </div>
      </Card>

    </div>


);

PerfilPage.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default PerfilPage;
