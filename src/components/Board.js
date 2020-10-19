//single article board by category, e.g. work
import React, { useState } from 'react'
import Article from './Article'

function Board(props) {
    const [isOpen, setIsOpen] = useState(false)
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
            {isOpen ? articles.map(article => <Article />) : null}

        </div>
    )
}

export default Board