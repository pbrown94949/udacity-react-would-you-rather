import React, { Component } from 'react'
import { connect } from 'react-redux'
import Author from './Author'
import { Link, withRouter } from 'react-router-dom'

class PreviewQuestion extends Component {

  render() {
    const { askerId, id, previewText } = this.props
    return (
      <div>
        <Author id={askerId} />
        <div>
          {previewText}
        </div>
        <Link to={`/questions/${id}`}>
          View Full Question
        </Link>
      </div>
    )
  }
}

function mapStateToProps({ questions, users }, { id }) {
  const askerId = questions[id].author
  const previewText = textToPreview(questions[id])
  return {
    askerId,
    previewText,
  }
}

function textToPreview(question) {
  const fullText = 'Would you rather ' + question.optionOne.text + ' or ' + question.optionTwo.text
  return fullText.substring(0, 30) + '...'
}

export default connect(mapStateToProps)(PreviewQuestion)
