import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { Link, IndexLink } from 'react-router';


const Ingreso = ({user}) => (
<div>

  <div className="bgimg-1">
    <div className="caption">
      <span className="border">EXPOLITEC</span>
    </div>
  </div>

  <div id="div">
    <h3 id="hs3">Ganadores</h3>
    <p>{user.msj}</p>
  </div>

  <div className="bgimg-4">
    <div className="caption">
      <span className="border">LESS HEIGHT</span>
    </div>
  </div>

</div>

);



export default Ingreso;
