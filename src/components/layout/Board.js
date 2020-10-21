//single article board by category, e.g. work
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import AddArticle from './AddArticle'
import Article from './Article'
import getArticles from '../../actions/getArticles'

function Board(props) {
    const [isOpen, setIsOpen] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const { articles } = props.state.getArticlesReducer
    const newArticles = props.state.addArticleReducer.articles

    const toggleOpen = () => {
        setIsOpen(!isOpen)
        props.getArticles()
    }

    useEffect(() => {
        getArticles()
    }, [newArticles])

    return (
        <div>
            <h3>
                {props.board.name}
                <span onClick={toggleOpen}>{!isOpen ? ' + ' : ' - '}</span>
            </h3>
            {isOpen ? articles.map(article => <Article key={article.id} article={article}/>) : null}            
            {isEditing ? <AddArticle id={props.board.id} setIsEditing={setIsEditing}/> : null}
            {isOpen ? <button onClick={() => {setIsEditing(true)}}>Add Article</button> : null}
        </div>
    )
}

const mapStateToProps = state => ({
    state
})

export default connect(mapStateToProps, { getArticles })(Board)