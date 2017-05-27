import Base from './componets/Base.jsx';
//importamos en base el base.jsx
import HomePage from './componets/HomePage.jsx';
//importamos el HomePage
import LoginPage from './containers/LoginPage.jsx';
//importamos el LoginPage
import SignUpPage from './containers/SignUpPage.jsx';
//importamos el SingUpPage
import DashboardPage from './containers/DashboardPage.jsx';
//
import Auth from './modules/Auth';

import registro from './containers/Registro.jsx';

import Vistas from './containers/vistas.jsx'

import Perfil from './containers/Perfil.jsx'

import Desbordes from './componets/Desborde.jsx'

import HomePgE from './componets/empresas/HomePgE.jsx'

import LoginEmpre from './containers/empresas/LoginPage.jsx'

import Principal from './containers/empresas/Ingreso.jsx';

import RegistroEmp from './containers/empresas/RegistroEmp.jsx';

import ViewsEmp from './containers/empresas/vistas.jsx';

import HomePgA from './componets/Admin/HomePgA.jsx';

import LoginPageA from './containers/Admin/LoginPage.jsx'

import HomeAdmin from './containers/Admin/HomePgAD.jsx';

import PerfilAdmin from './containers/Admin/PerfilAdmin.jsx';

import Delete from './componets/Admin/Delete.jsx';

import DeleteDB from './containers/Admin/Delete/DDB.jsx';

import PerfilHome from './componets/Admin/PerfilHome.jsx';

import PasswordAdminCambio from './containers/Admin/PefilPassword.jsx';

import Alumnos from './componets/Admin/Alumnos/Alumnos.jsx';

import Empresas from './componets/Admin/Empresas/Empresas.jsx';

import SingUpPageEmp from './containers/Admin/SingUpPageEmp.jsx';

import PerfilE from './containers/empresas/PerfilEmpresa.jsx';

import ViewEAdmin from './containers/Admin/Empresas/View.jsx';

import Modificar from './containers/Admin/Empresas/Views.jsx';

import ModificarS from  './containers/Admin/Empresas/Busqueda.jsx'

import InsertarCodigos from './containers/Admin/Alumnos/InsertarCodigos.jsx'

import Carreras from './containers/empresas/RegistroEmp0.jsx'

import EmpCarreras from './containers/Admin/Empresas/Carerras.jsx'

import ModificarA from './containers/Admin/Alumnos/Views.jsx'

import ViewAAdmin from './containers/Admin/Alumnos/View.jsx'

import BusquedaA from './containers/Admin/Alumnos/Busqueda.jsx'

import PasswordA from './containers/Admin/Contrasena.jsx'

import DeleteE from './containers/Admin/Delete/DAE.jsx'

import DeleteAl from './containers/Admin/Delete/DAA.jsx'

import DeleteC from './containers/Admin/Delete/DAC.jsx'

import DeleteCCP from './containers/Admin/Delete/DACPS.jsx'

import DeleteCCU from './containers/Admin/Delete/DACUS.jsx'

import DeleteCP from './containers/Admin/Delete/DAP.jsx'

import DeleteCU from './containers/Admin/Delete/DAU.jsx'

import ViewsEA from './containers/AlumnosEmp/View.jsx'

import ViewEA from './containers/AlumnosEmp/Views.jsx'

import Emp from './containers/AlumnosEmp/Emp.jsx';

import Fecha from './containers/Admin/Alumnos/Elecciones.jsx'

import PasswordAlumnos from './containers/Admin/Alumnos/Password.jsx'

import PasswordEmpresas from './containers/Admin/Empresas/Password.jsx'

import page206 from './componets/AlumnosEmp/206.jsx'

import page403 from './componets/AlumnosEmp/403.jsx'

import page417 from './componets/AlumnosEmp/417.jsx'

import Backup from './containers/Admin/backup/backup.jsx'

import Empiezo from './containers/Admin/Expolitec/Empiezo.jsx'

import InsertUNI from './containers/Admin/Expolitec/InsertarCodigoPlantel.jsx'

import SingUpU from './containers/Expolitec/SignUpU.jsx'

import Unive from './containers/Expolitec/Login.jsx'

import UExpolitec from './containers/Expolitec/Homes.jsx'

import SignUpP from './containers/Expolitec/Proyectos/SignUp.jsx'

