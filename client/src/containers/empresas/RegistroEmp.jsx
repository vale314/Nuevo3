import React, { PropTypes } from 'react';
import SignUpForm from '../../componets/empresas/Registro.jsx';
import Auth from '../../modules/Auth.js';

class RegistroEmp extends React.Component {

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
      errors: {},
      user: {
        name: '',
        repLegal:'',
        formato:'',
        telefono:'',
        celular:'',
        rubro:'',
        tamaño:'',
        numT:'',
        calle:'',
        domN:'',
        colonia:'',
        municipio:'',
        estado:'',
        cp:'',
        depDA:'',
        cargo:'',
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
     const repLegal = encodeURIComponent(this.state.user.repLegal);
     const formato = encodeURIComponent(this.state.user.formato);
     const telefono = encodeURIComponent(this.state.user.telefono);
     const celular = encodeURIComponent(this.state.user.celular);
     const rubro = encodeURIComponent(this.state.user.rubro);
     const tamaño = encodeURIComponent(this.state.user.tamaño);
     const cantidad = encodeURIComponent(this.state.user.cantidad);
     const numT = encodeURIComponent(this.state.user.numT);
     const calle = encodeURIComponent(this.state.user.calle);
     const domN = encodeURIComponent(this.state.user.domN);
     const colonia = encodeURIComponent(this.state.user.colonia);
     const municipio = encodeURIComponent(this.state.user.municipio);
     const estado = encodeURIComponent(this.state.user.estado);
     const cp = encodeURIComponent(this.state.user.cp);
     const depDA = encodeURIComponent(this.state.user.depDA);
     const cargo = encodeURIComponent(this.state.user.cargo);

     const formData = `name=${name}&id=${this.state.id}&repLegal=${repLegal}&formato=${formato}&telefono=${telefono}&celular=${celular}&rubro=${rubro}&tamaño=${tamaño}&numT=${numT}&calle=${calle}&domN=${domN}&colonia=${colonia}&municipio=${municipio}&estado=${estado}&cp=${cp}&depDA=${depDA}&cargo=${cargo}`;


     // create an AJAX request
     const xhr = new XMLHttpRequest();
     xhr.open('put', '/auth/registroemp ');
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
         this.props.router.replace('/');
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
     console.log('componentDidMount');
     const xhr = new XMLHttpRequest();
     xhr.open('get', '/emp/registroemp');
     xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
     // set the authorization HTTP header
     xhr.setRequestHeader('Authorization', `bearer ${localStorage.getItem('emp')}`);
     xhr.responseType = 'json';
     xhr.addEventListener('load', () => {
       if(this.mounted) return;

       if (xhr.status === 200) {

         this.setState({
           user:xhr.response.user,
           id: xhr.response.id,
           name: xhr.response.name
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
       />
     );
   }

 }

 export default RegistroEmp;
