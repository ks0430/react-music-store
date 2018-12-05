import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 0
  };

  styles = {
    fontSize: 14,
    fontWeight: "bold"
  };

  handleIncrement = product => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    let classes = this.getBadgeClasses();

    return (
      <React.Fragment>
        <span className={classes}>{this.formatCount()}</span>

        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary"
          style={this.styles}
        >
          Increment
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}
