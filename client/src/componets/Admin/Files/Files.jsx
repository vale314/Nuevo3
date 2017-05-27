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

  Clickend,
  ClickS
}) => (
    <div>





      <Card className="container">
        <CardTitle title="Filds-Emp"/>
          <div className="button-line">
            <RaisedButton type="submit" label="Company" primary onClick={Clickend} />
          </div>
      </Card>
      <Card className="container">
        <CardTitle title="Filds-Emp"/>
          <div className="button-line">
            <RaisedButton type="submit" label="Company" primary onClick={ClickS} />
          </div>
      </Card>
    </div>


);

PerfilPage.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default PerfilPage;
