import React from 'react'
import HomePage from './components/HomePage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AdminPage from './components/AdminPage'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/login' component={Login} />
        <PrivateRoute path='/admin' component={AdminPage} />
        <PrivateRoute path='/apple' component={Apple} />
      </Switch>
    </Router>
  )
}

const Apple = () => {
  return <p>HELO APPLE</p>
}

export default App
