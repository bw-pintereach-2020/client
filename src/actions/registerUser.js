import axios from 'axios'

export const POST_NEWUSER_START = 'POST_NEWUSER_START'
export const POST_NEWUSER_SUCCESS = 'POST_NEWUSER_SUCCESS'
export const POST_NEWUSER_FAILURE = 'POST_NEWUSER_FAILURE'

const registerUser = (newUser) => dispatch => {
    dispatch({ type: POST_NEWUSER_START })
    axios
        .post('https://pintereach1.herokuapp.com/api/register', newUser)
        .then(({ data }) => {
            dispatch({ type: POST_NEWUSER_SUCCESS, payload: data })
        })
        .catch(({ response: { data }}) => {
            dispatch({ type: POST_NEWUSER_FAILURE, payload: data })
        })
}

export default registerUser