import React, { Component } from 'react'
import { connect } from 'react-redux'
import DashboardItem from './DashboardItem'

class DashboardList extends Component {
  render() {
    const { questionIds, showAnswered } = this.props
    if (questionIds.length < 1) {
      return (
        <div className='border'>
          No {showAnswered ? ' answered ' : ' unanswered'} questions found.
        </div>
      )
    }
    return (
      <ul>
        {questionIds.map((id) =>
          <li key={id}>
            <DashboardItem id={id} />
          </li>
        )}
      </ul>
    )
  }
}

function mapStateToProps({ authedUser, users, questions }, { showAnswered }) {
  const answeredIds = Object.keys(users[authedUser].answers)
  const unansweredIds = Object.keys(questions)
                          .filter((id) => !answeredIds.includes(id))
  return {
    questionIds: showAnswered
                  ? sort(answeredIds, questions)
                  : sort(unansweredIds, questions)
  }
}

function sort(ids, questions) {
  return ids.map((id) => questions[id])
            .sort((a,b) => compareQuestions(a, b))
            .map((question) => question.id)
}

function compareQuestions(q1, q2) {
  // descending by timestamp, ascending by id (to break ties)
  const timeCompare = q2.timestamp - q1.timestamp
  return timeCompare !== 0 ? timeCompare : q1.id.localeCompare(q2.id)
}

export default connect(mapStateToProps)(DashboardList)
