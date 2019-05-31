import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AddQuestion from './AddQuestion'
import Logout from './Logout'
import Dashboard from './Dashboard'
import Nav from './Nav'
import Question from './Question'
import NoMatch from './NoMatch'
import LeaderBoard from './LeaderBoard'

class LoggedInApp extends Component {

  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path='/' exact component={Dashboard} />
          <Route path='/login' component={Dashboard} />
          <Route path='/add' component={AddQuestion} />
          <Route path='/leaderboard' component={LeaderBoard} />
          <Route path='/logout'  component={Logout} />
          <Route path='/questions/:id' component={Question} />
          <Route component={NoMatch}  />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default LoggedInApp
