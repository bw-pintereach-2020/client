import axiosWithAuth from '../utils/axiosWithAuth'

export const POST_BOARD_START = 'POST_BOARD_START'
export const POST_BOARD_SUCCESS = 'POST_BOARD_SUCCESS'
export const POST_BOARD_FAILURE = 'POST_BOARD_FAILURE'

const addBoard = (board) => dispatch => {
    dispatch({ type: POST_BOARD_START })
    axiosWithAuth()
        .post('https://pintereach1.herokuapp.com/api/boards', board)
        .then(res => {
            dispatch({ type: POST_BOARD_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: POST_BOARD_FAILURE, payload: err.message})
        })
}

export default addBoard