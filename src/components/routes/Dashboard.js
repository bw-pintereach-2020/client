import React from 'react'
import Boards from '../layout/Boards'
import '../../styles/scss/Dashboard.scss'

function Dashboard() {

    return (
        <section className='pg dashboard-pg'>
            <h1>Welcome to Pintereach</h1>
            <Boards />
        </section>
    )
}

export default Dashboard