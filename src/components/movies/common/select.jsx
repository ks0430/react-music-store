import React from "react";

const Select = ({ name, label, error, options, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select className="form-control" {...rest} id={name} name={name}>
        {options &&
          options.map(item => <option key={item._id}>{item["name"]}</option>)}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Select;
