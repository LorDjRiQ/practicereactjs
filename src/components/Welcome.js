import React, { Component } from "react";

class Welcome extends Component {
    render() {
        return <h1>Welcome {this.props.name}! IGN:{this.props.ign}.</h1>
    }
}

export default Welcome