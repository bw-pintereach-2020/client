//redux imports
import { combineReducers } from 'redux'

//reducers
import userAuthReducer from './userAuthReducer'
import addBoardReducer from './addBoardReducer'
import getBoardsReducer from './getBoardsReducer'
import articlesReducer from './articlesReducer'
import deleteArticleReducer from './deleteArticleReducer'

//root reducer
const rootReducer = combineReducers({
    userAuthReducer,
    addBoardReducer,
    getBoardsReducer,
    articlesReducer,
    deleteArticleReducer,
})

//export reducer
export default rootReducer