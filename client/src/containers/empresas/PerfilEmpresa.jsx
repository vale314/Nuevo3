import React, { PropTypes } from 'react';
import PerfilPage from '../../componets/empresas/PerfilPage.jsx'
import Auth from '../../modules/Auth.js';

class Perfil extends React.Component {
  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      errors:{},
      id:'',
        users:{
          password1:'',
          password5:''
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
      const password5 = encodeURIComponent(this.state.users.password5);
      const password1 = encodeURIComponent(this.state.users.password1);
      const id = encodeURIComponent(this.state.id);
      const formData = `password5=${password5}&password1=${password1}&id=${id}`;
      // create an AJAX request
      const xhr = new XMLHttpRequest();
      xhr.open('put', '/auth/perfilemp');
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
          this.props.router.replace('/logout');
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
            this.props.router.replace('/desborde');
          }
        }
      });
      xhr.send(formData);
    }

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

export default Perfil;
