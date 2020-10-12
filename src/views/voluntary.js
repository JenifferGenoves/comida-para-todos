// Pantalla Huertos Urbanos
import React, { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImgVolunteer from '../components/ImgVolunteer';
import VolunteerForm from '../components/VolunteerForm';
import VoluntaryExperience from '../components/VoluntaryExperience';
import SectionVolunteer from '../components/SectionsVolunteer';



function volunteer () {
    return (
        <Fragment>
            <div className="containerMenu">
                <Header />
            </div>
            <div className="gardenImg">
                <ImgVolunteer />
               <SectionVolunteer />
            <div className="textContainer">
               <VoluntaryExperience />
            </div>
               <VolunteerForm />
            </div>
            <div className="containerFooter">
                <Footer />
            </div>
        </Fragment>
    );
}
export default volunteer;
