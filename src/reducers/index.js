//redux imports
import { combineReducers } from 'redux'

//reducers
import userAuthReducer from './userAuthReducer'
import addBoardReducer from './addBoardReducer'
import getBoardsReducer from './getBoardsReducer'
import addArticleReducer from './addArticleReducer'
import getArticlesReducer from './getArticlesReducer'

//root reducer
const rootReducer = combineReducers({
    userAuthReducer,
    addBoardReducer,
    getBoardsReducer,
    addArticleReducer,
    getArticlesReducer
})

//export reducer
export default rootReducer