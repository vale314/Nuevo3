import React, { PropTypes } from 'react';
import Backup from '../../componets/Admin/Files/Files.jsx';
import FileSaver  from 'file-saver';

import contentType from 'content-type';



class Vistas extends React.Component {
  constructor(props) {
    super(props);

    // set the initial component state

    this.handleClick5 = this.handleClick5.bind(this);
    this.handleClick9 = this.handleClick9.bind(this);
    };




  handleClick5(){
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/admin/filesE');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${localStorage.getItem('admin')}`);
    xhr.responseType = '';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // var data = new Blob([xhr.response],{type:'application/xml'});
        //
        // FileSaver.saveAs(data, "hello world.txt");

        // var csvURL = window.URL.createObjectURL(data);
        // var  tempLink = document.createElement('a');
        // tempLink.href = csvURL;
        // tempLink.setAttribute('download', 'filename.xml');
        // tempLink.click();


      }
    });
    xhr.send();
  }

  handleClick9(){
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/admin/filesS');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${localStorage.getItem('admin')}`);
    xhr.responseType = '';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {


      }
    });
    xhr.send();
  }
  render(){
    return(
      <Backup  Clickend={this.handleClick5} ClickS={this.handleClick9}/>
    );
  }
}

export default Vistas;
