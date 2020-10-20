import { LOGOUT_START, LOGOUT_SUCCESS, LOGOUT_FAILURE } from '../actions/logoutUser'

const initialState = {
    inProgress: false,
}

function logoutReducer(state = initialState, action) {
    const { type } = action
    switch(type) {
        case LOGOUT_START:
            return {...state, inProgress: true}
        case LOGOUT_SUCCESS:
            return {...state, inProgress: false}
        case LOGOUT_FAILURE:
            return {...state, inProgress: false}
        default:
            return state
    }
}

export default logoutReducer