/* Segunda sección de la vista Dona una clase -Proyecto Escuela*/

import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Teacher from '../images/DonaClase/ProyectoEscuela.png';

const SectionClass = () => {
    return (
      <section className="CollaborationSection ctn-collaboration color">
         {/* <div className="CollaborationSection"> */}
         <div className="containerGarden">
         <img src={Teacher} className="garden" alt="Huertos Comunitarios" />
         </div>
         <div className="textContainer">
         <p>Conoce más sobre el Proyecto</p>
          <h2>Escuela</h2>
          <p className="paragraph">
            Las Escuelas de Comida para Todos, desarrollarán talleres de formación en
            cocina, alimentación saludable, entre otros temas, además de entregar un espacio para los emprendedores de
            lo que aprendan en nuestras clases.
          </p>
          <Router>
            <Link to='/donate'>
              <p className='read-more'>Leer Más</p>
            </Link>
          </Router>
        </div>
      {/* </div> */}
    </section>
  );
};

export default SectionClass;