import React, { Component } from "react";

export default class ClassCounter extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  render() {
    return (
      <div>
        <div className="count-display">{this.state.count}</div>
        <button className="btn increment" onClick={this.increment}>+</button>
        <button className="btn decrement" onClick={this.decrement}>-</button>
      </div>
    );
  }
}
