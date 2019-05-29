import React, { Component } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { loginUser } from '../actions/authedUser'

class Login extends Component {

  state = {
    selectedLogin: ''
  }

  handleChange = (selectedLogin) => {
    this.setState({selectedLogin})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    const selectedLoginId = this.state.selectedLogin.value
    dispatch(loginUser(selectedLoginId))
  }

  render() {
    const { loginOptions } = this.props
    const { selectedLogin } = this.state
    return (
      <div>
        <br />
        <form onSubmit={this.handleSubmit}>
          <Select
            options={loginOptions}
            onChange={this.handleChange}/>
          <button
            type='submit'
            disabled={selectedLogin === ''}>
            Login
          </button>
        </form>
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  const loginOptions = Object.keys(users).map((user) => {
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
    loginOptions
  }
}

export default connect(mapStateToProps)(Login)
