import axiosWithAuth from '../utils/axiosWithAuth'

export const GET_ARTICLES_START = 'GET_ARTICLES_START'
export const GET_ARTICLES_SUCCESS = 'GET_ARTICLES_SUCCESS'
export const GET_ARTICLES_FAILURE = 'GET_ARTICLES_FAILURE'

const getArticles = () => dispatch => {
    dispatch({ type: GET_ARTICLES_START })
    axiosWithAuth()
        .get('https://pintereach1.herokuapp.com/api/articles')
        .then(({ data }) => {
            console.log(data)
            dispatch({ type: GET_ARTICLES_SUCCESS, payload: data})
        })
        .catch(({ response: { data } }) => {
            dispatch({ type: GET_ARTICLES_FAILURE, payload: data.message})
        })
} 

export default getArticles