import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser } from '../actions/authedUser'

class Logout extends Component {

  componentDidMount() {
    this.props.logout()
  }

  render() {
    return (
      <div className='border'>
        Click <Link to="/login">here</Link> to login.
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => {
      dispatch(logoutUser())
    }
  }
}

export default connect(null, mapDispatchToProps)(Logout)
