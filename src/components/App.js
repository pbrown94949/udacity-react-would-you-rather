import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import PreviewQuestion from './PreviewQuestion'
import AnswerQuestion from './AnswerQuestion'
import Login from './Login'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div className="App">
        {this.props.loading
          ? null
          : <Login />
        }
      </div>
    )
  }
}

function mapStateToProps({questions, users}) {
  return {
    loading: questions === null || users === null
  }
}

export default connect(mapStateToProps)(App)
