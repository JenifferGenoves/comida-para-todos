import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer';
import ContactImg from '../components/ContactImg';
import ContactForm from '../components/ContactForm';


function Contact() {

  return (
    <Fragment>
      <Header />
      <ContactImg />
      <ContactForm />
      <Footer />
    </Fragment>
  )
}
export default withRouter(Contact);