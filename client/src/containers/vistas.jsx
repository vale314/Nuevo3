import React, { PropTypes } from 'react';
import Alumnos from '../componets/Alumnos.jsx'
import Auth from '../modules/Auth.js';
class Vistas extends React.Component {
  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      user: {
        name: '',
        carrera:'0',
        grado:'8',
        grupo:'',
        turno:'0',
        domicilio:'',
        colonia:'',
        cp:'',
        padre:'',
        madre:'',
        telPadre:'',
        telMadre:'',
        municipio:'',
        estado:'',
        telefono:'',
        celular:'',
        telEmergencia:'',
        nss:'',
        edad:'',
        nacionalidad:''
      }
    }
    };

  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/registro');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
          user:xhr.response.user,
        });
      }
    });
    xhr.send();
  }

  render(){
    return(
      <Alumnos user={this.state.user}/>
    );
  }
}

export default Vistas;
