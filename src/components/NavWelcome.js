import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Avatar from './Avatar'

class NavWelcome extends Component {
  render() {
    const { authedUser, name } = this.props
    return (
      <Fragment>
        <li>
          Hello {name}
        </li>
        <li>
          <Avatar id={authedUser} small={true} />
        </li>
      </Fragment>
    )
  }
}

function mapStateToProps({users, authedUser}) {
  return {
    authedUser,
    name: users[authedUser].name,
  }
}

export default connect(mapStateToProps)(NavWelcome)
