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
    const { dispatch } = this.props
    const selectedLoginId = this.state.selectedLogin.value
    dispatch(loginUser(selectedLoginId))
  }

  render() {
    let { from } = this.props.location.state || { from: { pathname: "/" } };
    console.log(from)
    const { loggedIn, loginOptions } = this.props
    const { selectedLogin } = this.state
    if (loggedIn) {
      return <Redirect to={from} />
    }
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

function mapStateToProps({ authedUser, users }) {
  const loginOptions = Object.keys(users).map((user) => {
    return {
      value: users[user].id,
      label: users[user].name
    }
  }).sort((a, b) => a.label > b.label ? 1 : a.label < b.label ? -1 : 0)
  const loggedIn = authedUser !== null
  return {
    loggedIn,
    loginOptions,
  }
}

export default connect(mapStateToProps)(Login)
