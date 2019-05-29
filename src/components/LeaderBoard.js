import React, { Component } from 'react'
import { connect } from 'react-redux'
import LeaderBoardEntry from './LeaderBoardEntry'

class LeaderBoard extends Component {
  render() {
    console.log(this.props.topUsers)
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
    .sort((a, b) => {
      const scoreA = score(users[a])
      const scoreB = score(users[b])
      return scoreA > scoreB ? 1 : scoreA < scoreB ? -1 : 0
    })
    .reverse()
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
