// Pantalla Huertos Urbanos
import React, { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import UrbanGardenForm from '../components/UrbanGardensForm'
import ImgUrbanG from '../components/ImgUrbanG'
import SecondSection from '../components/SecondSection';
import VolunteerExperience from '../components/VolunteerExperience';


function UrbanGardens() {
    return (
        <Fragment>
            <div className="containerMenu">
                <Header />
            </div>
            <div className="gardenImg">
                <ImgUrbanG />
            </div>
                <SecondSection />
            <div className="textContainer">
                <VolunteerExperience />
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
