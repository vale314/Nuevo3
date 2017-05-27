import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { Link, IndexLink } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';


const Dashboard = ({ handleClick1,handleClick2,handleClick3 }) => (

  <Card className="container">
    <div className="button-line">
      <RaisedButton type="submit" label="Dia 1" primary onClick={handleClick1} />
    </div>
    <div className="button-line">
      <RaisedButton type="submit" label="Dia 2" primary onClick={handleClick2} />
    </div>
    <div className="button-line">
      <RaisedButton type="submit" label="Dia 3" primary onClick={handleClick3} />
    </div>

  </Card>






);



export default Dashboard;
