import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useStateValue } from '../StateProvider';

function Recipes() {

    const [{ recipes }] = useStateValue();
    return (
        <div>
            <p>Recipes page, amount: {recipes.length}</p>
            <Link to="recipes/1">Recipe 1</Link>
        </div>
    )
}

export default Recipes
