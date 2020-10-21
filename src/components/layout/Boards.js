import React, { useEffect } from 'react'
import Board from './Board'
import AddBoard from './AddBoard'
import { connect } from 'react-redux'
import getBoards from '../../actions/getBoards'

function Boards(props) {
    const { getBoards } = props
    const { boards } = props.state.getBoardsReducer

    useEffect(() => {
        getBoards()
    }, [getBoards])

    return (
        <div>
            <h2>My Boards</h2>
            {boards?.map(board => <Board board={board} key={board.id}/>)}
            <AddBoard />
        </div>
    )
}

const mapStateToProps = state => ({
    state
})

export default connect(mapStateToProps, { getBoards })(Boards)