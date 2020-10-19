import React, { useState } from 'react'
import Board from './Board'
import AddBoard from './AddBoard'

function Boards() {
    const [boards, setBoards] = useState([])

    return (
        <div>
            <h2>My Boards</h2>
            {boards.map(board => <Board board={board}/>)}
            <AddBoard boards={boards} setBoards={setBoards}/>
        </div>
    )
}

export default Boards