import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from '../actions/shared'
import LoggedOutApp from './LoggedOutApp'
import LoggedInApp from './LoggedInApp'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        <LoadingBar />
        <div className='container'>
          {this.props.loading
            ? null
            : this.props.loggedIn
              ? <LoggedInApp />
              : <LoggedOutApp />
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps({questions, users, authedUser}) {
  const loading = isEmpty(questions) || isEmpty(users)
  return {
    loading,
    loggedIn: authedUser !== null
  }
}

function isEmpty(obj) {
  return obj === null || Object.keys(obj).length === 0
}

export default connect(mapStateToProps)(App)
