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

const SignUpForm = ({
  onSubmit,
  onChange,
  errors,
  user,
  name,
  onClick,
}) => (
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
        <li><Link to="/insertaremp">insertar</Link></li>
      </ul>
      <ul className="nav navbar-nav">
        <li><Link to="/viewse">ver</Link></li>
      </ul>
      <ul className="nav navbar-nav">
        <li><Link to="/modificars">modificar</Link></li>
      </ul>
    </div>
  </div>
  </nav>
  <Card className="container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">{name}</h2>

      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <TextField
          floatingLabelText="Nombre De Empresa"
          name="name"
          hintText="Nombre"
          errorText={errors.name}
          onChange={onChange}
          value={user.name}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Representante Legal"
          name="repLegal"
          hintText="Nombre"
          errorText={errors.repLegal}
          onChange={onChange}
          value={user.repLegal}
        />
      </div>
      <div className="field-line">
        <TextField
          floatingLabelText="Formato"
          name="formato"
          hintText="SR, SRA, LIC, ING, DOC,."
          errorText={errors.formato}
          onChange={onChange}
          value={user.formato}
        />
      </div>
      <div className="field-line">
        <TextField
          floatingLabelText="Numero De Telefono"
          name="telefono"
          type="Number"
          errorText={errors.telefono}
          onChange={onChange}
          value={user.telefono}
        />
      </div>
      <div className="field-line">
        <TextField
          floatingLabelText="Celular"
          name="celular"
          errorText={errors.celular}
          onChange={onChange}
          value={user.celular}
        />
      </div>
      <div className="field-line">
        <TextField
          floatingLabelText="Rubro"
          name="rubro"
          hintText="Que hace la empresa Nombrad"
          errorText={errors.rubro}
          onChange={onChange}
          value={user.rubro}
          multiLine={true}
        />
      </div>



      <div className="field-line">
        <TextField
          floatingLabelText="Tamaño De Empresa"
          name="tamaño"
          hintText="Chica Mediana Grande"
          errorText={errors.tamaño}
          onChange={onChange}
          value={user.tamaño}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Numero De Trabajadores"
          name="numT"
          type="Number"
          errorText={errors.numT}
          onChange={onChange}
          value={user.numT}
        />
      </div>
      <div className="field-line">
        <TextField
          floatingLabelText="Calle"
          name="calle"
          errorText={errors.calle}
          onChange={onChange}
          value={user.calle}
        />
      </div>
      <div className="field-line">
        <TextField
          floatingLabelText="Numero De Empresa"
          name="domN"
          type="Number"
          errorText={errors.domN}
          onChange={onChange}
          value={user.domN}
        />
      </div>
      <div className="field-line">
        <TextField
          floatingLabelText="Colonia"
          name="colonia"
          errorText={errors.colonia}
          onChange={onChange}
          value={user.colonia}
        />
      </div>
      <div className="field-line">
        <TextField
          floatingLabelText="Municipio"
          name="municipio"
          errorText={errors.municipio}
          onChange={onChange}
          value={user.municipio}
        />
      </div>
      <div className="field-line">
        <TextField
          floatingLabelText="Estado"
          name="estado"
          hintText="Jalisco"
          errorText={errors.estado}
          onChange={onChange}
          value={user.estado}
        />
      </div>
      <div className="field-line">
        <TextField
          floatingLabelText="Codigo Postal"
          name="cp"
          hintText="44810"
          type="Number"
          errorText={errors.cp}
          onChange={onChange}
          value={user.cp}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Departamento De Asignacion"
          name="depDA"
          errorText={errors.depDA}
          onChange={onChange}
          value={user.depDA}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Cargo"
          name="cargo"
          hintText="Supervisor Gerente Delegadu"
          errorText={errors.cargo}
          onChange={onChange}
          value={user.cargo}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Email"
          name="email"
          hintText="Email"
          disabled="true"
          onChange={onChange}
          value={user.email}
        />
      </div>


      <div className="button-line">
        <RaisedButton type="submit" label="Save!" primary />
      </div>
      <Confirm
          onConfirm={onClick}
          body="Are you sure you want to delete this?"
          confirmText="Confirm Delete"
          title="Deleting Stuff">
          <div className="button-line">
            <RaisedButton  label="Delete" />
          </div>
      </Confirm>

      <CardText>Cambia las carreras <Link to={'/registroempc'}>Carreras</Link></CardText>

      <CardText>Password<Link to={'/passemp'}>Alterar</Link></CardText>
    </form>
  </Card>
  </div>
);

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default SignUpForm;
