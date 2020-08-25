import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Recipes() {
    return (
        <div>
            <p>Recipes page</p>
            <Link to="recipes/1">Recipe 1</Link>
        </div>
    )
}

export default Recipes
