import React from 'react';

import './Landing.css';

import landingImage from '../../res/img/pikachu-piplup.png';

const Landing = () => {
    return (
        <div className="landing">
            <img src={landingImage} alt="pikachu piplup" />
            <header>hi. i like mushi.</header>
        </div>
    );
}

export default Landing;
