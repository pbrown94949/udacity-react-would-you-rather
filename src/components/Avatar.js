import React, { Component } from 'react'
import { connect } from 'react-redux'

class Avatar extends Component {
  render() {
    const { avatarURL, name, small } = this.props
    return (
      <img
        src={avatarURL}
        alt={`Avatar of ${name}`}
        className={small ? 'avatar-small' : 'avatar'} >
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

export default connect(mapStateToProps)(Avatar)
