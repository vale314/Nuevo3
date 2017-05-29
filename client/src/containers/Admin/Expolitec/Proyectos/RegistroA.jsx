import React, { PropTypes } from 'react';
import SignUpForm from '../../../../componets/Admin/Expolitec/Proyectos/RegistroA.jsx';


class SignUpPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      mounted: true,
      errors: {},
      user:[
        {carrera:'null',sexo:'null',  codigo:null,name:'',numero:null,},
        {carrera:'null',sexo:'null',  codigo:null,name:'',numero:null,},
        {carrera:'null',sexo:'null',  codigo:null,name:'',numero:null,},
        {carrera:'null',sexo:'null',  codigo:null,name:'',numero:null,},
        {carrera:'null',sexo:'null',  codigo:null,name:'',numero:null,},
    ],
      tamaños:[],
      numero:0,

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

    var id = event.target.id;

    id--
    const field = event.target.name;
    const user = this.state.user;
    user[id][field] = event.target.value;

    this.setState({
      user
    });
    const carreras = JSON.stringify(this.state.user);

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

     const carreras = JSON.stringify(this.state.user);
     const formData = `carreras=${carreras}`;

     // create an AJAX request
     const xhr = new XMLHttpRequest();
     xhr.open('put', '/auth/registropcara');
     xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
     xhr.setRequestHeader('Codigo', `bearer ${sessionStorage.getItem('codigo')}`);
     xhr.responseType = 'json';
     xhr.addEventListener('load', () => {
       if (xhr.status === 200){
         // success

         // change the component-container state
         this.setState({
           errors: {}
         });

         console.log('The form is valid');
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


   componentWillMount() {
     const xhr = new XMLHttpRequest();
     xhr.open('get', '/admin/carreras');
     xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
     // set the authorization HTTP header
     xhr.setRequestHeader('Authorization', `bearers ${localStorage.getItem('admin')}`);
     xhr.setRequestHeader('Codigo', `bearers ${sessionStorage.getItem('codigo')} `);
     xhr.responseType = 'json';
     xhr.addEventListener('load', () => {

       if (xhr.status === 200) {
         if(xhr.response.carreras.length !== 0){
               this.setState({
                 //user:xhr.response.carreras,
                 tamaños:xhr.response.cantidad,
                 user:xhr.response.carreras
               });

          }else{

            this.setState({
              //user:xhr.response.carreras,
              tamaños:xhr.response.cantidad,

            });
          }

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
         onSubmit={this.processForm}
         onChange={this.changeUser}
         errors={this.state.errors}
         user={this.state.user}
         cantidad={this.state.tamaños}
         numero={this.state.numero}
       />
     );
   }

 }

 export default SignUpPage;
