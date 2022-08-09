import React, { Component } from "react";

class Welcome extends Component {
  render() {
    const {name,ign} = this.props;
    return (
      <div>
        <h1>Welcome {this.props.name}! IGN:{this.props.ign}.</h1>
        <h1>Welcome {name}! IGN:{ign}.</h1>
      </div>
    )
  }
}

export default Welcome