import React, { Component } from 'react'
import { connect } from 'react-redux'
import Avatar from './Avatar'
import AnsweredQuestionAnswer from './AnsweredQuestionAnswer'

class AnsweredQuestion extends Component {
  render() {
    const {
      authorId,
      authorName,
      optionOne,
      optionTwo,
      totalVotes,
    } = this.props
    return (
      <div className='answered-question'>
        <div className='header'>
          {authorName} asked:
        </div>
        <Avatar id={authorId} className='avatar' />
        <div className='results'>
          <AnsweredQuestionAnswer
            text={optionOne.text}
            votes={optionOne.votes}
            totalVotes={totalVotes}
            votedFor={optionOne.votedFor}/>
          <AnsweredQuestionAnswer
            text={optionTwo.text}
            votes={optionTwo.votes}
            totalVotes={totalVotes}
            votedFor={optionTwo.votedFor}/>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, questions, users }, { id }) {
  const authorId = questions[id].author
  const authorName = users[authorId].name
  const optionOne = formatOptionForProps(authedUser, questions[id].optionOne)
  const optionTwo = formatOptionForProps(authedUser, questions[id].optionTwo)
  const totalVotes = optionOne.votes + optionTwo.votes
  return {
    authorId,
    authorName,
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
