/*Aquí va la imagen de la vista Huertos urbanos */
import React, { Fragment } from 'react';
import BtnProject from './BtnProject';
import GardenImg from '../images/HuertoUrbano.png';
import '../styles/urbanGarden.css'

const ImgPage = () => {

  return (
    <Fragment>
      <div className='gardenImg'>
        <img src={GardenImg} className="gardenImg" alt="garden" />
        <div className='gardenDiv'>
          <hr className='gardenLine' />
          <p>Dona</p>
          <h1>Huertos Urbanos</h1>
          <p className='text-garden'>
            Fomentemos el cultivo y dona parte de esta experiencia una
            parte de tu patio para aportar alimentos naturales y de calidad
            a gente de la comunidad.
          </p>
          <div className='gardenButtons'>
            <BtnProject />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ImgPage;












