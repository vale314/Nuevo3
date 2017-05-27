const express = require('express');
const validator = require('validator');
const passport = require('passport');
const ingreso = require('../Registro/ingreso');
const ingresoEmp = require('../Registro/Emp/ingreso');
const router = new express.Router();
const cambioEmailAdmin = require('../Registro/Admin/CambioEmailAdmin');
const Passwords = require('../Registro/Password');
const PasswordAdmin = require('../Registro/Admin/CambioConPassword');
const User = require('mongoose').model('User');
const SignUpPageAdmin = require('../Registro/Admin/Emp/SingUpEmp.js');
const Emp = require('../Registro/Emp/PasswordEmp');
const findI = require('../Registro/Admin/Emp/Findi');
const findEmp = require('../Registro/FindEmp');
const Eleccion = require('../Registro/Emp/Eleccion');
const Res = require('../Registro/Emp/Extra/res');
const ingresoA = require('../Registro/Admin/Alumnos/Ingreso')
const SignUpU = require ('../Registro/Admin/Expolitec/SingUpU')
const SignUpP = require('../Registro/Admin/Expolitec/Proyectos/SignUp')
const registroP = require('../Registro/Admin/Expolitec/Proyectos/Registro')
const registroA = require('../Registro/Admin/Expolitec/Proyectos/RegistroA')
const hoursExpol = require('../Registro/Expolitec/Horas')
const registroUni = require('../Registro/Expolitec/Registro')
const InsertarUniAdmin = require('../Registro/Admin/Expolitec/Update')
const registroPA = require('../Registro/Admin/Expolitec/Proyectos/RegistroP');
//const registroPAC = require('../Registro/Admin/Expolitec/Proyectos/RegistroPA')
const PasswordUni = require('../Registro/Expolitec/Password')
const PasswordProye = require('../Registro/Expolitec/Proyectos/Password')
const UpdateUR = require('../Registro/Admin/Expolitec/UpdateUR')
/**
 * Validate the sign up form
 *
 * @param {object} payload - the HTTP body message
 * @returns {object} The result of validation. Object contains a boolean validation result,
 *                   errors tips, and a global message for the whole form.
 */
function validateSignupForm(payload) {
  const errors = {};
  let isFormValid = true;
  let message = '';

  if (!payload || typeof payload.email !== 'string' || !validator.isEmail(payload.email)) {
    isFormValid = false;
    errors.email = 'Porfavor un email correcto';
  }

  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length < 8) {
    isFormValid = false;
    errors.password = 'Una contraseña mayor';
  }

  if (!payload || !validator.isAlpha(payload.name, ['es-ES'])&& !validator.contains(payload.name,' ') || validator.isNumeric(payload.name) ||   payload.name.trim().lenght === 0) {
    isFormValid = false;
    errors.name = 'PorFavor Tu Nombre';
  }

  if (!validator.isNumeric(payload.codigo) || !payload || payload.codigo.trim().length === 0){
    isFormValid = false;
    errors.codigo = 'porfavor introduce Codigo'
  }


  if (!isFormValid) {
    message = 'Checa el formato es invalido';
  }

  return {
    success: isFormValid,
    message,
    errors
  };
}

function validateSignupFormE(payload) {
  const errors = {};
  let isFormValid = true;
  let message = '';

  if (!payload || typeof payload.email !== 'string' || !validator.isEmail(payload.email)) {
    isFormValid = false;
    errors.email = 'Porfavor un email correcto';
  }

  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length < 8) {
    isFormValid = false;
    errors.password = 'Una contraseña mayor';
  }

  if (!payload || !validator.isAlpha(payload.name, ['es-ES'])&& !validator.contains(payload.name,' ') || validator.isNumeric(payload.name) ||   payload.name.trim().lenght === 0) {
    isFormValid = false;
    errors.name = 'PorFavor Tu Nombre';
  }

  if (!validator.isNumeric(payload.codigo) || !payload || payload.codigo.trim().length === 0 || payload.codigo.trim().length > 5){
    isFormValid = false;
    errors.codigo = 'Porfavor Un Codigo MAX 5'

  }


  if (!isFormValid) {
    message = 'Checa el formato es invalido';
  }

  return {
    success: isFormValid,
    message,
    errors
  };
}

/**
 * Validate the login form
 *
 * @param {object} payload - the HTTP body message
 * @returns {object} The result of validation. Object contains a boolean validation result,
 *                   errors tips, and a global message for the whole form.
 */
function validateLoginForm(payload) {
  const errors = {};
  let isFormValid = true;
  let message = '';

  if (!payload || typeof payload.email !== 'string' || !validator.isEmail(payload.email)) {
    isFormValid = false;
    errors.email = 'Porfavor un email correcto';
  }

  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length === 0) {
    isFormValid = false;
    errors.password = 'Please provide your password.';
  }

  if (!isFormValid) {
    message = 'Check the form for errors.';
  }

  return {
    success: isFormValid,
    message,
    errors
  };
}


