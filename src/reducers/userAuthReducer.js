import { POST_NEWUSER_START, POST_NEWUSER_SUCCESS, POST_NEWUSER_FAILURE } from '../actions/registerUser'
import { LOGIN_USER_START, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from '../actions/loginUser'
import { LOGOUT_START, LOGOUT_SUCCESS, LOGOUT_FAILURE } from '../actions/logoutUser'

const initialState = {
    inProgress: false,
    loggedIn: false,
    message: '',
    token: '',
    newUser: {},
    user: {},
    error: ''
}

function userAuthReducer(state = initialState, action) {
    const { type, payload } = action
    switch(type) {
        case POST_NEWUSER_START:
            return {...state, inProgress: true}
        case POST_NEWUSER_SUCCESS:
            return {...state, inProgress: false, loggedIn: true, newUser: payload.user, token: payload.token}
        case POST_NEWUSER_FAILURE:
            return {...state, inProgress: false, error: payload.message}
        case LOGIN_USER_START:
            return { ...state, inProgress: true }
        case LOGIN_USER_SUCCESS:
            return { ...state, inProgress: false, loggedIn: true, message: payload.message, token: payload.token, user: payload.user }
        case LOGIN_USER_FAILURE:
            return { ...state, inProgress: false, error: payload.message }
        case LOGOUT_START:
            return { ...state, inProgress: true }
        case LOGOUT_SUCCESS:
            return { ...state, inProgress: false, loggedIn: false, message: '', token: '', user: {}, newUser: {} }
        case LOGOUT_FAILURE:
            return { ...state, inProgress: false, error: 'Logout Failed' }
        default:
            return state
    }
}

export default userAuthReducer