import React, { PropTypes } from 'react';
import SignUpForm from '../../componets/Expolitec/Registro.jsx';


class SignUpPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      errors: {},
      user: {
        escuela:'',
        direccion:'',
        turno:'',
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
     const escuela = encodeURIComponent(this.state.user.escuela);
     const direccion = encodeURIComponent(this.state.user.direccion);
     const turno = encodeURIComponent(this.state.user.turno);


     const formData = `escuela=${escuela}&direccion=${direccion}&turno=${turno}`;


     // create an AJAX request
     const xhr = new XMLHttpRequest();
     xhr.open('put', '/auth/registroUni');
     xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
     xhr.setRequestHeader('Authorization', `bearer ${localStorage.getItem('unive')}`);
     xhr.responseType = 'json';
     xhr.addEventListener('load', () => {
       if (xhr.status === 200){
         // success

         // change the component-container state
         this.setState({
           errors: {}
         });

         console.log('The form is valid');
         this.props.router.replace('/expolfechau')
         //this.props.router.replace('/');
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
     xhr.open('get', '/unive/horasescul');
     xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
     // set the authorization HTTP header
     xhr.setRequestHeader('Authorization', `bearer ${localStorage.getItem('unive')}`)
     xhr.responseType = 'json';
     xhr.addEventListener('load', () => {
       if(this.mounted) return;

       if (xhr.status === 200) {

         this.setState({
           user:xhr.response.user,
         });

     }
     });

       xhr.send();
       xhr.removeEventListener('load');

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
       />
     );
   }

 }

 export default SignUpPage;
