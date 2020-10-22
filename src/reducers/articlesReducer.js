import { GET_ARTICLES_START, GET_ARTICLES_SUCCESS, GET_ARTICLES_FAILURE } from '../actions/getArticles'
import { POST_ARTICLE_START, POST_ARTICLE_SUCCESS, POST_ARTICLE_FAILURE} from '../actions/addArticle'
import { DELETE_ARTICLE_START, DELETE_ARTICLE_SUCCESS, DELETE_ARTICLE_FAILURE } from '../actions/deleteArticle'

const initialState = {
    inProgress: false,
    articles: [],
    error: ''
}

function articlesReducer(state = initialState, action) {
    const { type, payload } = action
    switch(type) {
        case GET_ARTICLES_START:
            return { ...state, inProgress: true }
        case GET_ARTICLES_SUCCESS:
            return { ...state, inProgress: false, articles: payload }
        case GET_ARTICLES_FAILURE:
            return { ...state, inProgress: false, error: payload }
        case POST_ARTICLE_START:
            return { ...state, inProgress: true }
        case POST_ARTICLE_SUCCESS:
            return { ...state, inProgress: false, articles: payload }
        case POST_ARTICLE_FAILURE:
            return { ...state, inProgress: false }
        case DELETE_ARTICLE_START:
            return { ...state, inProgress: true }
        case DELETE_ARTICLE_SUCCESS:
            return { ...state, inProgress: false, articles: payload }
        case DELETE_ARTICLE_FAILURE:
            return { ...state, inProgress: false, error: payload }
        default:
            return state
    }
}

export default articlesReducer
