import React, { Component } from 'react'
import { connect } from 'react-redux'

class Asker extends Component {
  render() {
    const { name, url } = this.props
    return (
      <div>
        {name} Asks
        <br />
        <img
          src={url}
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
    url: users[id].avatarURL
  }
}

export default connect(mapStateToProps)(Asker)
