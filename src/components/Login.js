import React, { Component } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { loginUser } from '../actions/authedUser'

class Login extends Component {

  state = {
    login: ''
  }

  handleChange = (login) => {
    this.setState({login})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    const loginId = this.state.login.value
    dispatch(loginUser(loginId))
  }

  render() {
    const { logins } = this.props
    const { login } = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Select
            options={logins}
            onChange={this.handleChange}/>
          <button
            type='submit'
            disabled={login === ''}>
            Login
          </button>
        </form>
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  const logins = Object.keys(users).map((user) => {
    return {
      value: users[user].id,
      label: users[user].name
    }
  }).sort((a, b) => {
    if (a.label < b.label)
      return -1
    if (a.label > b.label)
      return 1
    return 0
  })
  return {
    logins
  }
}

export default connect(mapStateToProps)(Login)
