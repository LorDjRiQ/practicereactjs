import React, { Component } from 'react'

class ClassClick extends Component {
  classClickHandler() {
    console.log("Event Click Triggered in Class.");
  }
  render() {
    return (
      <div>
        <button onClick={this.classClickHandler}>Class Click!</button>
      </div>
    )
  }
}

export default ClassClick