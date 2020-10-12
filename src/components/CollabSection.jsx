import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Hands from '../images/Colaboradores.jpg';

const CollabSection = () => {
  return (
    <section className="ctn-collaboration">
      <div className="CollaborationSection">
        <div className="containerHands">
          <img src={Hands} className="hands" alt="hands" />
        </div>
        <div className="textContainer">
          <h2 className="collabTitle">Colaboradores</h2>
<<<<<<< HEAD
          <p className="paragraph">
=======
          <p className="paragraph2">
>>>>>>> 2c2000b43fe24b86945243f98d39b316c597498a
            <strong>Comida para Todos</strong> se une junto a treinta y cuatro organizaciones que vienen a construir una red virtuosa, capaz de unir voluntades y construir sistemas que transforman el dolor en esperanza, donde descubrimos que juntos somos más.
          </p>
          <Router>
            <Link to='/donate'>
              <p className='read-more'>Leer Más</p>
            </Link>
          </Router>
        </div>
      </div>
    </section>
  );
};

export default CollabSection;