import React from 'react';
import BtnVolunteer from './BtnVolunteer';
import BtnDonate from './BtnDonate'
<<<<<<< HEAD
import Video from '../images/Video/18-sept.mp4'
=======
/* import Video from '../images/Video/18-sept.mp4' */
>>>>>>> 2c2000b43fe24b86945243f98d39b316c597498a


const Campaign = () => {
  return (
    <section className='ctn-cmp'>
      <div>
        <h4>Campaña</h4>
        <h2>#Un18ParaTodos</h2>
<<<<<<< HEAD
        <p className='paragraph'>¡Celebremos juntos estas fiestas! Ayudemos a nuestra comunidad a tener un 18 digno y con comida de calidad, dona para un almuerzo asadero o súmate como voluntario en estas fiestas.</p>
=======
        <p className='paragraph2'>¡Celebremos juntos estas fiestas! Ayudemos a nuestra comunidad a tener un 18 digno y con comida de calidad, dona para un almuerzo asadero o súmate como voluntario en estas fiestas.</p>
>>>>>>> 2c2000b43fe24b86945243f98d39b316c597498a
        <div className='ctn-btns'>
          <BtnDonate className='separation' />
          <BtnVolunteer />
        </div>
      </div>
      <div className='ctn-video video640'>
        <video width="600" controls>
<<<<<<< HEAD
          <source src={Video} type="video/mp4" />
=======
         {/*  <source src={Video} type="video/mp4" /> */}
>>>>>>> 2c2000b43fe24b86945243f98d39b316c597498a
        </video>
      </div>
    </section>
  );
}
export default Campaign;