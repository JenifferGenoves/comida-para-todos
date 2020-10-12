import React, { Fragment } from 'react';
import '../styles/TeamPhotos.css';
import Rafael from '../images/Equipo/equipo-3.jpg';
import Enrique from '../images/Equipo/ENRIQUE.png';
import Sebastian from '../images/Equipo/SEBASTIAN.png';
import Camila from '../images/Equipo/Camila.png';
import Eleanore from '../images/Equipo/Eleanore.jpg';
import Takehiro from '../images/Equipo/take.png';
import Alejandra from '../images/Equipo/Alejandra.jpg';
import Louisa from '../images/Equipo/LOUISA.png';
import Carlos from '../images/Equipo/Carlos.jpg';
import Majo from '../images/Equipo/MARIAJOSE.png';
import Enzo from '../images/Equipo/ENZO.png';

const TeamPhotos = () => {
    return(
        <Fragment>
          <div className='divFilters'>
          <h2 className='filterTitle'>Filtrar por</h2>
          <div className='container-radio'>
        <div className='container-radio'>
          <div className='radio-btn-filter'>
            <input type="radio" name="Todos" value="Todos" />
            <p className='p-radio-team'>Todos</p>
          </div>
          <div className='radio-btn-filter'>
            <input type="radio" name="Directores" value="Directores" />
            <p className='p-radio-team'>Directores</p>
          </div>
          <div className='radio-btn-filter'>
            <input type="radio" name="Coordinadores" value="Coordinadores" />
            <p className='p-radio-team'>Coordinadores</p>
          </div>
          <div className='radio-btn-filter'>
            <input type="radio" name="Consultores" value="Consultores" />
            <p className='p-radio-team'>Consultores</p>
          </div>
          </div>
          </div>
          </div>
        <div className='container-team'>
          <div className="team">
            <img src={Rafael} className="teamimg" alt="Voluntariado" />
            <div className="container-img">
              <h4 className='descriptionsname'>Rafael Rincón</h4>
              <hr className='lineTeam' />
              <p className='descriptions'>Director Ejecutivo</p>
            </div>
            </div>
            <div className="team">
            <img src={Enrique} className="teamimg" alt="Voluntariado" />
            <div className="container-img">
              <h4 className='descriptionsname'>Enrique Gellona</h4>
              <hr className='lineTeam' />
              <p className='descriptions'>Director de Finanzas</p>
            </div>
            </div>
            <div className="team">
            <img src={Sebastian} className="teamimg" alt="Voluntariado" />
            <div className="container-img">
              <h4 className='descriptionsname'>Sebastián Gatica</h4>
              <hr className='lineTeam' />
              <p className='descriptions'>Dir. innovación social</p>
            </div>
            </div>
            <div className="team">
            <img src={Camila} className="teamimg" alt="Voluntariado" />
            <div className="container-img">
              <h4 className='descriptionsname'>Camila Moreno</h4>
              <hr className='lineTeam' />
              <p className='descriptions'>Coordinadora general</p>
            </div>
            </div>
            </div>
            <div className='container-team2'>
            <div className="team">
            <img src={Eleanore} className="teamimg" alt="Voluntariado" />
            <div className="container-img2">
              <h4 className='descriptionsname'>Eleanore Hendersson</h4>
              <hr className='lineTeam' />
              <p className='descriptions'>Coordinadora Voluntariado</p>
            </div>
            </div>
            <div className="team">
            <img src={Takehiro} className="teamimg" alt="Voluntariado" />
            <div className="container-img2">
              <h4 className='descriptionsname'>Takehiro Kadena</h4>
              <hr className='lineTeam' />
              <p className='descriptions'>Coordinador Territorial</p>
            </div>
            </div>
            <div className="team">
            <img src={Alejandra} className="teamimg" alt="Voluntariado" />
            <div className="container-img2">
              <h4 className='descriptionsname'>Alejandra Vidales</h4>
              <hr className='lineTeam' />
              <p className='descriptions'>Coordinadora social</p>
            </div>
            </div>
            <div className="team">
            <img src={Louisa} className="teamimg" alt="Voluntariado" />
            <div className="container-img2">
              <h4 className='descriptionsname'>Louisa Fernández</h4>
              <hr className='lineTeam' />
              <p className='descriptions'>Coordinadora Territorial</p>
            </div>
            </div>
        </div>
        <div className='container-team3'>
            <div className="team">
            <img src={Carlos} className="teamimg" alt="Voluntariado" />
            <div className="container-img3">
              <h4 className='descriptionsname'>Carlos Román</h4>
              <hr className='lineTeam' />
              <p className='descriptions'>Consultor estratégico</p>
            </div>
            </div>
            <div className="team">
            <img src={Majo} className="teamimg" alt="Voluntariado" />
            <div className="container-img3">
              <h4 className='descriptionsname'>MªJosé de La Fuente</h4>
              <hr className='lineTeam' />
              <p className='descriptions'>Coordinadora de proyectos</p>
            </div>
            </div>
            <div className="team">
            <img src={Enzo} className="teamimg" alt="Voluntariado" />
            <div className="container-img3">
              <h4 className='descriptionsname'>Enzo Lambertini</h4>
              <hr className='lineTeam' />
              <p className='descriptions'>Coordinador administración</p>
            </div>
            </div>
        </div>
        </Fragment>
    )
};
export default TeamPhotos;