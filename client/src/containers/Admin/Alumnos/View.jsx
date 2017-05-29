import React, { PropTypes } from 'react';
import ViewE from '../../../componets/Admin/Alumnos/View.jsx'

class Views extends React.Component {
  constructor(props) {
    super(props);
    this.state={

      user: [{
        name: '',
        carrera:'null',
        grado:'8',
        grupo:'',
        turno:'null',
        domicilio:'',
        colonia:'',
        cp:'',
        padre:'',
        madre:'',
        telPadre:'',
        telMadre:'',
        municipio:'',
        estado:'',
        telefono:'',
        celular:'',
        telEmergencia:'',
        nss:'',
        edad:'',
        nacionalidad:''
      }],
      poli:'',
    }

    // set the initial component state
    this.handleClick = this.handleClick.bind(this);
    this.handleClickD = this.handleClickD.bind(this);
    this.tomar = this.tomar.bind(this);
    this.actualizar = this.actualizar.bind(this);
    this.dedicion = this.dedicion.bind(this);
    };

    handleClick(event) {

       sessionStorage.setItem('codigo', event);
       this.props.router.replace('/modificarA');

    }

    tomar(event) {

       sessionStorage.setItem('codigo', event);

    }


  dedicion(event){
    this.state.poli = event.target.value;

    this.setState({
      poli:event.target.value
    });
    if(!event) this.actualizar();
    sessionStorage.setItem('carrera', event.target.value);
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/admin/sela');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${localStorage.getItem('admin')}`);
    xhr.setRequestHeader('carrera', `carrera ${sessionStorage.getItem('carrera')}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {


      if (xhr.status === 200) {


        this.setState({
          user:xhr.response.res
        })

      }
    });

      xhr.send();
  }

  actualizar() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/admin/viewsa');
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
      xhr.open('get', '/admin/deletea');
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      // set the authorization HTTP header
      xhr.setRequestHeader('Authorization', `bearer ${localStorage.getItem('admin')}`);
      xhr.setRequestHeader('Accepts', `codigo ${sessionStorage.getItem('codigo')}`);
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
    xhr.open('get', '/admin/viewsa');
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

          <ViewE users={this.state.user} onChange={this.handleClick} onClick={this.handleClickD} tomar={this.tomar} actualizar={this.actualizar} dedicion={this.dedicion} poli={this.state.poli}/>
        </ul>
      </div>
    );
  }
}


export default Views;
