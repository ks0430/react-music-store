import React, { Component } from "react";
class Like extends Component {
  state = {
    isOn: this.props.isOn
  };

  render() {
    const { onToggle } = this.props;
    console.log(onToggle);
    return (
      <p
        href="/"
        onClick={() => {
          const isOn = !this.state.isOn;
          this.setState({ isOn });
          if (onToggle !== undefined) onToggle(isOn);
        }}
      >
        {this.state.isOn ? (
          <i className="fas fa-heart" />
        ) : (
          <i className="far fa-heart" />
        )}
      </p>
    );
  }
}

export default Like;
