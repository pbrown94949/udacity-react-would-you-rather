import React, { Component } from 'react'
import { connect } from 'react-redux'

class AuthorAvatar extends Component {
  render() {
    const { name, avatarURL } = this.props
    return (
      <img
        src={avatarURL}
        alt={`Avatar of ${name}`}
        className='avatar' >
      </img>
    )
  }
}

function mapStateToProps({ users }, { id }) {
  return {
    name: users[id].name,
    avatarURL: users[id].avatarURL
  }
}

export default connect(mapStateToProps)(AuthorAvatar)
