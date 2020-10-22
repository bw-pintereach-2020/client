//react imports
import React from 'react'
import { Switch, Route } from 'react-router-dom'

//components
import Dashboard from './components/routes/Dashboard'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './components/routes/Home'
import Login from './components/auth/Login'
import Registration from './components/auth/Registration'
import PrivateRoute from './components/auth/PrivateRoute'

//styles
import './styles/App.css'
import './styles/scss/Global.scss'

//App
function App() {
  return (
    <>
      <header>
      <NavBar />
      </header>
      <Switch>
        <Route exact path='/' component={Home} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <Route exact path='/register' component={Registration} />
        <Route exact path='/login' component={Login} />
      </Switch>
      <Footer />
    </>
  )
}
export default App
