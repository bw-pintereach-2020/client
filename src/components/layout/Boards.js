import React, { useEffect } from 'react'
import Board from './Board'
import AddBoard from './AddBoard'
import { connect } from 'react-redux'
import getBoards from '../../actions/getBoards'
import styled from 'styled-components'

const StyledBoards = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

function Boards(props) {
    const { getBoards } = props
    const { boards } = props.state.getBoardsReducer

    useEffect(() => {
        getBoards()
    }, [getBoards])

    return (
        <StyledBoards>
            <h1>My Boards</h1>
            <AddBoard />
            {boards?.map(board => <Board board={board} key={board.id}/>)}
        </StyledBoards>
    )
}

const mapStateToProps = state => ({
    state
})

export default connect(mapStateToProps, { getBoards })(Boards)