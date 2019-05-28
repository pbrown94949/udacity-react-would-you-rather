import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from '../actions/shared'
import NewQuestion from './NewQuestion'
import Logout from './Logout'
import Dashboard from './Dashboard'
import Nav from './Nav'
import Login from './Login'
import Question from './Question'
import NoMatch from './NoMatch'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <LoadingBar />
          <div>
            {this.props.loading
              ? null
              : <div>
                  {this.props.loggedIn
                  ? <div>
                      <Nav />
                      <Switch>
                        <Route path='/' exact component={Dashboard} />
                        <Route path='/login' component={Dashboard} />
                        <Route path='/new' component={NewQuestion} />
                        <Route path='/logout'  component={Logout} />
                        <Route path='/questions/:id' component={Question} />
                        <Route component={NoMatch}  />
                      </Switch>
                    </div>
                  : <div>
                      <Switch>
                        <Route path='/logout'  component={Logout} />
                        <Route component={Login}  />
                      </Switch>
                    </div>
                  }
                </div>
            }
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

function mapStateToProps({questions, users, authedUser}) {
  return {
    loading: questions === null || users === null,
    loggedIn: authedUser !== null
  }
}

export default connect(mapStateToProps)(App)
