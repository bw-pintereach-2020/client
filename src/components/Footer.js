//App footer
//contains social media and contact info
//rendered by app outside router
//view is same logged in and out
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/login"><li>Login</li></Link>
            <Link to="/register"><li>Register</li></Link>
        </ul>
    );
}
