import React, { Component } from "react";
import InputField from "./input";
import Select from "./select";
import Joi from "joi-browser";

export default class Form extends Component {
  state = {
    data: {},
    errors: {}
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    console.log("23",name,value);
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    // dealing error message
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);

    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    this.setState({ errors });

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({
      data
    });
  };

  renderSubmit = label => (
    <button disabled={this.validate()} className="btn btn-primary">
      {label}
    </button>
  );

  renderInput = (label, name, type) => {
    const { data, errors } = this.state;
    return (
      <InputField
        type={type}
        value={data[name]}
        label={label}
        name={name}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  };

  renderSelect = (label, name, options) => {
    const { errors, data } = this.state;

    return (
      <Select
        label={label}
        name={name}
        error={errors[name]}
        options={options}
        onChange={this.handleChange}
        value={data[name]}
      />
    );
  };
}
