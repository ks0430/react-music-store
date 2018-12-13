import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";

export default class RegisterForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
      name: ""
    },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .email()
      .required()
      .label("Username"),
    password: Joi.string()
      .min(5)
      .required()
      .label("Password"),
    name: Joi.string()
      .required()
      .label("Name")
  };

  doSubmit = () => {
    console.log("Submitted");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Register</h1>
          {this.renderInput("Username", "username", "text")}
          {this.renderInput("Password", "password", "password")}
          {this.renderInput("Name", "name", "text")}
          {this.renderSubmit("Register")}
        </form>
      </div>
    );
  }
}
