import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    value: this.props.counter.value
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There no tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  handleIncrement = product => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    let classes = this.getBadgeClasses();
    const { id } = this.props.counter;

    console.log("counter - rendered");
    return (
      <div>
        {this.props.children}
        <span className={classes}>{this.formatCount()}</span>

        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary"
          style={this.styles}
        >
          Increment
        </button>

        <button
          onClick={() => this.props.onDelete(id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}
