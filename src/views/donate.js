import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer';
import ImgDonate from '../components/ImgDonate.jsx';
import Payments from '../components/Payments.jsx';
import OthersDonations from '../components/OthersDonations.jsx';

function Donate() {
  return (
    <Fragment>
      <div className="containerMenu">
        <Header />
      </div>
      <div>
        <ImgDonate />
        <Payments />
        <OthersDonations />
      </div>
      <div className="containerFooter">
        <Footer />
      </div>
    </Fragment>
  )
}
export default withRouter(Donate);