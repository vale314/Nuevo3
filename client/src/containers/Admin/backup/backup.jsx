import React, { PropTypes } from 'react';
import Backup from '../../../componets/Admin/backup/backup.jsx';
import FileSaver  from 'file-saver';

import contentType from 'content-type';



class Vistas extends React.Component {
  constructor(props) {
    super(props);

    // set the initial component state
    this.handleClick = this.handleClick.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);


    };

   handleClick() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/admin/backup');
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

  handleClick3(){
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/admin/backup3');
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
      <Backup onClick={this.handleClick} Click={this.handleClick3} />
    );
  }
}

export default Vistas;
