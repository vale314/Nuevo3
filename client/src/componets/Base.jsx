import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import Auth from '../modules/Auth';


const Base = ({ children }) => (
  <div>
    <div className="top-bar">
      <div className="top-bar-left">
        <IndexLink to="/">Politecnico</IndexLink>
      </div>

      {Auth.isUserAuthenticated()==2 ? (
        <div className="top-bar-right">
          <Link to="/logout">Logout</Link>
          <Link to="/perfilemp">Empresa</Link>
        </div>
      ) :(
        <div >

        </div>
      )}

      {Auth.isUserAuthenticated()==1 ? (
        <div className="top-bar-right">
          <Link to="/logout">Log out</Link>
          <Link to="/perfil">Perfil</Link>
        </div>
      ) : (
        <div>

        </div>
      )}

      {Auth.isUserAuthenticated() ==3 ? (
        <div>
          <nav className="navbar navbar-default" role="navigation">
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
                <a className="navbar-brand" href='/'> Backpack </a>
              </div>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li><Link to="/">Home</Link></li>
                </ul>
                <ul className="nav navbar-nav">
                  <li><Link to="/adminempresas">Emrpesas</Link></li>
                </ul>
                <ul className="nav navbar-nav">
                  <li><Link to="/adminalumnos">Alumnos</Link></li>
                </ul>
                <ul className="nav navbar-nav">
                  <li><Link to="/empiezo">Expolitec</Link></li>
                </ul>

                <ul className="nav navbar-nav navbar-right">
                    <li>
                      <Link to='/docxs'>Files</Link>
                    </li>
                    <li>
                      <Link to="/perfilhome">Perfil</Link>
                    </li>
                    <li>
                      <Link to="/logout">Log out</Link>
                    </li>
                    <li>
                      <Link to="/passwordA">Eliminar</Link>
                    </li>
                    <li>
                      <Link to="/backup">Backup</Link>
                    </li>
                    <li>
                      <Link to="/elecciones">Elecciones</Link>
                    </li>

                </ul>
              </div>
            </div>
          </nav>

        </div>
        ) : (
          <div>

          </div>

        )}
        {Auth.isUserAuthenticated()==4 ? (
          <div className="top-bar-right">
            <Link to="/logout">Log out</Link>
            <Link to="/passworduni">Perfil</Link>
          </div>
        ) : (
          <div>

          </div>
        )}
        {Auth.isUserAuthenticated()== 5?(
          <div className="top-bar-right">
            <Link to="/logout">Log out</Link>
            <Link to="/passwordproye">Perfil</Link>
          </div>
        ):(
          <div>

          </div>
        )}
        {Auth.isUserAuthenticated()==9 ? (
            <div className="top-bar-right">
              <Link to="/loginuni">Universidades</Link>
              <Link to="/signupuni">Universidades-login</Link>
              <Link to="/signupproyectos">Proyectos</Link>
              <Link to="/loginPro">Login</Link>
            </div>
          ) : (

            <div>

            </div>
          )
        }

      {Auth.isUserAuthenticated()==false ? (

        <div className="top-bar-right">
            <Link to="/adminhome">Admin</Link>
            <Link to="/empresas">Empresarial</Link>
            <Link to="/login">Log in</Link>
            <Link to="/signup">Sign up</Link>
            <Link to="/homesExpoli">Expolitec</Link>
        </div>
      ) : (
        <div>

        </div>
      )}





    </div>

    {/* child component will be rendered here */ }
    {children}

  </div>

);

Base.propTypes = {
  children: PropTypes.object.isRequired
};

//tenemos una div y unas className llamada top-bar
//dentro de ella tenemos otra clase llamada
//dentro de ella tenemos texto llamado ReactApp y nos manda a ReactApp
//dentro de aqui tenemos otra div que nos manda en la barra
//un LogIn y un Sing Up
//esto nos manada a un enlace cada uno su respectivo lado

//le decimos a la Base QUE  es obligatorio el campo children y que es un objecto
export default Base;
