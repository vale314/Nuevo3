import React, { PropTypes } from 'react';
import Empresa from '../../componets/empresas/Views.jsx'
import Auth from '../../modules/Auth.js';
class Vistas extends React.Component {
  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      user: {
        name: '',
        repLegal:'',
        formato:'',
        telefono:'',
        celular:'',
        rubro:'',
        tamaño:'',
        numT:'',
        calle:'',
        domN:'',
        colonia:'',
        municipio:'',
        estado:'',
        cp:'',
        depDA:'',
        cargo:'',
      }
    }
    };

  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/emp/registroemp');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${localStorage.getItem('emp')}`);
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
      <Empresa user={this.state.user}/>
    );
  }
}

export default Vistas;
