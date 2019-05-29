import React, { Component } from 'react'
import { connect } from 'react-redux'
import UnansweredQuestion from './UnansweredQuestion'
import AnsweredQuestion from './AnsweredQuestion'

class Question extends Component {

  render() {
    const { answered, id } = this.props
    if (answered) {
      return <AnsweredQuestion id={id} />
    } else {
      return <UnansweredQuestion id={id} />
    }
  }
}

function mapStateToProps({ authedUser, users, questions }, props) {
  const { id } = props.match.params
  const answered = Object.keys(users[authedUser].answers).includes(id)
  return {
    answered,
    id
  }
}

export default connect(mapStateToProps)(Question)
