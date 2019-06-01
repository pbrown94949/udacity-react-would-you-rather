import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavItem from './NavItem'
import NavWelcome from './NavWelcome'

class Nav extends Component {
  render() {
    const { authedUser } = this.props
    if (authedUser === null) {
      return null
    }
    return (
      <nav className='nav'>
        <ul>
          <NavItem to='/' label='Home' exact={true} />
          <NavItem to='/add' label='New Question' />
          <NavItem to='/leaderboard' label='Leader Board' />
          <NavWelcome />
          <NavItem to='/logout' label='Log Out' />
        </ul>
      </nav>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(Nav)
