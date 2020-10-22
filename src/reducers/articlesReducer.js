import { GET_ARTICLES_START, GET_ARTICLES_SUCCESS, GET_ARTICLES_FAILURE } from '../actions/getArticles'
import { POST_ARTICLE_START, POST_ARTICLE_SUCCESS, POST_ARTICLE_FAILURE} from '../actions/addArticle'

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
            console.log('reducer success', payload)
            return { ...state, inProgress: false, articles: payload }
        case POST_ARTICLE_FAILURE:
            return { ...state, inProgress: false }
        default:
            return state
    }
}

export default articlesReducer
