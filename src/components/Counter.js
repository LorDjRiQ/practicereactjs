import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count:0
    }
  }

  tap(){
    // this.setState({
    //   count: this.state.count + 1
    // },
    // () => { //callback func
    //   console.log('CallBack Val:' + this.state.count);
    // });
    this.setState((prevState, props) => ({
      count: prevState.count + 1
    }));
    console.log(this.state.count);
  }

  tapFive(){
    this.tap();
    this.tap();
    this.tap();
    this.tap();
    this.tap();
  }

  render() {
    return (
      <div>
        <div>
          Tap Count: {this.state.count}
        </div>
        <button onClick={() => this.tapFive()}> Tap!</button>
      </div>
    )
  }
}

export default Counter