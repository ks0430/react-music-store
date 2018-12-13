import React, { Component } from "react";
import InputField from "./common/input";

export default class LoginForm extends Component {
  state = {
    account: {
      username: "",
      password: ""
    },
    errors: {}
  };

  validate = () => {
    const errors = {};
    const { account } = this.state;
    if (account.username.trim() === "")
      errors.username = "Username is required.";
    if (account.password.trim() === "")
      errors.password = "Password is required.";
    if (Object.keys(errors).length === 0) return null;

    return errors;
  };

  validateProperty = ({ name, value }) => {
    if (name === "username") {
      if (value.trim() === "") return "Username is required.";
    }

    if (name === "password") {
      if (value.trim() === "") return "password is required.";
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    console.log("Submited");
  };

  handleChange = ({ currentTarget: input }) => {
    // dealing error message
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);

    console.log(errorMessage);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    this.setState({ errors });

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({
      account
    });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <InputField
            value={account.username}
            label="Username"
            name="username"
            onChange={this.handleChange}
            error={errors.username}
          />
          <InputField
            value={account.password}
            label="Password"
            name="password"
            onChange={this.handleChange}
            error={errors.password}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}
