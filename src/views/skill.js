// Pantalla Dona tu habilidad
import React, { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImgSkills from '../components/ImgSkills';
import SectionSkills from '../components/SectionSkills';
import SkillForm from '../components/SkillForm';
import ExDonateSkill from '../components/ExDonateSkill';


function skill() {
    return (
        <Fragment>
            <div className="containerMenu">
                <Header />
            </div>
            <div className="gardenImg">
                <ImgSkills />
            </div>
                <SectionSkills />
            <div className="textContainer">
                <ExDonateSkill />
            </div>
            <div>
                <SkillForm />
            </div>
            <div className="containerFooter">
                <Footer />
            </div>
        </Fragment>
    );
}
export default skill;