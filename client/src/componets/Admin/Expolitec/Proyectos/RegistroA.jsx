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

const SignUpForm = ({
  onSubmit,
  onChange,
  errors,
  user,
  cantidad,
  numero=0,
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
      <form action="/" onSubmit={onSubmit}>
        <h2 className="card-heading">{}</h2>

        {errors.summary && <p className="error-message">{errors.summary}</p>}

        {
          cantidad.map((canti)=>{
              numero=numero+1;
              return(
                <div>

                <div className="field-line">
                  <TextField
                    floatingLabelText="Codigo"
                    type="number"
                    name="codigo"
                    errorText={errors.codigo}
                    onChange={onChange}
                    value={user[canti].codigo}
                    id={numero}
                  />
                </div>
                <div className="field-line">
                  <TextField
                    floatingLabelText="Name"
                    name="name"
                    errorText={errors.name}
                    onChange={onChange}
                    value={user[canti].name}
                    id={numero}
                  />
                </div>
                <div className="field-line">
                  <TextField
                    floatingLabelText="Celular"
                    name="numero"
                    type="Number"
                    errorText={errors.numero}
                    onChange={onChange}
                    value={user[canti].numero}
                    id={numero}
                  />
                </div>
                <div className="field-line">
                <CardTitle> Sexo</CardTitle>
                    <select name="sexo" onChange={onChange} value={user[canti].sexo} id={numero}>
                        <option value={'null'}> </option>
                        <option value={'Masculino'}>MASCULINO</option>
                        <option value={'Femenino'}>FEMENINO</option>
                    </select>
                </div>
                <div className="field-line" >
                  <CardTitle> Carrera</CardTitle>
                      <select name="carrera" onChange={onChange} value={user[canti].carrera} id={numero}>
                          <option value={'null'}> </option>
                          <option value={'Tecnologo Profesional En Sistemas Informaticos'}>tpsi</option>
                          <option value={'Tecnologo Profesional En Plasticos'}>TPP</option>
                          <option value={'Tecnologo Profesional En Metalurgia y Fundicion'}>TPMF</option>
                          <option value={'Tecnologo Profesional En Procesos Quimicos Industriales'}>TPPQI</option>
                          <option value={'Tecnologo Profesional Quimico En Analisis y Procesos de Alimentos'}>TPQAPA</option>
                          <option value={'Tecnologo Profesioanl En Mecanica Industrial'}>TPMI</option>
                          <option value={'Tecnologo Profesional En Electricidad Industrial'}>TPEI</option>
                      </select>
                </div>
                </div>
              )


        })


          }

        <div className="button-line">
          <RaisedButton type="submit" label="Save!" primary />
        </div>


      </form>
    </Card>
  </div>
);

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default SignUpForm;
