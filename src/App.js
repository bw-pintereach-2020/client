//react imports
import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import Navbar from './components/NavBar'
import Home from './components/Home'


//styles
import './styles/App.css'

//App
function App() {
  return (
    <div className='App'>
      {/* Navbar Component Here */}
      <Navbar />
        <Switch>
          {/* <Route path='/login' component={Login} /> */}
          {/* <Route path='/login' component={Register} /> */}
          {/* <PrivateRoute path='/login' component={Dashboard} /> */}
          <Route exact path='/' component={Home} ></Route> 
        </Switch>
    </div>
  )
}

export default App
