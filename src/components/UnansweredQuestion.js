import React, { Component } from 'react'
import { connect } from 'react-redux'
import Avatar from './Avatar'
import { handleAnswerQuestion } from '../actions/questions'

class UnansweredQuestion extends Component {

  state = {
    selectedOption: ''
  }

  handleChange = (e) => {
    const selectedOption = e.target.value
    this.setState(() => ({
      selectedOption
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { answerQuestion, id } = this.props
    const { selectedOption } = this.state
    answerQuestion(id, selectedOption)
  }

  radioButton = (value, label) => {
    return (
      <div>
        <label>
          <input
            type="radio"
            value={value}
            checked={this.state.selectedOption === value}
            onChange={this.handleChange}
          />
          {label}
        </label>
      </div>
    )
  }

  render() {
    const { authorId, authorName, optionOne, optionTwo } = this.props
    return (
      <div className='unanswered-question'>
        <div className='header'>
          {authorName} asks:
        </div>
        <Avatar id={authorId} className='avatar'/>
        <form onSubmit={this.handleSubmit} className='form'>
          <div>
            Would you rather...
          </div>
          {this.radioButton("optionOne", optionOne)}
          {this.radioButton("optionTwo", optionTwo)}
          <div>
            <input
              type="submit"
              value="Submit"
              disabled={this.state.selectedOption === '' ? 'disabled' : ''}
            />
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps({ questions, users }, { id }) {
  const authorId = questions[id].author
  return {
    authorId,
    authorName: users[authorId].name,
    optionOne: questions[id].optionOne.text,
    optionTwo: questions[id].optionTwo.text
  }
}

function mapDispatchToProps(dispatch) {
  return {
    answerQuestion: (qid, answer) => {
      dispatch(handleAnswerQuestion({
        qid,
        answer,
      }))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UnansweredQuestion)
