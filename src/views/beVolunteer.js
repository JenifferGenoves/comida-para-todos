// Pantalla Huertos Urbanos
import React, { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImgVolunteer from '../components/ImgVolunteer';
import VolunteerForm from '../components/VolunteerForm';
import VoluntaryExperience from '../components/VoluntaryExperience';
import SectionVolunteer from '../components/SectionsVolunteer';



function volunteerView () {
    return (
        <Fragment>
            <div className="containerMenu">
                <Header />
            </div>
            <div className="">
                <ImgVolunteer />
            <div className="">
                <SectionVolunteer />
                <div className="">
                    <VoluntaryExperience />
                  </div>
            </div>
               <VolunteerForm />
            </div>
            <div className="containerFooter">
                <Footer />
            </div>
        </Fragment>
    );
}
export default volunteerView;
