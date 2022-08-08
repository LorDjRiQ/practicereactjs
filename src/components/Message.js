import React, { Component } from "react";

class Message extends Component {

  constructor(){
    super()
    this.state = {
      message: 'Welcome player! Click play.'
    }
  }

  changeMessage() {
    this.setState({
      message: 'Thank you for playing.'
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Play</button>
      </div>
    )
  }
}

export default Message