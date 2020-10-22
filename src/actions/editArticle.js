import axiosWithAuth from '../utils/axiosWithAuth'

export const EDIT_ARTICLE_START = 'EDIT_ARTICLE_START'
export const EDIT_ARTICLE_SUCCESS = 'EDIT_ARTICLE_SUCCESS'
export const EDIT_ARTICLE_FAILURE = 'EDIT_ARTICLE_FAILURE'

const editArticle = (article) => dispatch => {
    dispatch({ type: EDIT_ARTICLE_START })
    console.log(article)
    axiosWithAuth()
        .put(`https://pintereach1.herokuapp.com/api/articles/${article.id}`, { notes: article.notes })
        .then(res => {
            console.log(res)
            dispatch({ type: EDIT_ARTICLE_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: EDIT_ARTICLE_FAILURE, payload: err.message})
        })
}

export default editArticle