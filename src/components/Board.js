//single article board by category, e.g. work
import React, { useState } from 'react'
import AddArticle from './AddArticle'
import Article from './Article'

function Board(props) {
    const [isOpen, setIsOpen] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const [articles, setArticles] = useState([])

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <h3>
                {props.board.name}
                <span onClick={toggleOpen}>{!isOpen ? ' + ' : ' - '}</span>
            </h3>
            {isOpen ? <button onClick={() => {setIsEditing(true)}}>Add Article</button> : null}
            {isEditing ? <AddArticle articles={articles} setArticles={setArticles} setIsEditing={setIsEditing}/> : null}
            {isOpen ? articles.map(article => <Article article={article}/>) : null}            
        </div>
    )
}

export default Board