//redux imports
import { combineReducers } from 'redux'

//reducers
import userAuthReducer from './userAuthReducer'
import boardsReducer from './boardsReducer'
import articlesReducer from './articlesReducer'

//root reducer
const rootReducer = combineReducers({
    userAuthReducer,
    boardsReducer,
    articlesReducer,
})

//export reducer
export default rootReducer