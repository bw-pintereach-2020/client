//main landing page 
//contains basic marketing material
//navbar routes to login or register
//footer contains social media links and contact info

import React from 'react'
import NewsBlock from './layout/NewsBlock'

function Home() {
    return (
        <section>
            <h1>Pintereach</h1>
            <h2>Save it now. Study later.</h2>
            <NewsBlock/>
        </section>
    )
}

export default Home