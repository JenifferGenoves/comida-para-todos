/*Aquí va la imagen de la vista Dona una clase */
import React, { Fragment } from 'react';
import BtnProject from './BtnProject';
import '../styles/urbanGarden.css'

const ImgPage = () => {

  return (
    <Fragment>
      <div className='teacherImg'>
        <div className='gardenDiv'>
          <hr className='gardenLine' />
          <p>Dona</p>
          <h1>Una Clase</h1>
          <p className='text-garden'>
          Donar una clase significa entregar una parte de lo que sabes para ayudar a que otros ayuden en
           diferentes áreas de la fundación, puede ser desde una clase de sanitización o gastronomía. 
           Te invitamos a ver el Proyecto de Escuela.
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