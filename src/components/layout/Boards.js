import React, { useEffect } from 'react'
import Board from './Board'
import AddBoard from './AddBoard'
import { connect } from 'react-redux'
import getBoards from '../../actions/getBoards'
import styled from 'styled-components'
import getArticles from '../../actions/getArticles'

const StyledBoards = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

function Boards(props) {
    const { getBoards, getArticles } = props
    const { boards } = props.state.boardsReducer
    const { newBoard } = props.state.boardsReducer

    useEffect(() => {
        getBoards()
        getArticles()
    }, [getBoards, getArticles, newBoard])

    return (
        <StyledBoards>
            <h1>My Boards</h1>
            <AddBoard />
            {boards.map(board => <Board board={board} key={board.id}/>)}
        </StyledBoards>
    )
}

const mapStateToProps = state => ({
    state
})

export default connect(mapStateToProps, { getBoards, getArticles })(Boards)