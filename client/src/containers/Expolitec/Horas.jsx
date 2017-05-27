import React, { PropTypes } from 'react';
import SignUpForm from '../../componets/Expolitec/Fecha.jsx';


class SignUpPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    // set the initial component state



    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);

  } 


  handleClick1(){
    localStorage.setItem('dia','1')
    //MANADAMOS LLAMAR EXPOL-HORAS-UNIVERSIDAD
    this.props.router.replace('/expolhorasu');
  }
  handleClick2(){
    localStorage.setItem('dia','2')
    //MANADAMOS LLAMAR EXPOL-HORAS-UNIVERSIDAD
    this.props.router.replace('/expolhorasu');

  }

  handleClick3(){
    localStorage.setItem('dia','3')
    //MANADAMOS LLAMAR EXPOL-HORAS-UNIVERSIDAD
    this.props.router.replace('/expolhorasu');

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

       />
     );
   }

 }

 export default SignUpPage;
