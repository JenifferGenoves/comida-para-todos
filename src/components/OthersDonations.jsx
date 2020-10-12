import React from 'react';
import HuertosUrbanos from '../images/Other-Donate/dona-huertos.png';
import Alimentos from '../images/Other-Donate/dona-alimentos.png';
import Voluntariado from '../images/Other-Donate/hazte-voluntario.png';
import Clase from '../images/Other-Donate/dona-clase.png';
import Habilidad from '../images/Other-Donate/dona-habilidad.png';
import arrowRight from '../images/iconos/arrow-right.png';
import arrowLeft from '../images/iconos/arrow-left.png';


const OthersDonations = () => {
  return (
    <div className='container-header'>
      <h2>Otras Formas de Ayudar</h2>
      <p className='p-others'><strong>Como fundación buscamos</strong> que todos podamos aportar de diferentes maneras desde ser voluntario hasta donar parte de tu tiempo dando clases sobre un tema que sientas que puedes aportar <strong>¡Súmate!</strong></p>
      <div id="multi-item-example" class="carousel slide carousel-multi-item" data-ride="carousel">
        <a className="carousel-control-prev" href="#multi-item-example" role="button" data-slide="prev">
          <img src={arrowRight} className="arrow-carrousel" alt="flecha"></img>
        </a>
        <a className="carousel-control-next" href="#multi-item-example" role="button" data-slide="next">
          <img src={arrowLeft} className="arrow-carrousel" alt="flecha"></img>
        </a>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">

            <div className="row">

              <div className="col-md-4">
                <div className="card mb-2">
                  <a href="/voluntary">
                    <p className='carousel-caption3'>Hazte</p>
                    <h2 className='carousel-caption4'>Voluntario</h2>
                    <img className="card-img-top" src={Voluntariado} alt="Voluntariado" />
                    <div className="carousel-caption5">
                      <p className="">Hazte Voluntario y ayuda de manera libre en nuestra fundación. <strong>¡Inscríbete!.</strong></p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-md-4 clearfix d-none d-md-block">
                <div className="card mb-2">
                  <a href="/donate/foods">
                    <p className='carousel-caption3'>Dona</p>
                    <h2 className='carousel-caption4'>Alimentos</h2>
                    <img className="card-img-top" src={Alimentos} alt="Alimentos" />
                    <div className="carousel-caption5">
                      <p className="">Comida para todos busca llevar Alimentos a las diferentes familias de Chile que lo necesitan. Ayúdanos a llevar tu aporte a las mesas de los Chilenos en forma de un plato caliente.</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-md-4 clearfix d-none d-md-block">
                <div className="card mb-2">
                  <a href="/donate/urbanGarden">
                    <p className='carousel-caption3'>Dona</p>
                    <h2 className='carousel-caption4 huertos'>Huertos Urbanos</h2>
                    <img className="card-img-top" src={HuertosUrbanos} alt="Huertos Urbanos" />
                    <div className="carousel-caption5">
                      <p className="">Dona un metro cuadrado para fomentar el cultivo y así aportar tu granito de arena con alimentos sanos directos de tu huerta.</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

          </div>
          <div className="carousel-item">

            <div className="row">
              <div className="col-md-4">
                <div className="card mb-2">
                  <a href="/donate/hability">
                    <p className='carousel-caption3'>Dona</p>
                    <h2 className='carousel-caption4'>Tu Habilidad</h2>
                    <img className="card-img-top" src={Habilidad} alt="Dona tu Habilidad" />
                    <div className="carousel-caption5">
                      <p className="">Dona una hora de tu tiempo con una habilidad que poseas a la comunidad, puede ser desde tus habilidades en la cocina o en la computación. <strong>¡Te esperamos!</strong></p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-md-4 clearfix d-none d-md-block">
                <div className="card mb-2">
                  <a href="/donate/class">
                    <p className='carousel-caption3'>Dona</p>
                    <h2 className='carousel-caption4'>Una Clase</h2>
                    <img className="card-img-top" src={Clase} alt="Dona una Clase" />
                    <div className="carousel-caption5">
                      <p className="">Dona una hora de clases para que otros aprendan de tus conocimientos. Pueden impartir clases de lo que tú crees que como fundación nos pueden ayudar. <strong>¡Súmate!</strong></p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>


    </div >

  );
}
export default OthersDonations;