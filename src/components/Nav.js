import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Avatar from './Avatar'

class Nav extends Component {

  navItem = (to, text, exact) => {
    return (
      <li>
        <NavLink to={to} exact={exact} activeClassName='active'>
          {text}
        </NavLink>
      </li>
    )
  }

  welcomeItems = () => {
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

  render() {
    const { authedUser } = this.props
    if (authedUser === null) {
      return null
    }
    return (
      <nav className='nav'>
        <ul>
          {this.navItem('/', 'Home', true)}
          {this.navItem('/add', 'New Question')}
          {this.navItem('/leaderboard', 'Leader Board')}
          {this.welcomeItems()}
          {this.navItem('/logout', 'Log Out')}
        </ul>
      </nav>
    )
  }
}

function mapStateToProps({users, authedUser}) {
  if (authedUser === null) {
    return {
      authedUser,
    }
  }
  const name = users[authedUser].name
  return {
    authedUser,
    name,
  }
}

export default connect(mapStateToProps)(Nav)
