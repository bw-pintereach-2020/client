// import { GET_ARTICLES_START, GET_ARTICLES_SUCCESS, GET_ARTICLES_FAILURE } from '../actions/getArticles'

// const initialState = {
//     inProgress: false,
//     articles: [],
//     error: ''
// }

// function getArticlesReducer(state = initialState, action) {
//     const { type, payload } = action
//     switch(type) {
//         case GET_ARTICLES_START:
//             return {...state, inProgress: true}
//         case GET_ARTICLES_SUCCESS:
//             return {...state, inProgress: false, articles: payload}
//         case GET_ARTICLES_FAILURE:
//             return {...state, inProgress: false, error: payload}
//         default:
//             return state
//     }
// }

// export default getArticlesReducer