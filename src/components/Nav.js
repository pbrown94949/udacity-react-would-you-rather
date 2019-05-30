import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class Nav extends Component {

  render() {
    const { name, avatarURL} = this.props
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
            <img
              src={avatarURL}
              alt={`Avatar of ${name}`}
              className='small-avatar' >
            </img>
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
  return {
    name: users[authedUser].name,
    avatarURL: users[authedUser].avatarURL,
  }
}

export default connect(mapStateToProps)(Nav)
