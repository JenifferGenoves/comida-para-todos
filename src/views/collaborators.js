import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer';
import Collaborator from '../components/Collaborators'
import CollaborationForm from '../components/CollaborationForm.jsx';
import FAO from '../images/iconos/FAO.png';
import FilterCollaborators from '../components/FilterCollaborators';

function CollaboratorsView() {

  return (
    <Fragment>
      <div className="containerMenu">
        <Header />
      </div>
      <div className='img-collaborators'>
        <div className='firstDiv text-color'>
          <hr className='firstLine' />
          <p>Forma parte de nuestros</p>
          <h1>Colaboradores</h1>
          <p className='paragraph'>Únete a nosotros y cambiemos Chile. Sé parte de Comida para Todos, donde tú eligues como formar parte y cuándo.</p>
          <div className='fao'>
            <img className='logo-fao' src={FAO} alt='Fao' />
            <p style={{ fontSize: '14px', marginLeft: '4%' }}>Con la Colaboración técnica de <br /> Naciones Unidas para la alimentación y la Agricultura</p>
          </div>
        </div>

        <CollaborationForm />
      </div>
      <FilterCollaborators />
      <Collaborator />
      <div className="containerFooter">
        <Footer />
      </div>
    </Fragment>
  )
}
export default withRouter(CollaboratorsView);