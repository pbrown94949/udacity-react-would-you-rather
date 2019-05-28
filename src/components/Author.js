import React, { Component } from 'react'
import { connect } from 'react-redux'

class Author extends Component {
  render() {
    const { name, avatarURL } = this.props
    return (
      <div>
        {name} Asks
        <br />
        <img
          src={avatarURL}
          alt={`Avatar of ${name}`}
          className='avatar' >
        </img>
      </div>
    )
  }
}

function mapStateToProps({ users }, { id }) {
  return {
    name: users[id].name,
    avatarURL: users[id].avatarURL
  }
}

export default connect(mapStateToProps)(Author)