import InsertProye from './containers/Admin/Expolitec/Proyectos/InsertarCodigoProyectos.jsx'

import HomesExpoli from './containers/Expolitec/Home.jsx'

import LoginPro from './containers/Expolitec/Proyectos/Login.jsx'

import RegistroProyectos from './containers/Expolitec/Proyectos/Registro.jsx'

import HomeP from './containers/Expolitec/Proyectos/Homes.jsx'

import RegistroPA from './containers/Expolitec/Proyectos/RegistroA.jsx'

import ExpoliteFD from './containers/Admin/Expolitec/Fecha.jsx';

import ExpolHoras from './containers/Admin/Expolitec/Horas.jsx'

import ExpolHorasU from './containers/Expolitec/Fecha.jsx'

import ExpolFechaU from './containers/Expolitec/Horas.jsx'

import RegistroUni from './containers/Expolitec/Registro.jsx'

import ViewsEscul from './containers/Admin/Expolitec/views.jsx'

import ViewsProye from './containers/Admin/Expolitec/Proyectos/Views.jsx'

import ViewEscul from './containers/Admin/Expolitec/View.jsx'

import FechaEscul from './containers/Admin/Expolitec/FechaEscul.jsx'

import HorasEscul from './containers/Admin/Expolitec/HorasEscul.jsx'

import RegistroProyectosAdmin from './containers/Admin/Expolitec/Proyectos/Registro.jsx'

import RegistroProyeA from './containers/Admin/Expolitec/Proyectos/RegistroA.jsx'

import PasswordE from './containers/Admin/Expolitec/Password.jsx'

import PasswordAProye from './containers/Admin/Expolitec/Proyectos/Password.jsx'

import PasswordUni from './containers/Expolitec/Password.jsx'

import PasswordProye from './containers/Expolitec/Proyectos/Password.jsx'

import BusquU from './containers/Admin/Expolitec/Busqueda.jsx'

import BusquP from './containers/Admin/Expolitec/Proyectos/Busqueda.jsx'

import Mensa from './containers/Admin/Expolitec/Mensa.jsx'

import Files from './containers/Admin/Files.jsx'

