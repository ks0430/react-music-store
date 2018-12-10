import React from "react";
const Like = props => {
  const { onToggle } = props;
  let classes = "fa-heart fa";
  if (props.liked) classes += "s";
  else classes += "r";
  return (
    <p href="/" onClick={onToggle}>
      <i className={classes} style={{ cursor: "pointer" }} />
    </p>
  );
};

export default Like;
