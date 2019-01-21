import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";

export default class LoginForm extends Form {
  state = {
    data: {
      username: "",
      password: ""
    },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = () => {
    // Call the server
    console.log("Submitted");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Login</h1>
          {this.renderInput("Username", "username", "text")}
          {this.renderInput("Password", "password", "password")}
          {this.renderSubmit("Login")}
        </form>
      </div>
    );
  }
}