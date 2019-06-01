import React, { Component } from 'react'
import { connect } from 'react-redux'
import AnsweredQuestion from './AnsweredQuestion'
import NoMatch from './NoMatch'
import UnansweredQuestion from './UnansweredQuestion'

class Question extends Component {

  render() {
    const { answered, exists, id } = this.props
    if (!exists) {
      return <NoMatch />
    } else if (answered) {
      return <AnsweredQuestion id={id} />
    } else {
      return <UnansweredQuestion id={id} />
    }
  }
}

function mapStateToProps({ authedUser, users, questions }, props) {
  const { id } = props.match.params
  const exists = Object.keys(questions).includes(id)
  const answered = Object.keys(users[authedUser].answers).includes(id)
  return {
    answered,
    exists,
    id,
  }
}

export default connect(mapStateToProps)(Question)
