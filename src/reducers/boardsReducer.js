import { GET_BOARDS_START, GET_BOARDS_SUCCESS, GET_BOARDS_FAILURE } from '../actions/getBoards'
import { POST_BOARD_START, POST_BOARD_SUCCESS, POST_BOARD_FAILURE } from '../actions/addBoard'

const initialState = {
    inProgress: false,
    boards: [],
    newBoard: {},
    error: ''
}

function boardsReducer(state = initialState, action) {
    const { type, payload } = action
    switch(type) {
        case GET_BOARDS_START:
            return { ...state, inProgress: true }
        case GET_BOARDS_SUCCESS:
            return { ...state, inProgress: false, boards: payload }
        case GET_BOARDS_FAILURE:
            return { ...state, inProgress: false, error: payload }
        case POST_BOARD_START:
            return { ...state, inProgress: true }
        case POST_BOARD_SUCCESS:
            return { ...state, inProgress: false, newBoard: payload }
        case POST_BOARD_FAILURE:
            return { ...state, inProgress: false, error: payload }
        default:
            return state
    }
}

export default boardsReducer