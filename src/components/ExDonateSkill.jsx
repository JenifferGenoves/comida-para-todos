import React from 'react';
import Camila from '../images/DonaHabilidad/Testimonio.png'
import Comillas from '../images/iconos/comillas.png'
import ComillasCierre from '../images/iconos/comilla-cierre.png'

const ExDonateSkill = () => {
    return (
         <div className="ctn-collaboration div-order">
         <img src={Camila} className="person" alt="" />
        <img className='comillas1' src={Comillas} alt='comillas' />
        <div>
          <p className='cite' >Entregué mis conocimientos en informática, ayudando de tiempo parcial en la página web</p>
          <p>Camila Contreras ya hizo su aporte</p>
          <p>10/06//2020</p>
        </div>
        <img className='comillas2' src={ComillasCierre} alt='comillas' />
      </div>
    )
}
  

export default ExDonateSkill;