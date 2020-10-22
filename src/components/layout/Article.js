import React from 'react'
import styled from 'styled-components'

const StyledArticle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

function Article(props) {
    return (
        <StyledArticle>
            <h3>{props.article.title}</h3>
            <p>{props.article.description}</p>
        </StyledArticle>
    )
}

export default Article