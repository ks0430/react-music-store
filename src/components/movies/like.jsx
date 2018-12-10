import React, { Component } from "react";
class Like extends Component {
  state = {
    isOn: this.props.isOn
  };

  render() {
    const { onToggle } = this.props;
    let classes = "fa-heart fa";
    if (this.state.isOn) classes += "s";
    else classes += "r";
    return (
      <p
        href="/"
        onClick={() => {
          const isOn = !this.state.isOn;
          this.setState({ isOn });
          if (onToggle !== undefined) onToggle(isOn);
        }}
      >
        <i className={classes} style={{ cursor: "pointer" }} />
      </p>
    );
  }
}

export default Like;
