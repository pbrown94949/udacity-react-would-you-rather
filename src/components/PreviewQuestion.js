import React, { Component } from 'react'
import { connect } from 'react-redux'
import Asker from './Asker'

class PreviewQuestion extends Component {
  render() {
    const { id, askerId, previewText } = this.props
    return (
      <div>
        <Asker id={askerId} />
        <div>
          Would you rather {previewText}
        </div>
        <button>
          View Full Question
        </button>
      </div>
    )
  }
}

function mapStateToProps({ questions, users }, { id }) {
  const askerId = questions[id].author
  const previewText = textToPreview(questions[id].optionOne.text)
  return {
    askerId,
    previewText,
  }
}

function textToPreview(text) {
  return text.split(' ')[0].concat('...')
}

export default connect(mapStateToProps)(PreviewQuestion)
