import React, { useEffect } from 'react'
import Board from './Board'
import AddBoard from './AddBoard'
import { connect } from 'react-redux'
import getBoards from '../../actions/getBoards'
import styled from 'styled-components'
import getArticles from '../../actions/getArticles'

const StyledBoards = styled.section`
    width: 100%;
    max-width: 1300px;
    margin: 2rem auto;
    text-align: center;
`

function Boards(props) {
    const { getBoards, getArticles } = props
    const { boards } = props.state.getBoardsReducer

    useEffect(() => {
        getBoards()
        getArticles()
    }, [getBoards, getArticles])

    return (
        <StyledBoards className='boards'>
            <AddBoard len={boards.length} />
            {boards?.map(board => <Board board={board} key={board.id}/>)}
        </StyledBoards>
    )
}

const mapStateToProps = state => ({
    state
})

export default connect(mapStateToProps, { getBoards, getArticles })(Boards)