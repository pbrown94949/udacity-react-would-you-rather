import React, { Component } from 'react'
import { Line } from 'rc-progress'

const GREEN = "#6ef442"
const GREY = "#c7ccc5"

class AnsweredQuestionAnswer extends Component {
  render() {
    const { text, totalVotes, votedFor, votes  } = this.props
    let votePercent = ( votes / totalVotes) * 100
    let strokeColor = GREEN
    // Ugh, this progress bar always displays a bit of strokeColor.
    // So if we are at 0 percent, just display a bar that is 100% grey.
    if (votePercent === 0) {
      votePercent = 100
      strokeColor = GREY
    }
    console.log(votePercent)
    return (
      <div className={votedFor ? 'answered-question-answer-yes' : 'answered-question-answer-no'}>
        <div>
          Would you rather {text}?
        </div>
        <Line percent={votePercent}
          strokeLinecap="square"
          strokeWidth="3"
          strokeColor={strokeColor}
          trailWidth="3"
          trailColor={GREY}
          />
        <div>
          {votes} out of {totalVotes} votes.
        </div>
      </div>
    )
  }
}

export default AnsweredQuestionAnswer
