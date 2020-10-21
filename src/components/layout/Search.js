import React, { useState, useEffect } from 'react';
import axios from 'axios';
const initial = {
    search: "apple"
}
export default function Search() {
    const [search, setSearch] = useState([]);

    useEffect(() => {
        const getSearch = () => {
            axios.get(`https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=apple&origin=*`)
                .then(res => {
                    console.log(res.data.query.search, 'axios call')
                    setSearch(res.data.query.search);
                })
                .catch(err => {
                    alert("err");
                })
        }
        getSearch();
    }, [])

    // const onChange = (evt) => {
    //     const { name, value } = evt.target;
    //     setSearchTerm({
    //         ...searchTerm,
    //         [name]: value
    //     })
    // }

    return (
        <>
            {/* <form>
                <label>
                    Search: 
                    <input type='text' name="search" onChange={''}/>
                </label>
                <button>Search</button> 
            </form> */}
            {search.map((p) => (
                <div>{p.title}</div>
            ))}
        </>
    )
}