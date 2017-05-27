import React from 'react';
import ReactDom from 'react-dom';
//import HomePage from './componets/HomePage.jsx';
//imporamos  hacemos un render introduciondo hello en etiquetas h1 dentro del documento buscardo el is react-app
//ReactDom.render(<h1>Hellos</h1>, document.getElementById('react-app'));

import injectTapEventPlugin from 'react-tap-event-plugin';
//no importa una injection tap envento para el doble click en telefonos moviles aprte que la
// herramienta onClick de js no es muy rapida esto nos ayuda con mas rapidez
import getMuiTheme from 'material-ui/styles/getMuiTheme';
//importamos el tema de material-ui styles get mui theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//importamos el tema si no se ve nada
import { browserHistory, Router } from 'react-router';
import routes from './routes.js';
//importamos routes para los enlaces

injectTapEventPlugin();
//injectamos el evento para que funcione mas rapido el onClick
ReactDom.render((
  //renderizamos con el
  <MuiThemeProvider muiTheme={getMuiTheme()}>

    <Router history={browserHistory} routes={routes} />

  </MuiThemeProvider>), document.getElementById('react-app'));
  //esto lo mandas en el documento donde este ekl html5 y busca react-app y pones esto;
  // dentro de esta etiqueta que es la del temas y su atributo es igual al otro tema
  // tenemos una etiqueta rouet hystoty y esto es igual a browerHistory esto no importa router parq que halla
  // los enlaces  y el atributo routes es igual a el documento que tenemos en todos los tag de donde estan
