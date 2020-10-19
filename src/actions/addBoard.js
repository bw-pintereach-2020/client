import axios from 'axios'

export const POST_BOARD_START = 'POST_BOARD_START'
export const POST_BOARD_SUCCESS = 'POST_BOARD_SUCCESS'
export const POST_BOARD_FAILURE = 'POST_BOARD_FAILURE'

const addBoard = (board) => dispatch => {
    dispatch({ type: POST_BOARD_START })
    console.log(board)
    axios
        .post('https://pintereach1.herokuapp.com/api/boards', board, {headers: {Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjQzLCJpYXQiOjE2MDMxNDM3NjEsImV4cCI6MTYwMzE1NDU2MX0.GQX4tOeafR1TYBws0bBRVi4UFN3xx7vzfeYt9ej3aSE'}})
        .then(res => {
            console.log('from inside then', res)
        })
        .catch(err => {
            console.log('from inside post', err)
        })
}

export default addBoard