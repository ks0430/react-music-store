import React from "react";
const Like = ({ onToggle, liked }) => {
  let classes = "fa-heart fa";
  if (liked) classes += "s";
  else classes += "r";
  return (
    <p href="/" onClick={onToggle}>
      <i className={classes} style={{ cursor: "pointer" }} />
    </p>
  );
};

export default Like;
