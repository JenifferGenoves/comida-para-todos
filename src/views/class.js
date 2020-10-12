// Pantalla Huertos Urbanos
import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import DonateClassForm  from '../components/DonateClassForm'
import ImgClass from '../components/ImgClass'
import SectionClass from '../components/SectionClass';
import ExTeachClasses from '../components/ExTeachClasses';



function donateClass () {
    return (
        <Fragment>
            <div className="containerMenu">
                <Header />
            </div>
            <div className="gardenImg">
                <ImgClass />
            </div>
                <SectionClass />
            <div className="textContainer">
                <ExTeachClasses />
            </div>
            <div>
                <DonateClassForm />
            </div>
            <div className="containerFooter">
                <Footer />
            </div>
        </Fragment>
    );
}
export default donateClass ;
