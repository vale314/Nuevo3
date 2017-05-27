import React from 'react';
import Auth from '../modules/Auth.js';
import Dashboard from '../componets/Dashboard.jsx';


class DashboardPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    this.state = {
      secretData: '',
      fecha:[]
    };
  }

  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/dashboard');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
          secretData: xhr.response.message,
          fecha: xhr.response.fecha
        });
        console.log(this.state.fecha)
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
    return (<Dashboard
             secretData={this.state.secretData}
             fecha={this.state.fecha}
             />);
  }

}

export default DashboardPage;
