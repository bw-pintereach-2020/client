//react imports
import React from 'react'
import { Switch, Route } from 'react-router-dom'

//components
import Dashboard from './components/Dashboard'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Login from './components/Login'
import Registration from './components/Registration'
import PrivateRoute from './components/PrivateRoute'

//styles
import './styles/App.css'

//App
function App() {
  return (
    <div className='App'>
       <NavBar/>
       <Switch>
         <Route exact path='/' component={Home} />
         <PrivateRoute exact path ='/dashboard' component={Dashboard} />
         <Route exact path='/register' component={Registration} />
         <Route exact path='/login' component={Login} />
       </Switch>
    </div>
  )
}
export default App
