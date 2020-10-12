import React from 'react';
import CafeSanJuan from '../images/cafe-san-juan 1.png';
import Foodies from '../images/foodies 1.png';
import Cultiva from '../images/logo-fundacion-cultiva 1.png';
import Ñam from '../images/logo-niam 1.png';
import Aurora from '../images/colaboradores/aurora-logo.jpg';
import Caperucita from '../images/colaboradores/caperucita-y-el-lobo.jpg';
import Colab from '../images/colaboradores/colab-logo.jpg';
import Logo99 from '../images/colaboradores/logo-99.jpg';
import Chimba from '../images/colaboradores/logo-la-chimba.jpg';

const ClbCarrousel = () => {
  return (
    <div className='container'>
      <div id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel">

        <ol className="carousel-indicators">
          <li data-target="#multi-item-example" data-slide-to="0" className="active"></li>
          <li data-target="#multi-item-example" data-slide-to="1"></li>
          <li data-target="#multi-item-example" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">

            <div className="row">
              <div className="col-md-4">
                <div className="">
                  <a href="https://www.instagram.com/cafesanjuansantiago_oficial/" target="_blank" rel="noopener noreferrer" >
                    <img className="d-block w-1002" src={CafeSanJuan} alt="Cafe San Juan" />
                  </a>
                </div>
              </div>

              <div className="col-md-4 clearfix d-none d-md-block">
                <div className="">
                  <a href="https://foodies.cl/store/index.php" target="_blank" rel="noopener noreferrer">
                    <img className="d-block w-1002" src={Foodies} alt="Foodies" />
                  </a>
                </div>
              </div>

              <div className="col-md-4 clearfix d-none d-md-block">
                <div className="">
                  <a href="https://www.cultiva.cl/?lang=en" target="_blank" rel="noopener noreferrer">
                    <img className="d-block w-1002" src={Cultiva} alt="Cultiva" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          <div className="carousel-item">
            <div className="row">
              <div className="col-md-4">
                <div className="">
                  <a href="http://niam.cl/" target="_blank" rel="noopener noreferrer" >
                    <img className="d-block w-1002" src={Ñam} alt="Ñam" />
                  </a>
                </div>
              </div>

              <div className="col-md-4 clearfix d-none d-md-block">
                <div className="">
                  <a href="http://www.auroracocina.cl/" target="_blank" rel="noopener noreferrer">
                    <img className="d-block w-1002" src={Aurora} alt="Aurora" />
                  </a>
                </div>
              </div>

              <div className="col-md-4 clearfix d-none d-md-block">
                <div className="">
                  <a href="http://www.lacaperucitayellobo.cl/" target="_blank" rel="noopener noreferrer">
                    <img className="d-block w-1002" src={Caperucita} alt="La Caperucita y el Lobo" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="row">
              <div className="col-md-4">
                <div className="">
                  <a href='https://colab.uc.cl/es/inicio/' target="_blank" rel="noopener noreferrer">
                    <img className="d-block w-1002" src={Colab} alt="Colab" />
                  </a>
                </div>
              </div>

              <div className="col-md-4 clearfix d-none d-md-block">
                <div className="">
                  <a href='https://99restaurante.com/' target="_blank" rel="noopener noreferrer"><img className="d-block w-1002" src={Logo99} alt="Logo99" /></a>
                </div>
              </div>

              <div className="col-md-4 clearfix d-none d-md-block">
                <div className="">
                  <a href='https://lachimba.org/' target="_blank" rel="noopener noreferrer">
                    <img className="d-block w-1002" src={Chimba} alt="La Chimba" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
export default ClbCarrousel;