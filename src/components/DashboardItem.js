import React, { Component } from 'react'
import { connect } from 'react-redux'
import Avatar from './Avatar'
import { Link } from 'react-router-dom'

class DashboardItem extends Component {

  render() {
    const { authorId, authorName, id, previewText } = this.props
    return (
      <div className='dashboard-item'>
        <div className='header'>
          {authorName} asks:
          <br />
        </div>
        <Avatar id={authorId} className='avatar'/>
        <div className='text'>
          {previewText}
        </div>
        <Link to={`/questions/${id}`} className='link'>
          View Full Question
        </Link>
      </div>
    )
  }
}

function mapStateToProps({ questions, users }, { id }) {
  const authorId = questions[id].author
  return {
    authorId,
    authorName: users[authorId].name,
    previewText: textToPreview(questions[id]),
  }
}

function textToPreview(question) {
  const fullText = 'Would you rather ' + question.optionOne.text + ' or ' + question.optionTwo.text + '?'
  if (fullText.length < 30) {
    return fullText
  } else {
    return fullText.substring(0, 30) + '...'
  }
}

export default connect(mapStateToProps)(DashboardItem)
