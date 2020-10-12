import React from 'react';
import Eduardo from '../images/Voluntario3.png'
import Comillas from '../images/iconos/comillas.png'
import ComillasCierre from '../images/iconos/comilla-cierre.png'

const VoluntaryExperience = () => {
    return (
         
         <div className="ctn-collaboration div-order">
         <img src={Eduardo} className="person" alt="" />
        <img className='comillas1' src={Comillas} alt='comillas' />
        <div>
          <p className='cite' >Me siento feliz ver como entre vecinos nos ayudamos en tener un Chile más sano</p>
          <p>Eduardo Gómez - Beneficiario</p>
          <p>28/09/2020</p>
        </div>
        <img className='comillas2' src={ComillasCierre} alt='comillas' />
      </div>
    )
}
  

export default VoluntaryExperience;