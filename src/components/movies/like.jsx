import React, { Component } from "react";
class Like extends Component {
  render() {
    const { onToggle } = this.props;
    let classes = "fa-heart fa";
    if (this.props.liked) classes += "s";
    else classes += "r";
    return (
      <p href="/" onClick={onToggle}>
        <i className={classes} style={{ cursor: "pointer" }} />
      </p>
    );
  }
}

export default Like;
