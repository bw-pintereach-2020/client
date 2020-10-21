import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

function PrivateRoute({component:Component, ...rest}) {
    return(
        <Route 
        { ...rest }
        render={(props) => {
            if (window.localStorage.getItem('token')) {
                return <Component {...props} />
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