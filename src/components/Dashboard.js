import React, { Component } from 'react'
import DashboardList from './DashboardList'

class Dashboard extends Component {

  state = {
    showAnswered: false
  }

  handleClick = (b) => {
    this.setState(() => ({
      showAnswered: b
    }))
  }

  render() {
    const { showAnswered } = this.state
    return (
      <div className='dashboard'>
        <button onClick={() => this.handleClick(false)}>
          Unanswered
        </button>
        <button onClick={() => this.handleClick(true)}>
          Answered
        </button>
        <DashboardList showAnswered={showAnswered} />
      </div>
    )
  }
}

export default Dashboard
