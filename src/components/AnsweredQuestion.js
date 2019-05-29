import React, { Component } from 'react'
import { connect } from 'react-redux'
import Author from './Author'

class AnsweredQuestion extends Component {
  render() {
    const {
      authorId,
      optionOne,
      optionTwo,
      totalVotes,
    } = this.props
    return (
      <div>
        <div>
          <Author id={authorId} />
        </div>
        <div>
          {optionOne.text} {optionOne.votes} out of {totalVotes} {optionOne.votedFor ? '*' : ''}
        </div>
        <div>
          {optionTwo.text} {optionTwo.votes} out of {totalVotes} {optionTwo.votedFor ? '*' : ''}
        </div>
        <div>
          *Indicates the option you voted for.
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, questions, users }, { id }) {
  const authorId = questions[id].author
  const optionOne = formatOptionForProps(authedUser, questions[id].optionOne)
  const optionTwo = formatOptionForProps(authedUser, questions[id].optionTwo)
  const totalVotes = optionOne.votes + optionTwo.votes
  return {
    authorId,
    totalVotes,
    optionOne,
    optionTwo,
  }
}

function formatOptionForProps(authedUser, option) {
  const { text, votes } = option
  return {
    text,
    votes: votes.length,
    votedFor: votes.includes(authedUser)
  }
}

export default connect(mapStateToProps)(AnsweredQuestion)
