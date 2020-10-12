import React, { Fragment } from 'react';
import {withRouter} from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer';

function Transparency() {
  
    return(
        <Fragment>
            <Header />
            <Footer />
        </Fragment>
    )
}
export default withRouter(Transparency);