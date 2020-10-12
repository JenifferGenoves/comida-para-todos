// Pantalla Huertos Urbanos
import React, { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
/* import '../styles/urbanGarden.css'; */
import UrbanGardenForm from '../components/UrbanGardensForm'
import ImgUrbanG from '../components/ImgUrbanG'
import BtnProject from '../components/BtnProject';

function UrbanGardens() {
    return (
        <Fragment>
            <div className="containerMenu">
                <Header />
            </div>
            <div className="gardenImg">
                <ImgUrbanG />
                <BtnProject />
            </div>
            <div>
                <UrbanGardenForm />
            </div>
            <div className="containerFooter">
                <Footer />
            </div>
        </Fragment>
    );
}
export default UrbanGardens;
