import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import logoutUser from '../actions/logoutUser';
import { connect } from 'react-redux'

const StyledNav = styled.nav`
    display: flex; 
    justify-content: flex-end;
    background-color: #119DA4;

    a {
        color: #eeeeee; 
        padding: 10px 35px;
    }
`;
 
function NavBar(props){
    const loggedIn = window.localStorage.getItem('token') ? true : false
    const history = useHistory()
    
    const handleLogout = (e) => {
        e.preventDefault()
        props.logoutUser()
        history.push('/')
    }

    const publicNav = () => {
        return(
            <StyledNav>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </StyledNav>
        )
    }

    const privateNav = () => {
        return(
            <StyledNav>
                <Link to="/">Home</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to='' onClick={handleLogout}>Logout</Link>
            </StyledNav>
        )
    }

    return loggedIn ? privateNav() : publicNav()
}

const mapStateToProps = state => ({
    state
})

export default connect(mapStateToProps, { logoutUser })(NavBar)
