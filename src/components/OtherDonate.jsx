import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const OtherDonate = () => {
    return (
        <section className='ctn-otherdnt'>
            <h4>Donar</h4>
            <h2>Otras formas de Ayudar</h2>
<<<<<<< HEAD
            <p className='paragraph'>Como fundación buscamos que todos podamos aportar de diferentes maneras desde ser voluntario hasta donar parte de tu tiempo dando clases sobre un tema que sientas que puedes aportar ¡Súmate!.</p>
=======
            <p className='paragraph1'>Como fundación buscamos que todos podamos aportar de diferentes maneras desde ser voluntario hasta donar parte de tu tiempo dando clases sobre un tema que sientas que puedes aportar ¡Súmate!.</p>
>>>>>>> 2c2000b43fe24b86945243f98d39b316c597498a
            <div>
                <Router>
                    <Link to='/donate'>
                        <p className='read-more'><br />Leer Más</p>
                    </Link>
                </Router>
            </div>
        </section>
    );
}
export default OtherDonate;