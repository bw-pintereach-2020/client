import { GET_ARTICLES_START, GET_ARTICLES_SUCCESS, GET_ARTICLES_FAILURE } from '../actions/getArticles'
import { POST_ARTICLE_START, POST_ARTICLE_SUCCESS, POST_ARTICLE_FAILURE} from '../actions/addArticle'
import { DELETE_ARTICLE_START, DELETE_ARTICLE_SUCCESS, DELETE_ARTICLE_FAILURE } from '../actions/deleteArticle'
import { EDIT_ARTICLE_START, EDIT_ARTICLE_SUCCESS, EDIT_ARTICLE_FAILURE } from '../actions/editArticle'

const initialState = {
    inProgress: false,
    articles: [],
    editedArticle: {},
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
            return { ...state, inProgress: false, articles: payload.articles }
        case POST_ARTICLE_FAILURE:
            return { ...state, inProgress: false, error: payload }
        case EDIT_ARTICLE_START:
            return { ...state, inProgress: true }
        case EDIT_ARTICLE_SUCCESS:
            return { ...state, inProgress: false, articles: [...state.articles].map(article => article.id === payload.id ? payload : article) }
        case EDIT_ARTICLE_FAILURE:
            return { ...state, inProgress: false, error: payload }
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
