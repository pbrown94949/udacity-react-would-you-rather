import React, { Component } from 'react'
import { connect } from 'react-redux'

class LeaderBoardEntry extends Component {
  render() {
    const { name, answers, questions, score, medal } = this.props
    return (
      <div>
        <div>
          {name}
        </div>
        <div>
          {answers}
        </div>
        <div>
          {questions}
        </div>
        <div>
          {score}
        </div>
        <div>
          {medal}
        </div>
      </div>
    )
  }
}

function mapStateToProps({ users }, { id, rank }) {
  const user = users[id]
  const answers = Object.keys(user.answers).length
  const questions = user.questions.length
  const score = answers + questions
  const medal = rank === 0 ? "Gold" : rank === 1 ? "Silver" : rank === 2 ? "Bronze" : ""
  return {
    name: user.name,
    avatarURL: user.avatarURL,
    answers,
    questions,
    score,
    medal
  }
}

export default connect(mapStateToProps)(LeaderBoardEntry)
