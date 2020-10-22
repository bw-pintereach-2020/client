// import { POST_ARTICLE_START, POST_ARTICLE_SUCCESS, POST_ARTICLE_FAILURE} from '../actions/addArticle'

// const initialState = {
//     inProgress: false,
//     articles: [],
//     error: ''
// }

// function addArticleReducer(state = initialState, action) {
//     const { type, payload } = action
//     switch(type) {
//         case POST_ARTICLE_START:
//             return {...state, inProgress: true}
//         case POST_ARTICLE_SUCCESS:
//             console.log('reducer success', payload)
//             return {...state, inProgress: false, articles: payload}
//         case POST_ARTICLE_FAILURE:
//             return {...state, inProgress: false}
//         default:
//             return state
//     }
// }

// export default addArticleReducer