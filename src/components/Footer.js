//App footer
//contains social media and contact info
//rendered by app outside router
//view is same logged in and out
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BottomNav = styled.nav`
    position: fixed;
    bottom: 0; 
    width: 100%;
    height: 5%;
    background-color: #119DA4;
`;

const NavContents = styled.ul`
    display: flex; 
    justify-content: flex-end;
    background-color: #119DA4;
`;

const NavItems = styled.li`
    color: #eeeeee; 
    padding: 10px 35px;
`;

const FooterLogo = styled.img`
    width: 35px;
`;

export default function Footer() {
    return (
        <BottomNav>
            <NavContents>
                <Link to="/"><NavItems>Home</NavItems></Link>
                <Link to="/login"><NavItems>Login</NavItems></Link>
                <Link to="/register"><NavItems>Register</NavItems></Link>
            </NavContents>
        </BottomNav>
    );
}
