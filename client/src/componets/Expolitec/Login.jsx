import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
//tenemos un o importamos un Card y un CardText  de material-ui/Card
import RaisedButton from 'material-ui/RaisedButton';
//tenemos Un RaisedButton de material-ui/RasiedButton
import TextField from 'material-ui/TextField';
//importamos un TextField de material-ui/TextField
/* tenemos un Card
      un card es una targeta de materiañ que sirve como un punto
      de entrasda de informacion que sera mas detallada
      las targetas o CARDS pueden tener texto, foto y un enlace sobre un solo
      tipo de tema pueden mostar el contenido que tiene tenemos tambien
      son como si fueran un bloque de informacion
*/

const LoginForm = ({
  onSubmit,
  onChange,
  errors,
  successMessage,

  user
}) => (
  <Card className="container">

    <form action="/" onSubmit={onSubmit}>

      <h2 className="card-heading">Login</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <TextField
          floatingLabelText="Email"
          name="email"
          errorText={errors.email}
          onChange={onChange}
          value={user.email}

        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Password"
          type="password"
          name="password"
          onChange={onChange}
          errorText={errors.password}
          value={user.password}
        />
      </div>

      <div className="button-line">
        <RaisedButton type="submit" label="Log In" primary />
      </div>

    </form>
  </Card>
);
//tenemos una clase llamada container
// tenemos titulo de h2 con una clase llamada card-heading
// sie necuntar un error le decimos que sumaary nos mande un mande un mensage
//tenemos una division llamada Field-line
//llamamos a TextField  y se dice que swe introducira el texto
//texto flotante etiqueta llamada email
//en campo nombre se llamara email
//en el campo errorText es igual a lo que se tega en el error.email
//en su  campo on Change es igual a lo que tenga en SU CAMPO onChange
//su valor es iguasl a lo que tenga en email

//tenemos campo llamdo
//con tambien texto texto flotante llamado password
//de tipo password


//tenemos una etiquetas llamada button-line
//llamamos la etiqueta lamada RaisedButton de typ submit Log In

//y el etiqueta de tipo llamada CardText dice Don't have an account nos manda as un link que esta en /singup  si clicea a Create One
LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,

  user: PropTypes.object.isRequired
};


export default LoginForm;
