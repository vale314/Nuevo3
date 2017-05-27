import React, { PropTypes } from 'react';
import LoginForm from '../../componets/Admin/LoginForm.jsx';
// llamamos al Vista

import Auth from '../../modules/Auth';

class LoginPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    //copiamos el token
    const storedMessage = localStorage.getItem('token');
    let successMessage = '';
    //si hay algo en el storage si existio un token
    if (storedMessage) {
      //pasamos el token a la variable local successMessage
      successMessage = storedMessage;
      //y rremovemos el token del localStorage
      localStorage.removeItem('token');
    }
    // iniciamos el stado
    this.state = {
      errors: {},
      user: {
        email: '',
        password: ''
      }
    };
//solo estamos diciendo que processForm y changuser se unan co this para utilizar el state
    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  /**
      nuestro proccesg¿form para los formularios
   */
  processForm(event) {
    // quita
    event.preventDefault();

      // create a string for an HTTP body message
    const email = encodeURIComponent(this.state.user.email);
    const password = encodeURIComponent(this.state.user.password);
    const formData = `email=${email}&password=${password}`;

    // creamos una peticion
    const xhr = new XMLHttpRequest();
    xhr.open('post', '/auth/login');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success

        // borra los estados de cualquier
        this.setState({
          errors: {}
        });

        // save the token
      localStorage.setItem('admin',xhr.response.token);


      this.context.router.replace('/');

        console.log('The form is valid');
      } else {
        // failure

        // si ajax hubo un error lo guarad en const
        const errors = xhr.response.errors ? xhr.response.errors : {};
        errors.summary = xhr.response.message;

        this.setState({
          errors
        });
      }
    });
    xhr.send(formData);
  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  /**
   * Render the component.
   */
  render() {
    return (
      <LoginForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
         successMessage={this.state.successMessage}
        user={this.state.user}
      />

      //le decimos que cuando envia nos manade a el changeForm
    );
  }

}
LoginPage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default LoginPage;
