import React, { Component } from 'react'
import { connect } from 'react-redux'
import Author from './Author'
import { Link, withRouter } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import ReviewQuestionAndAnswer from './ReviewQuestionAndAnswer'
import AnswerQuestion from './AnswerQuestion'

class Question extends Component {

  render() {
    const { authedUser, answered, id } = this.props
    if (authedUser === null) {
      return (
        <Redirect to={{
          pathname: "/login", state: {from: this.props.location}}} />
      )
    }
    if (answered) {
      return <ReviewQuestionAndAnswer id={id} />
    } else {
      return <AnswerQuestion id={id} />
    }
  }
}

function mapStateToProps({ authedUser, users, questions }, props) {
  const { id } = props.match.params
  if (authedUser !== null) {
    const answered = Object.keys(users[authedUser].answers).includes(id)
    return {
      authedUser,
      answered,
      id
    }
  } else {
    return {
      authedUser
    }
  }
}

export default connect(mapStateToProps)(Question)
