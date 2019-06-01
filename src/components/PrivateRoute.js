import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

// This class is based on this article:
// https://tylermcginnis.com/react-router-protected-routes-authentication/

class PrivateRoute extends Component {

  render() {
    const { loggedIn, component: Component, ...rest } = this.props
    return (
      <Route {...rest} render={(props) => {
        return loggedIn
        ? <Component {...props} />
        : <Redirect to={{
            pathname: "/login",
              state: {
                from: props.location
              }
          }}/>
      }}/>
    )
  }
}

function mapStateToProps({ authedUser }) {
  const loggedIn = authedUser !== null
  return {
    loggedIn
  }
}

export default connect(mapStateToProps)(PrivateRoute)
