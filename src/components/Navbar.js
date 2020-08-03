import React from 'react';
import '../styles/Navbar.css';

function Navbar () {
    return (
        <nav>
            <h1>iMuffin</h1>
            <div className="Navbar-navigation-bar">
                <p className="Navbar-navigation-bar-elem">Home</p>
                <p className="Navbar-navigation-bar-elem">Recipes</p>
                <p className="Navbar-navigation-bar-elem">Profile</p>
            </div>
        </nav>
    );
}

export default Navbar