function validateRegistro(payload){
  const errors= {};
  let isFormValid = true;
  let message = '';
  if(!payload || !validator.isAlpha(payload.name, ['es-ES'])&& !validator.contains(payload.name,' ') || validator.isNumeric(payload.name) || payload.name.trim().length === 0){
    isFormValid = false;
    errors.name = 'por favor poga su nombre';
  }

  if(!payload || validator.equals(payload.carrera , 'null') || validator.equals(payload.carrera, '')){
    isFormValid=false;
  }
  if(!payload || validator.equals(payload.turno , 'null') || validator.equals(payload.turno, '')){
    isFormValid  = false;
  }
  if(!payload || validator.equals(payload.grupo, 'null') || validator.equals(payload.grupo, '') || validator.isNumeric(payload.grupo)){
    isFormValid= false;
  }
  if(payload.calificacion){
    if(!payload || !validator.isNumeric(payload.calificacion) || payload.calificacion.trim().length === 0){
      errors.calificacion = 'PorFavor Una Bien'
      isFormValid = false;
    }
  }
  if(!payload || payload.domicilio.trim().length === 0 ){
    errors.domicilio = 'Por favor Escriba Un Domicilio'
    isFormValid = false;
  }

  if(!payload || !validator.isAlpha(payload.colonia, ['es-ES'])&& !validator.contains(payload.colonia,' ') || payload.colonia.trim().length === 0){
    errors.colonia = 'PorFavor Escribe Domicilio';
    isFormValid = false;
  }

  if(!payload || !validator.isNumeric(payload.cp) || payload.cp.trim().length === 0){
    errors.cp = 'PorFavor Escribe Una Postal Correcta';
    isFormValid = false;
  }
  if(!payload || !validator.isNumeric(payload.domNU) || payload.domNU.trim().length === 0){
    errors.domNU = 'Porfavor Escribe Un Numero Correcto';
    isFormValid = false;
  }
  if(!payload || !validator.isAlpha(payload.padre, ['es-ES'])&& !validator.contains(payload.padre,' ') || payload.padre.trim().length === 0){
    errors.padre = 'PorFavor Escribe Un Nombre Correcto'
    isFormValid = false;
  }
  if(!payload || !validator.isAlpha(payload.madre, ['es-ES'])&& !validator.contains(payload.madre,' ') || payload.madre.trim().length === 0){
    errors.madre = 'PorFavor Escribe Un Nombre Correcto'
    isFormValid = false;
  }
  if(!payload || !validator.isNumeric(payload.telPadre) || payload.telPadre.trim().length === 0){
    errors.telPadre = 'Porfavor Escribe Un Numero Correcto';
    isFormValid = false;
  }
  if(!payload || !validator.isNumeric(payload.telMadre) || payload.telMadre.trim().length === 0){
    errors.telMadre = 'Porfavor Escribe Un Numero Correcto';
    isFormValid = false;
  }
  if(!payload || !validator.isAlpha(payload.municipio, ['es-ES'])&& !validator.contains(payload.municipio,' ') || validator.isNumeric(payload.municipio) || payload.municipio.trim().length === 0){
    errors.municipio = 'PorFavor Esbribe Un Municipio Valido'
    isFormValid = false;
  }
  if(!payload || !validator.isAlpha(payload.estado, ['es-ES'])&& !validator.contains(payload.estado,' ') || validator.isNumeric(payload.estado) || payload.estado.trim().length === 0){
    errors.estado = 'PorFavor Escribe Campo Estado Correctamenete ';
    isFormValid = false;
  }
  if(!payload || !validator.isNumeric(payload.telefono) || payload.telefono.trim().length === 0){
    errors.telefono = 'Porfavor Escribe Un Numero Correcto';
    isFormValid = false;
  }
  if(!payload || !validator.isNumeric(payload.celular) || payload.celular.trim().length === 0){
    errors.celular = 'Porfavor Escribe Un Numero Correcto';
    isFormValid = false;
  }
  if(!payload || !validator.isNumeric(payload.telEmergencia) || payload.telEmergencia.trim().length === 0){
    errors.telEmergencia = 'Porfavor Escribe Un Numero Correcto';
    isFormValid = false;
  }
  if(!payload || !validator.isNumeric(payload.nss) || payload.nss.trim().length === 0){
    errors.nss = 'Porfavor Escribe Un NSS Correcto';
    isFormValid = false;
  }

  if(!payload || validator.equals(payload.sexo, 'null') || validator.equals(payload.sexo, '')){
    isFormValid = false;
    errors.sexo = 'seleccione un genero'
  }
  if(!payload || !validator.isNumeric(payload.edad) || payload.edad.trim().length === 0){
    errors.edad = 'Porfavor Escribe Un NSS Correcto';
    isFormValid = false;
  }
  if(!payload || !validator.isAlpha(payload.nacionalidad, ['es-ES'])&& !validator.contains(payload.nacionalidad,' ') || validator.isNumeric(payload.nacionalidad) || payload.nacionalidad.trim().length === 0){
    isFormValid = false;
    errors.nacionalidad = 'PorFavor Escriba Su Nacionalidad Correctamenete';
  }
  if(payload.codeEmp){
    if(!payload || validator.isAlpha(payload.codeEmp,['es-ES'])){
      isFormValid = false;
      errors.codeEmp = "Por Favor Codigo Empresa"
    }
  }
  if(!isFormValid ){
    message = 'porfavor escribe un formato correcto';
  }

  return{
    success: isFormValid,
    message,
    errors
  };
}




