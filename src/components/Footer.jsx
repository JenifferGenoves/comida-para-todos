import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import twitter from '../images/iconos/twitter.png';
import facebook from '../images/iconos/facebook.png';
import instagram from '../images/iconos/instagram.png';

const Footer = () => {

  return (
    <footer className="footer">
      <section className="container-footer">
        <div>
          <h3>Comida Para Todos</h3>
        </div>
        <nav>
          <Router>
            <ul className="list-footer">
              <li>
                <Link to="/aboutUs">Sobre Nosotros</Link>
              </li>
              <li>
                <Link to="/privacyPolicy">Politica Privacidad</Link>
              </li>
              <li>
                <Link to="/frequentQuestions">Preguntas Frecuentes</Link>
              </li>
              <li>
                <Link to="/contact">Contacto</Link>
              </li>
            </ul>
          </Router>
        </nav>
      </section>
      <hr className='footerLine' />
      <section className="container-footer2">
        <p>© 2020 Comida para Todos, todos los derechos reservados.</p>
        <div>
          <a href="https://www.instagram.com/comida_para_todos_cl/" target="_blank" rel="noopener noreferrer">
            <img src={instagram} className="instagram" alt="instagram " />
          </a>
          <a href="https://www.facebook.com/Comida-para-Todos-100133851719302" target="_blank" rel="noopener noreferrer">
            <img src={facebook} className="facebook" alt="logo-facebook" />
          </a>
          <a href="https://twitter.com/ChileComida" target="_blank" rel="noopener noreferrer">
            <img src={twitter} className="twitter" alt="logo-twitter" />
          </a>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
