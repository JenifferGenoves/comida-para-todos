/*Aquí va la imagen de la vista Dona tu habilidad */
import React, { Fragment } from 'react';
/* import BtnProject from './BtnProject'; */
import '../styles/urbanGarden.css'

const ImgSkills = () => {

  return (
    <Fragment>
      <div className='skillImg'>
        <div className='gardenDiv'>
          <hr className='gardenLine' />
          <p>Dona</p>
          <h1>Tu Habilidad</h1>
          <p className='text-garden'>
          Aporta desde tus conocimientos en un área y donar parte de tu tiempo a la fundación,
           significa entregar horas de trabajo al mes con un conocimiento de algo que sepas y que
            piensas que puede aportar a Comida para todos.
          </p>
          <div className='gardenButtons'>
           {/*  <BtnProject /> */}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ImgSkills;
