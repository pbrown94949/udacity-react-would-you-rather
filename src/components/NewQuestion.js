import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'

class NewQuestion extends Component {
  state = {
    one: '',
    two: '',
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
  }

  render() {
    const {one, two} = this.state
    return (
      <div>
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

export default connect()(NewQuestion)
