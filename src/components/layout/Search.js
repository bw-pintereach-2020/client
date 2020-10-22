import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/scss/Home.scss'

export default function Search() {
    const [data, setData] = useState([]);
    const [userSearch, setUserSearch] = useState('');

    useEffect(() => {
        const getSearch = () => {
            axios.get(`https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=news_channel&origin=*`)
                .then(res => {
                    setData(res.data.query.search);
                })
                .catch(err => {
                    alert(err);
                })
        }
        getSearch();
    }, [])

    const onChange = (e) => {
        const { value } = e.target;
        setUserSearch(value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        axios.get(`https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${userSearch}&origin=*`)
            .then((res) => {
                setData(res.data.query.search);
            })
            .catch((err) => {
                alert(err);
            })
    }

    return ( 
        <section className="home-content">
            <h2>Explore Your Topic</h2>
            <form className='search-form' onSubmit={onSubmit}>
                <input type='text' name="search" placeholder='IRB' onChange={onChange}/>
                <button>Search</button>
            </form>
            <div className="wiki-list">
                {data.map((p, i) => (
                    <a href={`https://en.wikipedia.org/wiki/${p.title}`} target="_blank" rel="noopener noreferrer" key={i}>
                    <ul>
                        <img src="https://img.icons8.com/ios/452/wikipedia.png" alt="wikipedia icon"/>
                        <li>{p.title}</li>
                    </ul>
                    </a>
                ))}
            </div>
        </section>
    )
}