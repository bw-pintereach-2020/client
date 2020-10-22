//redux imports
import { combineReducers } from 'redux'

//reducers
import userAuthReducer from './userAuthReducer'
import addBoardReducer from './addBoardReducer'
import getBoardsReducer from './getBoardsReducer'
import addArticleReducer from './addArticleReducer'
import getArticlesReducer from './getArticlesReducer'
import deleteArticleReducer from './deleteArticleReducer'

//root reducer
const rootReducer = combineReducers({
    userAuthReducer,
    addBoardReducer,
    getBoardsReducer,
    addArticleReducer,
    getArticlesReducer,
    deleteArticleReducer,
})

//export reducer
export default rootReducer