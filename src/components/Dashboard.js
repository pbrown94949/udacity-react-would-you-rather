import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import PreviewQuestion from './PreviewQuestion'

class Dashboard extends Component {

  state = {
    showAnswered: false
  }

  handleClick = (b) => {
    this.setState(() => ({
      showAnswered: b
    }))
  }

  previewQuestionList = (ids) => {
    return (
      <ul>
        {ids.map((id) =>
          <li key={id}>
            <PreviewQuestion id={id} />
          </li>
        )}
      </ul>
    )
  }

  render() {
    const { showAnswered } = this.state
    const { authedUser, answeredQuestions, unansweredQuestions } = this.props
    if (authedUser === null) {
      return (
        <Redirect to={{
          pathname: "/login", state: {from: this.props.location}}} />
      )
    }
    return (
      <div>
        <button onClick={() => this.handleClick(false)}>
          Unanswered
        </button>
        <button onClick={() => this.handleClick(true)}>
          Answered
        </button>
        {showAnswered && this.previewQuestionList(answeredQuestions)}
        {!showAnswered && this.previewQuestionList(unansweredQuestions)}
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  if (authedUser !== null) {
    const questionIds = Object.keys(questions)
    const answeredQuestions = Object.keys(users[authedUser].answers)
    const unansweredQuestions = questionIds.filter((id) => !answeredQuestions.includes(id))
    return {
      authedUser,
      answeredQuestions,
      unansweredQuestions
    }
  } else {
    return {
      authedUser,
    }
  }
}

export default connect(mapStateToProps)(Dashboard)
