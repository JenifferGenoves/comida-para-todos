import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import SkillImg from '../images/DonaHabilidad/Habilidad.png';


const SectionSkills = () => {
    return (
      <section className="CollaborationSection ctn-collaboration color">
         {/* <div className="CollaborationSection"> */}
         <div className="containerGarden">
         <img src={SkillImg} className="garden" alt="Huertos Comunitarios" />
         </div>
         <div className="textContainer">
          <h2>¿Qué habilidades puedo Donar?</h2>
          <p className="paragraph">
          ¡Las que quieras! Si tienes ganas de ayudar, puedes hacero junto a nosotros,
          tenemos personas que han aportado su granito de arena tanto con su habilidad en
          construcción, en la cocina o informática, si sientes que puedes aportar a nuestra
          fundación, hazlo! Te esperamos c:
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

export default SectionSkills;















