import React, { Component } from 'react'

class EventBind extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message: 'Don\'t Click!'
    }

    // Third method binding in constructor (most recommended)
    //this.clickHandler = this.clickHandler.bind(this);
  }

  // clickHandler() {
  //   this.setState({
  //     message: 'Clicked!!'
  //   });
  //   console.log(this);
  // }

  // 4th method
  clickHandler = () => {
    this.setState({
          message: 'Clicked!!'
        });
        console.log(this);
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div> 
        {/* Heavy method binding in render */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click Me!</button> */}
        {/* Arrow func */}
        {/* <button onClick={() => this.clickHandler()}>Click Me!</button> */}
        {/* class property as arrow function */}
        <button onClick={this.clickHandler}>Click Me!</button>
      </div>
    )
  }
}

export default EventBind