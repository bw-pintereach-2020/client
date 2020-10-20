import { LOGIN_USER_START, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from '../actions/loginUser'

const initialState = {
    inProgress: false,
    message: '',
    token: '',
    user: {},
    error: ''
}

function loginReducer(state = initialState, action) {
    const { type, payload } = action
    switch(type) {
        case LOGIN_USER_START:
            return {...state, inProgress: true}
        case LOGIN_USER_SUCCESS:
            return {...state, inProgress: false, message: payload.message, token: payload.token, user: payload.user}
        case LOGIN_USER_FAILURE:
            return {...state, inProgress: false, error: payload.message}
        default:
            return state
    }
}

export default loginReducer