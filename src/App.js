//react imports
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './components/Home'
import Login from './components/Login'
import Registration from './components/Registration'

//styles
import './styles/App.css'

//App
function App() {
  return (
    <div className='App'>
       <NavBar/>
       <Switch>
         <Route exact path='/' component={Home} />
         <Route exact path ='/dashboard' component={Dashboard} />
         <Route exact path='/register' component={Registration} />
         <Route exact path='/login' component={Login} />
       </Switch>
       <Footer/>
    </div>
  )
}
export default App
