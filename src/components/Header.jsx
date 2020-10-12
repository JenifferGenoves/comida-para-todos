import React from 'react';
import Logo from '../images/iconos/logo2.png';
import Search from '../images/iconos/search.png'
import { BrowserRouter as Router } from 'react-router-dom';
import BtnDonate from './BtnDonate';
import UpperBar from './UpperBar';


const Header = () => {

  return (
    <header className='header'>
      <UpperBar />
      <nav className='container-header'>
        <Router>
          <ul className='list'>
            <li><a href='/' ><img src={Logo} className='logo' alt='logo' /></a></li>
            <hr className='vertLine' />
            <li><a href='/aboutUs'>Sobre Nosotros</a></li>
            <li><a href='/projects'>Proyectos</a></li>
            <li><a href='/campaings'>Campaña</a></li>
            <li><a href='/collaborators'>Colaboradores</a></li>
            <li><a href='/transparency'>Transparencia</a></li>
            <li><a href='/contact'>Contacto</a></li>
            <img src={Search} className='facebook' alt="Buscador" />
            <BtnDonate />
          </ul>
        </Router>
      </nav>
    </header >
  );
}
export default Header;