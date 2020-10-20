//app navigation bar
//rendered by app outside router
//logged out shows login and register
//logged in shows logout and dashboard
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import logoutUser from '../actions/logoutUser';
import { connect } from 'react-redux'

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
            <nav>
                <Link to="/"><li>Home</li></Link>
                <Link to="/login"><li>Login</li></Link>
                <Link to="/register"><li>Register</li></Link>
            </nav>
        )
    }

    const privateNav = () => {
        return(
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/dashboard"><li>Dashboard</li></Link>
                <Link onClick={handleLogout}><li>Logout</li></Link>
            </ul>
        )
    }

    return loggedIn ? privateNav() : publicNav()
}

const mapStateToProps = state => ({
    state
})

export default connect(mapStateToProps, { logoutUser })(NavBar)