function validateEmp(payload){
  const errors= {};
  let isFormValid = true;
  let message = '';
  if(!payload || !validator.isAlpha(payload.name, ['es-ES'])&& !validator.contains(payload.name,' ') || validator.isNumeric(payload.name) || payload.name.trim().length === 0){
    isFormValid = false;
    errors.name = 'por favor poga su nombre de la Empresas';
  }
  if(!payload || !validator.isAlpha(payload.repLegal, ['es-ES'])&& !validator.contains(payload.repLegal,' ') || validator.isNumeric(payload.repLegal) || payload.repLegal.trim().length === 0){
    isFormValid = false;
    errors.repLegal = 'por favor poga su nombre ';
  }

  if(!payload || !validator.isAlpha(payload.formato, ['es-ES'])&& !validator.contains(payload.formato,' ') || validator.isNumeric(payload.formato) || payload.formato.trim().length === 0){
    isFormValid = false;
    errors.formato = 'por favor escriba ';
  }
  if(!payload || !validator.isNumeric(payload.telefono) || payload.telefono.trim().length === 0){
    errors.telefono = 'Porfavor Escribe Un Numero Correcto';
    isFormValid = false;
  }
  if(!payload || !validator.isNumeric(payload.celular) || payload.celular.trim().length === 0){
    errors.celular = 'Porfavor Escribe Un Numero Correcto';
    isFormValid = false;
  }
  if(!payload || !validator.isAlpha(payload.rubro, ['es-ES'])&& !validator.contains(payload.rubro,' ') || validator.isNumeric(payload.rubro) || payload.rubro.trim().length === 0){
    isFormValid = false;
    errors.rubro = 'por favor poga su RUBRO';
  }
  if(!payload || payload.rubro.trim().length > 999){
    isFormValid = false;
    errors.rubro = 'no mas de 999 caracteres'
  }

  if(!payload || !validator.isAlpha(payload.tamaño, ['es-ES'])&& !validator.contains(payload.tamaño,' ') || payload.tamaño.trim().length === 0){
    errors.tamaño = 'PorFavor Escribe Colonia';
    isFormValid = false;
  }
  if(!payload || !validator.isNumeric(payload.numT) || payload.numT.trim().length === 0){
    errors.numT = 'Porfavor Escribe Un Numero Correcto';
    isFormValid = false;
  }
  if(!payload || !validator.isAlpha(payload.calle, ['es-ES'])&& !validator.contains(payload.calle,' ') || payload.calle.trim().length === 0){
    errors.calle = 'PorFavor Escribe Calle';
    isFormValid = false;
  }

  if(!payload || !validator.isNumeric(payload.domN) || payload.domN.trim().length === 0){
    errors.domN = 'PorFavor Escribe Un Numero Correcto';
    isFormValid = false;
  }
  if(!payload || !validator.isAlpha(payload.colonia, ['es-ES'])&& !validator.contains(payload.colonia,' ') || payload.colonia.trim().length === 0){
    errors.colonia = 'PorFavor Escribe Colonia';
    isFormValid = false;
  }
  if(!payload || !validator.isAlpha(payload.municipio, ['es-ES'])&& !validator.contains(payload.municipio,' ') || payload.municipio.trim().length === 0){
    errors.municipio = 'PorFavor Escribe Municipio';
    isFormValid = false;
  }
  if(!payload || !validator.isAlpha(payload.estado, ['es-ES'])&& !validator.contains(payload.estado,' ') || validator.isNumeric(payload.estado) || payload.estado.trim().length === 0){
      isFormValid = false;
      errors.estado = 'por favor poga su Estado';
    }
  if(!payload || !validator.isNumeric(payload.cp) || payload.cp.trim().length === 0){
    errors.cp = 'PorFavor Escribe Una Postal Correcta';
    isFormValid = false;
  }

  if(!payload || !validator.isAlpha(payload.depDA, ['es-ES'])&& !validator.contains(payload.depDA,' ') || validator.isNumeric(payload.depDA) || payload.depDA.trim().length === 0){
    errors.depDA = 'PorFavor Escriba Su Departamento Asignacion';
    isFormValid=false;
  }

  if(!payload || !validator.isAlpha(payload.cargo, ['es-ES'])&& !validator.contains(payload.cargo,' ') || validator.isNumeric(payload.cargo) || payload.cargo.trim().length === 0){
    errors.cargo = 'PorFavor Escriba Cargo';
    isFormValid=false;
  }

  if(!isFormValid ){
    message = 'porfavor escribe un formato correcto';
  }

  return{
    success: isFormValid,
    message,
    errors
  };
}


