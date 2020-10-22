import React, { useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import deleteArticle from '../../actions/deleteArticle'
import getArticles from '../../actions/getArticles'
import editArticle from '../../actions/editArticle'

const StyledArticle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    svg {
        margin: 0 5%;
        &:hover {
            stroke: #0c7489;
        }
    }

`

function Article(props) {
    const [isEditing, setIsEditing] = useState(false)
    const [values, setValues] = useState(props.article.notes)

    const handleDelete = (e) => {
        e.preventDefault()
        props.deleteArticle(props.article.id)
        props.getArticles()
    }

    const handleEdit = (e) => {
        e.preventDefault()
        setValues(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const articleToEdit = { ...props.article, notes: values}
        props.editArticle(articleToEdit)
        setIsEditing(false)
    }

    const closeForm = (e) => {
        e.preventDefault()
        setIsEditing(false)
        setValues(props.article.notes)
    }

    const toggleEditing = () => {
        console.log('click handler')
        setIsEditing(true)
    }

    return (
        <StyledArticle>
            <h3>{props.article.title}</h3>
            <img src={props.article.image} alt={props.article.title} width='200px'/>
            <p>{props.article.description}</p>
            
            {isEditing ? 
            <form>
                <input 
                    type='text'
                    value={values}
                    onChange={handleEdit}
                />
                <button onClick={handleSubmit}>Save</button>
                <button onClick={closeForm}>Close</button>
            </form>
            : 
            <>
            <p>Notes:</p>
            <p>{props.article.notes}</p>
            </>
            }

            <StyledDiv className='icon-container'>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width="33" height="33" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round" onClick={handleDelete}>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="4" y1="7" x2="20" y2="7" />
                    <line x1="10" y1="11" x2="10" y2="17" />
                    <line x1="14" y1="11" x2="14" y2="17" />
                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                </svg>
                {!isEditing ? <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pencil" width="33" height="33" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round" onClick={toggleEditing}>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                    <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                </svg> : null}
            </StyledDiv>
        </StyledArticle>
    )
}

const mapStateToProps = state => ({
    state
})

export default connect(mapStateToProps, { deleteArticle, getArticles, editArticle })(Article)