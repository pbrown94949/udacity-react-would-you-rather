import React, { Component } from 'react'
import { connect } from 'react-redux'
import Author from './Author'

class ReviewQuestion extends Component {
  render() {
    const { authorId } = this.props
    return (
      <div>
        <Author id={authorId} />
      </div>
    )
  }
}

function mapStateToProps({ questions, users }, { id }) {
  const authorId = questions[id].author
  return {
    authorId
  }
}

export default connect(mapStateToProps)(ReviewQuestion)
