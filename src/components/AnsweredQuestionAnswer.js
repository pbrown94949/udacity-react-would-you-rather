import React from 'react'
import AnsweredQuestionProgressBar from './AnsweredQuestionProgressBar'

const AnsweredQuestionAnswer = ({ option, totalVotes }) => {
  const { text, votedFor, votes } = option
  const votePercent = ( votes / totalVotes) * 100
  return (
    <div className={votedFor ? 'answered-question-answer-yes' : 'answered-question-answer-no'}>
      <div>
        Would you rather {text}?
      </div>
      <AnsweredQuestionProgressBar votePercent={votePercent} />
      <div>
        {votes} out of {totalVotes} votes.
      </div>
      {votedFor &&
        <div className='your-vote'>
          <br />
          Your vote!
        </div>}
    </div>
  )
}

export default AnsweredQuestionAnswer
