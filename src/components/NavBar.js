//app navigation bar
//rendered by app outside router
//logged out shows login and register
//logged in shows logout and dashboard
import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar(){
    return (
        <ul>
            <Link to="/"><li>Home</li></Link>
            <li>Login</li>
            <li>Sign Up</li>
        </ul>
    );
}