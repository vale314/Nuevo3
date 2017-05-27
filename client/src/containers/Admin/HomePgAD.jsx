import React from 'react';
import Auth from '../../modules/Auth.js';
import Dashboard from '../../componets/Admin/HomePgAD.jsx';


class DashboardPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    this.state = {
      secretData: '',

      general:{
        Alumnos:{cantidad:'', todos:'',compañia:''},
        Empresas:{cantidad:'',all:''},
        Proyectos:{cantidad:'',todos:''},
        Universidades:{cantidad:'',todos:''}
      },
    };
  }

  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/admin/dashboard');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${localStorage.getItem('admin')}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
          secretData: xhr.response.message,
          general: xhr.response.status,
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
    return (<Dashboard secretData={this.state.secretData}
      Alumnos={this.state.general.Alumnos}
      Empresas={this.state.general.Empresas}
      Proyectos={this.state.general.Proyectos}
      Universidades={this.state.general.Universidades} />);
  }

}

export default DashboardPage;
