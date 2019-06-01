import React from 'react'
import { Line } from 'rc-progress'

const COMPLETE = "#6ef442"
const INCOMPLETE = "#c7ccc5"

const AnsweredQuestionProgressBar = ({ votePercent }) => {
  const linePercent = votePercent > 0 ? votePercent : 100
  const strokeColor = votePercent > 0 ? COMPLETE : INCOMPLETE
  return (
    <div>
      <Line percent={linePercent}
        strokeLinecap="square"
        strokeWidth="3"
        strokeColor={strokeColor}
        trailWidth="3"
        trailColor={INCOMPLETE}
      />
    </div>
  )
}

export default AnsweredQuestionProgressBar
