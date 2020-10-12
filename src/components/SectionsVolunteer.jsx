/* Segunda sección de la vista Hazte Voluntario - Forma Parte*/

import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Voluntario1 from '../images/Voluntario1.jpg';
import Voluntario2 from '../images/voluntario2.jpg'

const SectionVolunteer = () => {
    return (
      <section className="CollaborationSection ctn-collaboration color">
         {/* <div className="CollaborationSection"> */}
         <div className="containerGarden">
         <img src={Voluntario1} className="garden" alt="Voluntario 1" />
         <img src={Voluntario2} className="garden" alt="Voluntario 2" />
         </div>
         <div className="textContainer">
          <h2>¡Forma Parte!¡Hazte Voluntario!</h2>
          <p className="paragraph">
          Nuestro voluntario busca que personas que deseen ayudar y aportar a la comunidad
           se unan a nuestra fundación, para así llevar alimento de calidad a las personas
           que más lo necesiten. Comida para Todos, se encuentra participando en 12 Comunas
           y se han entregado más de 81.000 almuerzos desde Mayo, sumáte y sé parte de gran
           iniciativa, ¡Te esperamos!
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

export default SectionVolunteer;