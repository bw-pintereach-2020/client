import axiosWithAuth from '../utils/axiosWithAuth'

export const GET_BOARDS_START = 'GET_BOARDS_START'
export const GET_BOARDS_SUCCESS = 'GET_BOARDS_SUCCESS'
export const GET_BOARDS_FAILURE = 'GET_BOARDS_FAILURE'

const getBoards = () => dispatch => {
    dispatch({ type: GET_BOARDS_START })
    axiosWithAuth()
        .get('https://pintereach1.herokuapp.com/api/boards')
        .then(({ data }) => {
            dispatch({ type: GET_BOARDS_SUCCESS, payload: data})
        })
        .catch(({ response: { data } }) => {
            dispatch({ type: GET_BOARDS_FAILURE, payload: data.message})
        })
}

export default getBoards