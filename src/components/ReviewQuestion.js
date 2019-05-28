import React, { Component } from 'react'
import { connect } from 'react-redux'
import Author from './Author'

class ReviewQuestion extends Component {
  render() {
    const {
      authorId,
      optionOneText,
      optionOneVotes,
      optionTwoText,
      optionTwoVotes,
      totalVotes,
      votedForOptionOne
    } = this.props
    return (
      <div>
        <div>
          <Author id={authorId} />
        </div>
        <div>
          {optionOneText} {optionOneVotes} out of {totalVotes} {votedForOptionOne ? '*' : ''}
        </div>
        <div>
          {optionTwoText} {optionTwoVotes} out of {totalVotes} {votedForOptionOne ? '' : '*'}
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
  const optionOneText = questions[id].optionOne.text
  const optionOneVotes = questions[id].optionOne.votes.length
  const optionTwoText = questions[id].optionTwo.text
  const optionTwoVotes = questions[id].optionTwo.votes.length
  const totalVotes = optionOneVotes + optionTwoVotes
  const votedForOptionOne = questions[id].optionOne.votes.includes(authedUser)
  return {
    authorId,
    optionOneText,
    optionOneVotes,
    optionTwoText,
    optionTwoVotes,
    totalVotes,
    votedForOptionOne,
  }
}

export default connect(mapStateToProps)(ReviewQuestion)
