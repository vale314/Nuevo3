import React, { PropTypes } from 'react';
import SignUpForm from '../../componets/AlumnosEmp/Views.jsx';


class RegistroEmp extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      errors: {},
      user: {
        name: '',
        repLegal:'',
        formato:'',
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
      }

    };

    this.handleClick = this.handleClick.bind(this);
    this.tomar = this.tomar.bind(this);
  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
   handleClick(event){

     const xhr = new XMLHttpRequest();
     xhr.open('get', '/api/seleccion');
     xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
     // set the authorization HTTP header
     xhr.setRequestHeader('Authorization', `bearer ${localStorage.getItem('token')}`);
     xhr.setRequestHeader('Accepts', `codigo ${sessionStorage.getItem('codigo')}`);
     xhr.responseType = 'json';
     xhr.addEventListener('load', () => {
       if(this.mounted) return;

       if (xhr.status === 200) {
         sessionStorage.setItem('codeEmp',xhr.response.codeEmp);
         this.props.router.replace('/emp');
       }
     });

       xhr.send();
   }

   tomar(event) {
     console.log(event);
      sessionStorage.setItem('codigo', event);

   }


  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */



   componentDidMount() {
     console.log('componentDidMount');
     const xhr = new XMLHttpRequest();
     xhr.open('get', '/api/view');
     xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
     // set the authorization HTTP header
     xhr.setRequestHeader('Authorization', `bearer ${localStorage.getItem('token')}`);
     xhr.setRequestHeader('Accepts', `codigo ${sessionStorage.getItem('codigo')}`);
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


   }

   /**
    * Render the component.
    */
   render() {
     return (
       <SignUpForm
         errors={this.state.errors}
         user={this.state.user}
         onClick={this.handleClick}
         tomar={this.tomar}
       />
     );
   }

 }

 export default RegistroEmp;
