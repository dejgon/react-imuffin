import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <nav>
            <h1>iMuffin</h1>
            <div className="Navbar-navigation-bar">
                <p className="Navbar-navigation-bar-elem"><Link to="/home">Home</Link></p>
                <p className="Navbar-navigation-bar-elem"><Link to="/recipes">Recipes</Link></p>
                <p className="Navbar-navigation-bar-elem"><Link to="/profile">Profile</Link></p>
            </div>
        </nav>
    );
}

export default Navbar