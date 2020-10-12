import React, { Fragment } from 'react';
import BtnVolunteer from './BtnVolunteer';
import BtnKnow from './BtnKnow';

const ImgPage = () => {

  return (
    <Fragment>
      <div className='firstImg'>
        <div className='firstDiv'>
          <hr className='firstLine' />
          <p>Sobre Nosotros</p>
          <h1>Comida para todos</h1>
          <p className='text-initial'>
            Somos una plataforma solidaria que nace de una unión de organizaciones sociales, que busca salvarguardar la <span className='span1'>Seguridad Alimentaria</span> a través de la distribución de  alimentos, educar sobre alimentación saludable y capacitar en materias de gastronomía.
          </p>
          <div className='textButtons'>
            <BtnVolunteer />
            <BtnKnow />
          </div>
        </div>
      </div>
    </Fragment>
  )
}
export default ImgPage;