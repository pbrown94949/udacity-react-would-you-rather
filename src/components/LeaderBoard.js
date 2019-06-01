import React, { Component } from 'react'
import { connect } from 'react-redux'
import LeaderBoardEntry from './LeaderBoardEntry'

class LeaderBoard extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.topUsers.map((id, idx) =>
            <li key={id}>
              <LeaderBoardEntry id={id} rank={idx}/>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  const topUsers = Object.keys(users)
    .sort((a, b) => score(users[b]) - score(users[a]))
    .slice(0, 3)
  return {
    topUsers,
  }
}

function score(user) {
  const answers = Object.keys(user.answers).length
  const questions = user.questions.length
  return answers + questions
}

export default connect(mapStateToProps)(LeaderBoard)
