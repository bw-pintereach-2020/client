import React, { useState } from 'react'
import Board from './Board'
import NewBoard from './NewBoard'

function Boards() {
    const [boards, setBoards] = useState([])

    return (
        <div>
            <h2>My Boards</h2>
            {boards.map(board => <Board board={board}/>)}
            <NewBoard boards={boards} setBoards={setBoards}/>
        </div>
    )
}

export default Boards