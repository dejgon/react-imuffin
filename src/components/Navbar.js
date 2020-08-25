import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <nav>
            <h1>iMuffin</h1>
            <div className="Navbar-navigation-bar">
                <Link to="/home" style={{ textDecoration: 'none' }}><p className="Navbar-navigation-bar-elem">Home</p></Link>
                <Link to="/recipes" style={{ textDecoration: 'none' }}><p className="Navbar-navigation-bar-elem">Recipes</p></Link>
                <Link to="/profile" style={{ textDecoration: 'none' }}><p className="Navbar-navigation-bar-elem">Profile</p></Link>
            </div>
        </nav>
    );
}

export default Navbar