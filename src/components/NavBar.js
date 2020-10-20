//app navigation bar
//rendered by app outside router
//logged out shows login and register
//logged in shows logout and dashboard
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const UnorderedList = styled.ul`
    display: flex; 
    justify-content: flex-end;
    background-color: #119DA4;
`;

const NavBarListItems = styled.li`
    color: #eeeeee; 
    font-size: 1.8rem;
    padding: 10px 35px;
`;

export default function NavBar(){
    return (
        <UnorderedList>
            <Link to="/"><NavBarListItems>Home</NavBarListItems></Link>
            <Link to="/login"><NavBarListItems>Login</NavBarListItems></Link>
            <Link to="/register"><NavBarListItems>Register</NavBarListItems></Link>
        </UnorderedList>
    );
}