//redux imports
import { combineReducers } from 'redux'

//reducers
import registerReducer from './registerReducer'
import loginReducer from './loginReducer'
import addBoardReducer from './addBoardReducer'
import logoutReducer from './logoutReducer'
import getBoards from './getBoards'

//root reducer
const rootReducer = combineReducers({
    registerReducer,
    loginReducer,
    addBoardReducer,
    logoutReducer,
    getBoards
})

//export reducer
export default rootReducer