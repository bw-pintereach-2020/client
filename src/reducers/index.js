//redux imports
import { combineReducers } from 'redux'

//reducers
import userAuthReducer from './userAuthReducer'
import addBoardReducer from './addBoardReducer'
import getBoardsReducer from './getBoardsReducer'
import articlesReducer from './articlesReducer'

//root reducer
const rootReducer = combineReducers({
    userAuthReducer,
    addBoardReducer,
    getBoardsReducer,
    articlesReducer,
})

//export reducer
export default rootReducer