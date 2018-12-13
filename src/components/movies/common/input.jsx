import React from "react";

const InputField = ({ value, onChange, name, label, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type="text"
        className="form-control"
        name={name}
        onChange={onChange}
        value={value}
      />

      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default InputField;
