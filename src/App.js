//react imports
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Home from './components/Home'

//styles
import './styles/App.css'

//App
function App() {
  return (
    <div className='App'>
      {/* NavBar Component Here */}
      <BrowserRouter>
        <Switch>
          {/* <Route path='/login' component={Login} /> */}
          {/* <Route path='/login' component={Register} /> */}
          <Route path ='/dashboard' component={Dashboard} />
          <Route exact path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
