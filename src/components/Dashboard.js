import React, { Component } from 'react'
import { connect } from 'react-redux'
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
    const { answeredQuestions, unansweredQuestions } = this.props
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
  const questionIds = Object.keys(questions)
  const answeredQuestions = Object.keys(users[authedUser].answers)
  const unansweredQuestions = questionIds.filter((id) => !answeredQuestions.includes(id))
  return {
    answeredQuestions,
    unansweredQuestions
  }
}

export default connect(mapStateToProps)(Dashboard)
