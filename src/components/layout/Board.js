//single article board by category, e.g. work
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import AddArticle from './AddArticle'
import Article from './Article'
import getArticles from '../../actions/getArticles'
import styled from 'styled-components'

const StyledBoard = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin: 1% 0;
    padding-bottom: 2%;
    border-bottom: 1px solid #040404;
`

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

    const sortArticles = () => {
        return articles.map(article => article.board_id === props.board.id ? <Article key={article.id} article={article}/> : null)
    }

    return (
        <StyledBoard>
            <h2>
                {props.board.name}
                <span onClick={toggleOpen}>{!isOpen ? ' + ' : ' - '}</span>
            </h2>
            {isOpen ? sortArticles() : null}            
            {isEditing ? <AddArticle id={props.board.id} setIsEditing={setIsEditing}/> : null}
            {isOpen ? <button onClick={() => {setIsEditing(true)}}>Add Article</button> : null}
        </StyledBoard>
    )
}

const mapStateToProps = state => ({
    state
})

export default connect(mapStateToProps, { getArticles })(Board)