//react imports
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import Login from './components/Login'
import Registration from './components/Registration'

//styles
import './styles/App.css'

//App
function App() {
  return (
    <div className='App'>
      {/* NavBar Component Here */}
      <BrowserRouter>
        <Switch>
          <Route path='/register' component={Registration} />
          <Route path='/login' component={Login} />
          <Route path ='/dashboard' component={Dashboard} />
          <Route exact path='/' component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}
export default App
