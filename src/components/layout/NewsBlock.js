import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../../styles/scss/Home.scss'
import local from './local'
import NewsTile from './NewsTile'

const key = `028cebd3c26d418d8e0afb06c7ac0380`
const query = `research`
const newsURI = `http://newsapi.org/v2/everything?q=${query}&apiKey=${key}`

const randomArticles = arr => {
    let results = []

    for (let i = 0; i < 5; i++) {
        results.push(arr[Math.floor(Math.random() * arr.length)])
    }
}

const NewsBlock = () => {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        const getNews = () => {
            axios.get(newsURI).then(res => {
                // console.log(res.data.articles)
                // let results = randomArticles(res.data.articles)
                // setArticles(results)
                setArticles(local)
            }).catch(err => {
                // backup with local data
                setArticles(local)
            })
        } 
        getNews()
    }, [])
    return (
        <section>
            {articles.map((a, i) => {
                return (<li key={i}><NewsTile article={a}/></li>)
            })}
        </section>
    )
}

export default NewsBlock