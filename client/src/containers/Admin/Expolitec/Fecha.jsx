import React, { PropTypes } from 'react';
import SignUpForm from '../../../componets/Admin/Expolitec/Fecha.jsx';


class SignUpPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);
    this.state={
      fulls:''
    }
    // set the initial component state



    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.processForms = this.processForms.bind(this);
    this.handleClick5 = this.handleClick5.bind(this);
  }


  handleClick1(){
    localStorage.setItem('dia','1')
    this.processForms();
  }
  handleClick2(){
    localStorage.setItem('dia','2')
    this.processForms();
  }

  handleClick3(){
    localStorage.setItem('dia','3')
    this.processForms();

  }
  handleClick5(){
      const xhr = new XMLHttpRequest();
      xhr.open('get', '/admin/fulls');
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      // set the authorization HTTP header
      xhr.setRequestHeader('Authorization', `bearer ${localStorage.getItem('admin')}`);
      xhr.responseType = 'json';
      xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
          this.setState({
            fulls: xhr.response.fulls
          });
        }
      });
      xhr.send();
    }



   processForms() {
     const xhr = new XMLHttpRequest();
     xhr.open('get', '/admin/expolidias');
     xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
     // set the authorization HTTP header
     xhr.setRequestHeader('Authorization', `bearer ${localStorage.getItem('admin')}`);
     xhr.setRequestHeader('dia', `bearer ${localStorage.getItem('dia')}`);
     xhr.responseType = 'json';
     xhr.addEventListener('load', () => {

       if (xhr.status === 200) {
          this.props.router.replace('/expolh');
       }
          this.props.router.replace('/expolh')
     });
      xhr.send();
   }


   componentWillMount() {
     const xhr = new XMLHttpRequest();
     xhr.open('get', '/admin/viewfulls');
     xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
     // set the authorization HTTP header
     xhr.setRequestHeader('Authorization', `bearer ${localStorage.getItem('admin')}`);
     xhr.responseType = 'json';
     xhr.addEventListener('load', () => {
       if (xhr.status === 200) {
         this.setState({
           fulls:xhr.response.fulls
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
            handleClick1={this.handleClick1}
            handleClick2={this.handleClick2}
            handleClick3={this.handleClick3}
            handleClick5={this.handleClick5}
            fulls={this.state.fulls}
       />
     );
   }

 }

 export default SignUpPage;
