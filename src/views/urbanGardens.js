// Pantalla Huertos Urbanos
import React, { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
<<<<<<< HEAD
/* import '../styles/urbanGarden.css'; */
import UrbanGardenForm from '../components/UrbanGardensForm'
import ImgUrbanG from '../components/ImgUrbanG'
import BtnProject from '../components/BtnProject';
=======
import UrbanGardenForm from '../components/UrbanGardensForm'
import ImgUrbanG from '../components/ImgUrbanG'
import SecondSection from '../components/SecondSection';
import VolunteerExperience from '../components/VolunteerExperience';

>>>>>>> 2c2000b43fe24b86945243f98d39b316c597498a

function UrbanGardens() {
    return (
        <Fragment>
            <div className="containerMenu">
                <Header />
            </div>
            <div className="gardenImg">
                <ImgUrbanG />
<<<<<<< HEAD
                <BtnProject />
=======
            </div>
                <SecondSection />
            <div className="textContainer">
                <VolunteerExperience />
>>>>>>> 2c2000b43fe24b86945243f98d39b316c597498a
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
