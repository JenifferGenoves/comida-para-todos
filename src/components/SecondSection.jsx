import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import CommunityGardens from '../images/DonaHuertos/HuertoCom.png';


const SecondSection = () => {
    return (
      <section className="CollaborationSection ctn-collaboration color">
         {/* <div className="CollaborationSection"> */}
         <div className="containerGarden">
         <img src={CommunityGardens} className="garden" alt="Huertos Comunitarios" />
         </div>
         <div className="textContainer">
         <p>Conoce más sobre el Proyecto</p>
          <h2>Huertos Comunitarios</h2>
          <p className="paragraph">
            Los Huertos Comunitarios son diseñados con el próposito de poder educar sobre alimentación saludable,
            abastecer a la comunidad, generar encuentro e inclusión y seguridad alimentaria como respuesta a la crisis
            socioambiental existente.
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

export default SecondSection;















