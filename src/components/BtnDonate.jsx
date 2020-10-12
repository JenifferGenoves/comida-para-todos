import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

const BtnDonate = () => {

  return (
    <div>
      <Router>
        <a href='/donate'><button className="btn-donate" name='Dona Aqui'>Dona Aquí</button></a>
      </Router>
    </div>
  );
}

export default BtnDonate;
