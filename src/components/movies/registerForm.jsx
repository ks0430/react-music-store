import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import * as userService from './services/userService';

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

  doSubmit = async () => {
    try {
    const response = await userService.register(this.state.data);
    console.log(response);
    localStorage.setItem('token', response.headers['x-auth-token']);
    // this.props.history.push('/');
    window.location = '/';
    } catch(ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = {...this.state.errors};
        errors.username = ex.response.data;
        this.setState({errors});
      }
    }
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
