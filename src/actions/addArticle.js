import axiosWithAuth from '../utils/axiosWithAuth'

export const POST_ARTICLE_START = 'POST_ARTICLE_START'
export const POST_ARTICLE_SUCCESS = 'POST_ARTICLE_SUCCESS'
export const POST_ARTICLE_FAILURE = 'POST_ARTICLE_FAILURE'

const addArticle = (article) => dispatch => {
    dispatch({ type: POST_ARTICLE_START })
    axiosWithAuth()
        .post('https://pintereach1.herokuapp.com/api/articles', article)
        .then(res => {
            console.log(res)
            dispatch({ type: POST_ARTICLE_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: POST_ARTICLE_FAILURE, payload: err.message})
        })
}

export default addArticle