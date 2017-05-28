import React from 'react';
import {Card, CardTitle} from 'material-ui/Card';
import { Link, IndexLink } from 'react-router';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Confirm from 'react-confirm-bootstrap';
import RaisedButton from 'material-ui/RaisedButton';
const HomePage = ({users, onChange, onClick, tomar, actualizar , dedicion, poli}) =>(
  <div>
  <nav className="nav navbar navbar-default navbar-fixed-right" role="navigation" id="nav2">
    <div className="container-fluid">
      <div className="nav-header">
        <button className="navbar-toggle collapsed"
                type="button" data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
         </button>
      </div>
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
          <li><Link to="/insertaruni">Escuela</Link></li>
        </ul>
        <ul className="nav navbar-nav">
          <li><Link to="/insertarpro">Proyectos</Link></li>
        </ul>
        <ul className="nav navbar-nav">
          <li><Link to="/expolifd">Dias</Link></li>
        </ul>
        <ul className="nav navbar-nav">
          <li><Link to="/viewsescul"> Ver-Escuelas</Link></li>
        </ul>
        <ul className="nav navbar-nav">
          <li><Link to="/viewsproye"> Ver-Proyectos</Link></li>
        </ul>
        <ul className="nav navbar-nav">
          <li><Link to="/busquedau">FINDS-ESCUL</Link></li>
        </ul>
        <ul className="nav navbar-nav">
          <li><Link to="/busquedap">FINDS-Proye</Link></li>
        </ul>
        <ul className="nav navbar-nav">
          <li><Link to="/mensa">Mensa</Link></li>
        </ul>
      </div>
    </div>
  </nav>

  <Card className="container">


  <CardTitle title="Escuelas"/>

    <div className = "list-group">
    <a   className = "list-group-item active" onClick={z=>{actualizar()}}>
    <h2 className = "list-group-item-heading" >
         Lista
    </h2>
    </a>


      {users.map((user)=>{
        return(

            <a className="list-group-item" key={user.codigo} >
            <h4 className = "list-group-item-heading" onClick={x=>{onChange(user.codigo)} }>
             {user.name}

             </h4>


      <div>
        <p className="list-group-item-text" onClick={x=>{onChange(user.codigo)} }>{user.email} <span className="badge">{user.codigo}</span></p>
        <Confirm
            onConfirm={onClick}
            body="Are you sure you want to delete this?"
            confirmText="Confirm Delete"
            title="Deleting Stuff">
            <div className="button-line ">
              <button className="btn btn-primary pull-right" onClick={x=>{tomar(user.codigo)}}>Delete</button>
            </div>
        </Confirm>
      </div>
        </a>

      )
      })}

  </div>

  </Card>
  </div>
);

export default HomePage;
