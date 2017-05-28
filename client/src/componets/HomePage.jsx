import React from 'react';
import {Card, CardTitle} from 'material-ui/Card';


const HomePage = () =>(
  // tenemos una constante llamada HomePage
  <div>
  {
      document.body.id=""
  }
  <div className="bgimg-1">
    <div className="caption" >
      <span className="border" id="clicked" >ESCUELA POLITECNICA</span>
    </div>
  </div>
  <div className="bgimg-1">
    <div className="caption" id="caption">
      <span className="border" id="border">by<br/></span>
      <span className="border" id="border">Valentin Alejandro Ruiz Ortiz</span>
    </div>
  </div>

  <div id="div">
    <h3 id="hs3">Por Que Estudiar Aqui?</h3>
    <p>La educacion Tecnologica de la escuela Politecnica de guadalajara tiene por objecto la
     formacion de estudiantes con conocimientos cientificos y tecnologicos, capaces de ocupar
      mandos intermedios y coordianar los recursos tecnicos y humanos para el control,
      optimizacion y supervicion de procesos. Teniendo la finalidad de brindar un informe basada en
      resultados cientificos y tecnologicos, que generen cocnocimientos a traves del desarrollo de las estructuras
      logico metodologicas.
      Ademas una juridica y civica que le eprmita conocer y ejercer susu derechos y obligaciones con responsabilidad
      .Incluyendo Integral que impulse al desarrollo industrial y tecnoclogico de nuestra sociedad</p>
  </div>

  <div className="bgimg-2">
    <div className="caption">
      <span className="border" onClick={x=>{document.body.id="background"}}>Informaticos</span>
    </div>
  </div>

  <div id="div1">
    <div id="styles">
      <p>Prenparan y verifican el funcionamiento de los equipos informaticos e instala software.Desarrolla y mantiene
      programas infromaticos utilizados por empresas y particulares.Administra la infromacion y detecta fallas de los equipos
      de computo.Administra procesos de produccion y de prestacion de servicios informaticos</p>
    </div>
  </div>

  <div className="bgimg-3">
    <div className="caption">
      <span className="border" >Electrisistas</span>
    </div>
  </div>

  <div id="div1">
    <div id="styles">
      <p>Instala , repara y da mantenimiento a los sistemas electricos autorizados, elevadores y escaleras.Instala y remplza los sistemas de intercomunicacion en edificios de intercomucnicacion en edificios residenciales, industriales y comerciales.
  Interpreta diagramas y planos revisa,repara,ajusta o instala equipos.</p>
    </div>
  </div>

  <div className="bgimg-1">
    <div className="caption">
      <span className="border">COOL!</span>
    </div>
  </div>
</div>
);

export default HomePage;
//tenemos una className llamada container
//expotamos una contante que tiene una clase y tiene un atrubuto Titulo
// tenemos un CardTitle  y titulo llamado React Application y un subtitle
