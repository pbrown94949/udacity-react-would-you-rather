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

  previewQuestionList = (questionIds, answered) => {
    if (questionIds.length < 1) {
      return (
        <div className='border'>
          No {answered ? ' answered ' : ' unanswered'} questions found.
        </div>
      )
    }
    return (
      <ul>
        {questionIds.map((id) =>
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
      <div className='dashboard'>
        <button onClick={() => this.handleClick(false)}>
          Unanswered
        </button>
        <button onClick={() => this.handleClick(true)}>
          Answered
        </button>
        {showAnswered && this.previewQuestionList(answeredQuestions, true)}
        {!showAnswered && this.previewQuestionList(unansweredQuestions, false)}
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  const allQuestions = Object.keys(questions)
  const answeredQuestions = Object.keys(users[authedUser].answers)
  const unansweredQuestions = allQuestions.filter((id) => !answeredQuestions.includes(id))
  return {
    answeredQuestions,
    unansweredQuestions
  }
}

export default connect(mapStateToProps)(Dashboard)
