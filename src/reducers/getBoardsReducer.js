import { GET_BOARDS_START, GET_BOARDS_SUCCESS, GET_BOARDS_FAILURE } from '../actions/getBoards'


const initialState = {
    inProgress: false,
    boards: [],
    error: ''
}

function getBoardsReducer(state = initialState, action) {
    const { type, payload } = action
    switch(type) {
        case GET_BOARDS_START:
            return {...state, inProgress: true}
        case GET_BOARDS_SUCCESS:
            return {...state, inProgress: false, boards: payload}
        case GET_BOARDS_FAILURE:
            return {...state, inProgress: false, error: payload}
        default:
            return state
    }
}

export default getBoardsReducer