import React from "react";

export const ButtonSelection = ({ components, onComponentChange }) => {
  return (
    <div className="appStyle">
      <ul>
        {Object.keys(components).map(key => {
          return (
            <li key={key}>
              <button
                className="btn btn-dark"
                onClick={() => onComponentChange(components[key])}
              >
                {key}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
