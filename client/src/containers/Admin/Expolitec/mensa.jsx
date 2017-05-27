import React, { PropTypes } from 'react';
import LoginForm from '../../../componets/Admin/Expolitec/Mensa.jsx';
// llamamos al Vista

class LoginPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);


    // iniciamos el stado
        this.state = {
          user: {
            msj:'',
            url:'',
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
    const msj = encodeURIComponent(this.state.user.msj);
    const url = encodeURIComponent(this.state.user.url);

    const formData = `msj=${msj}&url=${url}`;

    // creamos una peticion
    const xhr = new XMLHttpRequest();
    xhr.open('post', '/admin/mensa');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('Authorization', `bearer ${localStorage.getItem('admin')}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {

      } else {

      }
    });
    xhr.send(formData);
  }




  componentWillMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/admin/mensa');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${localStorage.getItem('admin')}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
              user:xhr.response.user
        });

        // this.state.users.map((user)=>{
        //   console.log(user);
        // })
      }
    });

    xhr.send();

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
