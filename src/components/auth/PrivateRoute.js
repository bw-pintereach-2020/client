import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

function PrivateRoute(props) {
    const loggedIn = props.state.userAuthReducer.loggedIn
    const Component = props.component
    return(
        <Route 
        render={() => {
            if (loggedIn || window.localStorage.getItem('token')) {
                return <Component />
            } else {
                return <Redirect to='/' />
            }
        }}
        />
    )
}

const mapStateToProps = state => ({
    state
})

export default connect(mapStateToProps, {})(PrivateRoute)