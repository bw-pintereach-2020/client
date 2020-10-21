import axios from 'axios'

export const LOGIN_USER_START = 'LOGIN_USER_START'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE'

const loginUser = (creds) => dispatch => {
    dispatch({ type: LOGIN_USER_START })
    axios
        .post('https://pintereach1.herokuapp.com/api/login', creds)
        .then(({ data }) => {
            window.localStorage.setItem('token', data.token)
            dispatch({ type: LOGIN_USER_SUCCESS, payload: data})
        })
        .catch(({ response: { data } }) => {
            dispatch({ type: LOGIN_USER_FAILURE, payload: data})
        })
}

export default loginUser