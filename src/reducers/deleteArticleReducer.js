import { DELETE_ARTICLE_START, DELETE_ARTICLE_SUCCESS, DELETE_ARTICLE_FAILURE } from '../actions/deleteArticle'

const initialState = {
    inProgress: false,
    articles: [],
    error: ''
}

function deleteArticleReducer(state = initialState, action) {
    const { type, payload } = action
    switch(type) {
        case DELETE_ARTICLE_START:
            return {...state, inProgress: true}
        case DELETE_ARTICLE_SUCCESS:
            console.log('reducer success', payload)
            return {...state, inProgress: false, articles: payload}
        case DELETE_ARTICLE_FAILURE:
            return {...state, inProgress: false, error: payload}
        default:
            return state
    }
}

export default deleteArticleReducer