function validateRegP(payload) {
  const errors = {};
  let isFormValid = true;
  let message = '';

  if (!payload || typeof payload.name !== 'string' || payload.name.trim().lenght === 0) {
    isFormValid = false;
    errors.name = 'Porfavor un nombre correcto';
  }

  if(!payload || !validator.isNumeric(payload.celular) || payload.celular.trim().length === 0){
    errors.celular = 'Porfavor Escribe Un Numero Correcto';
    isFormValid = false;
  }
  if(!payload || !validator.isAlpha(payload.descripcion, ['es-ES'])&& !validator.contains(payload.descripcion,' ') || validator.isNumeric(payload.descripcion) /*|| payload.descripcion.trim().descripcion === 0*/){
    isFormValid = false;
    errors.descripcion = 'por favor poga su RUBRO';
  }
  if(!payload || validator.isAlpha(payload.tamaño,['es-ES']) || payload.tamaño <= 0 || payload.tamaño   > 5){
    isFormValid = false;
    errors.tamaño = 'porfavor escriba Correctamente';
  }

  if (!isFormValid) {
    message = 'Check the form for errors.';
  }

  return {
    success: isFormValid,
    message,
    errors
  };
}

function PerfilValidate1(payload){
  const errors = {};
  let message = '';
  let isFormValid = true;
  if(!payload || payload.password1.trim().length === 0){
    errors.password1 = 'Escribe Una Contraseña'
    isFormValid = false;
  }
  if(!payload){
    message = 'PorFavor El Formato'
  }
  return{
      success: isFormValid,
      message,
      errors
    };
}


function PerfilValidate(payload){
  const errors = {};
  let message = '';
  let isFormValid = true;
  if(!payload || payload.password1.trim().length === 0){
    errors.password1 = 'Escribe Una Contraseña'
    isFormValid = false;
  }
  if (!payload || typeof payload.password5 !== 'string' || payload.password5.trim().length < 8) {
    isFormValid = false;
    errors.password5 = 'Una contraseña mayor';
  }

  if(!payload){
    message = 'PorFavor El Formato'
  }
    return{
      success: isFormValid,
      message,
      errors
    };
}

function validateAdminEmail(payload) {
  const errors = {};
  let isFormValid = true;
  let message = '';

  if (!payload || typeof payload.email !== 'string' || !validator.isEmail(payload.email)) {
    isFormValid = false;
    errors.email = 'Porfavor un email correcto';
  }

  if (!payload || typeof payload.email5 !== 'string' || !validator.isEmail(payload.email5)) {
    isFormValid = false;
    errors.email5 = 'Porfavor un email correcto';
  }

  if (!isFormValid) {
    message = 'Checa el formato es invalido';
  }

  return {
    success: isFormValid,
    message,
    errors
  };
}
function validateE(payload){
  const errors = {};
  let isFormValid = true;
  let message = '';
  if ( payload.TPSI.cantidad == "" && payload.TPSI.sexo !="null" ||!payload ||payload.TPSI.cantidad <= "0" && payload.TPSI.sexo != 'null' || payload.TPSI.cantidad != "0" && payload.TPSI.sexo == 'null'){
    isFormValid = false;
    errors.TPSIC = 'Porfavor un cantidad correcto';

  }
  if ( payload.TPP.cantidad == "" && payload.TPP.sexo !="null"||!payload || payload.TPP.cantidad <= "0" && payload.TPP.sexo != "null" || payload.TPP.cantidad != "0" && payload.TPP.sexo == "null"){
    isFormValid = false;
    errors.TPPC = 'Porfavor un cantidad correcto';

  }
  if (payload.TPMI.cantidad == "" && payload.TPMI.sexo !="null"||!payload || payload.TPMI.cantidad <= "0" && payload.TPMI.sexo != "null" || payload.TPMI.cantidad != "0" && payload.TPMI.sexo == "null"){
    isFormValid = false;
    errors.TPMIC = 'Porfavor un cantidad correcto';

  }
  if (payload.TPMF.cantidad == "" && payload.TPMF.sexo !="null"||!payload || payload.TPMF.cantidad <= "0" && payload.TPMF.sexo != "null" || payload.TPMF.cantidad != "0" && payload.TPMF.sexo == "null"){
    isFormValid = false;
    errors.TPMFC = 'Porfavor un cantidad correcto';

  }
  if (payload.TPPQI.cantidad == "" && payload.TPPQI.sexo !="null"||!payload || payload.TPPQI.cantidad <= "0" && payload.TPPQI.sexo != "null" || payload.TPPQI.cantidad != "0" && payload.TPPQI.sexo == "null"){
    isFormValid = false;
    errors.TPPQIC = 'Porfavor un cantidad correcto';

  }
  if (payload.TPQAPA.cantidad == "" && payload.TPQAPA.sexo !="null"||!payload || payload.TPQAPA.cantidad <= "0" && payload.TPQAPA.sexo != "null" || payload.TPQAPA.cantidad != "0" && payload.TPQAPA.sexo == 'null'){
    isFormValid = false;
    errors.TPQAPAC = 'Porfavor un cantidad correcto';

  }
  if (payload.TPEI.cantidad == "" && payload.TPEI.sexo !="null"||!payload || payload.TPEI.cantidad <= "0" && payload.TPEI.sexo != "null" || payload.TPEI.cantidad != "0" && payload.TPEI.sexo == "null"){
    isFormValid = false;
    errors.TPEIC = 'Porfavor un cantidad correcto';

  }
  if (!isFormValid) {
    message = 'Checa el formato es invalido';
  }
  return {
    success: isFormValid,
    message,
    errors
  };
}

