import React from 'react';

const Impacto = () => {
  return (
    <div className='img-impact'>
      <h2 className='impact'>Impacto</h2>
      <div className='ctn-impact' style={{ color: "white" }}>
        <div className=''>
          <p className='number-impact'>46M</p>
          <p className='letter-impact'>Donaciones</p>
        </div>
        <div>
          <p className='number-impact'>160K</p>
          <p className='letter-impact'>Almuerzos<br /> Recaudados</p>
        </div>
        <div>
          <p className='number-impact'>72</p>
          <p className='letter-impact'>Puestos<br /> de Trabajo</p>
        </div>
        <div>
          <p className='number-impact'>12</p>
          <p className='letter-impact'>Comunas</p>
        </div>
      </div>
    </div>
  );
}
export default Impacto;