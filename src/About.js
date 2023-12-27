import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function About(props) {
    return (
        <div>
            <h1>About us page</h1>
            <Link to='contact'>Contact</Link>
            <Outlet/>
        </div>
    );
}

export default About;