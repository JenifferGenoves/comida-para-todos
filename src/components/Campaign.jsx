import React from 'react';
import BtnVolunteer from './BtnVolunteer';
import BtnDonate from './BtnDonate'
import Video from '../images/Video/18-sept.mp4'


const Campaign = () => {
  return (
    <section className='ctn-cmp'>
      <div>
        <h4>Campaña</h4>
        <h2>#Un18ParaTodos</h2>
        <p className='paragraph'>¡Celebremos juntos estas fiestas! Ayudemos a nuestra comunidad a tener un 18 digno y con comida de calidad, dona para un almuerzo asadero o súmate como voluntario en estas fiestas.</p>
        <div className='ctn-btns'>
          <BtnDonate className='separation' />
          <BtnVolunteer />
        </div>
      </div>
      <div className='ctn-video video640'>
        <video width="600" controls>
          <source src={Video} type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
export default Campaign;