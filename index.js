const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./config/index.json');
const app = express();


  require('./server/models/index').connect(config.dbUri);
// lo archivos que son

app.use(express.static('./server/static/'));
//los arcivos estatticos
app.use(express.static('./client/dist/'));
//lo archivos de js del fron end ya cambiados
// tenemos le bodyParser
app.use(bodyParser.urlencoded({extended:false}));

 const Ingreso =require('./server/Registro/Admin/Ingreso');
 Ingreso.Nuevo();

//http://stackoverflow.com/questions/32903001/react-setstate-on-unmounted-component
//inicializamos el passport
app.use(passport.initialize());

// cragamos las strategias
const localSignupStrategy = require('./server/passport/local-signup');
//en ele localSignupStrategy tenemos la suya
const localLoginStrategy = require('./server/passport/local-login');


passport.use('local-signup', localSignupStrategy);
//le decimos que passpor use para el local-singup el localSignupStrategy
passport.use('local-login', localLoginStrategy);
//le decimos que passpor use local-login teniendo localLoginStrategy
// cheacamos el middlewarwe
const authCheckMiddleware = require('./server/middleware/auth-check');
app.use('/api', authCheckMiddleware);

const authCheckMiddlewareEmpresas = require('./server/middleware/auth-empresa');
app.use('/emp', authCheckMiddlewareEmpresas);

const authCheckMiddlewareAdm = require('./server/middleware/auth-adm');
app.use('/admin', authCheckMiddlewareAdm);

const authCheckMiddlewareUni = require('./server/middleware/auth-uni');
app.use('/unive', authCheckMiddlewareUni);

const authCheckMiddlewareProye = require('./server/middleware/auth-proyectos');
app.use('/proye', authCheckMiddlewareProye);

const authCheckMiddlewareExtra = require('./server/middleware/auth-extra');
app.use('/extra',authCheckMiddlewareExtra);
// routes
const authRoutes = require('./server/routes/auth');
// en ka constante requerimos a la auth que nos dara el archivo para que sea valido el registro
const apiRoutes = require('./server/routes/api');
// en esta consatnte tenemos a que nos mande api la cual nos mada a la pagina que esta
const empRoutes = require('./server/routes/emp');
// en esta contante tenemos a
const uniRoutes = require('./server/routes/unive');

const proyeRoutes = require('./server/routes/proye');

const extraRoutes = require('./server/routes/extra');



const admRoutes = require('./server/routes/admin');

app.use('/auth', authRoutes);
//cuando estemos en /auth mandemos llamar a authRoutes
app.use('/api', apiRoutes);
//cuando estemos en /api nos mande llamar a api routes
app.use('/emp', empRoutes);

app.use('/admin', admRoutes);

app.use('/unive', uniRoutes);

app.use('/proye',proyeRoutes);

app.use('/extra',extraRoutes);
// start the server
app.listen(process.env.PORT || 3000 , /*'192.168.1.76'*/ () => {
  console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
});
