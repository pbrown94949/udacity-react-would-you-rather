import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import PrivateRoute from './PrivateRoute'
import Dashboard from './Dashboard'
import Login from './Login'
import Nav from './Nav'
import Question from './Question'
import NoMatch from './NoMatch'
import LeaderBoard from './LeaderBoard'
import AddQuestion from './AddQuestion'
import Logout from './Logout'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Fragment>
        <LoadingBar />
        <div className='container'>
          {this.props.loading
            ? null
            : <BrowserRouter>
                <Nav />
                <Switch>
                  <PrivateRoute path='/' exact component={Dashboard} />
                  <PrivateRoute path='/add' component={AddQuestion} />
                  <PrivateRoute path='/leaderboard' component={LeaderBoard} />
                  <PrivateRoute path='/questions/:id' component={Question} />
                  <Route path ='/login' component={Login} />
                  <Route path='/logout'  component={Logout} />
                  <PrivateRoute component={NoMatch}  />
                </Switch>
              </BrowserRouter>
          }
        </div>
      </Fragment>
    )
  }
}

function mapStateToProps({questions, users, authedUser}) {
  return {
    loading: isEmpty(questions) || isEmpty(users),
  }
}

function isEmpty(obj) {
  return obj === null || Object.keys(obj).length === 0
}

export default connect(mapStateToProps)(App)
