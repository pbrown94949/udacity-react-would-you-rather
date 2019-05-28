import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser } from '../actions/authedUser'

class Logout extends Component {

  componentDidMount() {
    this.props.dispatch(logoutUser())
  }

  render() {
    return (
      <div>
        Click <Link to="/login">here</Link> to login.
      </div>
    )
  }
}

export default connect()(Logout)
