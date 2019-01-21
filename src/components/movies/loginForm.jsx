import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import {login} from './services/authService';

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

  doSubmit = async () => {
    try {
      // Call the server
      console.log("Submitted");
      const { data } = this.state;
      const { data: jwt } = await login(data.username, data.password);
      localStorage.setItem("token",jwt);
      // Need page full loaded
      // this.props.history.push('/');
      window.location = '/';
    } catch (ex) {
      if(ex.response && ex.response.status === 400) {
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
          <h1>Login</h1>
          {this.renderInput("Username", "username", "text")}
          {this.renderInput("Password", "password", "password")}
          {this.renderSubmit("Login")}
        </form>
      </div>
    );
  }
}
