import React, { PropTypes } from 'react';
import LoginForm from '../../../componets/Admin/Alumnos/Fecha.jsx';
// llamamos al Vista

class LoginPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);
    this.state=({
        fecha:'',
        fechas:[]
    })

//solo estamos diciendo que processForm y changuser se unan co this para utilizar el state
      this.handleClick= this.handleClick.bind(this)
      this.handleClick1= this.handleClick1.bind(this)
      this.handleClick3= this.handleClick3.bind(this)
  }
  handleClick() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/admin/seleccion');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${localStorage.getItem('admin')}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
              fecha:xhr.response.fecha

        });
        this.handleClick1();
        // this.state.users.map((user)=>{
        //   console.log(user);
        // })
      }
    });

    xhr.send();

  }

  handleClick1() {

    const xhr = new XMLHttpRequest();
    xhr.open('get', '/admin/fecha');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${localStorage.getItem('admin')}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
              fechas:xhr.response.datas

        });

        // this.state.users.map((user)=>{
        //   console.log(user);
        // })
        this.componentWillMount();
      }

    });

    xhr.send();

  }

  handleClick3(){
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/admin/fechadelete');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${localStorage.getItem('admin')}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
              fechas:[ ],
              fecha:''

        });

        // this.state.users.map((user)=>{
        //   console.log(user);
        // })
        this.componentWillMount();
      }

    });

    xhr.send();

  }

  componentWillMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/admin/viewseleccion');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${localStorage.getItem('admin')}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        if(xhr.response.fecha){
          this.setState({
                fecha:xhr.response.fecha
          });
        }

        // this.state.users.map((user)=>{
        //   console.log(user);
        // })
      }
    else if(xhr.status === 403){

        this.setState({
              fecha:'Not-HOURS'
        });
      }
    });

    xhr.send();

  }




  render() {
    return (
      <LoginForm
        handleClick={this.handleClick}
        fecha={this.state.fecha}
        handleClick1={this.handleClick1}
        fechas={this.state.fechas}
        handleClick3={this.handleClick3}
      />


    );
  }

}
LoginPage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default LoginPage;
