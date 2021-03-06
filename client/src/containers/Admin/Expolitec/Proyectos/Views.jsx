import React, { PropTypes } from 'react';
import ViewE from '../../../../componets/Admin/Expolitec/Proyectos/Views.jsx'

class Views extends React.Component {
  constructor(props) {
    super(props);
    this.state={

      user: [{
        name: '',
        descripcion:'',
        codigo:'',
        celular:'',
        tamaño:'',
      }],
    }

    // set the initial component state
    this.handleClick = this.handleClick.bind(this);
    this.handleClickD = this.handleClickD.bind(this);
    this.tomar = this.tomar.bind(this);
    this.actualizar = this.actualizar.bind(this);
    };

    handleClick(event) {

       sessionStorage.setItem('codigo', event);
       this.props.router.replace('/registroproa');

    }

    tomar(event) {

       sessionStorage.setItem('codigo', event);

    }



  actualizar() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/admin/viewsproye');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${localStorage.getItem('admin')}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
              user:xhr.response.users
        });

        // this.state.users.map((user)=>{
        //   console.log(user);
        // })
      }
    });

    xhr.send();

  }

    handleClickD(){
      const xhr = new XMLHttpRequest();
      xhr.open('get', '/admin/deleteproye');
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      // set the authorization HTTP header
      xhr.setRequestHeader('Authorization', `bearer ${localStorage.getItem('admin')}`);
      xhr.setRequestHeader('Deletes', `codigo ${sessionStorage.getItem('codigo')}`);
      xhr.responseType = 'json';
      xhr.addEventListener('load', () => {


        if (xhr.status === 200) {


          this.actualizar();

        }
      });

        xhr.send();

    }



  componentWillMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/admin/viewsproye');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${localStorage.getItem('admin')}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
              user:xhr.response.users
        });

        // this.state.users.map((user)=>{
        //   console.log(user);
        // })
      }
    });

    xhr.send();

  }



  render(){

    return(
      <div>
        <ul>

          <ViewE users={this.state.user} onChange={this.handleClick} onClick={this.handleClickD} tomar={this.tomar} actualizar={this.actualizar}/>
        </ul>
      </div>
    );
  }
}


export default Views;
