//redux imports
import { combineReducers } from 'redux'

//reducers
import registerReducer from './registerReducer'
import loginReducer from './loginReducer'
import addBoardReducer from './addBoardReducer'

//root reducer
const rootReducer = combineReducers({
    registerReducer,
    loginReducer,
    addBoardReducer
})

//export reducer
export default rootReducer