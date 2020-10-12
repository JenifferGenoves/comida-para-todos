/* Imagen vista Huertos Urbanos */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

const BtnGallery = () => {

  return (
    <div>
      <Router>
        <a href='/gallery'><button className="btn-project" /* name='Ir a projecto' */>Ir a Galería</button></a>
      </Router>
    </div>
  );
}

export default BtnGallery;
