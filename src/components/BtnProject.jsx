/* Imagen vista Huertos Urbanos */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

const BtnProject = () => {

  return (
    <div>
      <Router>
        <a href='/project'><button className="btn-project" /* name='Ir a projecto' */>Ir a proyecto</button></a>
      </Router>
    </div>
  );
}

export default BtnProject;
