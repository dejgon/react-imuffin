import React from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Recipe() {
    const params = useParams();
    return (
        <div>
            recipe page
             {params.id}
        </div>
    )
}

export default Recipe
