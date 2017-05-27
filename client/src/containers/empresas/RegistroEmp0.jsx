import React, { PropTypes } from 'react';
import SignUpForm from '../../componets/empresas/Registro0.jsx';
import Auth from '../../modules/Auth.js';

class RegistroEmp extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      name:'',
      error: {},
      user:{
        TPSI:{carrera:'Tecnologo Profesional En Sistemas Informaticos', cantidad:0, sexo:'null', aceptaccion:'false',alumnos:null},
        TPP:{carrera:'Tecnologo Profesional En Plasticos', cantidad:0, sexo:'null', aceptaccion:'false',alumnos:null},
        TPMF:{carrera:'Tecnologo Profesional En Metalurgia y Fundicion', cantidad:0, sexo:'null', aceptaccion:'false',alumnos:null},
        TPPQI:{carrera:'Tecnologo Profesional En Procesos Quimicos Industriales', cantidad:0, sexo:'null',aceptaccion:'false',alumnos:null},
        TPQAPA:{carrera:'Tecnologo Profesional Quimico En Anlisis Y Procesos De Alimentos', cantidad:0, sexo:'null',aceptaccion:'false',alumnos:null},
        TPMI:{carrera:'Tecnologo Profesional En Mecanica Industrial', cantidad:0, sexo:'null',aceptaccion:'false',alumnos:null},
        TPEI:{carrera:'Tecnologo Profesional En Electricidad Industrial', cantidad:0, sexo:'null',aceptaccion:'false',alumnos:null},
      }

    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);

  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeUser(event) {

    const field = event.target.name;
    const user = this.state.user;
    const id = event.target.id;

    user[field][id] = event.target.value;

    if(user[field][id]!==0){
      user[field].aceptaccion='true'
    }

    if(user[field].cantidad=='0'){
      user[field].aceptaccion='false'
    }





    user[field].alumnos=user[field].cantidad;

    this.setState({
      user
    });

  }

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
   processForm(event) {
     // prevent default action. in this case, action is the form submission event
     event.preventDefault();


     const carreras = JSON.stringify(this.state.user);
     const formData = `carreras=${carreras}`;


     // create an AJAX request
     const xhr = new XMLHttpRequest();
     xhr.open('put', '/auth/registroemp1 ');
     xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
     xhr.setRequestHeader('Authorization', `bearer ${localStorage.getItem('emp')}`);
     xhr.responseType = 'json';

     xhr.addEventListener('load', () => {
       if (xhr.status === 200){
         // success

         // change the component-container state
         this.setState({
           error: {}
         });

         console.log('The form is valid');

       } else {
         // failure

         console.log('invalid');
         const error = xhr.response.error ? xhr.response.error : {};
         error.summary = xhr.response.message;

         this.setState({
           error
         });

       }
     });
     xhr.send(carreras);

     //this.props.router.replace('/')

   }

   componentWillMount() {
     const xhr = new XMLHttpRequest();
     xhr.open('get', '/emp/registroemp');
     xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
     // set the authorization HTTP header
     xhr.setRequestHeader('Authorization', `bearers ${localStorage.getItem('emp')}`);
     xhr.responseType = 'json';
     xhr.addEventListener('load', () => {
       if(this.mounted) return;

       if (xhr.status === 200) {
            if(xhr.response.user.carreras[0] != null){
               this.setState({
                 //user:xhr.response.carreras,
                 user:xhr.response.user.carreras[0]
               });
             }
       }


       if(xhr.status===409){
         this.props.router.replace('/registroemp');
       }
       if(xhr.status === 206){
         this.props.router.replace('/');
       }
     });

       xhr.send();


   }

   render() {
     return (
       <SignUpForm
         onSubmit={this.processForm}
         onChange={this.changeUser}
         errors={this.state.error}
         user={this.state.user}
         name={this.state.name}
         id={this.state.id}
       />
     );
   }

 }

 export default RegistroEmp;
