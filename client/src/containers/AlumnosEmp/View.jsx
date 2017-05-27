import React, { PropTypes } from 'react';
import ViewE from '../../componets/AlumnosEmp/View.jsx'

class Views extends React.Component {
  constructor(props) {
    super(props);
    this.state={

      users:[{
        codigo:'',
        name: '',
        formato:'',
        repLegal:'',
        telefono:'',
        rubro:'',
        cantidad:'',
        calle:'',
        domN:'',
        colonia:'',
        municipio:'',
        estado:'',
        cp:'',
        depDA:'',
      }],
      poli:'',


    }

    // set the initial component state
    this.handleClick = this.handleClick.bind(this);
    this.actualizar = this.actualizar.bind(this);
    this.str = this.str.bind(this);
    this.cantidad = this.cantidad.bind(this);
    };


    handleClick(event) {

       sessionStorage.setItem('codigo', event);
       this.props.router.replace('/viewea');

    }



  str(){
  var array=[];
  const users = this.state.users;
  if(users){
    users.map((user)=>{

      var rubro = user.rubro;
      var u = user;
      u.rubro = rubro.substr(0,148);
      array.push(u);
    })
  }
  if(array){
    this.setState({
      users:array
    })
  }
  }

cantidad(cantidad){
  const users=this.state.users;
    if(cantidad){
      users.forEach((user,index)=>{
        user.cantidad=cantidad[index];
      })
    }
}

  actualizar() {

    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/views');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${localStorage.getItem('token')}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
              users:xhr.response.users
        });

        // this.state.users.map((user)=>{
        //   console.log(user);
        // })
        this.cantidad(xhr.response.cantidad);
        this.str();
      }
    });

    xhr.send();

  }




  componentWillMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/views');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${localStorage.getItem('token')}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
              users:xhr.response.users
        });

        // this.state.users.map((user)=>{
        //   console.log(user);
        // })
        this.cantidad(xhr.response.cantidad);
        this.str();
      }
      else if(xhr.status === 409){
      this.props.router.replace('/registro');
      }
      else if(xhr.status === 201){
        sessionStorage.setItem('codeEmp',xhr.response.codeEmp);
        this.props.router.replace('/emp');
      }
      else if(xhr.status === 403){
        this.props.router.replace('/page403');
      }
      else if(xhr.status === 417){
        this.props.router.replace('/page417');
      }
      else if(xhr.status === 206){
        //nos estan activos
        this.props.router.replace('/page206')
      }
    });

    xhr.send();


  }



  render(){

    return(
      <div>
        <ul>

          <ViewE users={this.state.users} onChange={this.handleClick} actualizar={this.actualizar} poli={this.state.poli}/>
        </ul>
      </div>
    );
  }
}


export default Views;