function validateRegUni(payload) {
  const errors = {};
  let isFormValid = true;
  let message = '';

  if (!payload || !validator.isAlpha(payload.escuela, ['es-ES'])&& !validator.contains(payload.escuela,' ') || payload.escuela.trim().lenght === 0) {
    isFormValid = false;
    errors.escuela = 'Porfavor un nombre correcto';
  }

  if(!payload || !validator.isAlpha(payload.direccion, ['es-ES'])&& !validator.contains(payload.direccion,' ') || payload.direccion.trim().length === 0){
    errors.direccion = 'PorFavor Escribe direccion';
    isFormValid = false;
  }
  if(!payload || validator.equals(payload.turno, 'null') || validator.equals(payload.turno, '')){
    isFormValid = false;
    errors.turno = 'seleccione un turno'
  }

  if (!isFormValid) {
    message = 'Check the form for errors.';
  }

  return {
    success: isFormValid,
    message,
    errors
  };
}

router.post('/signup', (req, res, next) => {
  const validationResult = validateSignupForm(req.body);
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    });
  }


  return passport.authenticate('local-signup', (err) => {
    console.log(err)
    if (err) {
      if (err.name === 'MongoError' && err.code === 11000) {
        // the 11000 Mongo code is for a duplication email error
        // the 409 HTTP status code is for conflict error
        return res.status(409).json({
          success: false,
          message: 'Check the form for errors.',
          errors: {
            email: 'This email is already taken.',
            codigo: 'Codigo Ya esta en uso'
          }
        });
      }

      if (err.codigo === 'MongoError' && err.code === 11000) {
        // the 11000 Mongo code is for a duplication email error
        // the 409 HTTP status code is for conflict error
        return res.status(409).json({
          success: false,
          message: 'Check the form for errors.',
          errors: {
            codigo: 'este codigo ya esta en uso'
          }
        });
      }

      if(err===213){
        return res.status(409).json({
          success:false,
          message: 'Codigo No Octavo',
        });
      }

      return res.status(400).json({
        success: false,
        message: 'Could not process the form.'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'You have successfully signed up! Now you should be able to log in.'
    });
  })(req, res, next);
});




router.post('/signupemp', (req, res, next) => {
  const validationResult = validateSignupFormE(req.body);
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    });
  }

  SignUpPageAdmin.registro(req,(err)=>{

      if (err) {
        if (err.name === 'MongoError' && err.code === 11000) {
          // the 11000 Mongo code is for a duplication email error
          // the 409 HTTP status code is for conflict error
          return res.status(409).json({
            success: false,
            message: 'Check the form for errors.',
            errors: {
              email: 'This email is already taken.',

            }
          });
        }

        if (err.codigo === 'MongoError' && err.code === 11000) {
          // the 11000 Mongo code is for a duplication email error
          // the 409 HTTP status code is for conflict error
          return res.status(409).json({
            success: false,
            message: 'Check the form for errors.',
            errors: {
              codigo: 'este codigo ya esta en uso'
            }
          });
        }

        return res.status(400).json({
          success: false,
          message: 'Could not process the form.'
        });

    }else{
      res.status(200).json();
    }
  });


});

