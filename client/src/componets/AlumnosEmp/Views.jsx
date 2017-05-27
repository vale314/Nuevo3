import React, { PropTypes } from 'react';
//importamos a reacr y PropTypes de React
import { Link } from 'react-router';
import { Card, CardText, CardTitle } from 'material-ui/Card';
//importamos Card Cardtext de mastererial-ui  Cards
import RaisedButton from 'material-ui/RaisedButton';
//importamos RasisedButton de
import TextField from 'material-ui/TextField';
//importamos TextField de material-uis
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Confirm from 'react-confirm-bootstrap';
import { Jumbotron, Button } from 'reactstrap';

const SignUpForm = ({
  errors,
  user,
  onClick,
  tomar,
}) => (
<div>
  <Card className="container">


              <h2 className="display-3">
                 {user.name}
              </h2>


              <p className="lead">
                  {user.rubro}
              </p>

              <hr className="my-2" />

              <p>
              <h3>NOMBRE</h3>{user.formato}  {user.repLegal}
              </p>

              <hr className="my-2"/>
              <p>
                <h3>TELEFONO</h3> {user.telefono}
              </p>

              <hr className="my-2" />
              <p>
                <h3>DOMICILIO</h3>{user.calle},{user.domN},{user.colonia},{user.municipio}
              </p>

              <hr className="my-2" />

              <p>
                <h3>ESTADO</h3> {user.estado}
              </p>

              <hr className="my-2" />

              <p>
                <h3>CODIGO</h3> {user.cp}
              </p>

              <hr className="my-2" />
              <h3>DEPARTAMENTO DE ASIGANCION</h3>
              <p>
                {user.depDA}
              </p>




    </Card>
    <Confirm
        onConfirm={onClick}
        body="Are you sure?"
        confirmText="Confirm"
        title="Solicitar">
        <div className="button-line ">
          <button className="btn btn-primary pull-right" onClick={x=>{tomar(user.codigo)}}>Solicitar El Puesto</button>
        </div>
    </Confirm>
  </div>
);

SignUpForm.propTypes = {
  onClick: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default SignUpForm;
