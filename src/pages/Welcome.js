import React from 'react';
import '../styles/Welcome.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function Welcome() {
    return (
        <div className="Welcome">
            <div className="Welcome-header">
                <h1>Welcome to iMuffin<sup>&copy;</sup></h1>
            </div>
            <div className="boxes">
                <div className="box-elem">
                    <FontAwesomeIcon icon={faCoffee} />
                </div>
                <div className="box-elem">
                    <FontAwesomeIcon icon={faCoffee} />
                </div>
                <div className="box-elem">
                    <FontAwesomeIcon icon={faCoffee} />
                </div>
            </div>
            <div className="button-box">
            <button className="button">Get in</button>
            </div>
        </div>
    );
}

export default Welcome;
