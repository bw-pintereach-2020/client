//redux imports
import { combineReducers } from 'redux'

//reducers
import registerReducer from './registerReducer'
import loginReducer from './loginReducer'
import addBoardReducer from './addBoardReducer'
import logoutReducer from './logoutReducer'
import getBoardsReducer from './getBoardsReducer'
import addArticleReducer from './addArticleReducer'

//root reducer
const rootReducer = combineReducers({
    registerReducer,
    loginReducer,
    addBoardReducer,
    logoutReducer,
    getBoardsReducer,
    addArticleReducer
})

//export reducer
export default rootReducer