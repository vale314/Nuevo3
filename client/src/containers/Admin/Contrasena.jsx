import React, { PropTypes } from 'react';
import PerfilPage from '../../componets/Admin/Contrasena.jsx'
import Auth from '../../modules/Auth.js';

class PerfilPassword extends React.Component {
  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      errors:{},
      id:'',
        users:{
          password1:'',
        }
  };
  this.processForm = this.processForm.bind(this);
  this.changeUser = this.changeUser.bind(this);

    }

    changeUser(event){
      const password = event.target.name;
      const users = this.state.users;
      users[password] = event.target.value;

      this.setState({
        users
      });
    }
    processForm(event) {
      // prevent default action. in this case, action is the form submission event
      event.preventDefault();

      // create a string for an HTTP body message

      const password1 = encodeURIComponent(this.state.users.password1);
      const id = encodeURIComponent(this.state.id);
      const formData = `password1=${password1}&id=${id}`;
      // create an AJAX request
      const xhr = new XMLHttpRequest();
      xhr.open('put', '/auth/password');
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xhr.responseType = 'json';
      xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
          // success

          // change the component-container state
          this.setState({
            errors: {}
          });

          console.log('The form is valid');
          this.props.router.replace('/eliminar');
        } else {
          // failure
          if(xhr.response.errors){
            const errors = xhr.response.errors ? xhr.response.errors : {};
            errors.summary = xhr.response.message;

            this.setState({
              errors
            });
          }
          if(xhr.status === 401){
            this.props.router.replace('/');
          }
        }
      });
      xhr.send(formData);
    }

  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/admin/registro');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${localStorage.getItem('admin')}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
          id:xhr.response.id,
        });
      }
    });

    xhr.send();
  }

  render(){
    return(
      <PerfilPage
      users={this.state.users}
      onSubmit={this.processForm}
      onChange={this.changeUser}
      errors={this.state.errors}
       />
    );
  }
}

export default PerfilPassword;
