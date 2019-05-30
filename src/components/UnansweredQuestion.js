import React, { Component } from 'react'
import { connect } from 'react-redux'
import AuthorAvatar from './AuthorAvatar'
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
    const { dispatch, id } = this.props
    const { selectedOption } = this.state
    dispatch(handleAnswerQuestion({
      qid: id,
      answer: selectedOption,
    }))
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
        <AuthorAvatar id={authorId} className='avatar'/>
        <form onSubmit={this.handleSubmit} className='form'>
          <div>
            Would you rather...
          </div>
          {this.radioButton("optionOne", optionOne)}
          {this.radioButton("optionTwo", optionTwo)}
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps({ questions, users }, { id }) {
  const authorId = questions[id].author
  const authorName = users[authorId].name
  const optionOne = questions[id].optionOne.text
  const optionTwo = questions[id].optionTwo.text
  return {
    authorId,
    authorName,
    optionOne,
    optionTwo,
  }
}

export default connect(mapStateToProps)(UnansweredQuestion)
