import React, { PropTypes } from 'react';
import SignUpForm from '../../../componets/Admin/Expolitec/Horas.jsx';


class RegistroEmp extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      error: {},
      user:{
        A:0,
        B:0,
        C:0,
        D:0,
        E:0,
        F:0,
        G:0,
        H:0,
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


     const user = JSON.stringify(this.state.user);



     // create an AJAX request
     const xhr = new XMLHttpRequest();
     xhr.open('put', '/auth/expoliha ');
     xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
     xhr.setRequestHeader('Codigo', `bearer ${sessionStorage.getItem('codigo')}`);
     xhr.setRequestHeader('Dia', `bearer ${localStorage.getItem('dia')}`);
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
         const error = xhr.response.errors ? xhr.response.errors: {};
         error.summary = xhr.response.message;

         this.setState({
           error
         });

       }
     });

     xhr.send(user);

     //this.props.router.replace('/')

   }

   componentWillMount() {
     const xhr = new XMLHttpRequest();
     xhr.open('get', '/admin/horasescul');
     xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
     // set the authorization HTTP header
     xhr.setRequestHeader('Authorization', `bearer ${localStorage.getItem('admin')}`)
     xhr.setRequestHeader('dia', `bearer ${localStorage.getItem('dia')}`);
     xhr.setRequestHeader('Codigo', `bearer ${sessionStorage.getItem('codigo')}`);
     xhr.responseType = 'json';
     xhr.addEventListener('load', () => {

       if (xhr.status === 200) {
          if(xhr.response.user[0].length != 0){
               this.setState({
                 //user:xhr.response.carreras,
                 user:xhr.response.user[0]
               });
          }


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
       />
     );
   }

 }

 export default RegistroEmp;
