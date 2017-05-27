import React, { PropTypes } from 'react';
import SignUpForm from '../../componets/AlumnosEmp/Emp.jsx';


class RegistroEmp extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
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

  }




   componentDidMount() {
     const xhr = new XMLHttpRequest();
     xhr.open('get', '/api/view');
     xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
     // set the authorization HTTP header
     xhr.setRequestHeader('Authorization', `bearer ${localStorage.getItem('token')}`);
     xhr.setRequestHeader('Accepts', `codigo ${sessionStorage.getItem('codeEmp')}`);
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


   }

   /**
    * Render the component.
    */
   render() {
     return (
       <SignUpForm
         user={this.state.user}
       />
     );
   }

 }

 export default RegistroEmp;
