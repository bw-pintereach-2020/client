//redux imports
import { combineReducers } from 'redux'

//reducers
import registerReducer from './registerReducer'
import userAuthReducer from './userAuthReducer'
import addBoardReducer from './addBoardReducer'
import logoutReducer from './logoutReducer'
import getBoardsReducer from './getBoardsReducer'
import addArticleReducer from './addArticleReducer'
import getArticlesReducer from './getArticlesReducer'

//root reducer
const rootReducer = combineReducers({
    registerReducer,
    userAuthReducer,
    logoutReducer,
    addBoardReducer,
    getBoardsReducer,
    addArticleReducer,
    getArticlesReducer
})

//export reducer
export default rootReducer