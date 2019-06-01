import React, { Component } from 'react'
import Select from 'react-select'
import { Redirect } from 'react-router-dom'
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
    const { login } = this.props
    const id = this.state.selectedLogin.value
    login(id)
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { loggedIn, loginOptions } = this.props
    const { selectedLogin } = this.state
    if (loggedIn) {
      return <Redirect to={from} />
    }
    return (
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
    )
  }
}

function mapStateToProps({ authedUser, users }) {
  const loginOptions = Object.keys(users).map((user) => {
    return {
      value: users[user].id,
      label: users[user].name
    }
  }).sort((a, b) => a.label.localeCompare(b.label))
  return {
    loggedIn: authedUser !== null,
    loginOptions,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    login: (id) => {
      dispatch(loginUser(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
