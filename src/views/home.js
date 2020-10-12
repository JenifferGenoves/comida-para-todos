import React, { Fragment } from 'react';
import '../App.js';
import Header from '../components/Header';
import ImgPage from '../components/ImgPage'
import Footer from '../components/Footer'
import DonatePrice from '../components/DonatePrice'
import OtherDonate from '../components/OtherDonate'
import CollabSection from '../components/CollabSection.jsx';
import Carrousel from '../components/Carrousel';
import Insta from '../components/Instagram';
import Campaign from '../components/Campaign.jsx';
import Impacto from '../components/Impacto.jsx';
import ClbCarrousel from '../components/ClbCarrousel.jsx';

function Home() {
  return (
    <Fragment>
      <div className="containerMenu">
        <Header />
      </div>
      <div>
        <ImgPage />
        <div>
          <DonatePrice />
        </div>
        <div className='container-otherDnt'>
          <Carrousel />
          <OtherDonate />
        </div>
        <div className='container-campaign'>
          <Campaign />
        </div>
        <div>
          <Impacto />
        </div>
        <div>
          <CollabSection />
          < ClbCarrousel />
        </div>
        <Insta />
      </div>
      <div className="containerFooter">
        <Footer />
      </div>
    </Fragment>
  );
}
export default Home;
