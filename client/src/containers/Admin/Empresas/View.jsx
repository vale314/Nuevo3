import React, { PropTypes } from 'react';
import ViewE from '../../../componets/Admin/Empresas/View.jsx'

class Views extends React.Component {
  constructor(props) {
    super(props);
    this.state={

      users:[{
        name: '',
        formato:'',
        repLegal:'',
        telefono:'',
        celular:'',
        rubro:'',
        cantidad:'',
        numT:'',
        calle:'',
        carreras:[],
        domN:'',
        colonia:'',
        municipio:'',
        estado:'',
        cp:'',
        depDA:'',
        cargo:'',
        tiempo:'',
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
       this.props.router.replace('/modificar');

    }

    tomar(event) {
      console.log(event);
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
    xhr.open('get', '/admin/sel');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${localStorage.getItem('admin')}`);
    xhr.setRequestHeader('carrera', `carrera ${sessionStorage.getItem('carrera')}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {


      if (xhr.status === 200) {


        this.setState({
          users:xhr.response.res
        })

      }
    });

      xhr.send();
  }

  actualizar() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/admin/viewse');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${localStorage.getItem('admin')}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
              users:xhr.response.users
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
      xhr.open('get', '/admin/deleteemp');
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
    xhr.open('get', '/admin/viewse');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${localStorage.getItem('admin')}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
              users:xhr.response.users
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

          <ViewE users={this.state.users} onChange={this.handleClick} onClick={this.handleClickD} tomar={this.tomar} actualizar={this.actualizar} dedicion={this.dedicion} poli={this.state.poli}/>
        </ul>
      </div>
    );
  }
}


export default Views;
