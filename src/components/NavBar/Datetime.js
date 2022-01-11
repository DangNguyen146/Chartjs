import React, { Component } from "react";

class Datetime extends Component {
  constructor() {
    super();
    this.state = { time: new Date() };
  }
  currentTime() {
    this.setState({
      time: new Date(),
    });
  }
  componentWillMount() {
    setInterval(() => this.currentTime(), 1000);
  }
  render() {
    return <div>{this.state.time.toLocaleTimeString()}</div>;
  }
}

export default Datetime;
