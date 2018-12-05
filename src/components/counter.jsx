import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  styles = {
    fontSize: 14,
    fontWeight: "bold"
  };

  render() {
    let classes = this.getBadgeClasses();

    return (
      <React.Fragment>
        <span className={classes}>{this.formatCount()}</span>

        <button className="btn btn-secondary" style={this.styles}>
          Increment
        </button>

        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
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
