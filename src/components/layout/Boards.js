import React, { useEffect, useState } from 'react'
import Board from './Board'
import AddBoard from './AddBoard'
import { connect } from 'react-redux'
import getBoards from '../../actions/getBoards'
import styled from 'styled-components'

const StyledBoards = styled.section`
    width: 100%;
    max-width: 1300px;
    margin: 2rem auto;
    text-align: center;
`

function Boards(props) {
    const { getBoards } = props
    const { boards } = props.state.getBoardsReducer

    useEffect(() => {
        getBoards()
    }, [getBoards])

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

export default connect(mapStateToProps, { getBoards })(Boards)