import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

const BtnKnow = () => {

    return (
        <Fragment>
            <Router>
                <a href="/aboutUs"><button className='moreBtn'>Conócenos más</button></a>
            </Router>
        </Fragment>
    )
}
export default BtnKnow;