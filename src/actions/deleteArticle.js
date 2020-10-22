import axiosWithAuth from '../utils/axiosWithAuth'

export const DELETE_ARTICLE_START = 'DELETE_ARTICLE_START'
export const DELETE_ARTICLE_SUCCESS = 'DELETE_ARTICLE_SUCCESS'
export const DELETE_ARTICLE_FAILURE = 'DELETE_ARTICLE_FAILURE'

const deleteArticle = (id) => dispatch => {
    dispatch({ type: DELETE_ARTICLE_START })
    axiosWithAuth()
        .delete(`https://pintereach1.herokuapp.com/api/articles/${id}`)
        .then(res => {
            console.log(res)
            dispatch({ type: DELETE_ARTICLE_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: DELETE_ARTICLE_FAILURE, payload: err.message})
        })
}

export default deleteArticle