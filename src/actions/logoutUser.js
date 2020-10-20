export const LOGOUT_START = 'LOGOUT_START'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE'

const logoutUser = () => dispatch => {
    dispatch({ type: LOGOUT_START })
    window.localStorage.removeItem('token')
    if (!window.localStorage.getItem('token')) {
        dispatch({ type: LOGOUT_SUCCESS })
    } else {
        dispatch({ type: LOGOUT_FAILURE })
    }
}

export default logoutUser