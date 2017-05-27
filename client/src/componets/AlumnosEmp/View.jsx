import React from 'react';
import {Card, CardTitle} from 'material-ui/Card';
import { Link, IndexLink } from 'react-router';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Confirm from 'react-confirm-bootstrap';
import RaisedButton from 'material-ui/RaisedButton';
const HomePage = ({users, onChange , actualizar , poli}) =>(


  <div className="container">


    <div className = "list-group">
      <a   className = "list-group-item active" onClick={z=>{actualizar()}}>
      <h2 className = "list-group-item-heading" >
           Lista
      </h2>
      </a>
    </div>
    <ul className = "list-group">
      {users.map((user)=>{
        return(

        <li className="list-group-item" key={user.codigo} onClick={x=>{onChange(user.codigo)}} >
          <h3 className = "list-group-item-heading">{user.name}</h3>

        <p className="list-group-item-text">{user.rubro}</p>
        <address>
          <strong> Domicilio</strong> {user.calle} <span className="badge btn-primary">cantidad {user.cantidad}</span>
        </address>
      </li>

      )
      })}

    </ul>
  </div>

);

export default HomePage;
