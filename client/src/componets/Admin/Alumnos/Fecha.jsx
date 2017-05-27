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
  handleClick,
  fecha,
  fechas,
  handleClick1,
  handleClick3,
}) => (
  <div>
      <Card className="container">
        <CardTitle title="Fecha"/>
          <CardText>
            {fecha}
          </CardText>
          <div className="button-line">
            <RaisedButton type="submit" label="NOW" primary onClick={handleClick} />
          </div>
      </Card>
      <Card className="container">
        <CardTitle title="Fecha"/>
        {
          fechas.map((f)=>{
          return(
            <div className="panel-group">
              <div className="panel panel-default">
                <div className="panel-body ">{f}</div>
              </div>
            </div>
          )
        })}


          <div className="button-line">
            <RaisedButton type="submit" label="NOW" primary onClick={handleClick1} />
          </div>
        </Card>

        <Card className="container">
          <CardTitle title="Remove" />
            <RaisedButton type="submit" label="Delete" primary onClick={handleClick3} />
        </Card>



  </div>
);

PerfilPage.propTypes = {
  handleClick: PropTypes.func.isRequired,
  fecha: PropTypes.object.isRequired
};

export default PerfilPage;
