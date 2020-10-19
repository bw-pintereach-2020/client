import { POST_BOARD_START, POST_BOARD_SUCCESS, POST_BOARD_FAILURE } from '../actions/addBoard'


const initialState = {
    inProgress: false,
    board: {},
    error: ''
}

function addBoardReducer(state = initialState, action) {
    const { type, payload } = action
    switch(type) {
        case POST_BOARD_START:
            return {...state, inProgress: true}
        case POST_BOARD_SUCCESS:
            return {...state, inProgress: false, board: payload}
        case POST_BOARD_FAILURE:
            return {...state, inProgress: false, error: payload}
        default:
            return state
    }
}

export default addBoardReducer