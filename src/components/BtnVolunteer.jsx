import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

const BtnVolunteer = () => {

  return (
    <Fragment>
      <Router>
        <a href='/voluntary'><button className='volBtn'>Hazte voluntario</button></a>
      </Router>
    </Fragment>
  )
}
export default BtnVolunteer;