const routes = {
  //en la const routes es igual a
  component: Base,
  //componente es igual a la base
  childRoutes: [
    //tenemos una variable que contiene
    {
      path: '/',
      getComponent: (location, callback) => {
        Auth.rCache();
        if (Auth.isUserAuthenticated() == 1) {
          callback(null, DashboardPage);
        } else{
            if(Auth.isUserAuthenticated() == 2) {
            callback(null,Principal)
              }else{
                if(Auth.isUserAuthenticated() == 3){
                  callback(null,HomeAdmin)
                }
                else{
                  if(Auth.isUserAuthenticated() == 4){
                    callback(null,UExpolitec)
                  }else{
                    if(Auth.isUserAuthenticated()=== 5){
                      callback(null,HomeP)
                    }else{
                      callback(null, HomePage);
                      }
                  }
                }
              }
          }
      }
      //cuando el path sea / nos mande a HomePage
    },

    {
      path: '/login',
      component: LoginPage
      // cuando el path sea /login nos mande a LoginPage
    },

    {
      path: '/signup',
      component: SignUpPage
      //cuando el path sea /singup nos mande al componente SingUpPage
    },

    {
      path: '/logout',
      onEnter: (nextState, replace) => {
        Auth.deauthenticateUser();

        // change the current URL to /
        replace('/');
      }
    },
    {
      path: '/registro',
      getComponent: (location, callback) => {
        if (Auth.isUserAuthenticated()) {
          callback(null, registro);
        }
    }
  },
  {
    path: '/vistas',
    component:Vistas
  },
  {
    path:'/perfil',
    component:Perfil
  },
  {
    path:'/desborde',
    component:Desbordes
  },
  {
    path:'/empresas',
    component:HomePgE
  },
  {
    path:'/entrar',
    component:LoginEmpre
  },
  {
    path:'/registroemp',
    component:RegistroEmp
  },

  {
    path:'/viewsemp',
    component:ViewsEmp
  },
  {
    path:'/perfilemp',
    component:PerfilE
  },
  {
    path:'/adminhome',
    component:HomePgA
  },
  {
    path:'/adminlogin',
    component:LoginPageA
  },
  {
    path:'/perfiladmin',
    component:PerfilAdmin
  },
  {
    path:'/eliminar',
    component:Delete
  },
  {
    path:'/delete',
    component:DeleteDB
  },
  {
    path:'/perfilhome',
    component:PerfilHome
  },
  {
    path:'/perfilpasswordadmin',
    component:PasswordAdminCambio
  },
  {
    path:'/adminempresas',
    component:Empresas
  },
  {
    path:'/adminalumnos',
    component:Alumnos
  },
  {
    path:'/insertaremp',
    component:SingUpPageEmp
  },
  {
    path:'/viewse',
    component:ViewEAdmin
  },
  {
    path:'/modificar',
    component:Modificar
  },
  {
    path:'/modificars',
    component:ModificarS
  },
  {
    path:'/insertarC',
    component:InsertarCodigos
  },
  {
    path:'/carreras',
    component:Carreras
  },
  {
    path:'/registroempc',
    component:EmpCarreras
  },
  {
    path:'/modificarA',
    component:ModificarA
  },
  {
   path:'/veral',
   component:ViewAAdmin
  },
  {
    path:'/busquedaa',
    component:BusquedaA
  },
  {
    path:'/passwordA',
    component:PasswordA
  },
  {
    path:'/deleteE',
    component:DeleteE
  },
  {
    path:'/deleteAl',
    component:DeleteAl
  },
  {
    path:'/deletec',
    component:DeleteC
  },
  {
    path:'/selview',
    component:ViewsEA
  },
  {
    path:'/viewea',
    component:ViewEA
  },
  {
    path:'/emp',
    component:Emp
  },
  {
    path:'/elecciones',
    component:Fecha
  },
  {
    path:'/passa',
    component:PasswordAlumnos
  },
  {
    path:'/passemp',
    component:PasswordEmpresas
  },
  {
    path:'/page206',
    component:page206
  },
  {
    path:'/page403',
    component:page403
  },
  {
    path:'/page417',
    component:page417
  },
  {
    path:'/backup',
    component:Backup
  },
  {
    path:'/empiezo',
    component:Empiezo
  },
  {
    path:'/insertaruni',
    component:InsertUNI
  },
  {
    path:'/signupuni',
    component:SingUpU
  },
  {
    path:'/loginuni',
    component:Unive
  },
  {
    path:'/signupproyectos',
    component:SignUpP
  },
  {
    path:'/insertarpro',
    component:InsertProye
  },
  {
    path:'/homesExpoli',
    component:HomesExpoli
  },
  {
    path:'/loginPro',
    component:LoginPro
  },
  {
    path:'/registrop',
    component:RegistroProyectos
  },
  {
    path:'/registropa',
    component:RegistroPA
  },
  {
    path:'/expolifd',
    component:ExpoliteFD
  },
  {
    path:'/expolh',
    component:ExpolHoras
  },
  {
    path:'/expolhorasu',
    component:ExpolHorasU
  },
  {
    path:'/expolfechau',
    component:ExpolFechaU
  },
  {
    path:'/registrouni',
    component:RegistroUni
  },
  {
    path:'/viewsescul',
    component:ViewsEscul
  },
  {
    path:'/viewsproye',
    component:ViewsProye
  },
  {
    path:'/viewescul',
    component:ViewEscul
  },
  {
    path:'/fechaescul',
    component:FechaEscul
  },
  {
    path:'/horasescul',
   component:HorasEscul
  },
  {
   path:'/registroproa',
   component: RegistroProyectosAdmin
  },
  {
    path:'/registroproyea',
    component:RegistroProyeA
  },
  {
    path:'/deleteccp',
    component:DeleteCCP
  },
  {
    path:'/deleteccu',
    component:DeleteCCU
  },
  {
    path:'/deletecp',
    component:DeleteCP
  },
  {
    path:'/deletecu',
    component:DeleteCU
  },
  {
    path:'/passwordae',
    component:PasswordE
  },
  {
    path:'/passwordaproye',
    component:PasswordAProye
  },
  {
    path:'/passworduni',
    component:PasswordUni
  },
  {
    path:'/passwordproye',
    component:PasswordProye
  },
  {
    path:'/busquedau',
    component:BusquU
  },
  {
    path:'/busquedap',
    component:BusquP
  },
  {
    path:'/mensa',
    component:Mensa
  },
  {
    path:'/docxs',
    component:Files
  },
  ]
};

export default routes;
