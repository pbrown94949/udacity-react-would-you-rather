import React, { Component } from 'react'
import { connect } from 'react-redux'
import Author from './Author'

class AnswerQuestion extends Component {

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
    console.log(this.state)
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
    const { authorId, optionOne, optionTwo } = this.props
    return (
      <div>
        <Author id={authorId} />
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              Would you rather
            </div>
            {this.radioButton("optionOne", optionOne)}
            {this.radioButton("optionTwo", optionTwo)}
            <div>
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ questions, users }, { id }) {
  const authorId = questions[id].author
  const optionOne = questions[id].optionOne.text
  const optionTwo = questions[id].optionTwo.text
  return {
    authorId,
    optionOne,
    optionTwo,
  }
}

export default connect(mapStateToProps)(AnswerQuestion)
