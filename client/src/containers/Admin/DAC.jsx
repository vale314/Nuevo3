import React, { PropTypes } from 'react';
import Alumnos from '../../componets/Admin/DeleteDB.jsx'

class Vistas extends React.Component {
  constructor(props) {
    super(props);

    // set the initial component state

    };

  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/admin/dac');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${localStorage.getItem('admin')}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.props.router.replace('/');
      }
    });
    xhr.send();
  }

  render(){
    return(
      <Alumnos />
    );
  }
}

export default Vistas;
