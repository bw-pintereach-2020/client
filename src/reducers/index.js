//redux imports
import { combineReducers } from 'redux'

//reducers
import registerReducer from './registerReducer'
import loginReducer from './loginReducer'

//root reducer
const rootReducer = combineReducers({
    registerReducer,
    loginReducer
})

//export reducer
export default rootReducer