router.post('/signupU', (req, res, next) => {
  const validationResult = validateSignupForm(req.body);
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    });
  }

  SignUpU.registro(req,(err)=>{

      if (err) {

        if (err.name === 'MongoError' && err.code === 11000) {
          // the 11000 Mongo code is for a duplication email error
          // the 409 HTTP status code is for conflict error
          return res.status(409).json({
            success: false,
            message: 'Check the form for errors.',
            errors: {
              email: 'This email is already taken.',

            }
          });
        }

        if (err.codigo === 'MongoError' && err.code === 11000) {
          // the 11000 Mongo code is for a duplication email error
          // the 409 HTTP status code is for conflict error
          return res.status(409).json({
            success: false,
            message: 'Check the form for errors.',
            errors: {
              codigo: 'este codigo ya esta en uso'
            }
          });
        }
        if (err.lista === 11001) {
          // the 11000 Mongo code is for a duplication email error
          // the 409 HTTP status code is for conflict error
          return res.status(409).json({
            success: false,
            message: 'Check the form for errors.',
            errors: {
              codigo: 'Este Codigo No esta Activo'
            }
          });
        }
        return res.status(400).json({
          success: false,
          message: 'Could not process the form.'
        });

    }else{
      res.status(200).json();
    }
  });


});


router.post('/signupP', (req, res, next) => {
  const validationResult = validateSignupForm(req.body);
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    });
  }

  SignUpP.registro(req,(err)=>{
      if (err) {

        if (err.name === 'MongoError' && err.code === 11000) {
          // the 11000 Mongo code is for a duplication email error
          // the 409 HTTP status code is for conflict error
          return res.status(409).json({
            success: false,
            message: 'Check the form for errors.',
            errors: {
              email: 'This email is already taken.',

            }
          });
        }

        if (err.codigo === 'MongoError' && err.code === 11000) {
          // the 11000 Mongo code is for a duplication email error
          // the 409 HTTP status code is for conflict error
          return res.status(409).json({
            success: false,
            message: 'Check the form for errors.',
            errors: {
              codigo: 'este codigo ya esta en uso'
            }
          });
        }
        if (err.lista === 11001) {
          // the 11000 Mongo code is for a duplication email error
          // the 409 HTTP status code is for conflict error
          return res.status(409).json({
            success: false,
            message: 'Check the form for errors.',
            errors: {
              codigo: 'Este Codigo No esta Activo'
            }
          });
        }
        return res.status(400).json({
          success: false,
          message: 'Could not process the form.'
        });

    }else{
      res.status(200).json();
    }
  });


});



router.post('/login', (req, res, next) => {
  const validationResult = validateLoginForm(req.body);
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    });
  }


  return passport.authenticate('local-login', (err, token, userData) => {
    if (err) {
      if (err.name === 'IncorrectCredentialsError') {
        return res.status(400).json({
          success: false,
          message: err.message
        });
      }

      return res.status(400).json({
        success: false,
        message: 'Could not process the form.'
      });
    }


    return res.json({
      success: true,
      message: 'You have successfully logged in!',
      token,
      user: userData
    });
  })(req, res, next);
});



router.put('/registro',(req, res , next)=>{
  //quita el console

  const RegistroValidate = validateRegistro(req.body);

  if(!RegistroValidate.success){
    return res.status(400).json({
      success:false,
      message:RegistroValidate.message,
      errors: RegistroValidate.errors
    });
    res.end();
  }


  ingreso.registro(req.body,(respuesta)=>{
    if(respuesta==true){
      res.status(500).end();
    }else {
      res.status(200).end();
    }

  });
});
//
//   return RegistroForm(() => {
//     const userData = newUser.req.body.name;
//
//
//     const newUser = new User(userData);
//   });
//
//
//
// });



router.put('/registroemp',(req, res , next)=>{
  //quita el console

  const RegistroValidate = validateEmp(req.body);

  if(!RegistroValidate.success){
    return res.status(400).json({
      success:false,
      message:RegistroValidate.message,
      errors: RegistroValidate.errors
    });
    res.end();
  }
  ingresoEmp.registro(req.body,(respuesta)=>{
    if(respuesta==true){
      res.status(500).end();
    }else {
      res.status(200).end();
    }

  });
});
router.put('/registropcar',(req, res , next)=>{
  //quita el console
  const token = req.headers.authorization.split(' ')[1];
  // const RegistroValidate = validateRegP(req.body);
  // //const tokens=[token,req.body]
  // if(!RegistroValidate.success){
  //   return res.status(400).json({
  //     success:false,
  //     message:RegistroValidate.message,
  //     errors: RegistroValidate.errors
  //   });
  //   res.end();
  // }
  registroA.registro([token,req.body],(respuesta)=>{
    if(respuesta==true){
      res.status(500).end();
    }else {
      res.status(200).end();
    }

  });
});


router.put('/registrop',(req, res , next)=>{
  //quita el console
  const token = req.headers.authorization.split(' ')[1];
  const RegistroValidate = validateRegP(req.body);
  //const tokens=[token,req.body]
  if(!RegistroValidate.success){
    return res.status(400).json({
      success:false,
      message:RegistroValidate.message,
      errors: RegistroValidate.errors
    });
    res.end();
  }
  registroP.registro([token,req.body],(respuesta)=>{
    if(respuesta==true){
      res.status(500).end();
    }else {
      res.status(200).end();
    }

  });
});

