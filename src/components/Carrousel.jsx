import React from 'react';
import HuertosUrbanos from '../images/HuertoUrbano.png';
import Alimentos from '../images/Alimentos.png'
import Voluntariado from '../images/Voluntariado.png'
<<<<<<< HEAD
import Clase from '../images/Clase.jpg'
=======
import Clase from '../images/clase.png'
>>>>>>> 2c2000b43fe24b86945243f98d39b316c597498a
import Habilidad from '../images/habilidad.png'
import arrowRight from '../images/iconos/arrow-right.png'
import arrowLeft from '../images/iconos/arrow-left.png'
import '../styles/boostrap.css';

const Carrousel = () => {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel carousel-fade" data-ride="carousel">
        <div className="carousel-inner">

          <div className="carousel-item active">
            <h5 className="carousel-caption2">Hazte Voluntario</h5>
            <img src={Voluntariado} className="d-block w-100" alt="Voluntariado" />
            <div className="carousel-caption d-none d-md-block">
              <p className='description'>Hazte voluntario y ayuda de manera libre en nuestra fundación. ¡Inscríbete!</p>
            </div>
          </div>

          <div className="carousel-item">
            <h5 className="carousel-caption2">Alimentos</h5>
            <img src={Alimentos} className="d-block w-100" alt="Alimentos"></img>
            <div className="carousel-caption d-none d-md-block">
<<<<<<< HEAD
              <p className='description'>Comida para todos busca llevar Alimentos a las diferentes familias de Chile que lo necesitan. Ayúdanos a llevar tu aporte a las mesas de los Chilenos en forma de un plato caliente.</p>
=======
              <p className='description'>Comida para todos busca llevar Alimentos a las diferentes
              familias de Chile que lo necesitan. Ayúdanos a llevar tu aporte a las mesas de los Chilenos
              en forma de un plato caliente.</p>
>>>>>>> 2c2000b43fe24b86945243f98d39b316c597498a
            </div>
          </div>

          <div className="carousel-item">
            <h5 className="carousel-caption2">Huertos Urbanos</h5>
            <img src={HuertosUrbanos} className="d-block w-100" alt="Huertos urbanos" />
            <div className="carousel-caption d-none d-md-block">
<<<<<<< HEAD
              <p className='description'>Dona un metro cuadrado para fomentar el cultivo y así aportar tu granito de arena con alimentos sanos directos de tu huerta.</p>
=======
              <p className='description'>Dona un metro cuadrado para fomentar el cultivo y así aportar
              tu granito de arena con alimentos sanos directos de tu huerta.</p>
>>>>>>> 2c2000b43fe24b86945243f98d39b316c597498a
            </div>
          </div>

          <div className="carousel-item">
            <h5 className="carousel-caption2">Dona tu Habilidad</h5>
            <img src={Habilidad} className="d-block w-100" alt="Dona tu habilidad"></img>
            <div className="carousel-caption d-none d-md-block">
<<<<<<< HEAD
              <p className='description'>Dona una hora de tu tiempo con una habilidad que poseas a la comunidad, puede ser desde tus habilidades en la cocina o en la computación. ¡Te esperamos!</p>
=======
              <p className='description'>Dona una hora de tu tiempo con una habilidad que poseas
              a la comunidad, puede ser desde tus habilidades en la cocina o en la computación.
              ¡Te esperamos!</p>
>>>>>>> 2c2000b43fe24b86945243f98d39b316c597498a
            </div>
          </div>

          <div className="carousel-item">
            <h5 className="carousel-caption2">Dona una Clase</h5>
            <img src={Clase} className="d-block w-100" alt="Haz una clase"></img>
            <div className="carousel-caption d-none d-md-block">
<<<<<<< HEAD
              <p className='description'>Dona una hora de clases para que otros aprendan de tus conocimientos. Pueden impartir clases de lo que tú crees que como fundación nos pueden ayudar. ¡Súmate!</p>
=======
              <p className='description'>Dona una hora de clases para que otros aprendan de tus
              conocimientos. Pueden impartir clases de lo que tú crees que como fundación nos
              pueden ayudar. ¡Súmate!</p>
>>>>>>> 2c2000b43fe24b86945243f98d39b316c597498a
            </div>
          </div>

        </div>
        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <img src={arrowRight} className="arrow-carrousel" alt="flecha"></img>
        </a>
        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <img src={arrowLeft} className="arrow-carrousel" alt="flecha"></img>
        </a>
      </div>
    </div>
  );
}
export default Carrousel;
