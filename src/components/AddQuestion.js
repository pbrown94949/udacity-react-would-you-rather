import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAddQuestion } from '../actions/questions'

class AddQuestion extends Component {
  state = {
    one: '',
    two: '',
    submitted: false,
  }

  handleChange = (e, option) => {
    this.setState({
      [option]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { addQuestion } = this.props
    const { one, two } = this.state
    addQuestion(one, two)
    this.setState({
      submitted: true,
    })
  }

  render() {
    const { one, submitted, two } = this.state
    if (submitted) {
      return <Redirect to='/' />
    }
    return (
      <div className='add-question'>
        <form onSubmit={this.handleSubmit}>
          <div>Would you rather</div>
          <input value={one} onChange={(e) => this.handleChange(e, "one")} />
          <div>or</div>
          <input value={two} onChange={(e) => this.handleChange(e, "two")} />
          <div>
            <button
              type='submit'
              disabled={one === '' || two === ''}>
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addQuestion: (optionOneText, optionTwoText) => {
      dispatch(handleAddQuestion({
        optionOneText,
        optionTwoText,
      }))
    },
  }
}

export default connect(null, mapDispatchToProps)(AddQuestion)
