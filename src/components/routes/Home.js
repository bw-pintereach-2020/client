import React from 'react';
import NewsBlock from '../layout/NewsBlock';
import "../../styles/scss/Home.scss";
import Search from "../layout/Search"
//main landing page 
//contains basic marketing material
//navbar routes to login or register
//footer contains social media links and contact info

function Home() {
    return (
        <section className='pg home-pg'>
            <h1>Pintereach</h1>
            <h2>Save now, Study later</h2>
            <Search/>
            <NewsBlock/>
        </section>
    )
}

export default Home