router.put('/registropa',(req, res , next)=>{
  //quita el console
  const codigo = req.headers.codigo.split(' ')[1];
  const bodys = req.body;
  const RegistroValidate = validateRegP(req.body);
  //const tokens=[token,req.body]
  if(!RegistroValidate.success){
    return res.status(400).json({
      success:false,
      message:RegistroValidate.message,
      errors: RegistroValidate.errors
    });
    res.end();
  }
  registroPA.registro([codigo,bodys],(respuesta)=>{
    if(respuesta==true){
      res.status(400).end();
    }else {
      res.status(200).end();
    }

  });
});

  router.put('/registroa',(req, res , next)=>{
    //quita el console

    const RegistroValidate = validateRegistro(req.body);

    if(!RegistroValidate.success){
      return res.status(400).json({
        success:false,
        message:RegistroValidate.message,
        errors: RegistroValidate.errors
      });
    }

  ingresoA.registro(req.body,(respuesta)=>{
    if(respuesta==true){
      res.status(500).end();
    }else {
      res.status(200).end();
    }

  });
});
router.put('/registroemp1',(req,res)=>{

  const token = req.headers.authorization.split(' ')[1];

  var str = Res.res(req.body);
  const RegistroValidate = validateE(str);
  if(!RegistroValidate.success){
    return res.status(400).json({
      success:false,
      message:RegistroValidate.message,
      error: RegistroValidate.errors
    });
    res.end();
  }
  //const RegistroValidate = validateE(str);
   findEmp.find(token,(callback)=>{
     const id=(callback._id);
     const body=(req.body);

     const array=[id, body]


    res.status(200).end();
    Eleccion.eleccion(array,(callback)=>{
      if (callback==1){
        res.status(200).end();
      }
    });
   })

})


router.put('/registro3',(req, res)=>{
  const token = req.headers.codigo.split(' ')[1];
  var str = Res.res(req.body);
  const RegistroValidate = validateE(str);
  console.log(RegistroValidate)
  if(!RegistroValidate.success){
      return res.status(400).json({
        success:false,
        message:RegistroValidate.message,
        error: RegistroValidate.errors
      });
  }
    const body={codigo:token,name:'',email:''};

    findI.find(body,(respuesta)=>{
      if(!respuesta) return res.status(404).end();

      const array=[respuesta._id, req.body]

     Eleccion.eleccion(array,(callback)=>{
       if (callback==1){
         return res.status(200).end();
       }
       return res.status(400).end();
     });


    })



})

router.put('/perfil',(req, res, next)=>{
  const RegistroValidate = PerfilValidate(req.body);
  if(!RegistroValidate.success){
    return res.status(400).json({
      success:false,
      message:RegistroValidate.message,
      errors: RegistroValidate.errors
    });
    res.end();
  }

  Passwords.registro(req.body,(respuesta)=>{

    if (respuesta==true) {
        return res.status(401).json({
          success: false,
          message: 'Revise La Password'
        })
    res.end();
    }
    Passwords.Cambio(req.body,(respuesta)=>{
      if(respuesta==true){
        return res.status(400).end();

      }else{
        return res.status(200).end();
      }
    })
    if(respuesta==false){
      res.status(200).json({
        success:true,
        message:'Excelent'
      });
    }
    res.status(404).end();
  });
});


router.put('/perfilemp',(req, res, next)=>{
  const RegistroValidate = PerfilValidate(req.body);
  if(!RegistroValidate.success){
    return res.status(400).json({
      success:false,
      message:RegistroValidate.message,
      errors: RegistroValidate.errors
    });
    res.end();
  }

  Emp.registro(req.body,(respuesta)=>{

    if (respuesta==true) {
        return res.status(401).json({
          success: false,
          message: 'Revise La Password'
        })
    res.end();
    }
    Emp.Cambio(req.body,(respuesta)=>{
      if(respuesta==true){
        return res.status(400).end();

      }else{
        return res.status(200).end();
      }
    })
    if(respuesta==false){
      res.status(200).json({
        success:true,
        message:'Excelent'
      });
    }
    res.status(404).end();
  });
});

router.put('/perfiluni',(req, res, next)=>{
  const RegistroValidate = PerfilValidate(req.body);
  const token = req.headers.authorization.split(' ')[1];

  if(!RegistroValidate.success){
    return res.status(400).json({
      success:false,
      message:RegistroValidate.message,
      errors: RegistroValidate.errors
    });
    res.end();
  }

  PasswordUni.registro([token,req.body],(respuesta)=>{

    if (respuesta==false) {
        return res.status(401).json({
          success: false,
          message: 'Revise La Password'
        })
    res.end();
    }
    return res.status(200).end();


  });
});



