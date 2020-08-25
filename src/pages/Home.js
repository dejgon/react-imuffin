import React, { useEffect } from 'react';
import axios from 'axios';
import '../styles/Home.css';
import Navbar from '../components/Navbar';

function Home() {

    // useEffect(() => {
    //     axios
    //     .get("https://swapi.dev/api/people/1")
    //         .then(
    //             (result) => {
    //                 console.log(result);
    //             }
    //         )
    //         .catch(err => {
    //             console.log(err);
    //         })
    // })
    return (
        <div className="Home">
            Browse most popular recipes:
        </div>
    );
}

export default Home;
