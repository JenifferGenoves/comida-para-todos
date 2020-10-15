import React from 'react';
import charts from '../images/transparency/charts.png';
import descargar from '../images/transparency/descargar.png';

const Distribution = () => {
  return (
    <section>
      <div className='section-distribution'>
        <div className='ctn-distribution'>
          <h4>Distribución</h4>
          <h2>Costos de la donación</h2>
          <p><strong>El 65% de los recursos de la Fundación</strong> se destinan a los Restaurantes, los que se encargan de realizar las comidas, apadrinar  comunidades vunerables entregándoles capacitaciones, además de compartir buenas prácticas sobre alimentación saludable.</p>
          <div className='list-distribution'>
            <div className='Column1'>
              <div className="circulo1"><p className='titlecrc'>Restaurantes</p></div>
              <div className="circulo2"><p className='titlecrc'>Operaciones</p></div>
              <div className="circulo3"><p className='titlecrc'>Comunicaciones</p></div>
            </div>
            <div className='Column2'>
              <div className="circulo4"><p className='titlecrc'>Administración</p></div>
              <div className="circulo5"><p className='titlecrc'>Transporte</p></div>
            </div>
          </div>
        </div>
        {/* <div>
          <img className='chartimg' src={charts} alt='grafica' />
        </div> */}

        <div className="popover__wrapper">
          <a>
            <img className='chartimg' src={charts} alt='grafica' />
          </a>
          <div className="popover__content" >
            <div className="circulo1"><p className='titlecrc'>65%</p></div>
            <div className="circulo2"><p className='titlecrc'>18%</p></div>
            <div className="circulo3"><p className='titlecrc'>9%</p></div>
            <div className="circulo4"><p className='titlecrc'>2%</p></div>
            <div className="circulo5"><p className='titlecrc'>6%</p></div>
          </div>
        </div>

      </div>
      <div className='ctn-documents'>
        <h2>Descarga el documento completo</h2>
        <button className='volBtn'>Descargar Aquí<img className='arrow-dwld' src={descargar} alt='' /></button>
      </div>
    </section>
  );
}
export default Distribution;