router.put('/perfilproye',(req, res, next)=>{
  const RegistroValidate = PerfilValidate(req.body);
  const token = req.headers.authorization.split(' ')[1];

  if(!RegistroValidate.success){
    return res.status(400).json({
      success:false,
      message:RegistroValidate.message,
      errors: RegistroValidate.errors
    });
    res.end();
  }

  PasswordProye.registro([token,req.body],(respuesta)=>{

    if (respuesta==false) {
        return res.status(412).json({
          success: false,
          message: 'Revise La Password'
        })
    res.end();
    }
    return res.status(200).end();


  });
});



router.put('/perfiladmin',(req, res, next)=>{
  const RegistroValidate = validateAdminEmail(req.body);
  if(!RegistroValidate.success){
    return res.status(400).json({
      success:false,
      message:RegistroValidate.message,
      errors: RegistroValidate.errors
    });
    res.end();
  }

  cambioEmailAdmin.registro(req.body,(respuesta)=>{

    if (respuesta==true) {
      const mensaje = 'Revise El Email';
      const error = new Error('Not Email Found');
        return res.status(404).json({
          success: false,
          message: mensaje,
          errors: error
        })
    res.end();
    }
    cambioEmailAdmin.Cambio(req.body,(respuesta1)=>{
      console.log(respuesta1);
      if(respuesta1==true){
        const error = new Error('En Email Ya esta Usado');
        error.email5 = 'Ya esta Usado';
        return res.status(409).json({
          errors: error
        });
      }else{
        return res.status(200).end();
      }
    });

  });
});

router.put('/password',(req,res)=>{
  const RegistroValidate = PerfilValidate1(req.body);
    if(!RegistroValidate.success){
      return res.status(400).json({
        success:false,
        message:RegistroValidate.message,
        errors:RegistroValidate.errors
      });
    }
    PasswordAdmin.registro(req.body,(response)=>{
      if(response==1){
        const message = 'Revise Un Error';
        const error = new Error('Error');

        return res.status(400).json({
          success:false,
          message:message,
          errors:error

        });
      }
      else if(response == 3){
        const message = 'Revise Un Contraseña';
        const error = new Error('Error');
        return res.status(400).json({
          success:false,
          message:message,
          errors:error
        });

      }else if(response == false){
        return res.status(200).end();
      }

  })

})

router.put('/perfiladminpassword',(req, res, next)=>{

  const RegistroValidate = PerfilValidate(req.body);
  if(!RegistroValidate.success){
    return res.status(400).json({
      success:false,
      message:RegistroValidate.message,
      errors: RegistroValidate.errors
    });
    res.end();
  }

  PasswordAdmin.registro(req.body,(respuesta)=>{

    if (respuesta) {
      const mensaje = 'Revise El Password';
      const error = new Error('Not Password Found');
        return res.status(404).json({
          success: false,
          message: mensaje,
          errors: error
        })
    res.end();
    }
    PasswordAdmin.Cambio(req.body,(respuesta1)=>{
      console.log(respuesta1);
      if(respuesta1==true){
        return res.status(409).endl();
      }else{
        return res.status(200).end();
      }
    });

  });
});

router.put('/expolih',(req,res)=>{
  const codigo = req.headers.codigo.split(' ')[1];

  const users = req.headers.authorization.split(' ')[1];

  const user = req.body;
  hoursExpol.registro([codigo,user,users],(respuesta)=>{

    if(respuesta != null) return res.status(400).json({
      errors:respuesta,
      message:'Error Cantidad Maxima'
    });
      return res.status(200).end();
  })
})

router.put('/expoliha',(req,res)=>{
  const codigo = req.headers.codigo.split(' ')[1];

  const dia = req.headers.dia.split(' ')[1];

  const bodys = req.body;

  InsertarUniAdmin.registro([dia,bodys,codigo],(response)=>{
    if(response) return res.status(400).end();
    return res.status(200).end();
  })

})

router.put('/registroUni',(req,res)=>{
  const codigo = req.headers.authorization.split(' ')[1];
  const bodys = req.body;

  const RegistroValidate = validateRegUni(req.body)

  if(!RegistroValidate.success){
    return res.status(400).json({
      success:false,
      message:RegistroValidate.message,
      errors: RegistroValidate.errors
    });

  }

  registroUni.registro([codigo,bodys],(response)=>{
    if(response == false || response) return res.status(400).end();
    return res.status(200).end();
  })

})
router.put('/registroUniU',(req,res)=>{
  const codigo = req.headers.codigo.split(' ')[1];
  const bodys = req.body;

  const RegistroValidate = validateRegUni(req.body)

  if(!RegistroValidate.success){
    return res.status(400).json({
      success:false,
      message:RegistroValidate.message,
      errors: RegistroValidate.errors
    });

  }

  UpdateUR.registro([codigo,bodys],(response)=>{
    if(response == false || response) return res.status(400).end();
    return res.status(200).end();
  })

})
module.exports = router;
