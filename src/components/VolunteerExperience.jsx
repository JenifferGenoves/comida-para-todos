import React from 'react';
import Alejandra from '../images/DonaHuertos/T.Alejandra.png'
import Comillas from '../images/iconos/comillas.png'
import ComillasCierre from '../images/iconos/comilla-cierre.png'

const VolunteerExperience = () => {
    return (
         
         <div className="ctn-collaboration div-order">
         <img src={Alejandra} className="person" alt="" />
        <img className='comillas1' src={Comillas} alt='comillas' />
        <div>
          <p className='cite' >Tu donación ayuda a que más personas puedan tener un alimento de calidad</p>
          <p>Claudio Palma ya hizo su aporte</p>
          <p>28/09/2020.</p>
        </div>
        <img className='comillas2' src={ComillasCierre} alt='comillas' />
      </div>
    )
}
  

export default VolunteerExperience;














