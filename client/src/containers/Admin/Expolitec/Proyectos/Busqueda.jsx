import React, { PropTypes } from 'react';
import LoginForm from '../../../../componets/Admin/Expolitec/Proyectos/Busqueda.jsx';
// llamamos al Vista

class LoginPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);


    // iniciamos el stado
        this.state = {
          errors: {},
          user: {
            codigo: '',
            name:'',
            email:'',
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
    const codigo = encodeURIComponent(this.state.user.codigo);
    const name = encodeURIComponent(this.state.user.name);
    const email = encodeURIComponent(this.state.user.email);

    const formData = `codigo=${codigo}&name=${name}&email=${email}`;

    // creamos una peticion
    const xhr = new XMLHttpRequest();
    xhr.open('post', '/admin/busquedap');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('Authorization', `bearer ${localStorage.getItem('admin')}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        console.log('encontrado');
        sessionStorage.setItem('codigo',xhr.response.res.codigo)
        this.props.router.replace('/registroproa');
      } else {
        console.log('error')
        const errors = xhr.response.errors ? xhr.response.errors : {};
        errors.summary = xhr.response.error;

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
