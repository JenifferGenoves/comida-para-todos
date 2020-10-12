/*Aquí va la imagen de la vista Hazte Voluntario */
import React, { Fragment } from 'react';
import BtnGallery from './BtnGallery.jsx'
import '../styles/urbanGarden.css'

const ImgVolunteer = () => {

  return (
    <Fragment>
      <div className='voluntaryImg'>
        <div className='gardenDiv'>
          <hr className='gardenLine' />
          {/* <p>Dona</p> */}
          <h1>Hazte Voluntario</h1>
          <p className='text-garden'>
            Ser voluntario en Comida para Todos es formar parte de
            una red de ayuda en nuestro país en donde puedes brindar un
            momento único a personas de nuestra comunidad, llevando un
            almuerzo solidario a sus familias.
          </p>
          <div className='gardenButtons'>
            <BtnGallery />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ImgVolunteer;