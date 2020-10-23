//single article board by category, e.g. work
import React, { useState } from 'react'
import { connect } from 'react-redux'
import AddArticle from './AddArticle'
import Article from './Article'
import styled from 'styled-components'
import { MinusIcon, PlusIcon } from '../utils/appIcons'

const StyledBoard = styled.div`
    width: 100%;
    margin: 2rem auto;
    padding: 1rem 2rem;
    border-bottom: 1px solid #040404;
`



function Board(props) {
    const [isOpen, setIsOpen] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const { articles } = props.state.articlesReducer

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }

    const sortArticles = () => {
        return articles.map(article => article.board_id === props.board.id ? <Article key={article.id} article={article}/> : null)
    }

    return (
        <StyledBoard className='board'>
            <h3>
                {props.board.name}
                {/* <span onClick={toggleOpen}>{!isOpen ? ' + ' : ' - '}</span> */}
                <span onClick={toggleOpen}>{!isOpen ? <PlusIcon/> : <MinusIcon/>}</span>
            </h3>
            <div className="board-content">
            {isOpen ? sortArticles() : null}            
            {isEditing ? <AddArticle id={props.board.id} setIsEditing={setIsEditing}/> : null}
            {isOpen ? <button className='add-btn' onClick={() => {setIsEditing(true)}}>Add Article</button> : null}
            </div>
        </StyledBoard>
    )
}

const mapStateToProps = state => ({
    state
})

export default connect(mapStateToProps, {})(Board)