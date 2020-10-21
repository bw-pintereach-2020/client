import { POST_NEWUSER_START, POST_NEWUSER_SUCCESS, POST_NEWUSER_FAILURE } from '../actions/registerUser'

const initialState = {
    inProgress: false,
    newUser: {},
    token: '',
    error: {}
}

function registerReducer(state = initialState, action) {
    const { type, payload } = action
    switch(type) {
        case POST_NEWUSER_START:
            return {...state, inProgress: true}
        case POST_NEWUSER_SUCCESS:
            return {...state, inProgress: false, newUser: payload.user, token: payload.token}
        case POST_NEWUSER_FAILURE:
            return {...state, inProgress: false, error: payload}
        default:
            return state
    }
}

export default registerReducer