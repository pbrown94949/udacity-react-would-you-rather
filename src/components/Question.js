import React, { Component } from 'react'
import { connect } from 'react-redux'
import Author from './Author'
import { Link, withRouter } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import ReviewQuestion from './ReviewQuestion'
import AnswerQuestion from './AnswerQuestion'

class Question extends Component {

  render() {
    const { answered, id } = this.props
    if (answered) {
      return <ReviewQuestion id={id} />
    } else {
      return <AnswerQuestion id={id} />
    }
  }
}

function mapStateToProps({ authedUser, users, questions }, props) {
  const { id } = props.match.params
  const answered = Object.keys(users[authedUser].answers).includes(id)
  return {
    authedUser,
    answered,
    id
  }
}

export default connect(mapStateToProps)(Question)
