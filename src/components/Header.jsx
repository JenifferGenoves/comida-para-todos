import React, { useState, useRef } from "react";
import Logo from '../images/iconos/logo2.png';
import SearchBar from '../components/Searchbar.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import BtnDonate from './BtnDonate';
import UpperBar from './UpperBar';

const Header = () => {

  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [isActive1, setIsActive1] = useState(false);
  const onClick = () => setIsActive(!isActive);
  const onClick1 = () => setIsActive1(!isActive1);
  const onMenu = () => setIsActive(!isActive);
  const onMenu1 = () => setIsActive1(!isActive1);
  const outMenu = () => setIsActive(!isActive)
  const outMenu1 = () => setIsActive1(!isActive1)

  return (
    <header className='header'>
      <UpperBar />
      <nav className='container-header'>
        <Router>
          <ul className='list'>
            <li><a href='/'><img src={Logo} className='logo' alt='logo' /></a></li>
            <hr className='vertLine' />
            <li className='submenu' onMouseOver={onMenu} onMouseOut={outMenu} onClick={onClick}><a>Sobre Nosotros</a>
              <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
                <ul >
                  <li onMouseLeave={outMenu}><a href="/aboutus/aboutus">Sobre Nosotros</a></li>
                  <li onMouseLeave={outMenu}><a href="/aboutus/team">Equipo</a></li>
                </ul>
              </nav>
            </li>
            <li onMouseOver={onMenu1} onMouseOut={outMenu1} onClick={onClick1}><a>Proyectos</a>
              <nav ref={dropdownRef} className={`menu1 ${isActive1 ? 'active' : 'inactive'}`}>
                <ul>
                  <li onMouseLeave={outMenu1}><a href="/projects/foodbank" >Banco de Alimentos</a></li>
                  <li onMouseLeave={outMenu1}><a href="/projects/schoolproj">Escuela</a></li>
                </ul>
              </nav>
            </li>
            <li><a href='/campaings'>Campaña</a></li>
            <li><a href='/collaborators'>Colaboradores</a></li>
            <li><a href='/transparency'>Transparencia</a></li>
            <li><a href='/contact'>Contacto</a></li>
            <SearchBar />
            <BtnDonate />
          </ul>
        </Router>
      </nav>
    </header >
  );
}
export default Header;
