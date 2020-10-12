import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/foods.css';
import FoodsForm from '../components/FoodsForm';
import BancoAlimentos from '../images/Donate-Food/banco-alimentos.jpg';
import Claudio from '../images/Donate-Food/claudio.png';
import Comillas from '../images/iconos/comillas.png'
import ComillasCierre from '../images/iconos/comilla-cierre.png'

function Foods() {
  return (
    <section>
      <div className="containerMenu">
        <Header />
      </div>
      <div className='img-aliments'>
        <div className='firstDiv text-color'>
          <hr className='firstLine' />
          <p>Dona</p>
          <h1>Alimentos</h1>
          <p className='paragraph'>Donar tu alimento significa aportar de una manera diferente los alimentos que tienes en tu casa pero que ya no usarás, evitemos el desperdicio, dona tu alimento y ayuda a una persona. <br /> <br />Te invitamos a ver el Proyecto de Banco de Alimentos.</p>
          <button className='volBtn btn-project'>Ir a Proyecto</button>
        </div>
        <FoodsForm />
      </div>

      <div className="CollaborationSection ctn-collaboration color">
        <img src={BancoAlimentos} className="hands" alt="banco de alimentos" />
        <div className="textContainer">
          <p>Conoce más sobre el Proyecto</p>
          <h2>Banco de Alimentos</h2>
          <p className="paragraph">
            Desarrollamos el Banco de Alimentos Comida para Todos, basado en los principios de la logistica inversa, donde cuyo obejetivo es recuperar alimentos, especialmente no perecedores, donde a través de nosotros puedan llegar a personas necesitadas, evitando así cualquier desperdicio.</p>
          <Router>
            <Link to='/projects'>
              <p className='read-more'>Leer Más</p>
            </Link>
          </Router>
        </div>
      </div>

      <div className='ctn-collaboration div-order'>
        <div>
          <img src={Claudio} className="person" alt="banco de alimentos" />
        </div>
        <img className='comillas1' src={Comillas} alt='comillas' />
        <div>
          <p className='cite' >Todos deberíamos tener que comer al final del día, en esta ocasión yo doné legrumbres</p>
          <p>Claudio Palma ya hizo su aporte</p>
          <p>28/09/2020.</p>
        </div>
        <img className='comillas2' src={ComillasCierre} alt='comillas' />
      </div>
      <div className="containerFooter">
        <Footer />
      </div>
    </section>
  );
}
export default Foods;
