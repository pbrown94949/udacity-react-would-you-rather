import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Avatar from './Avatar'

class Nav extends Component {

  render() {
    const { authedUser, name } = this.props
    return (
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/' exact activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/add' exact activeClassName='active'>
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard' exact activeClassName='active'>
              Leader Board
            </NavLink>
          </li>
          <li>
            Hello {name}
          </li>
          <li>
            <Avatar id={authedUser} small={true} />
          </li>
          <li>
            <NavLink to='/logout' exact activeClassName='active'>
              Log Out
            </NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}

function mapStateToProps({users, authedUser}) {
  const name = users[authedUser].name
  return {
    authedUser,
    name,
  }
}

export default connect(mapStateToProps)(Nav)
