import React, { Component } from 'react'
import { connect } from 'react-redux'
import Avatar from './Avatar'

class LeaderBoardEntry extends Component {
  render() {
    const { answers, id, medal, name, questions, score } = this.props
    return (
      <div className='leader-board-entry'>
        <Avatar id={id} className='avatar' />
        <div className='middle'>
          <div>
            {name}
          </div>
          <div>
            Answered questions: {answers}
          </div>
          <div>
            Created questions: {questions}
          </div>
        </div>
        <div className='total'>
          <div>
            Score
          </div>
          <div>
            {score}
          </div>
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
