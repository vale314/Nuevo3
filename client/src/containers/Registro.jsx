import React, { PropTypes } from 'react';
import SignUpForm from '../componets/registro.jsx';
import Auth from '../modules/Auth.js';

class SignUpPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      mounted: true,
      id:'',
      name:'',
      msj:'',
      errors: {},
      user: {
        name: '',
        carrera:'null',
        grado:'8',
        grupo:'',
        turno:'null',
        domicilio:'',
        domNU:'',
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
        sexo:'',
        edad:'',
        nacionalidad:''

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
    user[field] = event.target.value;

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

     // create a string for an HTTP body message
     const name = encodeURIComponent(this.state.user.name);
     const carrera = encodeURIComponent(this.state.user.carrera);
     const grado = encodeURIComponent(this.state.user.grado);
     const grupo = encodeURIComponent(this.state.user.grupo);
     const turno = encodeURIComponent(this.state.user.turno);
     const domicilio = encodeURIComponent(this.state.user.domicilio);
     const domNU = encodeURIComponent(this.state.user.domNU);
     const colonia = encodeURIComponent(this.state.user.colonia);
     const cp = encodeURIComponent(this.state.user.cp);
     const padre = encodeURIComponent(this.state.user.padre);
     const madre = encodeURIComponent(this.state.user.madre);
     const telPadre = encodeURIComponent(this.state.user.telPadre);
     const telMadre = encodeURIComponent(this.state.user.telMadre);
     const municipio = encodeURIComponent(this.state.user.municipio);
     const estado = encodeURIComponent(this.state.user.estado);
     const telefono = encodeURIComponent(this.state.user.telefono);
     const celular = encodeURIComponent(this.state.user.celular);
     const telEmergencia = encodeURIComponent(this.state.user.telEmergencia);
     const nss = encodeURIComponent(this.state.user.nss);
     const sexo = encodeURIComponent(this.state.user.sexo);
     const edad = encodeURIComponent(this.state.user.edad);
     const nacionalidad = encodeURIComponent(this.state.user.nacionalidad);

     const formData = `name=${name}&id=${this.state.id}&carrera=${carrera}&grado=${grado}&grupo=${grupo}&turno=${turno}&domicilio=${domicilio}&colonia=${colonia}&cp=${cp}&padre=${padre}&madre=${madre}&telPadre=${telPadre}&telMadre=${telMadre}&municipio=${municipio}&estado=${estado}&telefono=${telefono}&celular=${celular}&telEmergencia=${telEmergencia}&nss=${nss}&sexo=${sexo}&edad=${edad}&nacionalidad=${nacionalidad}&domNU=${domNU}`;


     // create an AJAX request
     const xhr = new XMLHttpRequest();
     xhr.open('put', '/auth/registro');
     xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
     xhr.responseType = 'json';
     xhr.addEventListener('load', () => {
       if (xhr.status === 200){
         // success

         // change the component-container state
         this.setState({
           errors: {}
         });

         console.log('The form is valid');
         this.props.router.replace('/vistas');
       } else {
         // failure
          window.scrollTo(0, 3)
         console.log('invalid');
         const errors = xhr.response.errors ? xhr.response.errors : {};
         errors.summary = xhr.response.message;

         this.setState({
           errors
         });
       }
     });
     xhr.send(formData);

     //this.props.router.replace('/')

   }


   componentDidMount() {

     const xhr = new XMLHttpRequest();
     xhr.open('get', '/api/registro');
     xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
     // set the authorization HTTP header
     xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
     xhr.responseType = 'json';
     xhr.addEventListener('load', () => {
       if(this.mounted) return;

       if (xhr.status === 200) {

         this.setState({
           user:xhr.response.user,
           id: xhr.response.id,
           name: xhr.response.name,
           msj: xhr.response.msj
         });

     }
     });

       xhr.send();
       xhr.removeEventListener('load',console.log('remove'));

   }

   componentWillUnmount(){
     console.log('componentwillUnmount');
     this.mounted = false;
   }
   /**
    * Render the component.
    */
   render() {
     return (
       <SignUpForm
         onSubmit={this.processForm}
         onChange={this.changeUser}
         errors={this.state.errors}
         user={this.state.user}
         name={this.state.name}
         id={this.state.id}
         msj={this.state.msj}
       />
     );
   }

 }

 export default SignUpPage;
