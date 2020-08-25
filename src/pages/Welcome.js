import React from 'react';
import '../styles/Welcome.css';
import { Link } from 'react-router-dom';
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
                <Link to="/home">
                    <button className="button">Get in</button>
                </Link>
            </div>
        </div>
    );
}

export default Welcome;
