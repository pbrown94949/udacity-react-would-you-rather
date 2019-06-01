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
    const { dispatch } = this.props
    dispatch(handleAddQuestion({
      optionOneText: this.state.one,
      optionTwoText: this.state.two,
    }))
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

export default connect()(AddQuestion)
