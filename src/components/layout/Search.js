import React, { useState, useEffect } from 'react';
import axios from 'axios';

const initial = {
    search: "cheese"
}



export default function Search() {
    const [initialSearch, setinitialSearch] = useState([]);
    const [ userSearch, setUserSearch ] = useState([]);

    useEffect(() => {
        const getSearch = () => {
            axios.get(`https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${initial.search}&origin=*`)
                .then(res => {
                    console.log(res.data.query.search, 'axios call')
                    setinitialSearch(res.data.query.search);
                })
                .catch(err => {
                    alert("err");
                })
        }
        getSearch();
    }, [])

    const onChange = (e) =>{
        const { name, value } = e.target;
        setUserSearch({
            ...userSearch,
            [name]: value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
                axios.get(`https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${userSearch.search}&origin=*`)
                .then((res) => {
                    setUserSearch(res.data.query.search);
                })
                .catch((err) => {
                    alert(err);
                })
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>
                    Search: 
                    <input type='text' name="search" onChange={onChange}/>
                </label>
                <button>Search</button> 
            </form>
            {initialSearch.map((p) => (
                <div key={p.pageid}>{p.title}</div>
            ))}
        </div>
    )
}