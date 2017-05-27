import React from 'react';
import Auth from '../../modules/Auth.js';
import HomesExpolitec from '../../componets/Expolitec/Homes.jsx';
import moment from 'moment';


class Ingreso extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    this.state = {
      user: {
        msj:'',
        url:'',
      }
  }
}

  /**
   * This method will be executed after initial rendering.
   */
  componentWillMount() {
    sessionStorage.setItem('escuela',1);
    this.props.router.replace('/homesExpoli')

      const xhr = new XMLHttpRequest();
      xhr.open('get', '/extra/expolitec');
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      // set the authorization HTTP header
      xhr.responseType = 'json';
      xhr.addEventListener('load', () => {
        if (xhr.status === 200) {

          this.setState({
                user:xhr.response.user
          });

          // this.state.users.map((user)=>{
          //   console.log(user);
          // })
        }
      });

      xhr.send();


  }

  /**
   * Render the component.
   */
  render() {
    return (<HomesExpolitec user={this.state.user}/>);
  }

}

export default Ingreso;
