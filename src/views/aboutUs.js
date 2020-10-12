import React, { Fragment } from 'react';
import {withRouter} from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer';
import Teamph from '../components/Teamph';
import TeamPhotos from '../components/TeamPhotos'

function AboutUs() {
  
    return(
        <Fragment>
            <Header />
            <Teamph />
            <TeamPhotos />
            <Footer />
        </Fragment>
    )
}
export default withRouter(AboutUs);