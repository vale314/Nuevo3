import React from 'react';
import Auth from '../../modules/Auth.js';
import IngresoPage from '../../componets/Expolitec/Entrada.jsx';
import moment from 'moment';

class Ingreso extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    this.state = {
      secretData: ''
    };
  }

  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {

    const xhr = new XMLHttpRequest();
    xhr.open('get', '/unive/dashboard');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${localStorage.getItem('unive')}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
          secretData: xhr.response.message

        });

      }else{
        if(xhr.status === 401){

          Auth.deauthenticateUser();
          this.props.router.replace('/');
        }
      }

    });
    xhr.send();
  }

  /**
   * Render the component.
   */
  render() {
    return (<IngresoPage secretData={this.state.secretData} />);
  }

}

export default Ingreso;
