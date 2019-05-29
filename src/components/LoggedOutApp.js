import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Logout from './Logout'
import Login from './Login'

class LoggedOutApp extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/logout' component={Logout} />
          <Route component={Login}  />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default LoggedOutApp
