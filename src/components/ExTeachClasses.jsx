import React from 'react';
import Roberto from '../images/DonaClase/Testimonio.png'
import Comillas from '../images/iconos/comillas.png'
import ComillasCierre from '../images/iconos/comilla-cierre.png'

const ExTeachClasses = () => {
    return (
         
         <div className="ctn-collaboration div-order">
         <img src={Roberto} className="person" alt="" />
        <img className='comillas1' src={Comillas} alt='comillas' />
        <div>
          <p className='cite' >Yo done una clase de cocina, para ayudar a preparar comida de calidad para las personas</p>
          <p>Roberto Vargas ya hizo su aporte</p>
          <p>28/09/2020</p>
        </div>
        <img className='comillas2' src={ComillasCierre} alt='comillas' />
      </div>
    )
}
  

export default ExTeachClasses;
