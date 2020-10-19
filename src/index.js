//react imports
import React from 'react'
import ReactDOM from 'react-dom'

//redux imports
import { applyMiddleware, compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

//styles
import './styles/index.css'

//components
import App from './App'

//modules
import rootReducer from './reducers'

//redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

//redux store
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

//render App
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
