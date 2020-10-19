//react imports
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './components/Home';
import Login from './components/Login';
//styles
import './styles/App.css'

//App
function App() {
  return (
    <div className='App'>
      {/* Navbar Component Here */}
      <Navbar />
      <Switch>
        {/* <PrivateRoute path='/login' component={Dashboard} /> */}
        {/* <Route path='/login' component={} /> */}
        <Route path='/login' component={Login}></Route>
        <Route exact path='/' component={Home}></Route>
      </Switch>
    </div>
  )
}
export default App
